import type { Metadata } from "next";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Leo Club of Juhu | Youth NGO Mumbai",
  description: "Read the Privacy Policy of Leo Club of Juhu. Understand how we collect, manage, and protect the personal data of our members, volunteers, and website visitors.",
  keywords: ["Privacy Policy", "Leo Club of Juhu Privacy", "Data safety NGO Mumbai"],
};

export default function PrivacyPolicyPage() {
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
        }}>Leo Club Of Juhu</span>
        
        <h1 style={{
          fontFamily: "var(--font-playfair), serif",
          fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
          fontWeight: 800,
          color: "var(--text-primary)",
          marginBottom: "2rem",
          lineHeight: 1.15
        }}>Privacy Policy</h1>
        
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
            At Leo Club of Juhu, accessible from our website, one of our main priorities is the privacy of our visitors and members. This Privacy Policy document contains types of information that is collected and recorded by Leo Club of Juhu and how we use it.
          </p>

          <h2 style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)", fontSize: "1.75rem", marginTop: "2.5rem", marginBottom: "1.25rem" }}>Information We Collect</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            If you apply to become a member via our registration portal or get in touch with us directly, we collect personal identification details such as your name, email address, phone number, areas of interest in community service, and the content of your message.
          </p>

          <h2 style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)", fontSize: "1.75rem", marginTop: "2.5rem", marginBottom: "1.25rem" }}>How We Use Your Information</h2>
          <p style={{ marginBottom: "1rem" }}>We use the collected information primarily to:</p>
          <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "1.5rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>Process and validate your membership registrations.</li>
            <li style={{ marginBottom: "0.5rem" }}>Provide, operate, and maintain our website platform.</li>
            <li style={{ marginBottom: "0.5rem" }}>Organize and coordinate service drives (e.g., blood donation drives) and notify you of upcoming initiatives.</li>
            <li style={{ marginBottom: "0.5rem" }}>Understand and analyze how you interact with our platform to improve overall user experience.</li>
            <li style={{ marginBottom: "0.5rem" }}>Respond directly to your emails, inquiries, and request for support.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)", fontSize: "1.75rem", marginTop: "2.5rem", marginBottom: "1.25rem" }}>Data Security & Safety</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            We implement high-grade administrative and technological safety procedures to secure and protect personal details from unauthorized access, loss, or disclosure. All form inquiries are directly routed to our official secure email system and accessed only by designated board administrators.
          </p>

          <h2 style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)", fontSize: "1.75rem", marginTop: "2.5rem", marginBottom: "1.25rem" }}>Consent</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            By submitting your registration details or using our platform, you hereby consent to our Privacy Policy and agree to its terms.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
