"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

const interestsOptions = [
  "Community Service Projects 🩸",
  "Sports & Fellowship Events ⚽",
  "Creative & Editorial Team ✍️",
  "Digital Media & Marketing 📸",
  "Leadership Development 🚀"
];

export default function JoinUsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: interestsOptions[0],
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoginTab, setIsLoginTab] = useState(false); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:leoclub.juhu@gmail.com?subject=${encodeURIComponent("Leo Club Juhu Membership Application - " + form.name)}&body=${encodeURIComponent(
      `Leo Club of Juhu - Membership Application\n` +
      `-----------------------------------------\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n` +
      `Primary Interest: ${form.interest}\n\n` +
      `Message / About Me:\n${form.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <main style={{ backgroundColor: "var(--bg-primary)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div style={{ height: "90px" }} />
      
      <div style={{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 24px"
      }}>
        {/* Main 2-Column Card matching the exact UI design shape */}
        <div style={{
          width: "100%",
          maxWidth: "1080px",
          minHeight: "680px",
          background: "var(--bg-secondary)", 
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6)",
          display: "grid",
          gridTemplateColumns: "1fr 1.1fr",
          fontFamily: "var(--font-raleway), sans-serif", 
        }}>
          
          {/* Left Column: Interactive Form */}
          <div style={{
            padding: "50px 60px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
            
            {/* Top Switcher Tab mimicking "Вход / Регистрация" */}
            <div style={{ display: "flex", gap: "28px", marginBottom: "30px" }}>
              <button 
                onClick={() => setIsLoginTab(false)}
                style={{
                  color: !isLoginTab ? "var(--accent-gold)" : "var(--text-secondary)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  borderBottom: !isLoginTab ? "2px solid var(--accent-gold)" : "none",
                  paddingBottom: "6px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
              >
                Apply Membership
              </button>
              <button 
                onClick={() => {
                  setIsLoginTab(true);
                  window.location.href = "/connect";
                }}
                style={{
                  color: isLoginTab ? "var(--accent-gold)" : "var(--text-secondary)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  borderBottom: isLoginTab ? "2px solid var(--accent-gold)" : "none",
                  paddingBottom: "6px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
              >
                General Inquiries
              </button>
            </div>

            {/* Middle Section: Title & Form Inputs */}
            <div>
              <h2 style={{
                fontSize: "2rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "8px",
                letterSpacing: "-0.5px"
              }}>
                Welcome Aboard!
              </h2>
              <p style={{
                color: "var(--text-secondary)",
                fontSize: "0.95rem",
                fontWeight: 500,
                marginBottom: "35px"
              }}>
                Join the Leo Club of Juhu community network.
              </p>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                
                {/* Name field */}
                <div style={{
                  position: "relative",
                  border: "1px solid var(--border-color)",
                  background: "rgba(188, 155, 106, 0.05)",
                  borderRadius: "8px",
                  padding: "10px 14px",
                }}>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)", display: "block", textTransform: "uppercase", fontWeight: 600 }}>Full Name</span>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      color: "var(--text-primary)",
                      fontSize: "0.95rem",
                      outline: "none",
                      marginTop: "2px"
                    }}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  {/* Email Field */}
                  <div style={{
                    position: "relative",
                    border: "1px solid var(--border-color)",
                    background: "rgba(188, 155, 106, 0.05)",
                    borderRadius: "8px",
                    padding: "10px 14px",
                  }}>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)", display: "block", textTransform: "uppercase", fontWeight: 600 }}>Email Address</span>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={{
                        width: "100%",
                        background: "none",
                        border: "none",
                        color: "var(--text-primary)",
                        fontSize: "0.95rem",
                        outline: "none",
                        marginTop: "2px"
                      }}
                    />
                  </div>

                  {/* Phone Field */}
                  <div style={{
                    position: "relative",
                    border: "1px solid var(--border-color)",
                    background: "rgba(188, 155, 106, 0.05)",
                    borderRadius: "8px",
                    padding: "10px 14px",
                  }}>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)", display: "block", textTransform: "uppercase", fontWeight: 600 }}>Phone Number</span>
                    <input
                      type="tel"
                      required
                      placeholder="+91 99999 99999"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      style={{
                        width: "100%",
                        background: "none",
                        border: "none",
                        color: "var(--text-primary)",
                        fontSize: "0.95rem",
                        outline: "none",
                        marginTop: "2px"
                      }}
                    />
                  </div>
                </div>

                {/* Primary Interest Dropdown */}
                <div style={{
                  position: "relative",
                  border: "1px solid var(--border-color)",
                  background: "rgba(188, 155, 106, 0.05)",
                  borderRadius: "8px",
                  padding: "10px 14px",
                }}>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)", display: "block", textTransform: "uppercase", fontWeight: 600 }}>Primary Interest</span>
                  <select
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      color: "var(--text-primary)",
                      fontSize: "0.95rem",
                      outline: "none",
                      marginTop: "2px",
                      cursor: "pointer",
                      WebkitAppearance: "none"
                    }}
                  >
                    {interestsOptions.map(opt => (
                      <option key={opt} value={opt} style={{ background: "var(--bg-secondary)", color: "var(--text-primary)" }}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Message Field */}
                <div style={{
                  position: "relative",
                  border: "1px solid var(--border-color)",
                  background: "rgba(188, 155, 106, 0.05)",
                  borderRadius: "8px",
                  padding: "10px 14px",
                }}>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)", display: "block", textTransform: "uppercase", fontWeight: 600 }}>Message / About You</span>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell us a little bit about yourself..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      color: "var(--text-primary)",
                      fontSize: "0.95rem",
                      outline: "none",
                      marginTop: "2px",
                      resize: "none"
                    }}
                  />
                </div>

                {/* Terms and Consent Checkbox */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "4px" }}>
                  <input type="checkbox" required id="consent" style={{ accentColor: "var(--accent-gold)", cursor: "pointer" }} />
                  <label htmlFor="consent" style={{ fontSize: "0.8rem", color: "var(--text-secondary)", cursor: "pointer" }}>
                    I agree to the <Link href="/privacy-policy" style={{ color: "var(--accent-gold)", textDecoration: "underline" }}>Privacy Policy</Link> and data safety rules.
                  </label>
                </div>

                {/* Submit button */}
                <button type="submit" style={{
                  marginTop: "12px",
                  padding: "14px 28px",
                  background: "var(--accent-gold)", 
                  color: "var(--bg-primary)",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textAlign: "center",
                  boxShadow: "0 0 20px rgba(253, 181, 21, 0.2)",
                  letterSpacing: "0.2px"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "var(--accent-gold-hover)";
                  e.currentTarget.style.boxShadow = "0 0 25px rgba(253, 181, 21, 0.4)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "var(--accent-gold)";
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(253, 181, 21, 0.2)";
                }}
                >
                  Apply & Get Mail
                </button>

                {submitted && (
                  <p style={{
                    color: "var(--accent-gold)",
                    fontSize: "0.85rem",
                    marginTop: "12px",
                    textAlign: "center"
                  }}>
                    Opening your default email client to submit...
                  </p>
                )}
              </form>
            </div>

            {/* Bottom Footer Mimicking Social Logins */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid var(--border-color)",
              paddingTop: "24px",
              marginTop: "20px"
            }}>
              <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>Follow our updates:</span>
              <div style={{ display: "flex", gap: "16px" }}>
                <a href="https://www.instagram.com/leoclubofjuhu/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)", transition: "color 0.3s" }} onMouseOver={e=>e.currentTarget.style.color="var(--accent-gold)"} onMouseOut={e=>e.currentTarget.style.color="var(--text-secondary)"}>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </a>
                <a href="https://www.linkedin.com/company/leoclubofjuhu" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)", transition: "color 0.3s" }} onMouseOver={e=>e.currentTarget.style.color="var(--accent-gold)"} onMouseOut={e=>e.currentTarget.style.color="var(--text-secondary)"}>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Mountain Sunset Hero Graphic */}
          <div style={{
            position: "relative",
            width: "100%",
            height: "100%"
          }}>
            <Image
              src="/join_hero.jpg"
              alt="Majestic mountain peaks above a sea of clouds"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            {/* Soft gradient overlay matching theme */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, rgba(0, 50, 98, 0.1) 0%, rgba(0, 39, 76, 0.4) 100%)",
              mixBlendMode: "multiply"
            }} />
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
