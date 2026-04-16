import { useMemo, useState } from 'react';
import { Clock, Star, TrendingUp } from 'lucide-react';
import { ToolCard } from '../components/ToolCard';
import { TopRanking } from '../components/TopRanking';
import { AdSlot } from '../components/AdSlot';
import { useFavorites } from '../hooks/useFavorites';
import toolsData from '../data/tools.json';
import type { Tool } from '../types';

interface HomePageProps {
  searchQuery: string;
  selectedCategory: string | null;
  selectedSubCategory: string | null;
}

type SortType = 'popular' | 'newest' | 'name';

export function HomePage({ searchQuery, selectedCategory, selectedSubCategory }: HomePageProps) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const [sortBy, setSortBy] = useState<SortType>('popular');
  const tools = toolsData as Tool[];

  const filteredTools = useMemo(() => {
    let filtered = tools.filter((tool) => {
      const matchesSearch =
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory ? tool.categoryId === selectedCategory : true;
      const matchesSubCategory = selectedSubCategory ? tool.subCategoryId === selectedSubCategory : true;

      return matchesSearch && matchesCategory && matchesSubCategory;
    });

    switch (sortBy) {
      case 'popular':
        filtered = filtered.sort((a, b) => b.views - a.views);
        break;
      case 'newest':
        filtered = filtered.sort((a, b) => parseInt(b.id, 10) - parseInt(a.id, 10));
        break;
      case 'name':
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name, 'zh-CN'));
        break;
    }

    return filtered;
  }, [tools, searchQuery, selectedCategory, selectedSubCategory, sortBy]);

  return (
    <div className="mx-auto flex max-w-[1600px] gap-8 p-6">
      <div className="min-w-0 flex-1">
        <AdSlot />

        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h1 className="text-[2.35rem]">
            {selectedCategory ? '分类结果' : '全部工具'}
            <span className="ml-3 font-sans text-sm font-medium uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
              共 {filteredTools.length} 个
            </span>
          </h1>

          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 text-sm uppercase tracking-[0.16em] text-[var(--text-tertiary)]">排序</span>
            <button
              onClick={() => setSortBy('popular')}
              className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                sortBy === 'popular' ? 'warm-chip-active' : 'warm-chip-neutral'
              }`}
            >
              <TrendingUp className="h-4 w-4" />
              热门
            </button>
            <button
              onClick={() => setSortBy('newest')}
              className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                sortBy === 'newest' ? 'warm-chip-active' : 'warm-chip-neutral'
              }`}
            >
              <Clock className="h-4 w-4" />
              最新
            </button>
            <button
              onClick={() => setSortBy('name')}
              className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                sortBy === 'name' ? 'warm-chip-active' : 'warm-chip-neutral'
              }`}
            >
              <Star className="h-4 w-4" />
              名称
            </button>
          </div>
        </div>

        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {filteredTools.map((tool, index) => (
              <ToolCard
                key={tool.id}
                tool={tool}
                index={index}
                isFavorite={isFavorite(tool.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="surface-card-quiet rounded-full p-8">
              <svg className="h-16 w-16 text-[var(--text-tertiary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mt-4 text-3xl">没有找到匹配的工具</h3>
            <p className="mt-2 text-[var(--text-secondary)]">试试换一个关键词，或者清空当前筛选条件。</p>
          </div>
        )}
      </div>

      <div className="hidden lg:block">
        <TopRanking tools={tools} />
      </div>
    </div>
  );
}
