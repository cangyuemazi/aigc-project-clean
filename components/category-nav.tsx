import type { ReactNode } from "react";
import {
  Code2,
  Languages,
  Palette,
  Pencil,
  Video
} from "lucide-react";
import type { Category, Locale } from "@/types/tool";

const labels: Record<Locale, Record<Category, string>> = {
  zh: {
    writing: "写作",
    design: "设计",
    programming: "编程",
    video: "视频",
    translation: "翻译"
  },
  en: {
    writing: "Writing",
    design: "Design",
    programming: "Programming",
    video: "Video",
    translation: "Translation"
  }
};

const iconMap: Record<Category, ReactNode> = {
  writing: <Pencil className="h-4 w-4" />,
  design: <Palette className="h-4 w-4" />,
  programming: <Code2 className="h-4 w-4" />,
  video: <Video className="h-4 w-4" />,
  translation: <Languages className="h-4 w-4" />
};

export function CategoryNav({
  locale,
  current,
  categories
}: {
  locale: Locale;
  current: string;
  categories: Category[];
}) {
  return (
    <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2">
      <a
        href={`/${locale}`}
        className={`flex shrink-0 items-center gap-2 rounded-lg border px-3 py-2 text-sm ${
          current === "all"
            ? "border-cyan-400 bg-cyan-500/20 text-cyan-300"
            : "border-slate-700 text-slate-300"
        }`}
      >
        All
      </a>
      {categories.map((category) => (
        <a
          key={category}
          href={`/${locale}?category=${category}`}
          className={`flex shrink-0 items-center gap-2 rounded-lg border px-3 py-2 text-sm ${
            current === category
              ? "border-cyan-400 bg-cyan-500/20 text-cyan-300"
              : "border-slate-700 text-slate-300"
          }`}
        >
          {iconMap[category]}
          {labels[locale][category]}
        </a>
      ))}
    </div>
  );
}
