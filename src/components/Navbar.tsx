"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/initiatives" },
  { label: "Leadership", href: "/team" },
  { label: "Venture Network", href: "/businesses" },
  { label: "Contact Us", href: "/connect" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        {/* Scroll Progress Bar */}
        <div className={styles.progressBar} style={{ width: `${scrollProgress}%` }} />
        <div className={styles.container}>
          <div className={styles.navRow}>
            {/* Logo & Name - Persistent but compacts on scroll */}
            <Link href="/" className={styles.logoArea}>
              <div className={styles.logoCircle}>
                <Image src="/logo.png" alt="Official Emblem of Leo Club of Juhu - Lions Clubs International" fill className="object-cover" priority />
              </div>
              <div className={styles.brandInfo}>
                <h1 className={styles.brandName}>Leo Club <span className={styles.goldText}>Juhu</span></h1>
                {!scrolled && <span className={styles.brandSub}>Mumbai • Lions International</span>}
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className={styles.desktopNav}>
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className={styles.navActions}>
              <Link href="/join" className={styles.btnJoin}>Join Us</Link>
            </div>

            {/* Mobile Hamburger */}
            <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
              <div className={`${styles.bar1} ${menuOpen ? styles.bar1Active : ""}`} />
              <div className={`${styles.bar2} ${menuOpen ? styles.bar2Active : ""}`} />
              <div className={`${styles.bar3} ${menuOpen ? styles.bar3Active : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Moved outside header to avoid stacking/padding issues */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <button className={styles.closeBtn} onClick={() => setMenuOpen(false)}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className={styles.mobileNavLinks}>
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className={styles.mobileActions}>
          <Link href="/join" className={styles.btnJoin} onClick={() => setMenuOpen(false)}>Join Us</Link>
        </div>
      </div>
    </>
  );
}
