import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolCard } from "@/src/components/ToolCard";
import { siteConfig } from "@/src/config/site";
import toolsData from "@/src/data/tools.json";
import type { ToolItem } from "@/src/types";

const tools = toolsData as ToolItem[];

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.id }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const tool = tools.find((item) => item.id === params.slug);
  if (!tool) return { title: "工具详情" };
  return {
    title: `${tool.name} - ${siteConfig.title}`,
    description: tool.description
  };
}

export default function ToolDetailPage({ params }: { params: { slug: string } }) {
  const tool = tools.find((item) => item.id === params.slug);
  if (!tool) notFound();

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">{tool.name}</h1>
      <p className="text-slate-600">{tool.description}</p>
      <ToolCard tool={tool} />
    </section>
  );
}
