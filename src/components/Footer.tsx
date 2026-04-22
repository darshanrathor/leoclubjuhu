"use client";
import Image from "next/image";
import styles from "./Footer.module.css";
import Reveal from "./Reveal";

const links = [
  { label: "Our Mission", href: "#about" },
  { label: "Our Initiatives", href: "#projects" },
  { label: "The Team", href: "#team" },
  { label: "Gallery", href: "#gallery" },
  { label: "Connect Us", href: "#contact" },
];

const socials = [
  { 
    id: "fb", 
    href: "#",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
    )
  },
  { 
    id: "ig", 
    href: "https://www.instagram.com/leoclubofjuhu/",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" /></svg>
    )
  },
  { 
    id: "li", 
    href: "https://www.linkedin.com/company/leoclubofjuhu",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
    )
  },
];

export default function Footer() {
  return (
    <>
      <section className={styles.ctaSection}>
        <div className={styles.bgWrapper}>
          <Image src="/gallery/leoclubofjuhu_cover.jpg" alt="Join Us" fill className={styles.bgImage} />
          <div className={styles.bgOverlay} />
        </div>

        <div className={styles.ctaContent}>
          <Reveal>
            <div className={styles.badge}>
              <span className={styles.line} />
              Lift | Love | Lead
              <span className={styles.line} />
            </div>

            <h2 className={styles.title}>
              Be Part of Something <br />
              <span className={styles.goldText}>Truly Meaningful</span>
            </h2>

            <a href="#contact" className="btn-primary" style={{ padding: '16px 48px', fontSize: '1.125rem' }}>
              Join Us Now
            </a>
          </Reveal>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.brandCol}>
            <div className={styles.brandInfo}>
              <div className={styles.logoCircle}>
                <Image src="/logo.png" alt="Leo Logo" fill className="object-cover" />
              </div>
              <p className={styles.brandTitle}>Leo Club <span className={styles.goldText}>Juhu</span></p>
            </div>
            <p className={styles.brandDesc}>
              Empowering young minds through service, leadership, and community action. 
              Affiliated with Lions Clubs International.
            </p>
          </div>

          <div className={styles.col}>
            <p className={styles.colTitle}>Quick Links</p>
            <div className={styles.links}>
              {links.map((link) => (
                <a key={link.label} href={link.href} className={styles.link}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.col}>
            <p className={styles.colTitle}>Connect With Us</p>
            <div className={styles.socials}>
              {socials.map((s) => (
                <a key={s.id} href={s.href} className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
                  {s.icon}
                </a>
              ))}
            </div>
            <p className={styles.brandDesc} style={{ fontSize: '0.8125rem' }}>
              Stay updated with our latest impacts and community initiatives in Mumbai.
            </p>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>© {new Date().getFullYear()} Leo Club of Juhu. All rights reserved.</p>
          <p className={styles.copyright} style={{ letterSpacing: '0.1em' }}>CREATED BY : DARSHAN RATHOD</p>
        </div>
      </footer>
    </>
  );
}
