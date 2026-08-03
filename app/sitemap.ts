import type { MetadataRoute } from "next";
import { projectsData } from "@/src/data/projects";
import { businesses } from "@/src/data/businesses";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://leoclubjuhu.org";
  
  // Base static routes
  const staticRoutes = [
    "",
    "/about",
    "/initiatives",
    "/team",
    "/businesses",
    "/join",
    "/connect",
    "/privacy-policy",
    "/terms",
    "/declaration"
  ];

  // Dynamic project routes
  const projectRoutes = projectsData.map((project) => `/initiatives/${project.id}`);

  // Dynamic founder spotlight routes
  const founderRoutes = businesses.map((founder) => `/businesses/${founder.id}`);

  // Combine all routes
  const allRoutes = [...staticRoutes, ...projectRoutes, ...founderRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/initiatives/") || route.startsWith("/businesses/") ? 0.85 : 0.8,
  }));
}
