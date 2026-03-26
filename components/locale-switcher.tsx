"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales } from "@/lib/i18n";
import type { Locale } from "@/types/tool";

export function LocaleSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname();
  const restPath = pathname.split("/").slice(2).join("/");

  return (
    <div className="flex items-center gap-2 text-sm">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}${restPath ? `/${restPath}` : ""}`}
          className={`rounded-md border px-3 py-1 ${
            locale === current
              ? "border-cyan-400 bg-cyan-500/20 text-cyan-300"
              : "border-slate-700 text-slate-300"
          }`}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
