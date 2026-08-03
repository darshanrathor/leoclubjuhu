import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export const metadata: Metadata = {
  title: "About Our Legacy | Leo Club of Juhu | Sponsoring Lions Club Mumbai",
  description: "Learn about the history of Leo Club of Juhu, our structural affiliation with Lions Clubs International, our core values of service and leadership, and meet our board members.",
  keywords: [
    "About Leo Club of Juhu",
    "Lions Clubs International Affiliation Juhu",
    "Leo Lions Club Mumbai Sponsor",
    "Youth Leadership Mumbai NGO",
    "Leo Board of Directors Juhu"
  ],
};

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const timeline: TimelineItem[] = [
  {
    year: "1971",
    title: "Charter Year",
    description: "Leo Club of Juhu is officially chartered under the sponsorship of Lions Club of Juhu Host, establishing its historic role in Mumbai's social service ecosystem."
  },
  {
    year: "2015",
    title: "Inception of Leo League",
    description: "Launched our signature sports fundraiser tournament, generating funds to sponsor education for underprivileged children in Suburban Mumbai."
  },
  {
    year: "2020",
    title: "Pandemic Relief & Medical Mobilization",
    description: "Pivoted operations to deliver dry ration kits to 2,000+ migrant families and established online youth mental health support cells."
  },
  {
    year: "2024",
    title: "District Sweep & Awards Glory",
    description: "Recognized as the 'Best Outstanding Club' in District 3231-A1, sweeping awards for President, Secretary, and Best Service Project."
  },
  {
    year: "2026",
    title: "Leo Entrepreneur Network Launch",
    description: "Established the LEN portal to support, pitch, and fund professional businesses and startups founded by our community members."
  }
];

import BoardGrid from "@/src/components/BoardGrid";

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: "var(--bg-primary)", minHeight: "100vh", color: "var(--text-primary)" }}>
      <Navbar />
      
      {/* visual spacer */}
      <div style={{ height: "90px" }} />

      {/* Hero Section */}
      <section style={{ padding: "80px 24px", textAlign: "center", borderBottom: "1px solid var(--border-color)", background: "linear-gradient(to bottom, var(--bg-primary) 0%, var(--bg-secondary) 100%)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <span style={{ color: "var(--accent-gold)", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", display: "block", marginBottom: "12px" }}>
            Our Legacy & Story
          </span>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: "24px", fontFamily: "var(--font-poppins), sans-serif", lineHeight: 1.15 }}>
            Who We Are
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.15rem", lineHeight: 1.7, margin: 0 }}>
            Leo Club of Juhu is a premium youth service organization in Mumbai, affiliated with Lions Clubs International. We gather the city's most promising young minds to build leadership, drive service, and support startup founders.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section style={{ padding: "100px 24px", borderBottom: "1px solid var(--border-color)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "14px", fontFamily: "var(--font-poppins)" }}>
              Our Growth Journey
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem" }}>A history of social action, youth bonding, and leadership development in Mumbai.</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "40px", position: "relative" }}>
            {/* Timeline Vertical Line on desktop */}
            <div style={{ position: "absolute", left: "50px", top: "10px", bottom: "10px", width: "1px", backgroundColor: "var(--border-color)", zIndex: 1 }} />
            
            {timeline.map((item, idx) => (
              <div key={item.year} style={{ display: "flex", gap: "30px", position: "relative", zIndex: 2 }}>
                
                {/* Year Indicator bubble */}
                <div style={{ width: "100px", height: "50px", borderRadius: "12px", background: "var(--bg-secondary)", border: "1px solid var(--accent-gold)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontWeight: 800, color: "var(--accent-gold)", fontSize: "1.15rem", boxShadow: "0 4px 10px rgba(0,0,0,0.3)" }}>
                  {item.year}
                </div>
                
                {/* Timeline Card */}
                <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "28px", flexGrow: 1 }}>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px", fontFamily: "var(--font-poppins)" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lions Affiliation Section */}
      <section style={{ padding: "100px 24px", background: "var(--bg-secondary)", borderBottom: "1px solid var(--border-color)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "60px", alignItems: "center" }}>
          
          <div>
            <span style={{ color: "var(--accent-gold)", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", display: "block", marginBottom: "12px" }}>
              Global Affiliation
            </span>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "20px", fontFamily: "var(--font-poppins)", lineHeight: 1.2 }}>
              Sponsored by Lions Club of Juhu Host
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "20px" }}>
              As a Leo Club, we are a official youth partner program of <strong>Lions Clubs International</strong>, the world's largest service club organization with over 1.4 million members worldwide.
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "30px" }}>
              Our sponsoring parent body, the Lions Club of Juhu Host, guides, mentors, and funds our social service projects. This relationship provides our members with an unparalleled bridge to older professionals, enabling community mentorship and career growth.
            </p>
            <div style={{ borderLeft: "2px solid var(--accent-gold)", paddingLeft: "20px" }}>
              <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-primary)", display: "block", marginBottom: "4px" }}>What does LEO stand for?</span>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", margin: 0 }}>
                <strong>L</strong>eadership, <strong>E</strong>xperience, <strong>O</strong>pportunity. We develop leaders, gain experience through service, and provide opportunities for community growth.
              </p>
            </div>
          </div>

          <div style={{ position: "relative", height: "400px", borderRadius: "var(--border-radius-large)", overflow: "hidden", border: "1px solid var(--border-color)" }}>
            <Image
              src="/juhu3.jpg"
              alt="Lions Club of Juhu Host sponsorship handover event"
              fill
              style={{ objectFit: "cover" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11, 18, 32, 0.6) 0%, transparent 100%)" }} />
          </div>

        </div>
      </section>

      {/* Leadership Board Section */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ color: "var(--accent-gold)", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", display: "block", marginBottom: "12px" }}>
              Club Leadership
            </span>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "14px", fontFamily: "var(--font-poppins)" }}>
              Meet Our Board of Directors
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem" }}>The executive team managing operations, service execution, and startup registries for 2026.</p>
          </div>

          <BoardGrid />

        </div>
      </section>

      <Footer />
    </main>
  );
}
