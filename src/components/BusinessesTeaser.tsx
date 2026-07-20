"use client";
import Image from "next/image";
import Link from "next/link";
import { businesses } from "@/src/data/businesses";
import styles from "./BusinessesTeaser.module.css";
import Reveal from "./Reveal";

export default function BusinessesTeaser() {
  // Show only the first 3 businesses as a teaser
  const teaserList = businesses.slice(0, 3);

  return (
    <section id="businesses-teaser" className={styles.section}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.header}>
            <span className={styles.subTitle}>Local Ventures</span>
            <h2 className={styles.title}>Community Businesses</h2>
            <p className={styles.tagline}>
              We are proud of our enterprising member network. Explore and support startups and businesses owned by our members.
            </p>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {teaserList.map((b) => (
            <Reveal key={b.id}>
              <a
                href={b.website}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={b.image}
                    alt={`${b.name} logo banner`}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className={styles.image}
                  />
                  <span className={styles.badge}>{b.category}</span>
                </div>
                
                <div className={styles.cardContent}>
                  <div>
                    <h3 className={styles.businessName}>{b.name}</h3>
                    <p className={styles.ownerName}>{b.owner}</p>
                    <p className={styles.description}>{b.description}</p>
                  </div>
                  
                  <div className={styles.actionRow}>
                    <span className={styles.btnLink}>
                      Visit Website <span className={styles.arrowIcon}>↗</span>
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className={styles.ctaRow}>
            <Link href="/businesses" className="btn-primary">
              View All Businesses
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
