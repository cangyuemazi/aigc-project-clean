"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { t } from "@/lib/i18n";
import type { Locale, ToolItem } from "@/types/tool";

function FavButton({ id }: { id: string }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem("favorites");
    const items = raw ? (JSON.parse(raw) as string[]) : [];
    setActive(items.includes(id));
  }, [id]);

  return (
    <button
      onClick={() => {
        const key = "favorites";
        const raw = localStorage.getItem(key);
        const items = raw ? (JSON.parse(raw) as string[]) : [];
        const exists = items.includes(id);
        const next = exists ? items.filter((item) => item !== id) : [...items, id];
        localStorage.setItem(key, JSON.stringify(next));
        setActive(!exists);
      }}
      className={`rounded-md border px-2 py-1 text-xs ${
        active
          ? "border-cyan-400 bg-cyan-500/20 text-cyan-300"
          : "border-slate-700 text-slate-300"
      }`}
    >
      {active ? "Saved" : "Save"}
    </button>
  );
}

export function ToolsGrid({
  locale,
  tools
}: {
  locale: Locale;
  tools: ToolItem[];
}) {
  const [sortBy, setSortBy] = useState<"popular" | "newest">("popular");
  const [query, setQuery] = useState("");
  const [favoriteOnly, setFavoriteOnly] = useState(false);
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem("favorites");
    setFavoriteIds(raw ? (JSON.parse(raw) as string[]) : []);
  }, []);

  const sorted = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const searched = tools.filter((tool) => {
      if (!normalized) return true;
      const text = `${tool.name} ${tool.tags.join(" ")} ${tool.description[locale]}`.toLowerCase();
      return text.includes(normalized);
    });
    const withFavoriteFilter = favoriteOnly
      ? searched.filter((tool) => favoriteIds.includes(tool.id))
      : searched;
    return [...withFavoriteFilter].sort((a, b) =>
      sortBy === "popular"
        ? b.views - a.views
        : new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
  }, [favoriteIds, favoriteOnly, locale, query, sortBy, tools]);

  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h2 className="text-lg font-semibold">{sorted.length} tools</h2>
        <div className="flex flex-wrap items-center gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={locale === "zh" ? "搜索工具..." : "Search tools..."}
            className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm"
          />
          <button
            type="button"
            onClick={() => setFavoriteOnly((prev) => !prev)}
            className={`rounded-md border px-3 py-2 text-sm ${
              favoriteOnly
                ? "border-cyan-400 bg-cyan-500/20 text-cyan-300"
                : "border-slate-700 text-slate-300"
            }`}
          >
            {t.favorites[locale]}
          </button>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "popular" | "newest")}
            className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm"
          >
            <option value="popular">{t.popular[locale]}</option>
            <option value="newest">{t.newest[locale]}</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((tool, index) => (
          <motion.article
            key={tool.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.24, delay: index * 0.03 }}
            className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 hover:border-cyan-500/60"
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <Image
                  src={tool.logo}
                  alt={tool.name}
                  width={40}
                  height={40}
                  className="rounded-md bg-white"
                />
                <div>
                  <h3 className="font-semibold">{tool.name}</h3>
                  <p className="text-xs text-slate-400">{tool.views} views</p>
                </div>
              </div>
              <FavButton id={tool.id} />
            </div>

            <p className="mb-4 line-clamp-2 text-sm text-slate-300">
              {tool.description[locale]}
            </p>

            <div className="mb-4 flex flex-wrap gap-2">
              {tool.free && (
                <span className="rounded-md bg-emerald-500/20 px-2 py-1 text-xs text-emerald-300">
                  {t.free[locale]}
                </span>
              )}
              {tool.trending && (
                <span className="rounded-md bg-orange-500/20 px-2 py-1 text-xs text-orange-300">
                  {t.trending[locale]}
                </span>
              )}
              {tool.sponsored && (
                <span className="rounded-md bg-purple-500/20 px-2 py-1 text-xs text-purple-300">
                  {t.sponsored[locale]}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between">
              <Link
                href={`/${locale}/tools/${tool.slug}`}
                className="text-sm text-cyan-300 hover:text-cyan-200"
              >
                Details
              </Link>
              <a
                href={tool.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-cyan-500 px-3 py-2 text-xs font-semibold text-slate-900"
                onClick={() =>
                  fetch("/api/track", {
                    method: "POST",
                    body: JSON.stringify({ slug: tool.slug })
                  })
                }
              >
                Visit
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
