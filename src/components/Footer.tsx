"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import Reveal from "./Reveal";

const links = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/initiatives" },
  { label: "Leadership", href: "/team" },
  { label: "Venture Network", href: "/businesses" },
  { label: "Contact Us", href: "/connect" },
];

const socials = [
  { 
    id: "ig", 
    href: "https://www.instagram.com/leoclubofjuhu/",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" /></svg>
    )
  },
  { 
    id: "li", 
    href: "https://www.linkedin.com/company/leoclubofjuhu/posts/?feedView=all",
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
          <Image src="/gallery/leoclubofjuhu_cover.jpg" alt="Leo Club of Juhu members volunteering for Project Rakt" fill className={styles.bgImage} />
          <div className={styles.bgOverlay} />
        </div>

        <div className={styles.ctaContent}>
          <Reveal>
            <div className={styles.badge}>
              <span className={styles.line} />
              ASPIRE TO INSPIRE
              <span className={styles.line} />
            </div>

            <h2 className={styles.title}>
              Ready to Dream Big and <br />
              <span className={styles.goldText}>Drive Impact?</span>
            </h2>

            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: "600px", margin: "20px auto 30px", lineHeight: "1.6" }}>
              Join Leo Club of Juhu and be part of a vibrant youth community that transforms vision into positive service.
            </p>

            <Link href="/join" className="btn-primary" style={{ padding: '16px 48px', fontSize: '1.125rem' }}>
              Join Us Now
            </Link>
          </Reveal>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.brandCol}>
            <div className={styles.brandInfo}>
              <div className={styles.logoCircle}>
                <Image src="/logo.png" alt="Leo Club of Juhu emblem - Lions Clubs International" fill className="object-cover" />
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
                <Link key={link.label} href={link.href} className={styles.link}>
                  {link.label}
                </Link>
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
            <p className={styles.brandDesc} style={{ fontSize: '0.8125rem', marginTop: '1.5rem' }}>
              <strong>VISIT US:</strong><br />
              Gulmohar Road, Ground Floor, Mukesh Patel Engg. College, Vile Parle West, Mumbai - 400056
            </p>
          </div>

          <div className={styles.col}>
            <p className={styles.colTitle}>Leo Club FAQ</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--accent-gold)", margin: 0 }}>
                What is the Leo Club of Juhu?
              </p>
              <p className={styles.brandDesc} style={{ margin: 0, fontSize: "0.8125rem", lineHeight: 1.5 }}>
                Leo Club of Juhu is a youth leadership organization sponsored by Lions Clubs International in Mumbai, focusing on leadership development, community service, and youth fellowship.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>© {new Date().getFullYear()} Leo Club of Juhu. All rights reserved.</p>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/privacy-policy" className={styles.legalLink}>Privacy Policy</Link>
            <Link href="/terms" className={styles.legalLink}>Terms & Conditions</Link>
            <Link href="/declaration" className={styles.legalLink}>Declaration Status</Link>
            <Link href="/admin" className={styles.legalLink}>Admin Portal</Link>
          </div>
          <p className={styles.copyright} style={{ letterSpacing: '0.1em' }}>CREATED BY : DARSHAN RATHOD</p>
        </div>
      </footer>
    </>
  );
}
