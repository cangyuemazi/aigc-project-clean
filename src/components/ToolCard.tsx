import { motion } from 'framer-motion';
import { Heart, ExternalLink } from 'lucide-react';
import type { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
  index: number;
  isFavorite?: boolean;
  onToggleFavorite?: (toolId: string) => void;
}

export function ToolCard({ tool, index, isFavorite = false, onToggleFavorite }: ToolCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.05,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -4,
        transition: { 
          duration: 0.3, 
          ease: [0.2, 0.9, 0.4, 1.1] 
        } 
      }}
      className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-card transition-all duration-300 hover:shadow-xl"
    >
      {/* Favorite Button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          onToggleFavorite?.(tool.id);
        }}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-200 group/fav"
      >
        <Heart
          className={`h-5 w-5 transition-all duration-200 ${
            isFavorite
              ? 'fill-red-500 text-red-500'
              : 'text-gray-400 group-hover/fav:text-red-500'
          }`}
        />
      </button>

      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl">
          <img 
            src={tool.logo} 
            alt={tool.name}
            className="h-8 w-8 object-cover rounded-lg"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {tool.name}
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {tool.tags.slice(0, 3).map((tag, tagIndex) => (
              <span 
                key={tagIndex}
                className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover Description */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0, y: 10 }}
        whileHover={{ 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.2 }
        }}
        className="absolute inset-x-6 bottom-6 mt-4 rounded-xl bg-gray-900/90 px-4 py-3 text-sm text-gray-100 shadow-lg backdrop-blur-sm"
      >
        <p className="line-clamp-2 leading-relaxed">{tool.description}</p>
      </motion.div>

      {/* View Count */}
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-gray-400 flex items-center gap-1">
          <span>👁️</span>
          {(tool.views / 10000).toFixed(1)}万
        </span>
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
        >
          立即体验
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </motion.div>
  );
}
