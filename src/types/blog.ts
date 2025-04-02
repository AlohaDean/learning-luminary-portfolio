
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: BlogCategory;
  author: string;
  publishedDate: string;
  isPublished: boolean;
  isDraft: boolean;
  scheduledDate?: string;
  tags: string[];
}

export type BlogCategory = 
  | 'ai-technology'
  | 'professional-development'
  | 'leadership-management'
  | 'instructional-design'
  | 'personal-growth';

export interface BlogCategoryInfo {
  id: BlogCategory;
  name: string;
  description: string;
}
