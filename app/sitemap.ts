import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://leoclubjuhu.org";
  const routes = [
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

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
