"use client";
import { useState } from "react";
import styles from "./Vision.module.css";
import Reveal from "./Reveal";

export default function Vision() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const pillars = [
    {
      index: "01",
      title: "Lead",
      icon: "🚀",
      short: "Build leadership skills.",
      details: "We empower young minds to lead community projects, organize major city-wide initiatives, and master professional communications, public speaking, and project management.",
    },
    {
      index: "02",
      title: "Serve",
      icon: "❤️",
      short: "Create meaningful impact.",
      details: "Service is our heartbeat. From blood donation camps to educational initiatives for underprivileged children, we touch lives hands-on.",
    },
    {
      index: "03",
      title: "Connect",
      icon: "🤝",
      short: "Build lifelong connections.",
      details: "Join a diverse family of ambitious youth. Collaborate with like-minded change-makers in Mumbai and connect with international leaders.",
    },
    {
      index: "04",
      title: "Celebrate",
      icon: "🎉",
      short: "Balance purpose with fun.",
      details: "We believe service should be joyful! We host sports tournaments, cultural Holi/Garba bashes, retreats, and interactive fellowship bonding meets.",
    }
  ];

  return (
    <section className={styles.section} id="vision">
      <div className={styles.container}>
        <Reveal>
          <div className={styles.header}>
            <span className={styles.subTitle}>OUR MISSION</span>
            <h2 className={styles.title}>More Than a Club. A Movement.</h2>
            <p className={styles.description}>
              Leo Club of Juhu is a space where passion meets purpose. Hover or tap on any card to explore our core pillars.
            </p>
          </div>
        </Reveal>

        {/* Expanding Accordion Deck */}
        <div className={styles.deck}>
          {pillars.map((p, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div 
                key={p.index}
                className={`${styles.card} ${isExpanded ? styles.cardExpanded : ""}`}
                onMouseEnter={() => setExpandedIndex(idx)}
                onClick={() => setExpandedIndex(idx)}
              >
                {/* Big decorative index number in background */}
                <div className={styles.cardNumber}>{p.index}</div>

                <div className={styles.cardHeader}>
                  <div className={styles.iconCircle}>{p.icon}</div>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                </div>

                <div className={styles.cardContent}>
                  <p className={styles.shortText}>{p.short}</p>
                  
                  <div className={`${styles.detailsWrapper} ${isExpanded ? styles.expanded : ""}`}>
                    <p className={styles.detailsText}>{p.details}</p>
                  </div>
                </div>

                {/* Arrow toggle indicator */}
                <div className={styles.arrowIndicator}>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className={`${styles.arrowIcon} ${isExpanded ? styles.arrowRotated : ""}`}
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}