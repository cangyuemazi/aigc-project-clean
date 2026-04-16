# 智能零零AI工具

<div align="center">

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/React-18.2-61DAFB.svg?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6.svg?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC.svg?logo=tailwind-css)

**精选全球优质AI工具导航平台**

[在线演示](https://smartai00.com) · [提交工具](https://smartai00.com/submit) · [报告问题](https://github.com/your-repo/issues)

</div>

---

## ✨ 功能特性

### 核心功能
- 🔍 **智能搜索** - 快速搜索AI工具，支持名称、描述、标签搜索
- 📂 **分类筛选** - 8大分类，30+子分类，精准定位所需工具
- 🎯 **排序功能** - 支持热门、最新、名称多种排序方式
- ❤️ **收藏功能** - 本地存储收藏，随时查看喜欢的工具
- 📊 **热门排行** - 实时展示最受欢迎的AI工具

### 用户体验
- 📱 **响应式设计** - 完美适配桌面端和移动端
- 🎨 **精美UI** - 现代化设计，流畅动画效果
- ⚡ **快速加载** - 代码分割，懒加载优化
- 🌙 **暗黑模式** - (即将推出)

### 技术特性
- ⚛️ React 18 + TypeScript
- 🎨 Tailwind CSS + Framer Motion
- 📦 Vite 构建工具
- 🔍 SEO优化（meta标签、sitemap、robots.txt）

## 🚀 快速开始

### 环境要求
- Node.js 18+ (推荐 20+)
- npm 或 yarn

### 安装步骤

1. **克隆项目**
```bash
git clone https://github.com/your-repo/ai-tool-directory.git
cd ai-tool-directory
```

2. **安装依赖**
```bash
npm install
# 或
yarn install
```

3. **启动开发服务器**
```bash
npm run dev
# 或
yarn dev
```

4. **访问应用**
打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 构建生产版本

```bash
npm run build
npm run preview
```

## 📁 项目结构

```
ai-tool-directory/
├── public/              # 静态资源
│   ├── robots.txt       # 搜索引擎爬虫配置
│   └── sitemap.xml      # 网站地图
├── src/
│   ├── components/      # React组件
│   │   ├── AdSlot.tsx
│   │   ├── ErrorBoundary.tsx
│   │   ├── Footer.tsx
│   │   ├── LoadingSkeleton.tsx
│   │   ├── MobileNav.tsx
│   │   ├── Sidebar.tsx
│   │   ├── ToolCard.tsx
│   │   └── TopRanking.tsx
│   ├── data/           # 数据文件
│   │   ├── tools.json
│   │   └── categories.json
│   ├── hooks/          # 自定义Hooks
│   │   └── useFavorites.ts
│   ├── pages/          # 页面组件
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── GuidePage.tsx
│   │   ├── HomePage.tsx
│   │   ├── SubmitPage.tsx
│   │   └── ToolDetailPage.tsx
│   ├── App.tsx         # 主应用组件
│   ├── main.tsx        # 应用入口
│   ├── types.ts        # TypeScript类型定义
│   └── index.css       # 全局样式
├── index.html          # HTML模板
├── package.json        # 项目配置
├── tailwind.config.ts  # Tailwind配置
├── tsconfig.json       # TypeScript配置
└── vite.config.ts      # Vite配置
```

## 📊 数据管理

### 工具数据
- **位置**: `src/data/tools.json`
- **格式**: JSON数组
- **字段**:
  - `id`: 唯一标识
  - `name`: 工具名称
  - `description`: 工具描述
  - `url`: 官网链接
  - `logo`: Logo图片URL
  - `categoryId`: 分类ID
  - `subCategoryId`: 子分类ID
  - `tags`: 标签数组
  - `views`: 浏览量

### 分类数据
- **位置**: `src/data/categories.json`
- **格式**: JSON数组
- **字段**:
  - `id`: 分类ID
  - `name`: 分类名称
  - `icon`: 图标名称
  - `subCategories`: 子分类数组

## 🎨 自定义配置

### 环境变量
复制 `.env.example` 为 `.env` 并修改：

```env
VITE_SITE_URL=https://your-domain.com
VITE_SITE_NAME=你的网站名称
VITE_CONTACT_EMAIL=your@email.com
```

### 样式定制
修改 `tailwind.config.ts` 自定义主题颜色、字体等。

## 📦 部署

### Vercel部署
1. 连接GitHub仓库
2. 自动检测Vite项目
3. 一键部署

### 其他平台
```bash
npm run build
```
将 `dist` 目录部署到任何静态托管服务。

## 🤝 贡献指南

欢迎提交Issue和Pull Request！

1. Fork本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 📞 联系方式

- 邮箱：contact@smartai00.com
- 微信：smart_ai_00
- 网站：[https://smartai00.com](https://smartai00.com)

---

<div align="center">

Made with ❤️ by 智能零零AI工具团队

</div>
