"use client";
import styles from "./Awards.module.css";
import Reveal from "./Reveal";

interface AwardItem {
  title: string;
  year: string;
  issuer: string;
  description: string;
  icon: string;
}

const awardsList: AwardItem[] = [
  {
    title: "Best Outstanding Club",
    year: "2024 - 2025",
    issuer: "District 3231-A1",
    description: "Ranked #1 out of 45+ clubs in the district for outstanding execution, community impact, and youth membership retention.",
    icon: "🏆"
  },
  {
    title: "Mega Service Award",
    year: "2025",
    issuer: "Lions Clubs International",
    description: "Special citation awarded for Project Rakt, acknowledging our massive collection of 250+ blood bags and healthcare reach.",
    icon: "🎖️"
  },
  {
    title: "Leo President of the Year",
    year: "2024",
    issuer: "District Council",
    description: "Awarded to our past leadership for demonstrating exceptional executive control, visionary projects, and fellowship growth.",
    icon: "👑"
  },
  {
    title: "Best Youth Initiative",
    year: "2023 - 2024",
    issuer: "Mumbai NGO Forum",
    description: "Recognized for our sports-service integration model through the Leo League sports carnival and fundraiser.",
    icon: "✨"
  }
];

export default function Awards() {
  return (
    <section id="awards" className={styles.section}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.header}>
            <span className={styles.badge}>Achievements</span>
            <h2 className={styles.title}>Awards & Recognition</h2>
            <p className={styles.subtitle}>
              Our commitment to excellence has earned us various awards and accolades over the years. Here is a snapshot of our legacy.
            </p>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {awardsList.map((award) => (
            <Reveal key={award.title}>
              <div className={styles.card}>
                <div className={styles.iconBox}>{award.icon}</div>
                <div className={styles.cardBody}>
                  <div className={styles.meta}>
                    <span className={styles.year}>{award.year}</span>
                    <span className={styles.divider}>•</span>
                    <span className={styles.issuer}>{award.issuer}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{award.title}</h3>
                  <p className={styles.cardDesc}>{award.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
