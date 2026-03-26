import Link from "next/link";
import type { Locale, ToolItem } from "@/types/tool";

export function TopRanking({ tools, locale }: { tools: ToolItem[]; locale: Locale }) {
  const top = [...tools].sort((a, b) => b.views - a.views).slice(0, 5);

  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
      <h2 className="mb-3 text-lg font-semibold">
        {locale === "zh" ? "热门排行榜" : "Top Ranking"}
      </h2>
      <div className="space-y-2">
        {top.map((tool, index) => (
          <Link
            key={tool.id}
            href={`/${locale}/tools/${tool.slug}`}
            className="flex items-center justify-between rounded-md px-2 py-2 hover:bg-slate-800/70"
          >
            <span className="text-sm">
              #{index + 1} {tool.name}
            </span>
            <span className="text-xs text-slate-400">{tool.views} views</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
