"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const stats = [
  { value: 500, suffix: "+", label: "Members" },
  { value: 100, suffix: "+", label: "Projects" },
  { value: 10000, suffix: "+", label: "Lives Impacted" },
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
  const [scrollPos, setScrollPos] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollPos(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.5 });
    
    if (statsRef.current) observer.observe(statsRef.current);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="home" className={styles.heroSection}>
      {/* Background with Overlays */}
      <div className={styles.bgOverlay}>
        <Image 
          src="/juhu1.jpg" 
          alt="Leo Juhu" 
          fill 
          className={styles.bgImage} 
          priority 
          style={{ transform: `translateY(${scrollPos * 0.4}px)` }}
        />
        <div className={styles.gradientOverlay} />
      </div>

      {/* Main Hero Content */}
      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          <span className={styles.badgeText}>Lift | Love | Lead</span>
        </div>

        <h1 className={styles.title}>
          Lead with Empathy, <br /> 
          <span className={styles.shimmerText}>Impact with Intent.</span>
        </h1>

        <p className={styles.description}>
          Leo Club of Juhu is a vibrant collective of young minds driven by service, leadership, and lasting change in the heart of Mumbai.
        </p>

        <div className={styles.btnGroup}>
          <a href="#contact" className="btn-primary">Become a Member</a>
          <a href="#projects" className={styles.secondaryBtn}>
             Explore Our Impact
          </a>
        </div>
      </div>

      {/* Stats Section ("By the Numbers") */}
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
    </section>
  );
}
