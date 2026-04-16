import { memo, useCallback, type MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Heart } from 'lucide-react';
import type { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
  index: number;
  isFavorite?: boolean;
  onToggleFavorite?: (toolId: string) => void;
}

function ToolCardComponent({ tool, index, isFavorite = false, onToggleFavorite }: ToolCardProps) {
  const navigate = useNavigate();

  const handleFavoriteClick = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      onToggleFavorite?.(tool.id);
    },
    [tool.id, onToggleFavorite],
  );

  const handleCardClick = useCallback(() => {
    navigate(`/tool/${tool.id}`);
  }, [navigate, tool.id]);

  const handleLinkClick = useCallback((e: MouseEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.2, 0.9, 0.4, 1.1] } }}
      onClick={handleCardClick}
      className="surface-card card-hover group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[28px] p-6"
    >
      <button
        onClick={handleFavoriteClick}
        className="surface-card-quiet absolute right-5 top-5 z-10 rounded-full p-2.5 transition-all duration-200 group/fav hover:border-[rgba(201,100,66,0.24)]"
        aria-label={isFavorite ? '取消收藏' : '收藏工具'}
      >
        <Heart
          className={`h-5 w-5 transition-all duration-200 ${
            isFavorite
              ? 'fill-[var(--primary-color)] text-[var(--primary-color)]'
              : 'text-[var(--text-tertiary)] group-hover/fav:text-[var(--primary-color)]'
          }`}
        />
      </button>

      <div className="flex items-start gap-4">
        <div className="warm-brand-mark flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] transition-transform duration-300 group-hover:scale-105">
          <img
            src={tool.logo}
            alt={tool.name}
            className="h-8 w-8 rounded-lg object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-tertiary)]">精选工具</p>
          <h3 className="mt-2 text-[1.35rem] leading-tight transition-colors group-hover:text-[var(--primary-color)]">
            {tool.name}
          </h3>
        </div>
      </div>

      <p className="mt-5 line-clamp-3 text-sm leading-7 text-[var(--text-secondary)]">{tool.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tool.tags.slice(0, 3).map((tag, tagIndex) => (
          <span key={tagIndex} className="warm-chip-neutral">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between gap-3 pt-6">
        <span className="text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">
          约 {(tool.views / 10000).toFixed(1)} 万次浏览
        </span>
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
          className="warm-button !px-4 !py-2.5 !text-xs"
        >
          立即体验
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </motion.article>
  );
}

export const ToolCard = memo(ToolCardComponent);
