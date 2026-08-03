"use client";
import styles from "./WhyJoin.module.css";
import Reveal from "./Reveal";

interface JoinReason {
  title: string;
  icon: string;
  description: string;
  tag: string;
}

const reasons: JoinReason[] = [
  {
    title: "Executive Leadership",
    icon: "👑",
    tag: "LEAD",
    description: "Take charge of real-world initiatives, manage budgets, direct volunteers, and develop critical project management and public speaking capabilities.",
  },
  {
    title: "Global Network",
    icon: "🌍",
    tag: "FELLOWSHIP",
    description: "Connect with a massive global community of over 1.4 million Leos and Lions spread across 200+ countries, opening doors to international collaborations.",
  },
  {
    title: "Community Service",
    icon: "🤝",
    tag: "SERVICE",
    description: "Initiate and participate in impactful drives like Project Rakt (blood donation) and Meals Across Miles to serve local underrepresented populations.",
  },
  {
    title: "Startup Ecosystem",
    icon: "🚀",
    tag: "ENTREPRENEUR",
    description: "Access the exclusive 'Leo Entrepreneur Network' to showcase your ventures, gain member support, seek mentorship, and find potential co-founders.",
  }
];

export default function WhyJoin() {
  return (
    <section id="why-join" className={styles.section}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.header}>
            <span className={styles.badge}>Membership Benefits</span>
            <h2 className={styles.title}>Why Join Leo Club of Juhu?</h2>
            <p className={styles.subtitle}>
              We provide a supportive launchpad for Juhu's youth to craft meaningful social change, accelerate their careers, and build lifelong bonds.
            </p>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {reasons.map((reason, index) => (
            <Reveal key={reason.title}>
              <div className={styles.card}>
                <div className={styles.cardContent}>
                  <div className={styles.iconWrapper}>
                    <span className={styles.icon}>{reason.icon}</span>
                  </div>
                  <span className={styles.cardTag}>{reason.tag}</span>
                  <h3 className={styles.cardTitle}>{reason.title}</h3>
                  <p className={styles.cardDescription}>{reason.description}</p>
                </div>
                <div className={styles.cardGlow} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
