import Link from "next/link";
import { siteConfig } from "@/src/config/site";

export function AppSidebar() {
  return (
    <aside className="w-64 flex-shrink-0 h-full overflow-y-auto bg-white border-r border-slate-200">
      <div className="p-4">
        <Link href={siteConfig.homePath} className="block text-lg font-bold text-slate-900">
          {siteConfig.title}
        </Link>
      </div>
      <nav className="px-2 pb-4">
        {siteConfig.navLinks.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="mb-1 block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
