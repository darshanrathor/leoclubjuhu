"use client";
import { useState } from "react";
import Image from "next/image";

interface BoardMember {
  name: string;
  role: string;
  image: string;
  message: string;
}

const boardMembers: BoardMember[] = [
  {
    name: "Leo Hitansh Doshi",
    role: "Club President",
    image: "/team/hitansh.jpeg",
    message: "Serving Juhu's community is our utmost priority. Our goal is to inspire youth to take charge, innovate, and create sustainable social actions."
  },
  {
    name: "Leo Jainee Shah",
    role: "Club Vice President",
    image: "/team/jainee.jpeg",
    message: "We strive to bridge the gap between youth potential and community needs, fostering fellowship and leadership."
  },
  {
    name: "Leo Drashti Mehta",
    role: "Club Secretary",
    image: "/team/drashti.jpeg",
    message: "Operational transparency and active member alignment are what make our club one of Mumbai's most structured youth organizations."
  },
  {
    name: "Leo Tanish Savani",
    role: "Club Treasurer",
    image: "/team/tanish.jpeg",
    message: "Managing our resources efficiently allows us to maximize our impact on lives across Mumbai suburbs."
  }
];

function BoardMemberImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div 
        style={{ 
          width: "100%", 
          height: "100%", 
          background: "linear-gradient(135deg, #0B1220 0%, #111827 100%)", 
          display: "flex", 
          flexDirection: "column",
          alignItems: "center", 
          justifyContent: "center",
          gap: "8px",
          position: "absolute",
          inset: 0
        }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8 }}>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        <span style={{ fontSize: "0.65rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "600" }}>Portrait Pending</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      style={{ objectFit: "cover" }}
      onError={() => setError(true)}
    />
  );
}

export default function BoardGrid() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
      {boardMembers.map((member) => (
        <div key={member.name} style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "var(--border-radius-large)", overflow: "hidden", display: "flex", flexDirection: "column", height: "100%", boxShadow: "var(--shadow-subtle)", transition: "transform 0.3s ease" }}>
          
          {/* Member Portrait */}
          <div style={{ position: "relative", height: "260px", width: "100%" }}>
            <BoardMemberImage
              src={member.image}
              alt={member.name}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11, 18, 32, 0.8) 0%, transparent 50%)" }} />
            <span style={{ position: "absolute", bottom: "15px", left: "20px", background: "var(--accent-gold)", color: "#000", fontSize: "0.75rem", fontWeight: 700, padding: "4px 10px", borderRadius: "4px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              {member.role}
            </span>
          </div>
          
          {/* Content */}
          <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "space-between" }}>
            <div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "10px", fontFamily: "var(--font-poppins)" }}>
                {member.name}
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.5, fontStyle: "italic", margin: 0 }}>
                "{member.message}"
              </p>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}
