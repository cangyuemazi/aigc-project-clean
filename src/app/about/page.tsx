import type { Metadata } from "next";
import { siteConfig } from "@/src/config/site";

export const metadata: Metadata = {
  title: "关于我们",
  description: "了解 智能零零AI工具 团队和联系方式。"
};

export default function AboutPage() {
  return (
    <article className="rounded-3xl bg-white p-8 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)]">
      <h1 className="text-2xl font-semibold">{siteConfig.about.title}</h1>
      <p className="mt-4 leading-8 text-slate-700">{siteConfig.about.content}</p>
      <p className="mt-4 text-slate-600">联系邮箱：{siteConfig.contactEmail}</p>
    </article>
  );
}
