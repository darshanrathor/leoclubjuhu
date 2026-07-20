import type { Metadata } from "next";
import Navbar from "@/src/components/Navbar";
import Projects from "@/src/components/Projects";
import Footer from "@/src/components/Footer";

export const metadata: Metadata = {
  title: "Our Initiatives & Service Projects | Leo Club of Juhu",
  description: "Explore upcoming and past community service drives, sports tournaments, and fellowship initiatives of Leo Club of Juhu. Join Project Rakt, Leo League, and more.",
  keywords: [
    "Leo Club Juhu Initiatives",
    "Project Rakt Juhu",
    "Leo League Mumbai",
    "A Match To Remember",
    "Youth NGO Projects Mumbai",
    "Volunteer Opportunities Mumbai",
    "Blood Donation Vile Parle"
  ],
};

export default function InitiativesPage() {
  return (
    <main style={{ backgroundColor: "var(--bg-primary)", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ height: "90px" }} />
      <Projects />
      <Footer />
    </main>
  );
}
