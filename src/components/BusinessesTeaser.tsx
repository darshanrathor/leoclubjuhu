"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { businesses } from "@/src/data/businesses";
import styles from "./BusinessesTeaser.module.css";
import Reveal from "./Reveal";

export default function BusinessesTeaser() {
  const [businessesList, setBusinessesList] = useState<any[]>([]);

  useEffect(() => {
    async function loadBusinesses() {
      try {
        const res = await fetch("/api/businesses");
        if (res.ok) {
          const json = await res.json();
          if (Array.isArray(json)) {
            setBusinessesList(json);
            return;
          }
        }
      } catch (err) {
        console.error("Failed to load teaser businesses:", err);
      }
      setBusinessesList(businesses);
    }
    loadBusinesses();
  }, []);

  const teaserList = businessesList.slice(0, 3);

  return (
    <section id="venture-network" className={styles.section}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.header}>
            <span className={styles.subTitle}>Venture Registry</span>
            <h2 className={styles.title}>Built by Leo Entrepreneurs</h2>
            <p className={styles.tagline}>
              Discover and support the professional enterprises and startups founded by members of our Leo Club community in Mumbai.
            </p>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {teaserList.map((b) => (
            <Reveal key={b.id}>
              <Link
                href={`/businesses/${b.id}`}
                className={styles.card}
              >
                <div className={styles.imageWrapper}>
                  {/* Rendering founder portrait photo for premium founder-centric layout */}
                  <Image
                    src={b.founderPhoto}
                    alt={`${b.founderName} portrait`}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className={styles.image}
                  />
                  <div className={styles.gradientOverlay} />
                  <span className={styles.badge}>{b.category}</span>
                  <span className={styles.logoSymbol}>{b.logo}</span>
                </div>
                
                <div className={styles.cardContent}>
                  <div>
                    <h3 className={styles.businessName}>{b.name}</h3>
                    <p className={styles.ownerName}>{b.founderName}</p>
                    <p className={styles.description}>{b.description}</p>
                  </div>
                  
                  <div className={styles.actionRow}>
                    <span className={styles.btnLink}>
                      Read Spotlight Profile <span className={styles.arrowIcon}>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className={styles.ctaRow}>
            <Link href="/businesses" className="btn-primary" style={{ background: "var(--accent-gold)", borderColor: "var(--accent-gold)", color: "#000000" }}>
              Explore the Network
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
