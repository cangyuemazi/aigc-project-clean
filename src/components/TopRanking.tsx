import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Eye, TrendingUp } from 'lucide-react';
import type { Tool } from '../types';

interface TopRankingProps {
  tools: Tool[];
}

function TopRankingComponent({ tools }: TopRankingProps) {
  const topTools = useMemo(
    () =>
      [...tools]
        .sort((a, b) => b.views - a.views)
        .slice(0, 10),
    [tools],
  );

  return (
    <motion.aside
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="surface-card sticky top-6 max-h-[calc(100vh-120px)] w-80 overflow-y-auto rounded-[28px] p-6"
    >
      <div className="mb-6 flex items-center gap-3">
        <span className="warm-icon-badge h-10 w-10 rounded-2xl">
          <TrendingUp className="h-5 w-5" />
        </span>
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-tertiary)]">Most visited</p>
          <h2 className="text-2xl">热门排行</h2>
        </div>
      </div>

      <div className="space-y-3">
        {topTools.map((tool, index) => (
          <motion.a
            key={tool.id}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="surface-card-quiet group flex items-center gap-3 rounded-[22px] p-3 transition-all duration-200 hover:border-[rgba(201,100,66,0.2)] hover:bg-[rgba(255,253,247,0.95)]"
          >
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl text-xs font-semibold ${
                index < 3 ? 'bg-[rgba(201,100,66,0.14)] text-[var(--primary-color)]' : 'bg-[var(--background-muted)] text-[var(--text-secondary)]'
              }`}
            >
              {index + 1}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-[var(--text-primary)] transition-colors group-hover:text-[var(--primary-color)]">
                {tool.name}
              </p>
              <div className="mt-1 flex items-center gap-1">
                <Eye className="h-3 w-3 text-[var(--text-tertiary)]" />
                <span className="text-xs text-[var(--text-tertiary)]">{(tool.views / 10000).toFixed(1)} 万浏览</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.aside>
  );
}

export const TopRanking = memo(TopRankingComponent);
