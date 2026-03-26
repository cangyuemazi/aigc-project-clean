"use client";

import { useState } from "react";
import type { Category, Locale } from "@/types/tool";

const categoryValues: Category[] = [
  "writing",
  "design",
  "programming",
  "video",
  "translation"
];

export function SubmitForm({ locale }: { locale: Locale }) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );

  return (
    <form
      className="space-y-4 rounded-xl border border-slate-800 bg-slate-900 p-6"
      onSubmit={async (e) => {
        e.preventDefault();
        setStatus("loading");
        const formData = new FormData(e.currentTarget);
        const payload = Object.fromEntries(formData.entries());
        const response = await fetch("/api/submissions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        setStatus(response.ok ? "done" : "error");
        if (response.ok) (e.currentTarget as HTMLFormElement).reset();
      }}
    >
      <input
        className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2"
        name="name"
        required
        placeholder={locale === "zh" ? "工具名称" : "Tool Name"}
      />
      <input
        className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2"
        name="url"
        required
        placeholder="https://"
      />
      <select
        className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2"
        name="category"
        required
      >
        {categoryValues.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <textarea
        className="min-h-28 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2"
        name="description"
        required
        placeholder={locale === "zh" ? "工具介绍" : "Description"}
      />
      <input
        className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2"
        name="contactEmail"
        required
        type="email"
        placeholder={locale === "zh" ? "联系邮箱" : "Contact Email"}
      />
      <button
        type="submit"
        className="rounded-md bg-cyan-500 px-4 py-2 font-medium text-slate-900"
      >
        {locale === "zh" ? "提交" : "Submit"}
      </button>
      {status === "done" && (
        <p className="text-sm text-emerald-300">
          {locale === "zh" ? "提交成功，待审核。" : "Submitted successfully."}
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-rose-300">
          {locale === "zh" ? "提交失败，请重试。" : "Submission failed."}
        </p>
      )}
    </form>
  );
}
