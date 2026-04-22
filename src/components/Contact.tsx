"use client";
import { useState } from "react";
import styles from "./Contact.module.css";
import Reveal from "./Reveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.header}>
            <span className={styles.subTitle}>Contact Us</span>
            <h2 className={styles.title}>Ready to Make a Difference?</h2>
            <p className={styles.description}>Join Leo Club of Juhu and be part of a movement that changes lives.</p>
          </div>
        </Reveal>

        {submitted ? (
          <Reveal>
            <div className={`${styles.formBox} ${styles.success}`}>
              <span className={styles.successIcon}>🎉</span>
              <h3 className={styles.title}>Thank You!</h3>
              <p className={styles.description}>We've received your message and will get back to you soon.</p>
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <div className={styles.formBox}>
              <form onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Your Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Aryan Shah" 
                      className={styles.input}
                      value={form.name}
                      onChange={(e) => setForm({...form, name: e.target.value})}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Email Address</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="aryan@example.com" 
                      className={styles.input}
                      value={form.email}
                      onChange={(e) => setForm({...form, email: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Tell us why you'd like to join</label>
                  <textarea 
                    required 
                    placeholder="I want to contribute to my community..." 
                    className={styles.textarea}
                    value={form.message}
                    onChange={(e) => setForm({...form, message: e.target.value})}
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Send Message →
                </button>
              </form>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
