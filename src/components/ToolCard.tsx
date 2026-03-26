"use client";

import Image from "next/image";
import * as Icons from "lucide-react";
import { useState } from "react";
import type { ToolItem } from "@/src/types";
import { trackClick } from "@/src/lib/stats";

function openTool(tool: ToolItem) {
  trackClick(tool.id);
  window.open(tool.url, "_blank", "noopener,noreferrer");
}

function getLogoUrl(tool: ToolItem) {
  return tool.logo?.trim() ? tool.logo : "";
}

export function ToolCard({ tool }: { tool: ToolItem }) {
  const logoUrl = getLogoUrl(tool);
  const hasImage = Boolean(logoUrl);
  const [imageError, setImageError] = useState(false);

  return (
    <article
      className="group relative rounded-3xl border border-slate-100 bg-white p-4 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] transition hover:-translate-y-1 hover:shadow-[0_18px_35px_-10px_rgba(0,0,0,0.12)]"
      onClick={() => openTool(tool)}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter") openTool(tool);
      }}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-500">
          {hasImage && !imageError ? (
            <Image
              src={logoUrl}
              alt={tool.name}
              width={36}
              height={36}
              onError={() => setImageError(true)}
              className="rounded-md"
            />
          ) : (
            <Icons.Globe className="h-5 w-5" />
          )}
        </div>
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold text-slate-900">{tool.name}</h3>
          <p className="text-xs text-slate-500">{tool.views.toLocaleString()} 浏览</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tool.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4">
        <button
          type="button"
          className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-medium text-white"
          onClick={(event) => {
            event.stopPropagation();
            openTool(tool);
          }}
        >
          立即体验
        </button>
      </div>

      <div className="pointer-events-none absolute inset-x-2 bottom-2 translate-y-2 rounded-xl bg-slate-900 px-3 py-2 text-xs text-slate-100 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
        {tool.description}
      </div>
    </article>
  );
}
