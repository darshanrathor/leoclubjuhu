import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { projectsData as staticProjects } from "@/src/data/projects";
import fs from "fs/promises";
import path from "path";

async function getProjects() {
  try {
    const DATA_FILE = path.join(process.cwd(), "public", "data", "projects.json");
    const fileContent = await fs.readFile(DATA_FILE, "utf-8");
    const json = JSON.parse(fileContent);
    return [...(json.upcoming || []), ...(json.past || [])];
  } catch (error) {
    return staticProjects;
  }
}

// Dynamic metadata for search engine indexing (SEO)
export async function generateMetadata(
  props: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await props.params;
  const projectsList = await getProjects();
  const project = projectsList.find((p: any) => p.id === id);
  if (!project) {
    return {
      title: "Project Not Found | Leo Club of Juhu",
    };
  }

  return {
    title: `${project.title} | Leo Club of Juhu Initiatives`,
    description: `${project.desc} Read full case study, volunteers list, and impact metrics.`,
    keywords: [
      project.title,
      project.category,
      "Leo Club Juhu Initiatives",
      "Mumbai Volunteer Drives",
      "Youth Service NGO"
    ],
    openGraph: {
      title: `${project.title} | Leo Club of Juhu Initiatives`,
      description: project.desc,
      images: [{ url: project.image }],
    }
  };
}

export default async function ProjectDetailPage(
  props: { params: Promise<{ id: string }> }
) {
  const { id } = await props.params;
  const projectsList = await getProjects();
  const project = projectsList.find((p: any) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main style={{ backgroundColor: "var(--bg-primary)", minHeight: "100vh", color: "var(--text-primary)" }}>
      <Navbar />
      
      {/* Dynamic Header Banner */}
      <section style={{ position: "relative", height: "60vh", width: "100%", overflow: "hidden", display: "flex", alignItems: "flex-end", borderBottom: "1px solid var(--border-color)" }}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          style={{ objectFit: "cover", zIndex: 1 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11, 18, 32, 0.95) 0%, rgba(11, 18, 32, 0.4) 70%, transparent 100%)", zIndex: 2 }} />
        
        <div style={{ maxWidth: "1200px", width: "100%", margin: "0 auto", padding: "0 24px 60px", position: "relative", zIndex: 3 }}>
          <Link href="/initiatives" style={{ color: "var(--accent-gold)", display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.9rem", fontWeight: 600, marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            ← Back to All Initiatives
          </Link>

          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.2rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, fontFamily: "var(--font-poppins), sans-serif", textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>
            {project.title}
          </h1>
        </div>
      </section>

      {/* Main Content Layout */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.75fr 1fr", gap: "60px" }}>
          
          {/* Left Column: Story details */}
          <div>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "24px", color: "var(--text-primary)", fontFamily: "var(--font-poppins)" }}>
              The Story & Execution
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "40px", whiteSpace: "pre-line" }}>
              {project.detailedStory}
            </p>

            {/* Photo Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "20px", color: "var(--text-primary)", fontFamily: "var(--font-poppins)" }}>
                  Project Gallery
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
                  {project.gallery.map((img: string, index: number) => (
                    <div key={index} style={{ position: "relative", height: "240px", borderRadius: "16px", overflow: "hidden", border: "1px solid var(--border-color)" }}>
                      <Image
                        src={img}
                        alt={`${project.title} gallery item ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Key Details & Impact Metrics Cards */}
          <div>
            <div style={{ background: "var(--bg-secondary)", borderRadius: "var(--border-radius-large)", padding: "40px", border: "1px solid var(--border-color)", position: "sticky", top: "120px" }}>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "24px", paddingBottom: "12px", borderBottom: "1px solid var(--border-color)", fontFamily: "var(--font-poppins)" }}>
                Key Details
              </h3>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "40px" }}>
                <div>
                  <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", display: "block", marginBottom: "4px" }}>Date</span>
                  <span style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--text-primary)" }}>{project.date}</span>
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", display: "block", marginBottom: "4px" }}>Volunteers Mobilized</span>
                  <span style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--text-primary)" }}>{project.volunteers}</span>
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", display: "block", marginBottom: "4px" }}>Direct Beneficiaries</span>
                  <span style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--text-primary)" }}>{project.beneficiaries}</span>
                </div>
              </div>

              <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "20px", paddingBottom: "12px", borderBottom: "1px solid var(--border-color)", fontFamily: "var(--font-poppins)" }}>
                Impact Metrics
              </h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "0", listStyle: "none" }}>
                {project.impactMetrics.map((metric: string, i: number) => (
                  <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.5 }}>
                    <span style={{ color: "var(--accent-gold)", fontWeight: 700 }}>✓</span>
                    {metric}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: "40px" }}>
                <a href="/join" className="btn-primary" style={{ width: "100%", textAlign: "center", display: "block" }}>
                  Join Next Project
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
