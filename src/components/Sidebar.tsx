"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import * as Icons from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/src/config/site";
import type { CategoryItem, SubCategoryItem } from "@/src/types";

const categoryIcons: Record<string, Icons.LucideIcon> = {
  Flame: Icons.Flame,
  PencilLine: Icons.PencilLine,
  Presentation: Icons.Presentation,
  Image: Icons.Image,
  Video: Icons.Video,
  Briefcase: Icons.Briefcase,
  Code2: Icons.Code2,
  Palette: Icons.Palette,
  Mic2: Icons.Mic2,
  Gamepad2: Icons.Gamepad2,
  FileUser: Icons.FileUser,
  Languages: Icons.Languages,
  GraduationCap: Icons.GraduationCap,
  Scale: Icons.Scale,
  ShoppingBag: Icons.ShoppingBag,
  BadgeDollarSign: Icons.BadgeDollarSign,
  Megaphone: Icons.Megaphone,
  Bot: Icons.Bot,
  Stethoscope: Icons.Stethoscope
};

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  categories: CategoryItem[];
  selectedCategoryId: string | null;
  selectedSubCategoryId: string | null;
  onSelectAll: () => void;
  onSelectCategory: (categoryId: string) => void;
  onSelectSubCategory: (categoryId: string, subCategoryId: string) => void;
  logoText: string;
}

export function Sidebar({
  collapsed,
  onToggle,
  categories,
  selectedCategoryId,
  selectedSubCategoryId,
  onSelectAll,
  onSelectCategory,
  onSelectSubCategory,
  logoText
}: SidebarProps) {
  const [expandedParents, setExpandedParents] = useState<string[]>([]);
  const [expandedChildren, setExpandedChildren] = useState<string[]>([]);

  const expandedSet = useMemo(() => new Set(expandedParents), [expandedParents]);
  const expandedChildSet = useMemo(() => new Set(expandedChildren), [expandedChildren]);

  const toggleParent = (id: string) => {
    setExpandedParents((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleChild = (id: string) => {
    setExpandedChildren((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const renderSubNodes = (
    categoryId: string,
    nodes: SubCategoryItem[],
    level = 1
  ) => {
    return nodes.map((sub) => {
      const hasChildren = Boolean(sub.subCategories?.length);
      const isExpanded = expandedChildSet.has(sub.id);
      return (
        <div key={sub.id} className={`mt-1 ${level > 1 ? "ml-4" : ""}`}>
          <button
            type="button"
            className={`flex w-full items-center justify-between rounded-md px-2 py-1 text-left text-xs ${
              selectedSubCategoryId === sub.id
                ? "bg-blue-100 text-blue-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
            onClick={() => {
              if (hasChildren) {
                toggleChild(sub.id);
              } else {
                onSelectSubCategory(categoryId, sub.id);
              }
            }}
            aria-expanded={hasChildren ? isExpanded : undefined}
          >
            <span>{sub.name}</span>
            {hasChildren ? (
              <Icons.ChevronRight
                className={`h-3.5 w-3.5 transition-transform duration-200 ease-out ${
                  isExpanded ? "rotate-90" : ""
                }`}
              />
            ) : null}
          </button>

          <AnimatePresence initial={false}>
            {hasChildren && isExpanded ? (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="ml-4 overflow-hidden border-l border-slate-200 pl-2"
              >
                {renderSubNodes(categoryId, sub.subCategories ?? [], level + 1)}
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      );
    });
  };

  return (
    <aside
      className={`sticky top-16 h-[calc(100vh-64px)] border-r border-slate-200 bg-white transition-all ${
        collapsed ? "w-16" : "w-72"
      }`}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-slate-100 p-3">
          {collapsed ? (
            <span className="mx-auto rounded-lg bg-blue-600 px-2 py-1 text-xs font-bold text-white">智</span>
          ) : (
            <span className="text-sm font-semibold text-slate-900">{logoText}</span>
          )}
          <button
            type="button"
            onClick={onToggle}
            className="rounded-md p-1 text-slate-500 hover:bg-slate-100"
            aria-label="切换侧边栏"
          >
            {collapsed ? <Icons.PanelLeftOpen className="h-4 w-4" /> : <Icons.PanelLeftClose className="h-4 w-4" />}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          <button
            type="button"
            onClick={onSelectAll}
            className={`mb-2 flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm ${
              !selectedCategoryId ? "bg-blue-50 text-blue-700" : "hover:bg-slate-100 text-slate-700"
            }`}
          >
            <Icons.House className="h-4 w-4 shrink-0" />
            {!collapsed && "全部工具"}
          </button>

          {categories.map((category) => {
            const Icon = categoryIcons[category.icon ?? ""] ?? Icons.Folder;
            const activeCategory = selectedCategoryId === category.id;
            const hasChildren = Boolean(category.subCategories?.length);
            const expanded = expandedSet.has(category.id);
            return (
              <div key={category.id} className="mb-1">
                <button
                  type="button"
                  onClick={() => {
                    onSelectCategory(category.id);
                    if (hasChildren) toggleParent(category.id);
                  }}
                  className={`flex w-full items-center justify-between gap-2 rounded-lg px-2 py-2 text-left text-sm ${
                    activeCategory ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-100"
                  }`}
                  aria-expanded={hasChildren ? expanded : undefined}
                >
                  <span className="flex min-w-0 items-center gap-2">
                    <Icon className="h-4 w-4 shrink-0" />
                    {!collapsed && <span className="truncate">{category.name}</span>}
                  </span>
                  {!collapsed && hasChildren ? (
                    <Icons.ChevronRight
                      className={`h-4 w-4 shrink-0 transition-transform duration-200 ease-out ${
                        expanded ? "rotate-90" : ""
                      }`}
                    />
                  ) : null}
                </button>

                <AnimatePresence initial={false}>
                  {!collapsed && hasChildren && expanded ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="ml-6 overflow-hidden border-l border-slate-200 pl-2"
                    >
                      {renderSubNodes(category.id, category.subCategories ?? [])}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {!collapsed && (
          <div className="border-t border-slate-100 p-3 text-xs text-slate-500">
            <Link href={siteConfig.footer.feedbackLink}>意见反馈</Link>
          </div>
        )}
      </div>
    </aside>
  );
}
