
import { BlogPost, BlogCategory, BlogCategoryInfo } from '../types/blog';

export const BLOG_CATEGORIES: BlogCategoryInfo[] = [
  {
    id: 'ai-technology',
    name: 'AI & Technology',
    description: 'Exploring the latest advancements in AI and their impact on learning and development'
  },
  {
    id: 'professional-development',
    name: 'Professional Development',
    description: 'Resources and insights for continuing education and career growth'
  },
  {
    id: 'leadership-management',
    name: 'Leadership & Management',
    description: 'Strategies for effective team leadership and organizational management'
  },
  {
    id: 'instructional-design',
    name: 'Instructional Design',
    description: 'Best practices and innovations in designing learning experiences'
  },
  {
    id: 'personal-growth',
    name: 'Personal Growth',
    description: 'Insights for personal development and lifelong learning'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Rise of the Instructional Technologist 2.0',
    slug: 'the-rise-of-instructional-technologist-2',
    excerpt: 'How the role of instructional designers has evolved in the digital age and what it means for the future of learning.',
    content: `
# The Rise of the Instructional Technologist 2.0

The landscape of educational technology continues to evolve at a breathtaking pace. As we navigate the post-pandemic era of learning, the role of the instructional technologist has undergone a significant transformation.

## Historical Context

Instructional technology has roots dating back to the early 20th century, but the modern incarnation began taking shape in the 1970s and 80s with computer-assisted instruction. By the early 2000s, the first wave of instructional technologists were primarily focused on:

- Creating basic digital learning materials
- Managing learning management systems
- Converting in-person training to online formats
- Troubleshooting technical issues

## The Evolution

Today's instructional technologists - what I call "version 2.0" - have evolved far beyond these foundational skills. The contemporary professional must possess:

- **Data analysis capabilities** to interpret learning metrics and improve outcomes
- **UX/UI expertise** to create intuitive, engaging learning experiences
- **AI integration knowledge** to leverage emerging technologies effectively
- **Multimedia production skills** spanning video, audio, and interactive content
- **Accessibility expertise** ensuring inclusive learning for all abilities

This evolution has been driven by several factors:

1. The proliferation of sophisticated authoring tools
2. Rising learner expectations for engaging experiences
3. Remote work necessitating more self-directed learning options
4. Advanced analytics providing deeper insights into learning effectiveness

## Looking Forward

The future instructional technologist will need to be even more adaptable, potentially incorporating:

- **AI content generation** supervised by human experts
- **VR/AR integration** for immersive learning scenarios
- **Adaptive learning paths** that autonomously adjust to individual progress
- **Blockchain credentialing** for secure, verifiable skill certification

Organizations that recognize and support this evolution will be better positioned to build learning ecosystems that truly transform performance and drive innovation.

*What changes have you observed in instructional technology roles? I'd love to hear your thoughts in the comments below.*
    `,
    featuredImage: '/lovable-uploads/053b2e75-633b-403b-ab81-690e20db183b.png',
    category: 'instructional-design',
    author: 'Dean Ahlgren',
    publishedDate: '2025-12-03',
    isPublished: true,
    isDraft: false,
    tags: ['instructional design', 'technology', 'e-learning', 'professional development']
  }
];

// Helper function to get a blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return BLOG_POSTS.find(post => post.slug === slug);
};

// Helper function to get blog posts by category
export const getBlogPostsByCategory = (category: BlogCategory | 'all'): BlogPost[] => {
  if (category === 'all') {
    return BLOG_POSTS.filter(post => post.isPublished);
  }
  return BLOG_POSTS.filter(post => post.category === category && post.isPublished);
};

// Helper function to search blog posts
export const searchBlogPosts = (query: string): BlogPost[] => {
  const lowercaseQuery = query.toLowerCase();
  return BLOG_POSTS.filter(post => 
    (post.title.toLowerCase().includes(lowercaseQuery) || 
     post.content.toLowerCase().includes(lowercaseQuery) ||
     post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))) &&
    post.isPublished
  );
};
