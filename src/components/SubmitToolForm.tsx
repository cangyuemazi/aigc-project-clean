"use client";

import { useState } from "react";
import categoriesData from "@/src/data/categories.json";
import type { CategoryItem } from "@/src/types";

export function SubmitToolForm() {
  const [status, setStatus] = useState("");
  const categories = categoriesData as CategoryItem[];

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        setStatus("提交中...");
        const formData = new FormData(event.currentTarget);
        const payload = Object.fromEntries(formData.entries()) as Record<string, string>;
        const key = "submitted-tools";
        const raw = localStorage.getItem(key);
        const list = raw ? (JSON.parse(raw) as Array<Record<string, string>>) : [];
        list.push({ ...payload, createdAt: new Date().toISOString() });
        localStorage.setItem(key, JSON.stringify(list));
        setStatus("提交成功，已保存到本地，等待人工处理。");
        event.currentTarget.reset();
      }}
    >
      <input name="name" required placeholder="工具名称" className="w-full rounded-2xl border border-slate-200 px-4 py-3" />
      <textarea
        name="description"
        required
        placeholder="工具简介（中文）"
        className="min-h-28 w-full rounded-2xl border border-slate-200 px-4 py-3"
      />
      <input name="url" type="url" required placeholder="工具链接 https://..." className="w-full rounded-2xl border border-slate-200 px-4 py-3" />
      <select name="categoryId" required className="w-full rounded-2xl border border-slate-200 px-4 py-3">
        <option value="">请选择分类</option>
        {categories.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <input name="subCategoryId" placeholder="子分类ID（可选）" className="w-full rounded-2xl border border-slate-200 px-4 py-3" />
      <input name="tags" placeholder="标签（逗号分隔，如：免费,热门）" className="w-full rounded-2xl border border-slate-200 px-4 py-3" />
      <input name="contactEmail" type="email" required placeholder="联系邮箱" className="w-full rounded-2xl border border-slate-200 px-4 py-3" />
      <button type="submit" className="rounded-2xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700">
        提交工具
      </button>
      {status ? <p className="text-sm text-slate-600">{status}</p> : null}
    </form>
  );
}
