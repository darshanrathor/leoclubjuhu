"use client";
import styles from "./CorporatePartnerships.module.css";
import Reveal from "./Reveal";

const partnerships = [
  {
    title: "Event Sponsorship",
    description: "Support our flagships like Leo League sports carnival, youth conferences, and celebrations. Receive premium branding, logo placements, and direct outreach to thousands of young residents.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  },
  {
    title: "In-Kind Product Giveaways",
    description: "Donate school kits, hygiene products, or nutritional supplies for our distribution drives across Mumbai suburbs. We manage full deployment logistics and coordinate proof-of-donation reports.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 12 20 22 4 22 4 12" />
        <rect x="2" y="7" width="20" height="5" />
        <line x1="12" y1="22" x2="12" y2="7" />
        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
      </svg>
    )
  },
  {
    title: "CSR Health Drives",
    description: "Fund life-saving initiatives like Project Rakt blood donation camps, free healthcare screenings, eye testing, and pediatric hospital ward painting projects. Fully aligned with corporate CSR objectives.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    )
  }
];

export default function CorporatePartnerships() {
  return (
    <section id="corporate-partnerships" className={styles.section}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.header}>
            <span className={styles.badge}>Collaborations</span>
            <h2 className={styles.title}>Corporate & CSR Partnerships</h2>
            <p className={styles.subtitle}>
              Maximize your social impact by partnering with the Leo Club of Juhu. We coordinate custom activation models that align with your organizational goals.
            </p>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {partnerships.map((p) => (
            <Reveal key={p.title}>
              <div className={styles.card}>
                <div className={styles.iconContainer}>
                  {p.icon}
                </div>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className={styles.ctaRow}>
            <a href="#contact" className="btn-primary" style={{ background: "var(--accent-gold)", borderColor: "var(--accent-gold)", color: "#000000", padding: "14px 36px", fontSize: "0.95rem", fontWeight: "700" }}>
              Inquire for CSR / Sponsorship
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
