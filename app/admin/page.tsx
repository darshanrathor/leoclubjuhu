"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./admin.module.css";

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

export default function AdminPortal() {
  const [passcode, setPasscode] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState("");

  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const [projects, setProjects] = useState<ProjectsData>({ upcoming: [], past: [] });
  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  
  const [syncStatus, setSyncStatus] = useState<"saved" | "unsaved" | "saving" | "error">("saved");
  const [syncError, setSyncError] = useState("");
  const [uploading, setUploading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check authentication on mount
  useEffect(() => {
    const savedAuth = localStorage.getItem("leo_admin_auth");
    if (savedAuth === "true") {
      setIsAuthenticated(true);
      fetchProjects();
      fetchImages();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === "leojuhu" || passcode === "1234") {
      setIsAuthenticated(true);
      setLoginError("");
      localStorage.setItem("leo_admin_auth", "true");
      fetchProjects();
      fetchImages();
    } else {
      setLoginError("Invalid passcode. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("leo_admin_auth");
  };

  async function fetchProjects() {
    try {
      const res = await fetch("/api/projects");
      if (res.ok) {
        const json = await res.json();
        if (json.upcoming && json.past) {
          setProjects(json);
        }
      }
    } catch (err) {
      console.error("Failed to load projects:", err);
    }
  }

  async function fetchImages() {
    try {
      const res = await fetch("/api/images");
      if (res.ok) {
        const json = await res.json();
        if (json.images) {
          setGalleryImages(json.images);
        }
      }
    } catch (err) {
      console.error("Failed to load images:", err);
    }
  }

  // Handle file uploads
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    setUploading(true);
    setSyncError("");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("passcode", passcode || "leojuhu"); // Use entered passcode or default

    try {
      const res = await fetch("/api/images", {
        method: "POST",
        body: formData,
      });

      const json = await res.json();
      if (res.ok && json.success) {
        // Add image to selector lists
        setGalleryImages((prev) => [json.url, ...prev]);
        // Update editing project image
        if (editingProject) {
          setEditingProject((prev) => prev ? { ...prev, image: json.url } : null);
        }
      } else {
        setSyncError(json.error || "Failed to upload image.");
      }
    } catch (err) {
      setSyncError("Network error uploading image.");
    } finally {
      setUploading(false);
    }
  };

  // Select project to edit
  const startEdit = (project: ProjectItem) => {
    setEditingProject({ ...project });
  };

  // Add a new project
  const startNewProject = () => {
    const newProject: ProjectItem = {
      id: `new_${Date.now()}`,
      title: "",
      desc: "",
      image: galleryImages[0] || "/gallery/leoclubofjuhu_cover.jpg",
      date: "",
      category: activeTab === "upcoming" ? "Service Project" : "Fellowship",
    };
    setEditingProject(newProject);
  };

  // Save current project changes to local state list
  const saveProjectToList = () => {
    if (!editingProject) return;
    if (!editingProject.title.trim()) {
      alert("Please enter a title.");
      return;
    }

    const currentTabProjects = [...projects[activeTab]];
    const index = currentTabProjects.findIndex((p) => p.id === editingProject.id);

    if (index >= 0) {
      currentTabProjects[index] = editingProject;
    } else {
      currentTabProjects.push(editingProject);
    }

    setProjects((prev) => ({
      ...prev,
      [activeTab]: currentTabProjects,
    }));
    setEditingProject(null);
    setSyncStatus("unsaved");
  };

  // Delete project from list
  const deleteProject = (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    
    const currentTabProjects = projects[activeTab].filter((p) => p.id !== id);
    setProjects((prev) => ({
      ...prev,
      [activeTab]: currentTabProjects,
    }));
    
    if (editingProject?.id === id) {
      setEditingProject(null);
    }
    
    setSyncStatus("unsaved");
  };

  // Save/Publish entire local projects lists back to dynamic projects.json
  const publishChanges = async () => {
    setSyncStatus("saving");
    setSyncError("");

    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          passcode: passcode || "leojuhu",
          data: projects,
        }),
      });

      const json = await res.json();
      if (res.ok && json.success) {
        setSyncStatus("saved");
      } else {
        setSyncStatus("error");
        setSyncError(json.error || "Failed to publish changes.");
      }
    } catch (err) {
      setSyncStatus("error");
      setSyncError("Network error connecting to API.");
    }
  };

  if (!isAuthenticated) {
    return (
      <main className={styles.adminContainer}>
        <div className={styles.loginCard}>
          <div className={styles.loginLogoCircle}>
            <Image src="/logo.png" alt="Leo Logo" fill className="object-cover" />
          </div>
          <h1 className={styles.loginTitle}>Admin Portal</h1>
          <p className={styles.loginSubtitle}>Enter PIN to manage Initiatives & Projects</p>
          
          <form onSubmit={handleLogin}>
            <div className={styles.inputGroup}>
              <label htmlFor="pin">Passcode PIN</label>
              <input
                id="pin"
                type="password"
                required
                className={styles.passcodeInput}
                placeholder="••••"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
              />
            </div>
            {loginError && <p className={styles.errorMsg}>{loginError}</p>}
            
            <button type="submit" className="btn-primary" style={{ width: "100%", padding: "14px" }}>
              Access Dashboard
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.adminContainer}>
      <div className={styles.dashboard}>
        
        {/* Top Header */}
        <header className={styles.header}>
          <div className={styles.headerTitle}>
            <div className={styles.dashLogoCircle}>
              <Image src="/logo.png" alt="Leo Logo" fill className="object-cover" />
            </div>
            <h1 className={styles.dashTitle}>Leo Club Juhu <span>Admin</span></h1>
          </div>
          <div className={styles.headerActions}>
            <button className={styles.btnLogout} onClick={handleLogout}>
              Logout
            </button>
          </div>
        </header>

        {/* Sync Status / Save changes bar */}
        <div className={styles.syncBox} style={{ marginBottom: "30px" }}>
          <div className={styles.syncInfo}>
            <h3 className={styles.syncTitle}>Database Status</h3>
            <p className={styles.syncDesc}>
              {syncStatus === "saved" && "All changes are live on the website."}
              {syncStatus === "unsaved" && "You have unpublished local edits."}
              {syncStatus === "saving" && "Publishing changes to data file..."}
              {syncStatus === "error" && `Error: ${syncError}`}
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span className={`${styles.syncStatus} ${syncStatus === "saved" ? styles.syncStatusSuccess : syncStatus === "error" ? styles.syncStatusError : ""}`}>
              {syncStatus === "saved" && "● Live & Synced"}
              {syncStatus === "unsaved" && "● Unpublished Edits"}
              {syncStatus === "saving" && "● Syncing..."}
              {syncStatus === "error" && "● Sync Error"}
            </span>
            <button 
              className="btn-primary" 
              onClick={publishChanges}
              disabled={syncStatus === "saving" || syncStatus === "saved"}
              style={{ opacity: (syncStatus === "saving" || syncStatus === "saved") ? 0.6 : 1 }}
            >
              Publish Changes
            </button>
          </div>
        </div>

        {/* Main Workspace Layout */}
        <div className={styles.mainLayout}>
          
          {/* Left panel: Tab selection and Projects Listing */}
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <h2 className={styles.panelTitle}>Club Projects</h2>
              <button className="btn-green" style={{ padding: "8px 18px", fontSize: "0.85rem" }} onClick={startNewProject}>
                + Add Project
              </button>
            </div>

            {/* Tab switchers */}
            <div className={styles.tabBar}>
              <button 
                className={`${styles.tabButton} ${activeTab === "upcoming" ? styles.tabButtonActive : ""}`}
                onClick={() => { setActiveTab("upcoming"); setEditingProject(null); }}
              >
                Upcoming
              </button>
              <button 
                className={`${styles.tabButton} ${activeTab === "past" ? styles.tabButtonActive : ""}`}
                onClick={() => { setActiveTab("past"); setEditingProject(null); }}
              >
                Past Projects
              </button>
            </div>

            {/* Project rows */}
            <div className={styles.projectList}>
              {projects[activeTab].length > 0 ? (
                projects[activeTab].map((p) => (
                  <div 
                    key={p.id} 
                    className={`${styles.projectItem} ${editingProject?.id === p.id ? styles.projectItemActive : ""}`}
                  >
                    <div className={styles.itemInfo}>
                      <div className={styles.itemThumb}>
                        <Image src={p.image || "/logo.png"} alt={p.title} fill className="object-cover" />
                      </div>
                      <div className={styles.itemText}>
                        <h4 className={styles.itemTitle}>{p.title || "Untitled Project"}</h4>
                        <div className={styles.itemMeta}>
                          <span>{p.category}</span>
                          <span>•</span>
                          <span>{p.date || "No date set"}</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.itemActions}>
                      <button 
                        className={`${styles.btnIcon} ${styles.btnEdit}`} 
                        onClick={() => startEdit(p)}
                        title="Edit Project"
                      >
                        ✏️
                      </button>
                      <button 
                        className={`${styles.btnIcon} ${styles.btnDelete}`} 
                        onClick={() => deleteProject(p.id)}
                        title="Delete Project"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p style={{ textAlign: "center", padding: "40px", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                  No projects in this tab yet. Click &quot;+ Add Project&quot; to create one.
                </p>
              )}
            </div>
          </div>

          {/* Right Panel: Project Editor */}
          <div className={styles.editorForm}>
            {editingProject ? (
              <>
                <div className={styles.editorCard}>
                  <h2 className={styles.panelTitle} style={{ marginBottom: "24px" }}>
                    {editingProject.id.startsWith("new_") ? "Create Project" : "Edit Project Details"}
                  </h2>
                  
                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label htmlFor="p-title">Project Title</label>
                      <input 
                        id="p-title"
                        type="text" 
                        className={styles.formInput} 
                        placeholder="e.g. Project Rakt"
                        value={editingProject.title}
                        onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="p-category">Category Badge</label>
                      <input 
                        id="p-category"
                        type="text" 
                        className={styles.formInput} 
                        placeholder="e.g. Service Project"
                        value={editingProject.category}
                        onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label htmlFor="p-date">Timeline Date</label>
                      <input 
                        id="p-date"
                        type="text" 
                        className={styles.formInput} 
                        placeholder="e.g. July 2026"
                        value={editingProject.date}
                        onChange={(e) => setEditingProject({ ...editingProject, date: e.target.value })}
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="p-image-url">Image URL Path</label>
                      <input 
                        id="p-image-url"
                        type="text" 
                        className={styles.formInput} 
                        placeholder="/gallery/rakt.jpeg"
                        value={editingProject.image}
                        onChange={(e) => setEditingProject({ ...editingProject, image: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="p-desc">Description</label>
                    <textarea 
                      id="p-desc"
                      className={styles.formTextarea} 
                      placeholder="Describe the service details, events or fellowship highlights..."
                      value={editingProject.desc}
                      onChange={(e) => setEditingProject({ ...editingProject, desc: e.target.value })}
                    />
                  </div>

                  {/* Image Uploader & Thumbnail Selector */}
                  <div className={styles.formGroup}>
                    <label>Upload New Project Image</label>
                    <div className={styles.imageUploadArea} onClick={() => fileInputRef.current?.click()}>
                      <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleImageUpload} 
                        style={{ display: "none" }} 
                        accept="image/*"
                      />
                      <div className={styles.uploadTrigger}>
                        <span className={styles.uploadIcon}>📁</span>
                        <span className={styles.uploadText}>
                          {uploading ? "Uploading file..." : <>Drag file here or <span>browse</span></>}
                        </span>
                      </div>
                    </div>
                    
                    {/* Existing Gallery thumbnails selection grid */}
                    <div className={styles.gallerySelector}>
                      <span className={styles.galleryLabel}>Select Existing Project Image:</span>
                      <div className={styles.galleryGrid}>
                        {galleryImages.map((imgUrl) => (
                          <div 
                            key={imgUrl} 
                            onClick={() => setEditingProject({ ...editingProject, image: imgUrl })}
                            className={`${styles.galleryItem} ${editingProject.image === imgUrl ? styles.galleryItemActive : ""}`}
                          >
                            <Image src={imgUrl} alt="Gallery thumb" fill className="object-cover" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={styles.formControls}>
                    <button className={styles.btnCancel} onClick={() => setEditingProject(null)}>
                      Cancel
                    </button>
                    <button className="btn-green" onClick={saveProjectToList}>
                      Save to List
                    </button>
                  </div>
                </div>

                {/* Live card preview */}
                <div>
                  <span className={styles.previewLabel}>Live Card Preview</span>
                  <div className={styles.previewContainer}>
                    {/* Replicated Card styling from Initiatives section */}
                    <div style={{
                      backgroundColor: "rgba(19, 27, 46, 0.6)",
                      borderRadius: "24px",
                      overflow: "hidden",
                      border: "1px solid rgba(243, 176, 7, 0.15)",
                      boxShadow: "var(--shadow-large)",
                      width: "360px",
                      display: "flex",
                      flexDirection: "column",
                      backdropFilter: "blur(10px)"
                    }}>
                      <div style={{ position: "relative", height: "230px", width: "100%" }}>
                        <img 
                          src={editingProject.image || "/gallery/leoclubofjuhu_cover.jpg"} 
                          alt="preview card" 
                          style={{ objectFit: "cover", width: "100%", height: "100%" }} 
                        />
                        <div style={{
                          position: "absolute",
                          top: "16px",
                          left: "16px",
                          right: "16px",
                          display: "flex",
                          justifyContent: "space-between"
                        }}>
                          <span style={{
                            background: "rgba(13, 21, 39, 0.8)",
                            color: "var(--accent-brand)",
                            border: "1px solid rgba(243, 176, 7, 0.2)",
                            padding: "6px 12px",
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            borderRadius: "50px",
                            textTransform: "uppercase"
                          }}>
                            {editingProject.category || "Service"}
                          </span>
                          <span style={{
                            background: "rgba(10, 15, 29, 0.85)",
                            color: "#ffffff",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            padding: "6px 12px",
                            fontSize: "0.7rem",
                            fontWeight: 600,
                            borderRadius: "50px"
                          }}>
                            {editingProject.date || "Timeline"}
                          </span>
                        </div>
                      </div>
                      <div style={{ padding: "24px" }}>
                        <h3 style={{
                          fontFamily: "var(--font-playfair), serif",
                          fontSize: "1.35rem",
                          fontWeight: 800,
                          marginBottom: "10px",
                          color: "var(--text-primary)"
                        }}>
                          {editingProject.title || "Project Title"}
                        </h3>
                        <p style={{
                          fontSize: "0.85rem",
                          color: "var(--text-secondary)",
                          lineHeight: 1.6,
                          marginBottom: "20px"
                        }}>
                          {editingProject.desc || "Write a description to preview it here..."}
                        </p>
                        <button className="btn-dark" style={{
                          width: "100%",
                          padding: "10px",
                          pointerEvents: "none",
                          background: "var(--accent-brand)",
                          color: "#000",
                          borderColor: "var(--accent-brand)"
                        }}>
                          {activeTab === "upcoming" ? "Get Involved" : "Read Story"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className={styles.editorCard} style={{ textAlign: "center", padding: "60px 40px", color: "var(--text-secondary)" }}>
                <span>💡</span>
                <p style={{ marginTop: "12px", fontSize: "0.95rem" }}>
                  Select a project from the left panel to edit its details, or click &quot;+ Add Project&quot; to create a new one.
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </main>
  );
}
