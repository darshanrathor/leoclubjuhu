"use client";
import Script from "next/script";
import styles from "./SocialFeeds.module.css";
import Reveal from "./Reveal";

export default function SocialFeeds() {
  return (
    <section id="social-feeds" className={styles.section}>
      {/* Optimized lazy loading of the Elfsight script */}
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
      
      <div className={styles.container}>
        <Reveal>
          <div className={styles.header}>
            <span className={styles.subTitle}>Live Connect</span>
            <h2 className={styles.title}>Our Social Pulse</h2>
            <p className={styles.tagline}>
              Stay updated with our latest community service campaigns, sports tournaments, and fellowship updates on Instagram and LinkedIn.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className={styles.feedsGrid}>
            {/* Instagram Widget */}
            <div className={styles.feedCard}>
              <h3 className={styles.feedTitle}>
                <span className={styles.feedIcon}>📸</span> Instagram Feed
              </h3>
              <div className={styles.feedWrapper}>
                <div className="elfsight-app-da9211c1-ddff-490e-934d-eef8b33aa7db" data-elfsight-app-lazy></div>
              </div>
            </div>

            {/* LinkedIn Widget */}
            <div className={styles.feedCard}>
              <h3 className={styles.feedTitle}>
                <span className={styles.feedIcon}>💼</span> LinkedIn Feed
              </h3>
              <div className={styles.feedWrapper}>
                <div className="elfsight-app-84a869dc-7284-40ad-b48e-5663e38bf74c" data-elfsight-app-lazy></div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
