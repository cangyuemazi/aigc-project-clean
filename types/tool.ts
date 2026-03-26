export type Locale = "zh" | "en";

export type Category =
  | "writing"
  | "design"
  | "programming"
  | "video"
  | "translation";

export interface ToolItem {
  id: string;
  slug: string;
  name: string;
  description: Record<Locale, string>;
  logo: string;
  url: string;
  category: Category;
  tags: string[];
  views: number;
  publishDate: string;
  free: boolean;
  trending: boolean;
  sponsored?: boolean;
}

export interface ToolSubmission {
  id: string;
  name: string;
  url: string;
  category: Category;
  description: string;
  contactEmail: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
}
