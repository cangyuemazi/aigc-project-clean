import { useState, type ComponentType } from 'react';
import {
  Briefcase,
  ChevronRight,
  Code,
  Image,
  Music,
  Palette,
  PenTool,
  Presentation,
  Search,
  Video,
  X,
} from 'lucide-react';
import categoriesData from '../data/categories.json';
import type { Category, SubCategory } from '../types';

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  PenTool,
  Presentation,
  Image,
  Video,
  Briefcase,
  Code,
  Palette,
  Music,
};

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
  onClose,
}: SidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    );
  };

  const handleCategoryClick = (category: Category, subCategory?: SubCategory) => {
    if (subCategory) {
      onCategorySelect(category.id, subCategory.id);
    } else if (category.subCategories.length > 0) {
      toggleCategory(category.id);
      onCategorySelect(category.id);
    } else {
      onCategorySelect(category.id);
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

  const renderCategory = (category: Category) => {
    const IconComponent = iconMap[category.icon];
    const isSelected = selectedCategory === category.id && !selectedSubCategory;
    const isExpanded = expandedCategories.includes(category.id);

    return (
      <div key={category.id} className="rounded-xl">
        <button
          onClick={() => handleCategoryClick(category)}
          className={`flex w-full items-center justify-between rounded-[22px] px-4 py-3 text-sm font-medium transition-all duration-200 ${
            isSelected
              ? 'bg-[rgba(201,100,66,0.12)] text-[var(--primary-color)] shadow-sm'
              : 'text-[var(--text-secondary)] hover:bg-[var(--background-muted)] hover:text-[var(--text-primary)]'
          }`}
        >
          <div className="flex items-center gap-3">
            {IconComponent && (
              <span className="warm-icon-badge h-9 w-9 rounded-2xl">
                <IconComponent className="h-4 w-4" />
              </span>
            )}
            <span>{category.name}</span>
          </div>
          {category.subCategories.length > 0 && (
            <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`} />
          )}
        </button>

        <div className={`overflow-hidden transition-all duration-200 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="ml-12 mt-2 space-y-1 border-l border-[var(--border-color)] pl-4">
            {category.subCategories.map((subCategory) => (
              <button
                key={subCategory.id}
                onClick={() => handleCategoryClick(category, subCategory)}
                className={`flex w-full items-center rounded-2xl px-4 py-2.5 text-sm transition-all duration-200 ${
                  selectedSubCategory === subCategory.id
                    ? 'bg-[rgba(201,100,66,0.1)] text-[var(--primary-color)] font-medium'
                    : 'text-[var(--text-secondary)] hover:bg-[rgba(239,231,217,0.72)] hover:text-[var(--text-primary)]'
                }`}
              >
                {subCategory.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const sidebarContent = (
    <>
      <div className="flex h-24 items-center justify-between border-b border-[var(--border-color)] px-6">
        <div className="flex cursor-pointer items-center gap-3 transition-all" onClick={handleLogoClick}>
          <div className="warm-brand-mark flex h-12 w-12 items-center justify-center rounded-[18px] transition-transform hover:scale-[1.03]">
            <span className="font-display text-lg font-semibold">AI</span>
          </div>
          <div>
            <p className="font-display text-xl">智能零零</p>
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--text-tertiary)]">AI tools directory</p>
          </div>
        </div>
        {isMobile && (
          <button onClick={onClose} className="warm-button-ghost !rounded-2xl !p-2.5" aria-label="关闭菜单">
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      <div className="p-6">
        <div className="surface-card-quiet relative rounded-[24px] p-1.5">
          <Search className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-tertiary)]" />
          <input
            type="text"
            placeholder="搜索工具、分类或描述"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="warm-input border-0 bg-transparent py-3 pl-10 pr-4 shadow-none"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-2">
        <div className="space-y-1">{filteredCategories.map(renderCategory)}</div>
      </div>

      <div className="border-t border-[var(--border-color)] px-6 py-4">
        <p className="text-center text-xs uppercase tracking-[0.18em] text-[var(--text-tertiary)]">© 2024 智能零零 AI 工具</p>
      </div>
    </>
  );

  return (
    <>
      {isMobile && isOpen && (
        <div className="fixed inset-0 z-40 bg-[#1f1d1a]/20 backdrop-blur-[2px] transition-opacity" onClick={onClose} />
      )}

      {!isMobile ? (
        <aside className="surface-panel fixed left-0 top-0 flex h-screen w-[280px] flex-col border-r border-[var(--border-color)]">
          {sidebarContent}
        </aside>
      ) : (
        <aside className={`surface-panel fixed inset-y-0 left-0 z-50 flex h-screen w-[280px] flex-col transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          {sidebarContent}
        </aside>
      )}
    </>
  );
}
