
export interface PortfolioItem {
  id: string;
  title: string;
  client?: string;
  description: string;
  technologies: string[];
  image: string;
  category: 'corporate' | 'educational' | 'interactive' | 'ai';
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  quote: string;
  project?: string;
  image?: string;
}

export interface PhotoItem {
  id: string;
  title: string;
  description: string;
  image: string;
  isWallpaper?: boolean;
}
