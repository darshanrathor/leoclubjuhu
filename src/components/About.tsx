"use client";
import Image from "next/image";
import styles from "./About.module.css";
import Reveal from "./Reveal";

const pillars = [
  {
    title: "Aspire!",
    subtitle: "Leadership",
    icon: "🚀",
    desc: "We encourage young leaders to dream bigger, setting bold goals to serve communities and push past limits.",
    color: "#3B82F6",
  },
  {
    title: "Inspire!",
    subtitle: "Service",
    icon: "🔥",
    desc: "Purpose in action. We ignite passion in youth through hands-on community service and impactful outreach.",
    color: "#EF4444",
  },
  {
    title: "Transform!",
    subtitle: "Experience",
    icon: "✨",
    desc: "Leading by example, we turn ambition into high-impact social projects that create lasting change in Mumbai.",
    color: "#F3B007",
  },
];

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        {/* Top Section: Mission & Story */}
        <div className={styles.missionGrid}>
          <div className={styles.missionText}>
            <Reveal>
              <span className={styles.badge}>Our Legacy</span>
              <h2 className={styles.title}>
                Driven by Passion, <br />
                <span className={styles.goldText}>United by Service.</span>
              </h2>
              <p className={styles.description}>
                As a premier youth organization, <strong>Leo Club Juhu</strong> is a powerhouse of young visionaries in Mumbai. Our active <strong>Leo youth members</strong> are dedicated to the global <strong>Leo Movement</strong>, fostering leadership, fellowship, and creating a ripple effect of positive change through impactful community action under Lions Clubs International.
              </p>
              <div className={styles.statsRow}>
                <div className={styles.statItem}>
                  <span className={styles.statNum}>55+</span>
                  <span className={styles.statLabel}>Years of Service</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNum}>15,000+</span>
                  <span className={styles.statLabel}>Lives Impacted</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className={styles.missionImageArea}>
            <Reveal>
              <div className={styles.imageCard}>
                <Image
                  src="/1755757088608.jpeg"
                  alt="Leo Club youth leadership and community service in Mumbai"
                  width={600}
                  height={450}
                  className={styles.mainImg}
                />
                <div className={styles.imageOverlay} />
                <div className={styles.floatingBadge}>
                  <span className={styles.badgeIcon}>🏅</span>
                  <span>Leading Youth in Mumbai</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom Section: The LEO Way */}
        <div className={styles.pillarsSection}>
          <Reveal>
            <div className={styles.pillarsHeader}>
              <h3 className={styles.sectionTitle}>The LEO Way</h3>
              <p className={styles.sectionSub}>
                Our Core Pillars of Excellence
              </p>
            </div>
          </Reveal>

          <div className={styles.pillarsGrid}>
            {pillars.map((p, i) => (
              <Reveal key={p.title}>
                <div
                  className={styles.pillarCard}
                  style={{ "--accent": p.color } as React.CSSProperties}>
                  <div className={styles.pillarIcon}>{p.icon}</div>
                  <span className={styles.pillarSubtitle}>{p.subtitle}</span>
                  <h4 className={styles.pillarTitle}>{p.title}</h4>
                  <p className={styles.pillarDesc}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
