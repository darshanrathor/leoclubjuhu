"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Contact.module.css";
import Reveal from "./Reveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:leoclub.juhu@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.mapBackground}>
        <Image
          src="/contact_bg.png"
          alt="Contact Background"
          fill
          className={styles.bgImage}
          priority
        />
        <div className={styles.mapOverlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.contactGrid}>
          <Reveal>
            <div className={styles.contactInfo}>
              <span className={styles.subTitle}>CONTACT US</span>
              <h2 className={styles.title}>Get In Touch</h2>
              <p className={styles.description}>
                Want to make a difference? Contact us today and join the charge!
              </p>

              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📍</span>
                  <p>
                    Gulmohar Road, Ground Floor, Mukesh Patel Engg. College, Opp Cooper Hospital, Irla,
                    Vile Parle West, Mumbai, Maharashtra 400056, India
                  </p>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>✉️</span>
                  <p>leoclub.juhu@gmail.com</p>
                </div>

                {/* ✅ NEW PHONE SECTION */}
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📞</span>
                  <div className={styles.phoneNumbers}>
                    <a href="tel:+919820980731" className={styles.phoneLink}>
                      +91 98209 80731  &nbsp; &nbsp; &nbsp;
                    </a>
                    <a href="tel:+918424056949" className={styles.phoneLink}>
                      +91 84240 56949
                    </a>
                  </div>
                </div>

                <a
                  href="https://www.instagram.com/leoclubofjuhu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.instaBtn}
                >
                  <span className={styles.infoIcon}>
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                    </svg>
                  </span>
                  <p>@leoclubofjuhu</p>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className={styles.formBox}>
              <form onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className={styles.input}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    className={styles.input}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    required
                    placeholder="Your Subject"
                    className={styles.input}
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <textarea
                    required
                    placeholder="Your Message"
                    className={styles.textarea}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  SEND MESSAGE
                </button>
              </form>

              {submitted && (
                <p className={styles.successMsg}>
                  Redirecting to your email client...
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}