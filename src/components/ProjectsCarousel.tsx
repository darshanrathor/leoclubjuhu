"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/src/data/projects";
import styles from "./ProjectsCarousel.module.css";
import Reveal from "./Reveal";

export default function ProjectsCarousel() {
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

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.header}>
            <span className={styles.badge}>Highlights</span>
            <h2 className={styles.title}>Featured Projects</h2>
            <p className={styles.subtitle}>
              Take a closer look at some of our flagship community initiatives and fellowship events making noise across Mumbai.
            </p>
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className={styles.grid}>
          {projects.length > 0 ? (
            projects.map((project) => (
              <Reveal key={project.id}>
                <div className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className={styles.projectImage}
                    />
                    <div className={styles.imageOverlay} />
                    <div className={styles.tagRow}>
                      <span className={styles.categoryTag}>{project.category}</span>
                      <span className={styles.dateTag}>{project.date}</span>
                    </div>
                  </div>

                  <div className={styles.cardContent}>
                    <div>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      <p className={styles.projectDesc}>{project.desc}</p>
                    </div>

                    <div>
                      {project.beneficiaries && project.volunteers && (
                        <div className={styles.metricsGrid}>
                          <div className={styles.metricItem}>
                            <span className={styles.metricLabel}>Beneficiaries</span>
                            <span className={styles.metricValue}>{project.beneficiaries}</span>
                          </div>
                          <div className={styles.metricItem}>
                            <span className={styles.metricLabel}>Volunteers</span>
                            <span className={styles.metricValue}>{project.volunteers}</span>
                          </div>
                        </div>
                      )}

                      <div className={styles.actions}>
                        <Link href={`/initiatives/${project.id}`} className="btn-primary" style={{ width: "100%", textAlign: "center" }}>
                          Read Story & Impact <span className={styles.arrow}>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))
          ) : (
            <div className={styles.emptyState}>
              <p>No projects found.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
