"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Our Mission", href: "#about" },
  { label: "Our Initiatives", href: "#projects" },
  { label: "The Team", href: "#team" },
  { label: "Gallery", href: "#gallery" },
  { label: "Connect Us", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.container}>
          <div className={styles.navRow}>
            {/* Logo & Name - Persistent but compacts on scroll */}
            <a href="#home" className={styles.logoArea}>
              <div className={styles.logoCircle}>
                <Image src="/logo.png" alt="Leo Juhu Logo" fill className="object-cover" priority />
              </div>
              <div className={styles.brandInfo}>
                <h1 className={styles.brandName}>Leo Club <span className={styles.goldText}>Juhu</span></h1>
                {!scrolled && <span className={styles.brandSub}>Mumbai • Lions International</span>}
              </div>
            </a>

            {/* Desktop Nav Links */}
            <nav className={styles.desktopNav}>
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className={styles.navActions}>
              <a href="#contact" className={styles.btnJoin}>Join Us</a>
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
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <div className={styles.mobileActions}>
          <a href="#contact" className={styles.btnJoin}>Join Us</a>
        </div>
      </div>
    </>
  );
}
