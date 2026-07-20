import type { Metadata } from "next";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export const metadata: Metadata = {
  title: "Affiliation Declaration & NGO Status | Leo Club of Juhu",
  description: "Official declaration and organization status of Leo Club of Juhu. Verified youth program under Lions Clubs International District 3231-A1, Mumbai, India.",
  keywords: [
    "Leo Club Juhu Affiliation",
    "Lions Clubs International Youth Program",
    "Lions Club of Juhu",
    "NGO Status Mumbai",
    "District 3231-A1 Leo Club",
    "Official NGO Declaration"
  ],
};

export default function DeclarationPage() {
  return (
    <main style={{ backgroundColor: "var(--bg-primary)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div style={{ height: "90px" }} />
      
      <div style={{
        maxWidth: "800px",
        margin: "80px auto",
        padding: "0 24px",
        flexGrow: 1
      }}>
        <span style={{
          color: "var(--accent-gold)",
          fontSize: "0.875rem",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          display: "block",
          marginBottom: "1rem"
        }}>Official Statement</span>
        
        <h1 style={{
          fontFamily: "var(--font-playfair), serif",
          fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
          fontWeight: 800,
          color: "var(--text-primary)",
          marginBottom: "2rem",
          lineHeight: 1.15
        }}>Affiliation & Organization Status</h1>
        
        <div style={{
          fontFamily: "var(--font-inter), sans-serif",
          color: "var(--text-secondary)",
          lineHeight: 1.75,
          fontSize: "1.05rem"
        }}>
          <p style={{ marginBottom: "1.5rem" }}>
            Last updated: June 11, 2026
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            The <strong>Leo Club of Juhu</strong> is a verified, active youth organization officially chartered and affiliated under <strong>Lions Clubs International</strong>. Our club operates within <strong>Multiple District 3231 (District 3231-A1)</strong> in Mumbai, Maharashtra, India.
          </p>

          <h2 style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)", fontSize: "1.75rem", marginTop: "2.5rem", marginBottom: "1.25rem" }}>About Lions Clubs International</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Lions Clubs International is the world&apos;s largest service club organization, with over 1.4 million members in more than 48,000 clubs globally. The Leo Club Program is a major youth wing of Lions Clubs International, providing youth across the world with volunteer opportunities to lead projects, motivate peers, and support communities.
          </p>

          <h2 style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)", fontSize: "1.75rem", marginTop: "2.5rem", marginBottom: "1.25rem" }}>Our Affiliation & Sponsorship</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            As a Leo Club, we are sponsored by our parent body: <strong>Lions Club of Juhu</strong>. We operate in close collaboration with our sponsoring Lions Club to conduct community service drives, medical camps, sports meets, and cultural programs.
          </p>

          <h2 style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)", fontSize: "1.75rem", marginTop: "2.5rem", marginBottom: "1.25rem" }}>Non-Profit NGO Status</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Our operations are volunteer-driven, funded through sponsorship, donations, and fellowship drives. All resources collected are utilized strictly for the planning and execution of our designated service projects, including medical initiatives (e.g., Project Rakt) and underprivileged outreach drives (e.g., Meals Across Miles).
          </p>

          <h2 style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)", fontSize: "1.75rem", marginTop: "2.5rem", marginBottom: "1.25rem" }}>Governing Leadership</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            The Leo Club of Juhu operates under the leadership of a student/youth board comprising a President, Vice President, Secretary, Treasurer, and designated Directors. Board terms align with the official Leo Year (July 1 to June 30), and elections are held annually in accordance with Lions Clubs International bylaws.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
