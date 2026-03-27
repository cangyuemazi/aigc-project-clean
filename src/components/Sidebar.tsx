import { useState } from 'react';
import { ChevronRight, Search, X } from 'lucide-react';
import categoriesData from '../data/categories.json';
import type { Category, SubCategory } from '../types';

interface SidebarProps {
  selectedCategory: string | null;
  selectedSubCategory: string | null;
  onCategorySelect: (categoryId: string, subCategoryId?: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  isMobile: boolean;
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ 
  selectedCategory, 
  selectedSubCategory, 
  onCategorySelect,
  searchQuery,
  onSearchChange,
  isMobile,
  isOpen,
  onClose
}: SidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleCategoryClick = (category: Category, subCategory?: SubCategory) => {
    if (subCategory) {
      onCategorySelect(category.id, subCategory.id);
    } else {
      if (category.subCategories.length > 0) {
        toggleCategory(category.id);
      } else {
        onCategorySelect(category.id);
      }
    }
    if (isMobile) {
      onClose();
    }
  };

  const handleLogoClick = () => {
    window.location.href = '/';
    if (isMobile) {
      onClose();
    }
  };

  const filteredCategories = categoriesData as Category[];

  return (
    <>
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
      )}

      {!isMobile ? (
        <aside className="w-[280px] flex flex-col h-screen border-r border-gray-200/50 bg-white/80 backdrop-blur-xl">
          <div className="flex h-20 items-center justify-between px-6 border-b border-gray-200/50">
            <div 
              className="flex items-center gap-3 cursor-pointer transition-all"
              onClick={handleLogoClick}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30 transition-transform hover:scale-105">
                <span className="text-lg font-bold">AI</span>
              </div>
              <span className="text-xl font-bold text-gray-900 transition-colors hover:text-blue-600">智能零零AI工具</span>
            </div>
          </div>

          <div className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="搜索工具..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full rounded-2xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 shadow-sm transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            <div className="space-y-1">
              {filteredCategories.map((category) => (
                <div key={category.id} className="rounded-xl">
                  <button
                    onClick={() => handleCategoryClick(category)}
                    className={`
                      flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200
                      ${selectedCategory === category.id && !selectedSubCategory
                        ? 'bg-blue-50 text-blue-600 shadow-sm'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{category.icon}</span>
                      {category.name}
                    </div>
                    {category.subCategories.length > 0 && (
                      <ChevronRight 
                        className={`
                          h-4 w-4 transition-transform duration-200
                          ${expandedCategories.includes(category.id) ? 'rotate-90' : ''}
                        `}
                      />
                    )}
                  </button>

                  <div
                    className={`
                      overflow-hidden transition-all duration-200 ease-in-out
                      ${expandedCategories.includes(category.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                    `}
                  >
                    <div className="ml-10 mt-1 space-y-1 border-l-2 border-gray-100 pl-2">
                      {category.subCategories.map((subCategory) => (
                        <button
                          key={subCategory.id}
                          onClick={() => handleCategoryClick(category, subCategory)}
                          className={`
                            flex w-full items-center rounded-lg px-4 py-2.5 text-sm transition-all duration-200
                            ${selectedSubCategory === subCategory.id
                              ? 'bg-blue-50 text-blue-600 font-medium'
                              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                            }
                          `}
                        >
                          {subCategory.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200/50 px-6 py-4">
            <p className="text-center text-xs text-gray-400">
              © 2024 智能零零AI工具
            </p>
          </div>
        </aside>
      ) : (
        <aside 
          className={`
            fixed inset-y-0 left-0 z-50 flex h-screen w-[280px] flex-col bg-white/95 backdrop-blur-xl
            transition-transform duration-300 ease-in-out
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
        >
          <div className="flex h-20 items-center justify-between px-6 border-b border-gray-200/50">
            <div 
              className="flex items-center gap-3 cursor-pointer transition-all"
              onClick={handleLogoClick}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30 transition-transform hover:scale-105">
                <span className="text-lg font-bold">AI</span>
              </div>
              <span className="text-xl font-bold text-gray-900 transition-colors hover:text-blue-600">智能零零AI工具</span>
            </div>
            <button 
              onClick={onClose}
              className="rounded-lg p-2 hover:bg-gray-100 transition-colors"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          <div className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="搜索工具..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full rounded-2xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 shadow-sm transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            <div className="space-y-1">
              {filteredCategories.map((category) => (
                <div key={category.id} className="rounded-xl">
                  <button
                    onClick={() => handleCategoryClick(category)}
                    className={`
                      flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200
                      ${selectedCategory === category.id && !selectedSubCategory
                        ? 'bg-blue-50 text-blue-600 shadow-sm'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{category.icon}</span>
                      {category.name}
                    </div>
                    {category.subCategories.length > 0 && (
                      <ChevronRight 
                        className={`
                          h-4 w-4 transition-transform duration-200
                          ${expandedCategories.includes(category.id) ? 'rotate-90' : ''}
                        `}
                      />
                    )}
                  </button>

                  <div
                    className={`
                      overflow-hidden transition-all duration-200 ease-in-out
                      ${expandedCategories.includes(category.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                    `}
                  >
                    <div className="ml-10 mt-1 space-y-1 border-l-2 border-gray-100 pl-2">
                      {category.subCategories.map((subCategory) => (
                        <button
                          key={subCategory.id}
                          onClick={() => handleCategoryClick(category, subCategory)}
                          className={`
                            flex w-full items-center rounded-lg px-4 py-2.5 text-sm transition-all duration-200
                            ${selectedSubCategory === subCategory.id
                              ? 'bg-blue-50 text-blue-600 font-medium'
                              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                            }
                          `}
                        >
                          {subCategory.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200/50 px-6 py-4">
            <p className="text-center text-xs text-gray-400">
              © 2024 智能零零AI工具
            </p>
          </div>
        </aside>
      )}
    </>
  );
}
