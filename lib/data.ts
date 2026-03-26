import fs from "node:fs/promises";
import path from "node:path";
import { z } from "zod";
import type { Category, ToolItem, ToolSubmission } from "@/types/tool";

const toolSchema: z.ZodType<ToolItem> = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  description: z.object({ zh: z.string(), en: z.string() }),
  logo: z.string().url(),
  url: z.string().url(),
  category: z.enum(["writing", "design", "programming", "video", "translation"]),
  tags: z.array(z.string()),
  views: z.number(),
  publishDate: z.string(),
  free: z.boolean(),
  trending: z.boolean(),
  sponsored: z.boolean().optional()
});

const toolsPath = path.join(process.cwd(), "data", "tools.json");
const submissionsPath = path.join(process.cwd(), "data", "submissions.json");
const clicksPath = path.join(process.cwd(), "data", "clicks.json");

export async function getTools(): Promise<ToolItem[]> {
  const raw = await fs.readFile(toolsPath, "utf8");
  return z.array(toolSchema).parse(JSON.parse(raw));
}

export async function getToolBySlug(slug: string): Promise<ToolItem | undefined> {
  const tools = await getTools();
  return tools.find((tool) => tool.slug === slug);
}

export async function getCategories(): Promise<Category[]> {
  return ["writing", "design", "programming", "video", "translation"];
}

export async function trackClick(slug: string): Promise<void> {
  const raw = await fs.readFile(clicksPath, "utf8");
  const record = JSON.parse(raw) as Record<string, number>;
  record[slug] = (record[slug] ?? 0) + 1;
  await fs.writeFile(clicksPath, JSON.stringify(record, null, 2), "utf8");
}

export async function addSubmission(
  data: Omit<ToolSubmission, "id" | "status" | "createdAt">
): Promise<ToolSubmission> {
  const raw = await fs.readFile(submissionsPath, "utf8");
  const submissions = JSON.parse(raw) as ToolSubmission[];
  const newItem: ToolSubmission = {
    ...data,
    id: crypto.randomUUID(),
    status: "pending",
    createdAt: new Date().toISOString()
  };
  submissions.push(newItem);
  await fs.writeFile(submissionsPath, JSON.stringify(submissions, null, 2), "utf8");
  return newItem;
}

export async function getSubmissions(): Promise<ToolSubmission[]> {
  const raw = await fs.readFile(submissionsPath, "utf8");
  return JSON.parse(raw) as ToolSubmission[];
}

export async function updateSubmissionStatus(
  id: string,
  status: ToolSubmission["status"]
): Promise<ToolSubmission | null> {
  const raw = await fs.readFile(submissionsPath, "utf8");
  const submissions = JSON.parse(raw) as ToolSubmission[];
  const target = submissions.find((item) => item.id === id);
  if (!target) return null;
  target.status = status;
  await fs.writeFile(submissionsPath, JSON.stringify(submissions, null, 2), "utf8");
  return target;
}
