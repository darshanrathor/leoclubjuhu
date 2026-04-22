"use client";
import styles from "./About.module.css";
import Reveal from "./Reveal";

const values = [
  { 
    icon: "✨", 
    title: "Lift!", 
    desc: "We believe in the power of imagination. Dare to dream of a better world and take the lead in making it a reality." 
  },
  { 
    icon: "❤️", 
    title: "Love!", 
    desc: "Service is at our heart. We commit our time and compassion to projects that create real, human impact." 
  },
  { 
    icon: "🚀", 
    title: "Lead!", 
    desc: "Developing the next generation of leaders. Grow professionally and personally while serving your community." 
  },
];

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.header}>
            <span className={styles.subTitle}>Our Organization</span>
            <h2 className={styles.title}>
              Driven by Passion, <br />
              <span className={styles.goldText}>United by Service.</span>
            </h2>
            <p className={styles.description}>
              Leo Club of Juhu is a powerhouse of young visionaries in Mumbai. 
              From students to young professionals, we are dedicated to fostering leadership 
              and creating a ripple effect of positive change through impactful community service.
            </p>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {values.map((v, i) => (
            <Reveal key={v.title}>
              <div className={styles.card}>
                <div className={styles.iconWrapper}>
                  <span>{v.icon}</span>
                </div>
                <h3 className={styles.cardTitle}>{v.title}</h3>
                <p className={styles.cardDesc}>{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <span className={styles.statVal}>Mumbai</span>
              <span className={styles.statLab}>Base of Impact</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal}>Youth</span>
              <span className={styles.statLab}>Driven Force</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal}>Lions</span>
              <span className={styles.statLab}>Global Legacy</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
