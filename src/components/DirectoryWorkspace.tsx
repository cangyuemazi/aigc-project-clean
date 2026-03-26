"use client";

import { useMemo, useState } from "react";
import { ToolCard } from "@/src/components/ToolCard";
import type { CategoryItem, ToolItem } from "@/src/types";

interface DirectoryWorkspaceProps {
  categories: CategoryItem[];
  tools: ToolItem[];
}

export function DirectoryWorkspace({ categories, tools }: DirectoryWorkspaceProps) {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState<string | null>(null);
  const [keyword, setKeyword] = useState("");

  const filteredTools = useMemo(() => {
    const normalized = keyword.trim().toLowerCase();
    return tools.filter((tool) => {
      const categoryMatch = !selectedCategoryId || tool.categoryId === selectedCategoryId;
      const subCategoryMatch = !selectedSubCategoryId || tool.subCategoryId === selectedSubCategoryId;
      const searchMatch =
        !normalized ||
        `${tool.name} ${tool.description} ${tool.tags.join(" ")}`.toLowerCase().includes(normalized);
      return categoryMatch && subCategoryMatch && searchMatch;
    });
  }, [keyword, selectedCategoryId, selectedSubCategoryId, tools]);

  return (
    <section className="space-y-5">
      <div className="rounded-2xl bg-white p-4 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            className="rounded-lg bg-blue-600 px-3 py-2 text-sm text-white"
            onClick={() => {
              setSelectedCategoryId(null);
              setSelectedSubCategoryId(null);
              setKeyword("");
            }}
          >
            首页
          </button>
          <input
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            placeholder="搜索工具名称、简介、标签"
            className="w-full max-w-md rounded-xl border border-slate-200 px-4 py-2 text-sm outline-none ring-blue-200 focus:ring-2"
          />
        </div>
        <p className="mt-3 text-sm text-slate-500">当前共 {filteredTools.length} 个工具</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {filteredTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  );
}
