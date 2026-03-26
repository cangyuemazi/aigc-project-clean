export interface SubCategoryItem {
  id: string;
  name: string;
  categoryId?: string;
  subCategories?: SubCategoryItem[];
}

export interface CategoryItem {
  id: string;
  name: string;
  icon?: string;
  subCategories?: SubCategoryItem[];
}

export interface ToolItem {
  id: string;
  name: string;
  description: string;
  url: string;
  logo?: string;
  categoryId: string;
  subCategoryId?: string;
  tags: string[];
  views: number;
}

export interface SiteLink {
  name: string;
  href: string;
}
