import type { Metadata } from "next";
import { DirectoryWorkspace } from "@/src/components/DirectoryWorkspace";
import { siteConfig } from "@/src/config/site";
import categoriesData from "@/src/data/categories.json";
import toolsData from "@/src/data/tools.json";
import type { CategoryItem, ToolItem } from "@/src/types";

export const metadata: Metadata = {
  title: "首页",
  description: siteConfig.description
};

export default function Home() {
  const categories = categoriesData as CategoryItem[];
  const tools = toolsData as ToolItem[];
  return <DirectoryWorkspace categories={categories} tools={tools} />;
}
