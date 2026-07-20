import type { Metadata } from "next";
import Navbar from "@/src/components/Navbar";
import BusinessesDirectory from "@/src/components/BusinessesDirectory";
import Footer from "@/src/components/Footer";

export const metadata: Metadata = {
  title: "Community Businesses | Leo Club of Juhu",
  description: "Support businesses and ventures owned, managed, or founded by Leo Club of Juhu community members. Discover tech services, apparel, cafés, and consulting firms in Mumbai.",
  keywords: [
    "Community Businesses Juhu",
    "Leo Club Juhu Ventures",
    "Support Local Juhu",
    "Youth NGO Mumbai Business Network",
    "Vile Parle Local Brands"
  ],
};

export default function BusinessesPage() {
  return (
    <main style={{ backgroundColor: "var(--bg-primary)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div style={{ height: "90px" }} />
      
      {/* Title Header */}
      <div style={{
        maxWidth: "1280px",
        margin: "60px auto 0",
        padding: "0 24px",
        width: "100%",
        textAlign: "center"
      }}>
        <span style={{
          color: "var(--accent-gold)",
          fontSize: "0.875rem",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          display: "block",
          marginBottom: "0.5rem"
        }}>Community Registry</span>
        
        <h1 style={{
          fontFamily: "var(--font-playfair), serif",
          fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
          fontWeight: 800,
          color: "var(--text-primary)",
          marginBottom: "1rem",
          lineHeight: 1.15
        }}>Community Businesses</h1>
        
        <p style={{
          color: "var(--text-secondary)",
          fontSize: "1.05rem",
          maxWidth: "600px",
          margin: "0 auto",
          lineHeight: 1.6
        }}>
          Explore and support the professional enterprises and startups founded by members of our Leo Club community.
        </p>
      </div>

      <BusinessesDirectory />
      <Footer />
    </main>
  );
}
