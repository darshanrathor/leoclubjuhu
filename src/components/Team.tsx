"use client";
import styles from "./Team.module.css";
import Reveal from "./Reveal";

const team = [
  { name: "Druvi Shah", role: "President" },
  { name: "Hitansh Doshi", role: "Vice President" },
  { name: "Vatsal Nagodra", role: "Secretary" },
  { name: "Meet Shah", role: "Treasurer" },
  { name: "Uannati Shah", role: "Event Head" }
  
];

export default function Team() {
  return (
    <section id="team" className={styles.teamSection}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.header}>
            <span className={styles.subTitle}>Our Organization</span>
            <h2 className={styles.title}>Meet Our Leaders</h2>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {team.map((m) => (
            <Reveal key={m.name}>
              <div className={styles.memberCard}>
                <div className={styles.avatar}>
                  <span className={styles.initials}>
                    {m.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <p className={styles.name}>{m.name}</p>
                <p className={styles.role}>{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
