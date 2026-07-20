"use client";
import { useState } from "react";
import Image from "next/image";
import { businesses } from "@/src/data/businesses";
import styles from "./BusinessesDirectory.module.css";
import Reveal from "./Reveal";

const categories = ["All", "IT & Tech", "Apparel", "Food & Beverage", "Consulting", "Healthcare", "Creative & Media", "Sports & Fitness"];

export default function BusinessesDirectory() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBusinesses = businesses.filter((b) => {
    const matchesCategory = selectedCategory === "All" || b.category === selectedCategory;
    const matchesSearch = b.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          b.owner.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          b.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.directoryContainer}>
      <div className={styles.filterBar}>
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by business name, owner, or keyword..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />

        {/* Category Pills */}
        <div className={styles.pillsContainer}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`${styles.pillBtn} ${selectedCategory === cat ? styles.pillBtnActive : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {filteredBusinesses.length > 0 ? (
          filteredBusinesses.map((b) => (
            <Reveal key={b.id}>
              <a
                href={b.website}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={b.image}
                    alt={`${b.name} logo banner`}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className={styles.image}
                  />
                  <span className={styles.badge}>{b.category}</span>
                </div>
                
                <div className={styles.cardContent}>
                  <div>
                    <h3 className={styles.businessName}>{b.name}</h3>
                    <p className={styles.ownerName}>{b.owner}</p>
                    <p className={styles.description}>{b.description}</p>
                  </div>
                  
                  <div className={styles.actionRow}>
                    <span className={styles.btnLink}>
                      Visit Website <span className={styles.arrowIcon}>↗</span>
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))
        ) : (
          <div className={styles.emptyState}>
            <p>No community businesses found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
