import type { Metadata } from "next";
import { SubmitToolForm } from "@/src/components/SubmitToolForm";

export const metadata: Metadata = {
  title: "提交工具",
  description: "提交新的 AI 工具到 智能零零AI工具。"
};

export default function SubmitPage() {
  return (
    <section className="mx-auto max-w-2xl space-y-4 rounded-3xl bg-white p-8 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)]">
      <h1 className="text-2xl font-semibold">提交工具</h1>
      <p className="text-slate-600">填写后会保存到本地待处理列表，后续可人工审核收录。</p>
      <SubmitToolForm />
    </section>
  );
}
