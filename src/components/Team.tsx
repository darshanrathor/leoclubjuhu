"use client";
import { useState } from "react";
import styles from "./Team.module.css";
import Reveal from "./Reveal";
import Image from "next/image";

const team = [
  {
    name: "Leo Hitansh Doshi",
    role: "President, LY'26-27",
    image: "/team/hitansh.jpeg",
    socials: {
      insta: "https://www.instagram.com/hitansh28?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      linkedin: "https://www.linkedin.com/in/hitanshdoshi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    }
  },
  {
    name: "Leo Jainee Shah",
    role: "Vice President, LY'26-27",
    image: "/team/jainee.jpeg",
    socials: {
      insta: "https://www.instagram.com/shah_jainee_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      linkedin: "https://www.linkedin.com/in/jainee-shah-274a59201/"
    }
  },
  {
    name: "Leo Drashti Mehta",
    role: "Secretary, LY'26-27",
    image: "/team/Drashti.jpg",
    socials: {
      insta: "https://www.instagram.com/okayfinewhatevaa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      linkedin: "https://www.linkedin.com/in/drashti-mehta1999/"
    }
  },
  {
    name: "Leo Tanish Savani",
    role: "Treasurer, LY'26-27",
    image: "/team/tanish.jpg",
    socials: {
      insta: "https://www.instagram.com/tanishsavani?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      linkedin: "https://www.linkedin.com/in/tanish-savani-06198918b/"
    }
  }
];

function TeamMemberImage({ src, alt, className }: { src: string; alt: string; className: string }) {
  const [imageError, setImageError] = useState(false);

  if (imageError || !src) {
    return (
      <div 
        style={{ 
          width: "100%", 
          height: "100%", 
          background: "linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)", 
          display: "flex", 
          flexDirection: "column",
          alignItems: "center", 
          justifyContent: "center",
          gap: "12px",
          position: "absolute",
          inset: 0
        }}
      >
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8 }}>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        <span style={{ fontSize: "0.7rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "600" }}>Portrait Pending</span>
      </div>
    );
  }

  return (
    <Image 
      src={src} 
      alt={alt} 
      fill
      className={className} 
      onError={() => setImageError(true)}
    />
  );
}

export default function Team() {
  return (
    <section id="leadership" className={styles.teamSection}>
      <div className={styles.container}>
        
        {/* Intro Page Hero */}
        <Reveal>
          <div className={styles.introHero}>
            <span className={styles.introBadge}>The Board</span>
            <h1 className={styles.introTitle}>Leadership & Service Directors</h1>
            <p className={styles.introDesc}>
              The executive board of the Leo Club of Juhu, Mumbai coordinates club logistics, district alignment, community programs, and active startup registry platforms for the LY'26-27 term.
            </p>
          </div>
        </Reveal>

        {/* Section Header */}
        <Reveal>
          <div className={styles.header}>
            <div className={styles.titleLine} />
            <h2 className={styles.title}>Meet The Team</h2>
          </div>
        </Reveal>

        {/* Members Grid */}
        <div className={styles.grid}>
          {team.map((m) => (
            <Reveal key={m.name}>
              <div className={styles.memberCard}>
                <div className={styles.imageBox}>
                  <TeamMemberImage src={m.image} alt={m.name} className={m.name === "MJF Lion Navdeep Nigam" ? styles.navdeepImage : styles.memberImage} />
                </div>
                <div className={styles.infoBox}>
                  <p className={styles.name}>{m.name}</p>
                  <p className={styles.role}>{m.role}</p>
                  <div className={styles.socialLinks}>
                    <a href={m.socials.insta} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                    </a>
                    <a href={m.socials.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Board Responsibilities Section */}
        <Reveal>
          <div className={styles.respSection}>
            <h3 className={styles.sectionTitle}>Board Portfolios & Responsibilities</h3>
            <div className={styles.respGrid}>
              <div className={styles.respCard}>
                <div className={styles.cardIcon}>👑</div>
                <h4 className={styles.cardTitle}>Executive & Strategy</h4>
                <p className={styles.cardText}>
                  Managed by the President and Vice President. Directs the club’s strategic vision, structures fellowship campaigns, ensures compliance with Lions International protocols, and leads district collaborations.
                </p>
              </div>
              <div className={styles.respCard}>
                <div className={styles.cardIcon}>📝</div>
                <h4 className={styles.cardTitle}>Secretariat & Portals</h4>
                <p className={styles.cardText}>
                  Managed by the Club Secretary. Oversees records, minutes, documentation of service projects, website content synchronization, and coordinates communication channels between members and the board.
                </p>
              </div>
              <div className={styles.respCard}>
                <div className={styles.cardIcon}>💰</div>
                <h4 className={styles.cardTitle}>Treasury & Partnerships</h4>
                <p className={styles.cardText}>
                  Managed by the Club Treasurer. Governs community fund allocations, audits fundraising sports leagues (Leo League), drafts project financial reports, and handles corporate CSR allocations.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* FAQ & Club Operations Section */}
        <Reveal>
          <div className={styles.faqSection}>
            <h3 className={styles.sectionTitle}>Frequently Asked Questions</h3>
            <div className={styles.faqGrid}>
              <div className={styles.faqCard}>
                <h4 className={styles.faqQuestion}>How is the executive board selected?</h4>
                <p className={styles.faqAnswer}>
                  The board is elected annually by members through a voting process held in April, evaluated in coordination with our parent sponsor body, the Lions Club of Juhu Host.
                </p>
              </div>
              <div className={styles.faqCard}>
                <h4 className={styles.faqQuestion}>What is the duration of the Leo Year?</h4>
                <p className={styles.faqAnswer}>
                  A standard Leo Year (LY) runs from July 1st to June 30th of the following calendar year. Our current officers represent the LY'2026-27 term.
                </p>
              </div>
              <div className={styles.faqCard}>
                <h4 className={styles.faqQuestion}>How can members pitch project ideas?</h4>
                <p className={styles.faqAnswer}>
                  Members can submit project proposals directly through the general body meetings or by connecting with the Club Secretary via our Connect portal.
                </p>
              </div>
              <div className={styles.faqCard}>
                <h4 className={styles.faqQuestion}>What is the LEN registry platform?</h4>
                <p className={styles.faqAnswer}>
                  The Leo Entrepreneur Network (LEN) registry is an initiative set up by the leadership board to promote, index, and support startup ventures founded by active Leo Juhu members.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
