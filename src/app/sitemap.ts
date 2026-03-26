import type { MetadataRoute } from "next";
import categoriesData from "@/src/data/categories.json";
import toolsData from "@/src/data/tools.json";
import type { CategoryItem, ToolItem } from "@/src/types";

export default function sitemap(): MetadataRoute.Sitemap {
  const categories = categoriesData as CategoryItem[];
  const tools = toolsData as ToolItem[];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
  const staticPages = ["", "/about", "/partners", "/submit"];

  const staticEntries = staticPages.map((item) => ({
    url: `${siteUrl}${item || "/"}`,
    lastModified: new Date()
  }));

  const categoryEntries = categories.map((category) => ({
    url: `${siteUrl}/?category=${category.id}`,
    lastModified: new Date()
  }));

  const toolEntries = tools.map((tool) => ({
    url: `${siteUrl}/tools/${tool.id}`,
    lastModified: new Date()
  }));

  return [...staticEntries, ...categoryEntries, ...toolEntries];
}
