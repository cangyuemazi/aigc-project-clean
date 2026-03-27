import { useMemo } from 'react';
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

export function HomePage({ searchQuery, selectedCategory, selectedSubCategory }: HomePageProps) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const tools = toolsData as Tool[];

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory ? tool.categoryId === selectedCategory : true;
      const matchesSubCategory = selectedSubCategory ? tool.subCategoryId === selectedSubCategory : true;
      
      return matchesSearch && matchesCategory && matchesSubCategory;
    });
  }, [tools, searchQuery, selectedCategory, selectedSubCategory]);

  return (
    <div className="p-6 max-w-[1600px] mx-auto flex gap-8">
      <div className="flex-1 min-w-0">
        <AdSlot />
        
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            {selectedCategory ? '分类结果' : '全部工具'}
            <span className="ml-2 text-sm font-normal text-gray-500">
              共 {filteredTools.length} 个
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
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
      </div>
      
      <div className="hidden lg:block">
        <TopRanking tools={tools} />
      </div>
    </div>
  );
}
