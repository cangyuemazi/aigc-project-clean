import Link from "next/link";
import { siteConfig } from "@/src/config/site";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-3 px-4 py-8 text-sm text-slate-600 md:px-6">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {siteConfig.footer.links.map((item) => (
            <Link key={item.name} href={item.href} className="hover:text-blue-600">
              {item.name}
            </Link>
          ))}
          <Link href={siteConfig.footer.feedbackLink} className="hover:text-blue-600">
            意见反馈
          </Link>
        </div>
        <p>{siteConfig.footer.copyright}</p>
        <p>{siteConfig.beian}</p>
      </div>
    </footer>
  );
}
