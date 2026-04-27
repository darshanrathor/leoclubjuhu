"use client";
import Image from "next/image";
import styles from "./Projects.module.css";
import Reveal from "./Reveal";

const causes = [
  {
    title: "Leo League 💙⚽️🏏",
    desc: "Sports carnival with matches, rivalries, and celebrations.",
    image: "/gallery/Leo-league.jpg"
  },
  {
    title: "Roar Room 🦁",
    desc: "Networking and career-building platform for young Leos.",
    image: "/gallery/roar.jpg"
  },
  {
    title: "Action Replay 🎬",
    desc: "Tribute event honoring past presidents with performances.",
    image: "/gallery/action.jpg"
  },
  {
    title: "Summer Camp 🏕️",
    desc: "Fun-filled retreat with games, bonfires, and bonding.",
    image: "/gallery/sumer.jpeg"
  },
  {
    title: "Mauj with Maurya 🌸",
    desc: "Ganesh festival celebration blending tradition and energy.",
    image: "/gallery/maurya.jpg"
  },
  {
    title: "Project Rakt 🩸",
    desc: "Year-long blood donation and awareness campaign.",
    image: "/gallery/rakt.jpeg"
  },
  {
    title: "Celebrate with LCJ 🎉",
    desc: "Joyful recognition of birthdays, anniversaries, and everyday moments.",
    image: "/gallery/celebration.jpeg"
  },
  {
    title: "LCJ Holi Bash 🌈",
    desc: "Iconic colorful festival with dance, food, and community spirit.",
    image: "/gallery/holi.jpg"
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.header}>
            <span className={styles.subTitle}>Our Initiatives</span>
            <h2 className={styles.title}>Serve With Us!</h2>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {causes.map((cause) => (
            <Reveal key={cause.title}>
              <div className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={cause.image}
                    alt={cause.title}
                    fill
                    className={styles.image}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.projectTitle}>{cause.title}</h3>
                  <p className={styles.projectDesc}>{cause.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
