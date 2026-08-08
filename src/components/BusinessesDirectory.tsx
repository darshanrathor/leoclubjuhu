"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { businesses } from "@/src/data/businesses";
import styles from "./BusinessesDirectory.module.css";
import Reveal from "./Reveal";

const categories = ["All", "IT & Tech", "Apparel", "Food & Beverage", "Consulting"];

export default function BusinessesDirectory() {
  const [businessesList, setBusinessesList] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Submit Form States
  const [founderName, setFounderName] = useState("");
  const [bizName, setBizName] = useState("");
  const [bizCat, setBizCat] = useState("IT & Tech");
  const [bizDesc, setBizDesc] = useState("");
  const [bizWeb, setBizWeb] = useState("");

  useEffect(() => {
    async function loadBusinesses() {
      try {
        const res = await fetch("/api/businesses");
        if (res.ok) {
          const json = await res.json();
          if (Array.isArray(json)) {
            setBusinessesList(json);
            return;
          }
        }
      } catch (err) {
        console.error("Failed to fetch dynamic ventures:", err);
      }
      setBusinessesList(businesses);
    }
    loadBusinesses();
  }, []);

  const filteredBusinesses = businessesList.filter((b) => {
    const matchesSearch = b.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          b.founderName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          b.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          b.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!founderName || !bizName || !bizDesc) return;
    setIsSubmitted(true);
    setTimeout(() => {
      // Reset form states
      setFounderName("");
      setBizName("");
      setBizDesc("");
      setBizWeb("");
      setIsSubmitted(false);
      setShowSubmitModal(false);
    }, 3000);
  };

  return (
    <div className={styles.directoryContainer}>
      
      {/* Network Impact Metrics */}
      <Reveal>
        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <span className={styles.statNum}>12+</span>
            <span className={styles.statLabel}>Active Startups</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>₹15Cr+</span>
            <span className={styles.statLabel}>Capital Advised</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>50+</span>
            <span className={styles.statLabel}>Jobs Created</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>100%</span>
            <span className={styles.statLabel}>Member Endorsed</span>
          </div>
        </div>
      </Reveal>

      {/* Search Bar */}
      <Reveal>
        <div className={styles.filterBar}>
          <input
            type="text"
            placeholder="Search founders, business names, industry, keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
            style={{ width: "100%", maxWidth: "100%" }}
          />
        </div>
      </Reveal>

      {/* Founders Grid */}
      <div className={styles.grid}>
        {filteredBusinesses.length > 0 ? (
          filteredBusinesses.map((b, i) => (
            <Reveal key={b.id} delay={i}>
              <div className={styles.card}>
                {/* Founder Photo Header instead of simple banner */}
                <div className={styles.imageWrapper}>
                  <Image
                    src={b.founderPhoto}
                    alt={`${b.founderName} portrait`}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className={styles.image}
                  />
                  <div className={styles.gradientOverlay} />
                  <span className={styles.logoBadge}>{b.logo}</span>
                </div>
                
                <div className={styles.cardContent}>
                  <div>
                    <h3 className={styles.businessName}>{b.name}</h3>
                    <p className={styles.ownerName}>{b.owner}</p>
                    <p className={styles.description}>{b.description}</p>
                  </div>

                  {/* Actions Row */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "10px" }}>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <a
                        href={b.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-dark"
                        style={{ flexGrow: 1, textAlign: "center", fontSize: "0.8rem", padding: "8px 12px" }}
                      >
                        Website ↗
                      </a>
                      <a
                        href={b.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-dark"
                        style={{ flexGrow: 1, textAlign: "center", fontSize: "0.8rem", padding: "8px 12px" }}
                      >
                        Instagram
                      </a>
                    </div>
                    
                    <Link
                      href={`/businesses/${b.id}`}
                      className="btn-primary"
                      style={{ textAlign: "center", fontSize: "0.8rem", padding: "8px 12px", background: "var(--accent-gold)", borderColor: "var(--accent-gold)", color: "#000" }}
                    >
                      Founder Spotlight →
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))
        ) : (
          <div className={styles.emptyState}>
            <p>No founders found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Submit Your Business Section */}
      <Reveal>
        <div className={styles.submitSection}>
          <div className={styles.submitContent}>
            <h3 className={styles.submitTitle}>Are you a Leo Founder?</h3>
            <p className={styles.submitText}>
              Showcase your startup, scale your services, and receive full endorsement from the Leo Club of Juhu community. Submit your business registry details today.
            </p>
          </div>
          <button onClick={() => setShowSubmitModal(true)} className="btn-primary" style={{ background: "#fff", color: "#000", border: "1px solid #fff" }}>
            Submit Your Business
          </button>
        </div>
      </Reveal>

      {/* Interactive Modal Form */}
      {showSubmitModal && (
        <div className={styles.modalOverlay} onClick={() => setShowSubmitModal(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setShowSubmitModal(false)}>×</button>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className={styles.form}>
                <h3 className={styles.formTitle}>Submit Your Venture</h3>
                <p className={styles.formSubtitle}>Join the exclusive startup network. Let the club boost your reach.</p>
                
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Founder Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Leo Amit Patel"
                    value={founderName}
                    onChange={(e) => setFounderName(e.target.value)}
                    className={styles.input} 
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Business / Startup Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Juhu Tech Solutions"
                    value={bizName}
                    onChange={(e) => setBizName(e.target.value)}
                    className={styles.input} 
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Industry Category</label>
                  <select 
                    value={bizCat}
                    onChange={(e) => setBizCat(e.target.value)}
                    className={styles.select}
                  >
                    {categories.filter(c => c !== "All").map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Elevator Pitch / Description</label>
                  <textarea 
                    rows={3} 
                    required 
                    placeholder="Short description of your services, product, and mission..."
                    value={bizDesc}
                    onChange={(e) => setBizDesc(e.target.value)}
                    className={styles.textarea} 
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Website URL (Optional)</label>
                  <input 
                    type="url" 
                    placeholder="https://example.com"
                    value={bizWeb}
                    onChange={(e) => setBizWeb(e.target.value)}
                    className={styles.input} 
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ marginTop: "10px", width: "100%", background: "var(--accent-gold)", borderColor: "var(--accent-gold)", color: "#000" }}>
                  Submit Registry Application
                </button>
              </form>
            ) : (
              <div className={styles.successState}>
                <span className={styles.successIcon}>✓</span>
                <h3 className={styles.successTitle}>Registry Application Received!</h3>
                <p className={styles.successText}>
                  Thank you, <strong>{founderName}</strong>. Your venture <strong>{bizName}</strong> has been logged for review by the Leo Club Juhu Board.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
