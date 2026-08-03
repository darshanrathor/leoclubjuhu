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
  beneficiaries?: string;
  volunteers?: string;
}

interface ProjectsData {
  upcoming: ProjectItem[];
  past: ProjectItem[];
}

interface VentureItem {
  id: string;
  name: string;
  owner: string;
  founderName: string;
  category: string;
  description: string;
  image: string;
  founderPhoto: string;
  logo: string;
  website: string;
  instagram: string;
  linkedin: string;
  story: string;
  companyDescription: string;
  achievements: string[];
  quote: string;
  foundedYear: string;
  teamSize: string;
}

export default function AdminPortal() {
  const [passcode, setPasscode] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState("");

  // Manage section
  const [adminSection, setAdminSection] = useState<"projects" | "ventures">("projects");
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  // State data
  const [projects, setProjects] = useState<ProjectsData>({ upcoming: [], past: [] });
  const [ventures, setVentures] = useState<VentureItem[]>([]);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  // Editing state
  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);
  const [editingVenture, setEditingVenture] = useState<VentureItem | null>(null);
  
  const [syncStatus, setSyncStatus] = useState<"saved" | "unsaved" | "saving" | "error">("saved");
  const [syncError, setSyncError] = useState("");
  const [uploading, setUploading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const draggedIndexRef = useRef<number | null>(null);

  // Check authentication on mount
  useEffect(() => {
    const savedAuth = localStorage.getItem("leo_admin_auth");
    if (savedAuth === "true") {
      setIsAuthenticated(true);
      fetchProjects();
      fetchVentures();
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
      fetchVentures();
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

  async function fetchVentures() {
    try {
      const res = await fetch("/api/businesses");
      if (res.ok) {
        const json = await res.json();
        if (Array.isArray(json)) {
          setVentures(json);
        }
      }
    } catch (err) {
      console.error("Failed to load ventures:", err);
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
    formData.append("passcode", passcode || "leojuhu");

    try {
      const res = await fetch("/api/images", {
        method: "POST",
        body: formData,
      });

      const json = await res.json();
      if (res.ok && json.success) {
        setGalleryImages((prev) => [json.url, ...prev]);
        if (editingProject) {
          setEditingProject((prev) => prev ? { ...prev, image: json.url } : null);
        }
        if (editingVenture) {
          setEditingVenture((prev) => prev ? { ...prev, image: json.url } : null);
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

  // Drag and Drop reordering logic
  const handleDragStart = (index: number) => {
    draggedIndexRef.current = index;
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (index: number, type: "projects" | "ventures") => {
    const dragIndex = draggedIndexRef.current;
    if (dragIndex === null || dragIndex === index) return;

    if (type === "projects") {
      const currentList = [...projects[activeTab]];
      const draggedItem = currentList[dragIndex];
      currentList.splice(dragIndex, 1);
      currentList.splice(index, 0, draggedItem);
      setProjects((prev) => ({
        ...prev,
        [activeTab]: currentList,
      }));
      setSyncStatus("unsaved");
    } else {
      const currentList = [...ventures];
      const draggedItem = currentList[dragIndex];
      currentList.splice(dragIndex, 1);
      currentList.splice(index, 0, draggedItem);
      setVentures(currentList);
      setSyncStatus("unsaved");
    }
    draggedIndexRef.current = null;
  };

  // Select project to edit
  const startEdit = (project: ProjectItem) => {
    setEditingProject({ ...project });
    setEditingVenture(null);
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
      beneficiaries: "",
      volunteers: "",
    };
    setEditingProject(newProject);
    setEditingVenture(null);
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

  // Venture functions
  const startNewVenture = () => {
    const newVenture: VentureItem = {
      id: `biz_${Date.now()}`,
      name: "",
      owner: "",
      founderName: "",
      category: "IT & Tech",
      description: "",
      image: "/businesses/tech.jpg",
      founderPhoto: "/team/hitansh.jpeg",
      logo: "💼",
      website: "",
      instagram: "",
      linkedin: "",
      story: "",
      companyDescription: "",
      achievements: ["", "", ""],
      quote: "",
      foundedYear: new Date().getFullYear().toString(),
      teamSize: "1 Employee",
    };
    setEditingVenture(newVenture);
    setEditingProject(null);
  };

  const saveVentureToList = () => {
    if (!editingVenture) return;
    if (!editingVenture.name.trim()) {
      alert("Please enter a business name.");
      return;
    }

    const currentVentures = [...ventures];
    const index = currentVentures.findIndex((v) => v.id === editingVenture.id);

    if (index >= 0) {
      currentVentures[index] = editingVenture;
    } else {
      currentVentures.push(editingVenture);
    }

    setVentures(currentVentures);
    setEditingVenture(null);
    setSyncStatus("unsaved");
  };

  const deleteVenture = (id: string) => {
    if (!confirm("Are you sure you want to delete this venture?")) return;
    setVentures((prev) => prev.filter((v) => v.id !== id));
    if (editingVenture?.id === id) {
      setEditingVenture(null);
    }
    setSyncStatus("unsaved");
  };

  // Save/Publish entire local database states back to projects.json and businesses.json
  const publishChanges = async () => {
    setSyncStatus("saving");
    setSyncError("");

    try {
      const resProjects = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passcode: passcode || "leojuhu", data: projects }),
      });

      const resVentures = await fetch("/api/businesses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passcode: passcode || "leojuhu", data: ventures }),
      });

      const jsonProj = await resProjects.json();
      const jsonVent = await resVentures.json();

      if (resProjects.ok && jsonProj.success && resVentures.ok && jsonVent.success) {
        setSyncStatus("saved");
      } else {
        setSyncStatus("error");
        setSyncError(jsonProj.error || jsonVent.error || "Failed to publish changes.");
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
          <p className={styles.loginSubtitle}>Enter PIN to manage Initiatives & Venture Registry</p>
          
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
              {syncStatus === "saving" && "Publishing changes to database files..."}
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

        {/* Top Entity Switcher */}
        <div style={{ display: "flex", gap: "12px", marginBottom: "24px" }}>
          <button 
            className="btn-primary" 
            style={{ 
              flexGrow: 1, 
              padding: "16px", 
              fontSize: "1rem",
              background: adminSection === "projects" ? "var(--accent-gold)" : "transparent",
              color: adminSection === "projects" ? "#000" : "var(--text-primary)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderColor: adminSection === "projects" ? "var(--accent-gold)" : "rgba(255,255,255,0.15)"
            }}
            onClick={() => { setAdminSection("projects"); setEditingProject(null); setEditingVenture(null); }}
          >
            📁 Club Projects & Initiatives
          </button>
          <button 
            className="btn-primary" 
            style={{ 
              flexGrow: 1, 
              padding: "16px", 
              fontSize: "1rem",
              background: adminSection === "ventures" ? "var(--accent-gold)" : "transparent",
              color: adminSection === "ventures" ? "#000" : "var(--text-primary)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderColor: adminSection === "ventures" ? "var(--accent-gold)" : "rgba(255,255,255,0.15)"
            }}
            onClick={() => { setAdminSection("ventures"); setEditingProject(null); setEditingVenture(null); }}
          >
            💼 Venture Registry (Entrepreneur Network)
          </button>
        </div>

        {/* Main Workspace Layout */}
        <div className={styles.mainLayout}>
          
          {/* Left panel: List Selection */}
          <div className={styles.panel}>
            {adminSection === "projects" ? (
              <>
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
                  {projects[activeTab] && projects[activeTab].length > 0 ? (
                    projects[activeTab].map((p, index) => (
                      <div 
                        key={p.id} 
                        className={`${styles.projectItem} ${editingProject?.id === p.id ? styles.projectItemActive : ""}`}
                        draggable
                        onDragStart={() => handleDragStart(index)}
                        onDragOver={handleDragOver}
                        onDrop={() => handleDrop(index, "projects")}
                        style={{ cursor: "grab" }}
                        title="Drag to change order"
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
                        <div className={styles.itemActions} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ fontSize: "1.2rem", cursor: "grab", opacity: 0.4 }}>☰</span>
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
              </>
            ) : (
              <>
                <div className={styles.panelHeader}>
                  <h2 className={styles.panelTitle}>Registered Ventures</h2>
                  <button className="btn-green" style={{ padding: "8px 18px", fontSize: "0.85rem" }} onClick={startNewVenture}>
                    + Add Venture
                  </button>
                </div>

                {/* Venture list */}
                <div className={styles.projectList} style={{ marginTop: "12px" }}>
                  {ventures.length > 0 ? (
                    ventures.map((v, index) => (
                      <div 
                        key={v.id} 
                        className={`${styles.projectItem} ${editingVenture?.id === v.id ? styles.projectItemActive : ""}`}
                        draggable
                        onDragStart={() => handleDragStart(index)}
                        onDragOver={handleDragOver}
                        onDrop={() => handleDrop(index, "ventures")}
                        style={{ cursor: "grab" }}
                        title="Drag to change order"
                      >
                        <div className={styles.itemInfo}>
                          <div className={styles.itemThumb} style={{ fontSize: "1.2rem", background: "#1f2937", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            {v.logo || "💼"}
                          </div>
                          <div className={styles.itemText}>
                            <h4 className={styles.itemTitle}>{v.name || "Untitled Venture"}</h4>
                            <div className={styles.itemMeta}>
                              <span>{v.founderName}</span>
                              <span>•</span>
                              <span>{v.category}</span>
                            </div>
                          </div>
                        </div>
                        <div className={styles.itemActions} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ fontSize: "1.2rem", cursor: "grab", opacity: 0.4 }}>☰</span>
                          <button 
                            className={`${styles.btnIcon} ${styles.btnEdit}`} 
                            onClick={() => setEditingVenture({ ...v })}
                            title="Edit Venture"
                          >
                            ✏️
                          </button>
                          <button 
                            className={`${styles.btnIcon} ${styles.btnDelete}`} 
                            onClick={() => deleteVenture(v.id)}
                            title="Delete Venture"
                          >
                            🗑️
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p style={{ textAlign: "center", padding: "40px", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                      No ventures in registry. Click &quot;+ Add Venture&quot; to create one.
                    </p>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Right Panel: Editor Form */}
          <div className={styles.editorForm}>
            {adminSection === "projects" ? (
              editingProject ? (
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

                    <div className={styles.formGrid}>
                      <div className={styles.formGroup}>
                        <label htmlFor="p-beneficiaries">Beneficiaries Count (Optional)</label>
                        <input 
                          id="p-beneficiaries"
                          type="text" 
                          className={styles.formInput} 
                          placeholder="e.g. 350+ Blood Receivers"
                          value={editingProject.beneficiaries || ""}
                          onChange={(e) => setEditingProject({ ...editingProject, beneficiaries: e.target.value })}
                        />
                      </div>
                      
                      <div className={styles.formGroup}>
                        <label htmlFor="p-volunteers">Volunteers Mobilized (Optional)</label>
                        <input 
                          id="p-volunteers"
                          type="text" 
                          className={styles.formInput} 
                          placeholder="e.g. 40+ Leos & Lions"
                          value={editingProject.volunteers || ""}
                          onChange={(e) => setEditingProject({ ...editingProject, volunteers: e.target.value })}
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

                    {/* Image Uploader */}
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
                </>
              ) : (
                <div className={styles.editorCard} style={{ textAlign: "center", padding: "60px 40px", color: "var(--text-secondary)" }}>
                  <span>💡</span>
                  <p style={{ marginTop: "12px", fontSize: "0.95rem" }}>
                    Select a project from the left panel to edit its details, or click &quot;+ Add Project&quot; to create a new one.
                  </p>
                </div>
              )
            ) : (
              editingVenture ? (
                <>
                  <div className={styles.editorCard}>
                    <h2 className={styles.panelTitle} style={{ marginBottom: "24px" }}>
                      {editingVenture.id.startsWith("biz_") ? "Create Venture" : "Edit Venture Details"}
                    </h2>
                    
                    <div className={styles.formGrid}>
                      <div className={styles.formGroup}>
                        <label>Business Name</label>
                        <input 
                          type="text" 
                          className={styles.formInput} 
                          placeholder="e.g. Juhu Tech Solutions"
                          value={editingVenture.name}
                          onChange={(e) => setEditingVenture({ ...editingVenture, name: e.target.value })}
                        />
                      </div>
                      
                      <div className={styles.formGroup}>
                        <label>Founder Name</label>
                        <input 
                          type="text" 
                          className={styles.formInput} 
                          placeholder="e.g. Leo Hitansh Doshi"
                          value={editingVenture.founderName}
                          onChange={(e) => setEditingVenture({ ...editingVenture, founderName: e.target.value, owner: `Founder: ${e.target.value}` })}
                        />
                      </div>
                    </div>

                    <div className={styles.formGrid}>
                      <div className={styles.formGroup}>
                        <label>Category (Industry)</label>
                        <input 
                          type="text" 
                          className={styles.formInput} 
                          placeholder="e.g. IT & Tech"
                          value={editingVenture.category}
                          onChange={(e) => setEditingVenture({ ...editingVenture, category: e.target.value })}
                        />
                      </div>
                      
                      <div className={styles.formGroup}>
                        <label>Logo Emoji</label>
                        <input 
                          type="text" 
                          className={styles.formInput} 
                          placeholder="e.g. 💻"
                          value={editingVenture.logo}
                          onChange={(e) => setEditingVenture({ ...editingVenture, logo: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className={styles.formGrid}>
                      <div className={styles.formGroup}>
                        <label>Website URL</label>
                        <input 
                          type="url" 
                          className={styles.formInput} 
                          placeholder="https://example.com"
                          value={editingVenture.website}
                          onChange={(e) => setEditingVenture({ ...editingVenture, website: e.target.value })}
                        />
                      </div>
                      
                      <div className={styles.formGroup}>
                        <label>Instagram URL</label>
                        <input 
                          type="url" 
                          className={styles.formInput} 
                          placeholder="https://instagram.com/..."
                          value={editingVenture.instagram}
                          onChange={(e) => setEditingVenture({ ...editingVenture, instagram: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className={styles.formGrid}>
                      <div className={styles.formGroup}>
                        <label>LinkedIn URL</label>
                        <input 
                          type="url" 
                          className={styles.formInput} 
                          placeholder="https://linkedin.com/company/..."
                          value={editingVenture.linkedin}
                          onChange={(e) => setEditingVenture({ ...editingVenture, linkedin: e.target.value })}
                        />
                      </div>
                      
                      <div className={styles.formGroup}>
                        <label>Founded Year</label>
                        <input 
                          type="text" 
                          className={styles.formInput} 
                          placeholder="2026"
                          value={editingVenture.foundedYear}
                          onChange={(e) => setEditingVenture({ ...editingVenture, foundedYear: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className={styles.formGrid}>
                      <div className={styles.formGroup}>
                        <label>Team Size</label>
                        <input 
                          type="text" 
                          className={styles.formInput} 
                          placeholder="e.g. 5+ Employees"
                          value={editingVenture.teamSize}
                          onChange={(e) => setEditingVenture({ ...editingVenture, teamSize: e.target.value })}
                        />
                      </div>
                      
                      <div className={styles.formGroup}>
                        <label>Founder Portrait URL</label>
                        <input 
                          type="text" 
                          className={styles.formInput} 
                          placeholder="/team/hitansh.jpeg"
                          value={editingVenture.founderPhoto}
                          onChange={(e) => setEditingVenture({ ...editingVenture, founderPhoto: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label>Short Description (Teaser Card)</label>
                      <textarea 
                        className={styles.formTextarea} 
                        placeholder="Short card pitch..."
                        value={editingVenture.description}
                        onChange={(e) => setEditingVenture({ ...editingVenture, description: e.target.value })}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label>Founder Spotlight Story</label>
                      <textarea 
                        className={styles.formTextarea} 
                        rows={5}
                        placeholder="Detailed personal story, inspiration, startup journey..."
                        value={editingVenture.story}
                        onChange={(e) => setEditingVenture({ ...editingVenture, story: e.target.value })}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label>Company Description (Spotlight Detail)</label>
                      <textarea 
                        className={styles.formTextarea} 
                        rows={4}
                        placeholder="Describe services, products, business offerings..."
                        value={editingVenture.companyDescription}
                        onChange={(e) => setEditingVenture({ ...editingVenture, companyDescription: e.target.value })}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label>Personal Quote</label>
                      <textarea 
                        className={styles.formTextarea} 
                        placeholder="A quote from the founder..."
                        value={editingVenture.quote}
                        onChange={(e) => setEditingVenture({ ...editingVenture, quote: e.target.value })}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label>Achievements (One per line)</label>
                      <textarea 
                        className={styles.formTextarea} 
                        rows={4}
                        placeholder="Achievement 1&#10;Achievement 2&#10;Achievement 3"
                        value={editingVenture.achievements ? editingVenture.achievements.join("\n") : ""}
                        onChange={(e) => setEditingVenture({ ...editingVenture, achievements: e.target.value.split("\n") })}
                      />
                    </div>

                    {/* Image Selection */}
                    <div className={styles.formGroup}>
                      <label>Upload/Select Venture Images</label>
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
                      
                      <div className={styles.gallerySelector}>
                        <span className={styles.galleryLabel}>Select Existing Image:</span>
                        <div className={styles.galleryGrid}>
                          {galleryImages.map((imgUrl) => (
                            <div 
                              key={imgUrl} 
                              onClick={() => setEditingVenture({ ...editingVenture, image: imgUrl })}
                              className={`${styles.galleryItem} ${editingVenture.image === imgUrl ? styles.galleryItemActive : ""}`}
                            >
                              <Image src={imgUrl} alt="Gallery thumb" fill className="object-cover" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className={styles.formControls}>
                      <button className={styles.btnCancel} onClick={() => setEditingVenture(null)}>
                        Cancel
                      </button>
                      <button className="btn-green" onClick={saveVentureToList}>
                        Save to List
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className={styles.editorCard} style={{ textAlign: "center", padding: "60px 40px", color: "var(--text-secondary)" }}>
                  <span>💼</span>
                  <p style={{ marginTop: "12px", fontSize: "0.95rem" }}>
                    Select a venture from the left registry to edit its details, or click &quot;+ Add Venture&quot; to create a new one.
                  </p>
                </div>
              )
            )}
          </div>

        </div>

      </div>
    </main>
  );
}
