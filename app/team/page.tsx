import type { Metadata } from "next";
import Navbar from "@/src/components/Navbar";
import Team from "@/src/components/Team";
import Footer from "@/src/components/Footer";

export const metadata: Metadata = {
  title: "Our Team & Board Members | Leo Club of Juhu",
  description: "Meet the board of directors and executive officers driving community initiatives at Leo Club of Juhu, Mumbai for the current Leo Year.",
  keywords: [
    "Leo Club of Juhu Board",
    "Leo Club Juhu President",
    "Leo Dhruvi Shah",
    "Leo Hitansh Doshi",
    "Youth NGO Leaders Mumbai",
    "Juhu Lions Club Youth Board"
  ],
};

export default function TeamPage() {
  return (
    <main style={{ backgroundColor: "var(--bg-primary)", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ height: "90px" }} />
      <Team />
      <Footer />
    </main>
  );
}
