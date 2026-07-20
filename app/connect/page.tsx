import type { Metadata } from "next";
import Navbar from "@/src/components/Navbar";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";

export const metadata: Metadata = {
  title: "Connect & Contact Us | Leo Club of Juhu",
  description: "Get in touch with Leo Club of Juhu. Find our physical address, phone numbers, email contact, and social links to collaborate or support our NGO initiatives in Mumbai.",
  keywords: [
    "Contact Leo Club of Juhu",
    "Leo Club Juhu Phone Number",
    "Leo Club Juhu Address",
    "Youth NGO Vile Parle Contact",
    "Sponsor Leo Club Juhu",
    "Collaborate with Leo Club Juhu"
  ],
};

export default function ConnectPage() {
  return (
    <main style={{ backgroundColor: "var(--bg-primary)", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ height: "90px" }} />
      <Contact />
      <Footer />
    </main>
  );
}
