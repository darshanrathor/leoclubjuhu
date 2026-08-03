import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { businesses as staticBusinesses } from "@/src/data/businesses";
import fs from "fs/promises";
import path from "path";

async function getBusinesses() {
  try {
    const DATA_FILE = path.join(process.cwd(), "public", "data", "businesses.json");
    const fileContent = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(fileContent);
  } catch (error) {
    return staticBusinesses;
  }
}

// Dynamic metadata for founder spotlight indexing (SEO)
export async function generateMetadata(
  props: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await props.params;
  const businessesList = await getBusinesses();
  const founder = businessesList.find((b: any) => b.id === id);
  if (!founder) {
    return {
      title: "Founder Not Found | Leo Club of Juhu",
    };
  }

  return {
    title: `Spotlight: ${founder.founderName} (${founder.name}) | Leo Club of Juhu`,
    description: `Read the story and achievements of ${founder.founderName}, founder of ${founder.name} and member of Leo Club of Juhu.`,
    keywords: [
      founder.founderName,
      founder.name,
      founder.category,
      "Leo Entrepreneur Network Juhu",
      "Mumbai Startup Spotlights"
    ],
    openGraph: {
      title: `Spotlight: ${founder.founderName} | Leo Club of Juhu`,
      description: founder.description,
      images: [{ url: founder.founderPhoto }],
    }
  };
}

export default async function FounderSpotlightPage(
  props: { params: Promise<{ id: string }> }
) {
  const { id } = await props.params;
  const businessesList = await getBusinesses();
  const founder = businessesList.find((b: any) => b.id === id);

  if (!founder) {
    notFound();
  }

  return (
    <main style={{ backgroundColor: "var(--bg-primary)", minHeight: "100vh", color: "var(--text-primary)" }}>
      <Navbar />
      
      {/* Visual spacer to accommodate fixed navbar */}
      <div style={{ height: "90px" }} />

      <section style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          
          {/* Breadcrumb */}
          <Link href="/businesses" style={{ color: "var(--accent-gold)", display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.9rem", fontWeight: 600, marginBottom: "40px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            ← Back to Network Registry
          </Link>

          {/* Magazine Hero Layout */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.25fr", gap: "60px", alignItems: "start", marginBottom: "80px" }}>
            
            {/* Left Column: Big Founder Portrait */}
            <div style={{ position: "relative" }}>
              <div style={{ position: "relative", height: "550px", width: "100%", borderRadius: "var(--border-radius-large)", overflow: "hidden", border: "1px solid var(--border-color)", boxShadow: "var(--shadow-subtle)" }}>
                <Image
                  src={founder.founderPhoto}
                  alt={founder.founderName}
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11, 18, 32, 0.7) 0%, transparent 50%)" }} />
              </div>
              
              {/* Overlay Symbol */}
              <div style={{ position: "absolute", bottom: "-20px", right: "20px", width: "64px", height: "64px", borderRadius: "50%", background: "var(--accent-gold)", color: "#000", fontSize: "1.75rem", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(245, 158, 11, 0.3)", zIndex: 10 }}>
                {founder.logo}
              </div>
            </div>

            {/* Right Column: Founder Info & Large Quote */}
            <div>
              <span style={{ color: "var(--accent-gold)", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", display: "block", marginBottom: "8px" }}>
                Founder Spotlight • {founder.category}
              </span>
              <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 3.8rem)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: "8px", fontFamily: "var(--font-poppins), sans-serif", color: "var(--text-primary)", lineHeight: 1.1 }}>
                {founder.founderName}
              </h1>
              <p style={{ fontSize: "1.25rem", color: "var(--accent-gold)", fontWeight: 500, marginBottom: "30px" }}>
                Founder of {founder.name}
              </p>

              {/* Quote Block with Gold Borders */}
              <div style={{ borderLeft: "2px solid var(--accent-gold)", borderRight: "2px solid var(--accent-gold)", padding: "24px 30px", margin: "0 0 40px 0", background: "var(--bg-secondary)", borderRadius: "8px" }}>
                <p style={{ fontSize: "1.15rem", fontStyle: "italic", lineHeight: 1.6, color: "var(--text-primary)", margin: 0 }}>
                  "{founder.quote}"
                </p>
              </div>

              {/* Founder Story */}
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px", fontFamily: "var(--font-poppins)" }}>
                The Founder's Journey
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "32px", whiteSpace: "pre-line" }}>
                {founder.story}
              </p>
            </div>

          </div>

          {/* Detailed Section Breakdown */}
          <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "60px", display: "grid", gridTemplateColumns: "1.25fr 1fr", gap: "60px" }}>
            
            {/* Left Column: Company Profile & Achievements */}
            <div>
              <h3 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "20px", fontFamily: "var(--font-poppins)" }}>
                About the Company
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "40px" }}>
                {founder.companyDescription}
              </p>

              <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "20px", fontFamily: "var(--font-poppins)" }}>
                Key Achievements & Milestones
              </h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "0", listStyle: "none" }}>
                {founder.achievements.map((item: string, i: number) => (
                  <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.5 }}>
                    <span style={{ color: "var(--accent-gold)", fontWeight: 700, fontSize: "1.1rem" }}>★</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Company Stat Card & Social Links */}
            <div>
              <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "var(--border-radius-large)", padding: "40px" }}>
                <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "24px", paddingBottom: "12px", borderBottom: "1px solid var(--border-color)", fontFamily: "var(--font-poppins)" }}>
                  Company Profile
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "40px" }}>
                  <div>
                    <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", display: "block", marginBottom: "4px" }}>Company Name</span>
                    <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)" }}>{founder.name}</span>
                  </div>
                  <div>
                    <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", display: "block", marginBottom: "4px" }}>Founded Year</span>
                    <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)" }}>{founder.foundedYear}</span>
                  </div>
                  <div>
                    <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", display: "block", marginBottom: "4px" }}>Team Size</span>
                    <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)" }}>{founder.teamSize}</span>
                  </div>
                </div>

                <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "20px", paddingBottom: "12px", borderBottom: "1px solid var(--border-color)", fontFamily: "var(--font-poppins)" }}>
                  Connect
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <a href={founder.website} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textAlign: "center", width: "100%" }}>
                    Visit Website ↗
                  </a>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                    <a href={founder.instagram} target="_blank" rel="noopener noreferrer" className="btn-dark" style={{ textAlign: "center" }}>
                      Instagram
                    </a>
                    <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="btn-dark" style={{ textAlign: "center" }}>
                      LinkedIn
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
