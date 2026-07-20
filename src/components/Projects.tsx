"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Projects.module.css";
import Reveal from "./Reveal";

interface ProjectItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  date: string;
  category: string;
}

interface ProjectsData {
  upcoming: ProjectItem[];
  past: ProjectItem[];
}

const fallbackProjects: ProjectsData = {
  upcoming: [
    {
      id: "u1",
      title: "Project Rakt 🩸",
      desc: "Join our mega blood donation drive and health camp across Vile Parle and Juhu. Every drop saves a life! We aim to collect over 200 bags of blood and spread awareness on platelet donations.",
      image: "/gallery/rakt.jpeg",
      date: "July 2026",
      category: "Service Project"
    },
    {
      id: "u2",
      title: "Leo League 💙⚽️🏏",
      desc: "The ultimate sports carnival is back! Gear up for intense matches of football, box cricket, and table tennis. Register your teams now and get ready for a weekend of high energy and rivalry.",
      image: "/gallery/Leo-league.jpg",
      date: "August 2026",
      category: "Fun & Fellowship"
    }
  ],
  past: [
    {
      id: "p1",
      title: "Mauj with Maurya 🌸",
      desc: "Our annual grand Ganesh Festival celebration. A beautiful blend of devotional aarti, high-energy dhol-tasha beats, and distributed sweets to everyone in the neighborhood.",
      image: "/gallery/maurya.jpg",
      date: "September 2025",
      category: "Celebration"
    },
    {
      id: "p2",
      title: "Meals Across Miles 🍲",
      desc: "A food distribution drive serving fresh, nutritious hot meals to over 500 homeless and underprivileged individuals in suburban Mumbai.",
      image: "/gallery/Meals Across Miles.jpg",
      date: "December 2025",
      category: "Service Project"
    },
    {
      id: "p3",
      title: "LCJ Holi Bash 🌈",
      desc: "The most happening community Holi festival. Organised with organic colors, live music, water games, and local festive treats for club members and friends.",
      image: "/gallery/holi.jpg",
      date: "March 2026",
      category: "Fun & Fellowship"
    }
  ]
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const [data, setData] = useState<ProjectsData>(fallbackProjects);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects");
        if (res.ok) {
          const json = await res.json();
          if (json.upcoming && json.past) {
            setData(json);
          }
        }
      } catch (err) {
        console.error("Failed to load projects api:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  const activeProjects = data[activeTab] || [];

  // Helper to assign a dynamic bento layout class based on card index
  const getBentoClass = (index: number) => {
    const patterns = [
      styles.cardLarge,    // 0: Large (Featured) - spans 2 cols, 2 rows
      styles.cardStandard, // 1: Standard - spans 1 col, 1 row
      styles.cardStandard, // 2: Standard - spans 1 col, 1 row
      styles.cardWide,     // 3: Wide - spans 2 cols, 1 row
      styles.cardStandard, // 4: Standard - spans 1 col, 1 row
      styles.cardFull      // 5: Full Width - spans 3 cols, 1 row
    ];
    return patterns[index % patterns.length];
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.header}>
            <span className={styles.subTitle}>Our Initiatives</span>
            <h2 className={styles.title}>Explore Our Impact</h2>
            <p className={styles.tagline}>
              Motivating youth, driving service projects, celebrating culture, and organizing fun fellowship events.
            </p>
          </div>
        </Reveal>

        {/* Dynamic Tab Switchers */}
        <Reveal>
          <div className={styles.tabContainer}>
            <div className={styles.tabWrapper}>
              <button 
                className={`${styles.tabBtn} ${activeTab === "upcoming" ? styles.tabBtnActive : ""}`}
                onClick={() => setActiveTab("upcoming")}
              >
                Upcoming Projects
                {data.upcoming.length > 0 && (
                  <span className={styles.badgeCount}>{data.upcoming.length}</span>
                )}
              </button>
              <button 
                className={`${styles.tabBtn} ${activeTab === "past" ? styles.tabBtnActive : ""}`}
                onClick={() => setActiveTab("past")}
              >
                Past Projects
                {data.past.length > 0 && (
                  <span className={styles.badgeCount}>{data.past.length}</span>
                )}
              </button>
              {/* Animated morphing background pill */}
              <div 
                className={`${styles.activePill} ${activeTab === "past" ? styles.activePillPast : ""}`} 
              />
            </div>
          </div>
        </Reveal>

        {/* Projects Bento Grid */}
        <div className={styles.grid}>
          {activeProjects.length > 0 ? (
            activeProjects.map((project, index) => {
              const bentoClass = getBentoClass(index);
              const isLarge = bentoClass === styles.cardLarge;
              
              return (
                <Reveal key={project.id}>
                  <div 
                    className={`${styles.card} ${bentoClass}`}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className={styles.imageWrapper}>
                      <Image
                        src={project.image || "/gallery/leoclubofjuhu_cover.jpg"}
                        alt={project.title}
                        fill
                        sizes={
                          isLarge 
                            ? "(max-width: 768px) 100vw, 800px" 
                            : "(max-width: 768px) 100vw, 400px"
                        }
                        className={styles.image}
                      />
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
                        <button className="btn-dark">
                          {activeTab === "upcoming" ? "Get Involved" : "Read Story"}
                        </button>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })
          ) : (
            <div className={styles.emptyState}>
              <p>No projects found in this section.</p>
            </div>
          )}
        </div>
      </div>

      {/* Details Popup Modal / Drawer */}
      {selectedProject && (
        <div 
          className={styles.modalOverlay} 
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className={styles.modalContent} 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className={styles.modalClose} 
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className={styles.modalImageWrapper}>
              <Image 
                src={selectedProject.image || "/gallery/leoclubofjuhu_cover.jpg"} 
                alt={selectedProject.title} 
                fill 
                className={styles.modalImage} 
              />
              <div className={styles.modalTagRow}>
                <span className={styles.modalCategory}>{selectedProject.category}</span>
                <span className={styles.modalDate}>{selectedProject.date}</span>
              </div>
            </div>
            
            <div className={styles.modalBody}>
              <h3 className={styles.modalTitle}>{selectedProject.title}</h3>
              <p className={styles.modalDesc}>{selectedProject.desc}</p>
              
              <div className={styles.modalActions}>
                <a 
                  href="#contact" 
                  onClick={() => setSelectedProject(null)} 
                  className="btn-primary"
                >
                  {activeTab === "upcoming" ? "Sign Up & Get Involved" : "Join Our Next Project"}
                </a>
                <button 
                  onClick={() => setSelectedProject(null)} 
                  className="btn-dark"
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
