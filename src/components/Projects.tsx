"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/src/data/projects";
import styles from "./Projects.module.css";
import Reveal from "./Reveal";

const categories = ["All", "Service Project", "Fun & Fellowship", "Celebration"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    async function loadProjects() {
      try {
        const res = await fetch("/api/projects");
        if (res.ok) {
          const json = await res.json();
          if (json.upcoming && json.past) {
            setProjects([...json.upcoming, ...json.past]);
            return;
          }
        }
      } catch (err) {
        console.error("Failed to fetch dynamic projects:", err);
      }
      setProjects(projectsData);
    }
    loadProjects();
  }, []);

  const filteredProjects = projects.filter((project) => {
    return selectedCategory === "All" || project.category === selectedCategory;
  });

  // Assign bento layout grid styles based on index
  const getBentoClass = (index: number) => {
    const patterns = [
      styles.cardLarge,    // 0: Spans 2 cols, 2 rows
      styles.cardStandard, // 1: Spans 1 col, 1 row
      styles.cardStandard, // 2: Spans 1 col, 1 row
      styles.cardWide,     // 3: Spans 2 cols, 1 row
      styles.cardStandard, // 4: Spans 1 col, 1 row
    ];
    return patterns[index % patterns.length];
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.header}>
            <span className={styles.subTitle}>Our Actions</span>
            <h2 className={styles.title}>Explore Our Impact</h2>
            <p className={styles.tagline}>
              Motivating youth, driving service projects, celebrating culture, and organizing fun fellowship events across Juhu.
            </p>
          </div>
        </Reveal>

        {/* Filter Chips */}
        <Reveal>
          <div className={styles.filterContainer}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`${styles.filterChip} ${selectedCategory === cat ? styles.filterChipActive : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Projects Masonry Bento Grid */}
        <div className={styles.grid}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => {
              const bentoClass = getBentoClass(index);
              const isLarge = bentoClass === styles.cardLarge;
              
              return (
                <Reveal key={project.id}>
                  <Link 
                    href={`/initiatives/${project.id}`}
                    className={`${styles.card} ${bentoClass}`}
                  >
                    <div className={styles.imageWrapper}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes={
                          isLarge 
                            ? "(max-width: 768px) 100vw, 800px" 
                            : "(max-width: 768px) 100vw, 400px"
                        }
                        className={styles.image}
                      />
                      <div className={styles.imageOverlay} />
                      <div className={styles.cardTagRow}>
                        <span className={styles.categoryTag}>{project.category}</span>
                        <span className={styles.dateTag}>{project.date}</span>
                      </div>
                    </div>
                    
                    <div className={styles.cardContent}>
                      <div>
                        <h3 className={styles.projectTitle}>{project.title}</h3>
                        <p className={styles.projectDesc}>{project.desc}</p>
                      </div>
                      
                      <div className={styles.cardActions}>
                        <span className={styles.detailsBtn}>
                          View Full Case Study <span className={styles.arrow}>→</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })
          ) : (
            <div className={styles.emptyState}>
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
