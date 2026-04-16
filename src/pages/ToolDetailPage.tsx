import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Eye, Heart, Share2, Tag } from 'lucide-react';
import { useFavorites } from '../hooks/useFavorites';
import toolsData from '../data/tools.json';
import categoriesData from '../data/categories.json';
import type { Category, Tool } from '../types';

export function ToolDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite } = useFavorites();

  const tools = toolsData as Tool[];
  const categories = categoriesData as Category[];
  const tool = tools.find((t) => t.id === id);

  if (!tool) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h2 className="mb-4 text-3xl">工具未找到</h2>
        <button onClick={() => navigate('/')} className="warm-button">
          返回首页
        </button>
      </div>
    );
  }

  const category = categories.find((c) => c.id === tool.categoryId);
  const relatedTools = tools.filter((t) => t.categoryId === tool.categoryId && t.id !== tool.id).slice(0, 4);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mx-auto max-w-6xl px-6 py-12">
      <button onClick={() => navigate(-1)} className="warm-link mb-8 flex items-center gap-2">
        <ArrowLeft className="h-5 w-5" />
        返回
      </button>

      <div className="surface-card rounded-[32px] p-8">
        <div className="mb-8 flex items-start gap-6">
          <div className="warm-brand-mark flex h-20 w-20 shrink-0 items-center justify-center rounded-[24px]">
            <img
              src={tool.logo}
              alt={tool.name}
              className="h-12 w-12 rounded-xl object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
          <div className="flex-1">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--text-tertiary)]">Tool profile</p>
            <h1 className="mt-2 text-[2.75rem]">{tool.name}</h1>
            <p className="mb-4 mt-4 max-w-3xl text-base leading-8 text-[var(--text-secondary)]">{tool.description}</p>
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-1 text-sm text-[var(--text-tertiary)]">
                <Eye className="h-4 w-4" />
                {(tool.views / 10000).toFixed(1)} 万浏览
              </span>
              <span className="text-sm text-[var(--text-tertiary)]">分类：{category?.name || '未分类'}</span>
            </div>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap items-center gap-4">
          <a href={tool.url} target="_blank" rel="noopener noreferrer" className="warm-button">
            立即体验
            <ExternalLink className="h-5 w-5" />
          </a>
          <button
            onClick={() => toggleFavorite(tool.id)}
            className={`flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-colors ${
              isFavorite(tool.id) ? 'bg-[rgba(201,100,66,0.12)] text-[var(--primary-color)]' : 'warm-button-secondary'
            }`}
          >
            <Heart className={`h-5 w-5 ${isFavorite(tool.id) ? 'fill-current' : ''}`} />
            {isFavorite(tool.id) ? '已收藏' : '收藏'}
          </button>
          <button
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert('链接已复制到剪贴板');
            }}
            className="warm-button-ghost"
          >
            <Share2 className="h-5 w-5" />
            分享
          </button>
        </div>

        <div className="mb-8">
          <h3 className="mb-3 flex items-center gap-2 text-2xl">
            <Tag className="h-5 w-5" />
            标签
          </h3>
          <div className="flex flex-wrap gap-2">
            {tool.tags.map((tag, index) => (
              <span key={index} className="warm-chip">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="mb-3 text-2xl">详细介绍</h3>
          <p className="leading-8 text-[var(--text-secondary)]">
            {tool.description}。这是一款聚焦效率与体验的 AI 工具，适合放进你的创作、工作或研究流程里，帮助你更快完成关键环节，同时保留足够清晰的使用门槛。
          </p>
        </div>

        <div className="mb-8">
          <h3 className="mb-3 text-2xl">主要特点</h3>
          <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
            <li>围绕一个核心工作流做得足够专注，减少无关复杂度。</li>
            <li>界面上手快，适合第一次接触该类 AI 工具的用户。</li>
            <li>可覆盖多种使用场景，既能快速试用，也适合深入使用。</li>
            <li>持续迭代能力较强，适合作为长期关注和收藏对象。</li>
          </ul>
        </div>
      </div>

      {relatedTools.length > 0 && (
        <div className="mt-12">
          <h2 className="mb-6 text-[2.15rem]">相关工具</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {relatedTools.map((relatedTool, index) => (
              <motion.div
                key={relatedTool.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="surface-card card-hover cursor-pointer rounded-[24px] p-4"
                onClick={() => navigate(`/tool/${relatedTool.id}`)}
              >
                <div className="mb-2 flex items-center gap-3">
                  <div className="warm-brand-mark flex h-10 w-10 items-center justify-center rounded-2xl">
                    <img
                      src={relatedTool.logo}
                      alt={relatedTool.name}
                      className="h-6 w-6 rounded-lg object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <h3 className="text-xl">{relatedTool.name}</h3>
                </div>
                <p className="line-clamp-2 text-sm leading-7 text-[var(--text-secondary)]">{relatedTool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
