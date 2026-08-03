"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Testimonials.module.css";
import Reveal from "./Reveal";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
  tag: string;
}

const testimonialsList: Testimonial[] = [
  {
    quote: "Leo Club of Juhu has completely shaped my personal and professional path. Managing large-scale sports fundraisers and blood drives gave me real executive confidence, and launching my IT agency within the Leo Entrepreneur Network provided immediate community clients.",
    name: "Leo Hitansh Doshi",
    role: "Past President & Founder, Juhu Tech Solutions",
    image: "/team/hitansh.jpeg",
    tag: "ALUMNI SPOTLIGHT"
  },
  {
    quote: "Our sponsoring Leo club has consistently set the standard for youth leadership in Mumbai. Their dedication towards structured social initiatives combined with an active fellowship network shows what happens when young minds collaborate for social welfare.",
    name: "Lion Suresh Shah",
    role: "Zone Chairperson, Lions Club of Juhu Host",
    image: "/team/mit.jpeg", // Using available team images
    tag: "LIONS MENTOR"
  },
  {
    quote: "During Project Rakt, the Leos worked tirelessly to organize municipal logistics and set up camps. Their quick execution and support during the medical drive helped our hospital secure critical blood units for emergency thalassemic operations.",
    name: "Dr. Anjali Sen",
    role: "Chief Resident, Cooper Municipal Hospital",
    image: "/team/dhruvi.jpeg", // Using available team images
    tag: "BENEFICIARY STATEMENT"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.header}>
            <span className={styles.badge}>Voices</span>
            <h2 className={styles.title}>What the Community Says</h2>
            <p className={styles.subtitle}>
              Hear from our members, sponsoring Lions, and municipal partners about the life-changing impact of our programs.
            </p>
          </div>
        </Reveal>

        <div className={styles.contentArea}>
          <div className={styles.cardContainer}>
            {testimonialsList.map((t, idx) => (
              <div 
                key={t.name}
                className={`${styles.testimonialCard} ${idx === activeIndex ? styles.cardActive : styles.cardHidden}`}
              >
                <span className={styles.cardTag}>{t.tag}</span>
                <p className={styles.quote}>"{t.quote}"</p>
                
                <div className={styles.profileRow}>
                  <div className={styles.avatarWrapper}>
                    <Image 
                      src={t.image} 
                      alt={t.name} 
                      width={64} 
                      height={64} 
                      className={styles.avatar} 
                    />
                  </div>
                  <div className={styles.info}>
                    <h4 className={styles.name}>{t.name}</h4>
                    <span className={styles.role}>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.selectors}>
            {testimonialsList.map((t, idx) => (
              <button 
                key={idx}
                className={`${styles.selectorBtn} ${idx === activeIndex ? styles.selectorBtnActive : ""}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`View testimonial ${idx + 1}`}
              >
                <div className={styles.btnDot} />
                <span className={styles.btnName}>{t.name.split(" ")[1] || t.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
