import type { Metadata } from "next";
import { AppSidebar } from "@/src/components/AppSidebar";
import { Footer } from "@/src/components/Footer";
import { siteConfig } from "@/src/config/site";
import "@/src/app/globals.css";

export const metadata: Metadata = {
  title: {
    default: "智能零零AI工具",
    template: `%s - ${siteConfig.title}`
  },
  description: siteConfig.description
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="flex h-screen overflow-hidden bg-gray-50">
        <AppSidebar />
        <main className="flex-1 h-full overflow-y-auto p-4 md:p-8">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
