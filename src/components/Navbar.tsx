import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/src/config/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-4 md:px-6">
        <Link href={siteConfig.homePath} className="flex items-center gap-2">
          {siteConfig.logo.type === "image" ? (
            <Image src={siteConfig.logo.src} alt={siteConfig.title} width={32} height={32} />
          ) : (
            <span className="rounded-xl bg-blue-600 px-3 py-1 text-sm font-bold text-white">
              {siteConfig.logo.text}
            </span>
          )}
          <span className="text-lg font-semibold text-slate-900">{siteConfig.title}</span>
        </Link>
        <nav className="flex items-center gap-2">
          {siteConfig.navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
