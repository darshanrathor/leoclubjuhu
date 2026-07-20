import type { Metadata } from "next";
import Navbar from "@/src/components/Navbar";
import About from "@/src/components/About";
import Vision from "@/src/components/Vision";
import Footer from "@/src/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Leo Club of Juhu | Youth Leadership & Service in Mumbai",
  description: "Discover the history, core vision, and affiliation of Leo Club of Juhu with Lions Clubs International. Learn how we empower youth and serve communities in Mumbai.",
  keywords: [
    "Leo Club of Juhu",
    "About Leo Club Juhu",
    "Lions Clubs International Juhu",
    "Youth NGO Juhu",
    "Leadership Mumbai",
    "Youth Leadership & Service"
  ],
};

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: "var(--bg-primary)", minHeight: "100vh" }}>
      <Navbar />
      {/* Visual spacer to accommodate the fixed floating navbar */}
      <div style={{ height: "90px" }} />
      <About />
      <Vision />
      <Footer />
    </main>
  );
}
