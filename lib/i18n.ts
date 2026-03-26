import type { Locale } from "@/types/tool";

export const locales: Locale[] = ["zh", "en"];

export const isValidLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);

export const t = {
  siteName: { zh: "AI大合集", en: "AI Daheji" },
  siteDesc: {
    zh: "AI大合集：发现并筛选高质量 AI 工具，覆盖写作、设计、编程、视频和翻译。",
    en: "AI Daheji: discover quality AI tools across writing, design, coding, video, and translation."
  },
  submit: { zh: "提交工具", en: "Submit a Tool" },
  favorites: { zh: "收藏", en: "Favorites" },
  newest: { zh: "最新", en: "Newest" },
  popular: { zh: "最热", en: "Popular" },
  free: { zh: "免费", en: "Free" },
  trending: { zh: "热门", en: "Trending" },
  sponsored: { zh: "赞助", en: "Sponsored" }
};
