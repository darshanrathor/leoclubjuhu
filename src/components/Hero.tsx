"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const stats = [
  { value: 200, suffix: "+", label: "Members" },
  { value: 50, suffix: "+", label: "Projects" },
  { value: 1000, suffix: "+", label: "Lives Impacted" },  
];

function Counter({ target, duration = 3000, start = false }: { target: number, duration?: number, start?: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return <>{count}</>;
}

export default function Hero() {
  const [inView, setInView] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.2 });
    
    if (statsRef.current) observer.observe(statsRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.container}>
        {/* Main Banner Container Card - Styled like the premium card in the image */}
        <div className={styles.bannerCard}>
          
          {/* Left Column: Neat & Clean Content */}
          <div className={styles.contentCol}>
            <div className={styles.badge}>
              <span className={styles.dot} />
              <span className={styles.badgeText}>Lift • Love • Lead</span>
            </div>

            {/* Title with left accent vertical line */}
            <div className={styles.titleWrapper}>
              <div className={styles.accentLine} />
              <h1 className={styles.title}>
                Service begins where <br />
                <span className={styles.lightSerif}>leadership</span> <span className={styles.boldSerif}>starts.</span>
              </h1>
            </div>

            <p className={styles.description}>
              We are a collective of young leaders driven by community service, fun fellowship events, and impactful celebrations. Join us to motivate youth, help people, and make a difference.
            </p>

            <div className={styles.btnGroup}>
              <a href="#contact" className="btn-primary">Become a Member</a>
              <a href="#projects" className="btn-dark">Our Projects</a>
            </div>
          </div>

          {/* Right Column: Single Premium Image Layout */}
          <div className={styles.imageCol}>
            <div className={styles.singleImageWrapper}>
              <Image 
                src="/juhu2.jpg" 
                alt="Leo Club of Juhu youth leaders gathering for a community service and fellowship project in Mumbai" 
                fill 
                className={styles.heroImage} 
                priority 
              />
              <div className={styles.imageOverlay} />
            </div>
          </div>

        </div>

        {/* Stats Section below the card */}
        <div ref={statsRef} className={styles.statsBar}>
          {stats.map((stat, i) => (
            <div key={stat.label} className={styles.statCard}>
              <span className={styles.statValue}>
                <Counter target={stat.value} start={inView} />
                {stat.suffix}
              </span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
