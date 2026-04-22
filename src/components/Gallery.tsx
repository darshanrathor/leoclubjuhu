"use client";
import Image from "next/image";
import styles from "./Gallery.module.css";
import Reveal from "./Reveal";

const stories = [
  { src: "/gallery/masti-ki-pathshala.jpg", alt: "Masti Ki Pathshala" },
  { src: "/gallery/Garba Night.jpg", alt: "Garba Night Bash" },
  { src: "/gallery/Meals Across Miles.jpg", alt: "Meals Across Miles" },
  { src: "/gallery/Star Warriors.jpg", alt: "Star Warriors Project" },
  { src: "/gallery/cricket.jpg", alt: "Cricket Fellowship" },
  { src: "/gallery/11th Service Project Report – Circle of Care.jpg", alt: "Circle of Care" },
];

export default function Gallery() {
  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.header}>
            <span className={styles.subTitle}>Leo Stories</span>
            <h2 className={styles.title}>Impact Through Action</h2>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {stories.map((story, i) => (
            <Reveal key={i}>
              <div className={styles.imageCard}>
                <Image 
                  src={story.src} 
                  alt={story.alt} 
                  fill 
                  className={styles.image} 
                />
                <div className={styles.overlay}>
                  <p className={styles.imgTitle}>{story.alt}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
