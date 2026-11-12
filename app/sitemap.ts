import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";
import { siteUrl } from "@/lib/site";

const pages = ["", "/about", "/experience", "/projects", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map((path) => ({
      url: `${siteUrl}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project.id}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [`${siteUrl}${project.image}`],
    })),
  ];
}
