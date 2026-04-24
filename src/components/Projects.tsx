"use client";
import Image from "next/image";
import styles from "./Projects.module.css";
import Reveal from "./Reveal";

const causes = [
  {
    title: "CHAMPION’S ROAR 🏆",
    desc: "On 16th December, at Suba International Hotel, the Leo Club of Juhu, in collaboration with the Lions Club of Juhu, had the honour of hosting a truly remarkable and historic evening. Together, we proudly celebrated and felicitated the Indian Blind Women’s Cricket Team – World Cup Champions 🇮🇳🏏",
    image: "/gallery/CHAMPION’S ROAR.jpg"
  },
  {
    title: "Project Maurya 🌸✨",
    desc: "Leo Club of Juhu marked Ganesh Chaturthi in a truly memorable way by celebrating with the little ones at Balkanji Bari.💛 \n The day was brimming with laughter and joy as the children explored their creativity through a Tote Bag Painting activity, filling the bags with vibrant colors and even brighter smiles.🎨",
    image: "/gallery/Project Maurya.jpg"
  },
  {
    title: "ART ATTACK 🎨",
    desc: "Leo Club of Juhu and Leo Club of Andheri Achievers, in collaboration with ConnectFor, came together for ART ATTACK with the aim of transforming Gundavali Municipal School into a more vibrant and inspiring learning environment for its students.",
    image: "/gallery/art.jpg"
  },
  {
    title: "LCJ’s Leo League 💙⚽️🏏",
    desc: "LCJ’s Leo League – Game Day 1 kicked off with incredible energy and excitement, as the club came together, divided into four houses, to embrace teamwork and friendly competition 🤝🔥.",
    image: "/gallery/Leo-league.jpg"
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
