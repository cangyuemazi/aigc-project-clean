import type { Metadata } from "next";
import { siteConfig } from "@/src/config/site";

export const metadata: Metadata = {
  title: "商务合作",
  description: "广告投放、置顶收录、品牌合作。"
};

export default function PartnersPage() {
  return (
    <section className="space-y-4 rounded-3xl bg-white p-8 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)]">
      <h1 className="text-2xl font-semibold">商务合作</h1>
      <p className="leading-8 text-slate-700">{siteConfig.partnerText}</p>
      <p className="text-slate-600">商务邮箱：{siteConfig.contactEmail}</p>
    </section>
  );
}
