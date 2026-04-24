"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./SplashScreen.module.css";

export default function SplashScreen() {
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2500);
    const hideTimer = setTimeout(() => setHidden(true), 3200);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`${styles.splashContainer} ${fadeOut ? styles.fadeOut : ""}`}>
      {/* ── LOGO with pulsing rings ── */}
      <div className={styles.logoWrapper}>
        <div className={styles.ringOuter} />
        <div className={styles.ringMiddle} />
        <div className={styles.glow} />

        <div className={styles.logoImage}>
          <Image
            src="/logo.png"
            alt="Leo Club Of Juhu Logo"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* ── Welcome label ── */}
      <p className={styles.welcomeLabel}>Welcome to</p>

      <h1 className={styles.clubTitle}>
        Leo Club <span className={styles.goldText}>Of Juhu</span>
      </h1>

      {/* ── Tagline ── */}
      <p className={styles.tagline}>Dream • Dedication • Develop</p>

      {/* ── Loading bar ── */}
      <div className={styles.loadingBarWrapper}>
        <div className={styles.loadingBarFill} />
      </div>
    </div>
  );
}
