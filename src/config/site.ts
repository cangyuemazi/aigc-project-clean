import type { SiteLink } from "@/src/types";

type LogoConfig =
  | { type: "text"; text: string }
  | { type: "image"; src: string };

interface SiteConfig {
  title: string;
  description: string;
  homePath: string;
  logo: LogoConfig;
  sidebar: {
    defaultCollapsed: boolean;
  };
  navLinks: SiteLink[];
  footer: {
    copyright: string;
    links: SiteLink[];
    feedbackLink: string;
  };
  contactEmail: string;
  beian: string;
  about: { title: string; content: string };
  partnerText: string;
}

export const siteConfig: SiteConfig = {
  title: "智能零零AI工具",
  description: "发现全球最顶尖的AI生产力工具",
  homePath: "/",
  logo: { type: "text", text: "智能零零AI工具" },
  sidebar: {
    defaultCollapsed: false
  },
  navLinks: [
    { name: "首页", href: "/" },
    { name: "提交工具", href: "/submit" },
    { name: "数据校验", href: "/validator" },
    { name: "关于我们", href: "/about" },
    { name: "商务合作", href: "/partners" }
  ],
  footer: {
    copyright: "© 2025 智能零零AI工具 版权所有",
    links: [
      { name: "关于我们", href: "/about" },
      { name: "商务合作", href: "/partners" },
      { name: "提交工具", href: "/submit" },
      { name: "网站地图", href: "/sitemap.xml" }
    ],
    feedbackLink: "mailto:hello@example.com?subject=%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88%20-%20%E6%99%BA%E8%83%BD%E9%9B%B6%E9%9B%B6AI%E5%B7%A5%E5%85%B7"
  },
  contactEmail: "hello@example.com",
  beian: "京ICP备xxxxxx号",
  about: {
    title: "关于 智能零零AI工具",
    content:
      "智能零零AI工具致力于聚合全球高质量 AI 工具，帮助个人与企业快速找到适合的生产力产品。我们持续更新写作、设计、编程、视频、办公、翻译等热门分类，并提供提交与合作入口。"
  },
  partnerText:
    "欢迎品牌投放、工具收录置顶、友情链接互换与联合活动合作。请通过邮箱联系我们，我们会在 1-2 个工作日内回复。"
};
