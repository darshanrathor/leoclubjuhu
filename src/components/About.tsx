"use client";
import Image from "next/image";
import styles from "./About.module.css";
import Reveal from "./Reveal";

const pillars = [
  {
    title: "Lift!",
    subtitle: "Leadership",
    icon: "🚀",
    desc: "We empower young individuals to rise as visionary leaders, fostering the skills needed to uplift communities.",
    color: "#fbbf24",
  },
  {
    title: "Love!",
    subtitle: "Service",
    icon: "❤️",
    desc: "Service is our heartbeat. We spread compassion through hands-on projects that touch lives and heal spirits.",
    color: "#ef4444",
  },
  {
    title: "Lead!",
    subtitle: "Experience",
    icon: "✨",
    desc: "Leading by example, we turn passion into action, creating a legacy of positive change in Mumbai.",
    color: "#60a5fa",
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
                Leo Club of Juhu is a powerhouse of young visionaries in Mumbai.
                Affiliated with Lions Clubs International, we are dedicated to
                fostering leadership and creating a ripple effect of positive
                change through impactful community action.
              </p>
              <div className={styles.statsRow}>
                <div className={styles.statItem}>
                  <span className={styles.statNum}>15+</span>
                  <span className={styles.statLabel}>Years of Service</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNum}>10,000+</span>
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
                  alt="Our Mission"
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
                  style={{ "--accent": p.color } as any}>
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
