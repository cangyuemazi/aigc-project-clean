import { useMemo, memo } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Eye } from 'lucide-react';
import type { Tool } from '../types';

interface TopRankingProps {
  tools: Tool[];
}

function TopRankingComponent({ tools }: TopRankingProps) {
  const topTools = useMemo(() => 
    [...tools]
      .sort((a, b) => b.views - a.views)
      .slice(0, 10),
    [tools]
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-80 bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-card sticky top-6 max-h-[calc(100vh-120px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
    >
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="h-5 w-5 text-blue-600" />
        <h2 className="text-lg font-bold text-gray-900">热门排行</h2>
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
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-all duration-200 group"
          >
            <div className={`
              flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-bold
              ${index < 3 ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white' : 'bg-gray-100 text-gray-600'}
            `}>
              {index + 1}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                {tool.name}
              </p>
              <div className="flex items-center gap-1 mt-1">
                <Eye className="h-3 w-3 text-gray-400" />
                <span className="text-xs text-gray-500">
                  {(tool.views / 10000).toFixed(1)}万
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

export const TopRanking = memo(TopRankingComponent);
