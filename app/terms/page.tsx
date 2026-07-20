import type { Metadata } from "next";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Leo Club of Juhu",
  description: "Read the Terms & Conditions for using the Leo Club of Juhu website and participating in our community NGO initiatives.",
  keywords: ["Terms of Service", "Leo Club of Juhu Terms", "NGO terms Mumbai"],
};

export default function TermsAndConditions() {
  return (
    <main style={{ backgroundColor: "var(--bg-primary)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      
      <div style={{
        maxWidth: "800px",
        margin: "160px auto 80px",
        padding: "0 24px",
        flexGrow: 1
      }}>
        <span style={{
          color: "var(--accent-orange)",
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
        }}>Terms & Conditions</h1>
        
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
            Welcome to Leo Club of Juhu! These terms and conditions outline the rules and regulations for the use of Leo Club of Juhu&apos;s Website.
          </p>

          <h2 style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)", fontSize: "1.75rem", marginTop: "2.5rem", marginBottom: "1.25rem" }}>Terminology</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use Leo Club of Juhu if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h2 style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)", fontSize: "1.75rem", marginTop: "2.5rem", marginBottom: "1.25rem" }}>Cookies</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            We may employ the use of cookies. By accessing Leo Club of Juhu, you agreed to use cookies in agreement with the Leo Club of Juhu&apos;s Privacy Policy. Most interactive websites use cookies to let us retrieve the user&apos;s details for each visit.
          </p>

          <h2 style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)", fontSize: "1.75rem", marginTop: "2.5rem", marginBottom: "1.25rem" }}>License</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Unless otherwise stated, Leo Club of Juhu and/or its licensors own the intellectual property rights for all material on Leo Club of Juhu. All intellectual property rights are reserved. You may access this from Leo Club of Juhu for your own personal use subjected to restrictions set in these terms and conditions.
          </p>

          <h2 style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)", fontSize: "1.75rem", marginTop: "2.5rem", marginBottom: "1.25rem" }}>User Comments & Content</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Leo Club of Juhu does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Leo Club of Juhu, its agents and/or affiliates.
          </p>

          <h2 style={{ fontFamily: "var(--font-playfair), serif", color: "var(--text-primary)", fontSize: "1.75rem", marginTop: "2.5rem", marginBottom: "1.25rem" }}>Disclaimer</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will limit or exclude our or your liability for death or personal injury, fraud, or misrepresentation.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
