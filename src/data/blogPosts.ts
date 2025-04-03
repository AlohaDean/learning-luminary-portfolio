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
    title: 'The Rise of the Instructional Technologist 2.0: Why E-Learning Pros Need to Speak AI',
    slug: 'the-rise-of-instructional-technologist-2',
    excerpt: 'How the role of instructional designers has evolved in the digital age and what it means for the future of learning.',
    content: `
# The Rise of the Instructional Technologist 2.0: Why E-Learning Pros Need to Speak AI

Not long ago, knowing your way around an LMS and a decent authoring tool was enough to keep your e-learning chops sharp. But the game has changed.

We've entered the era of Instructional Technologist 2.0, where e-learning professionals are expected to do more than just design and deploy courses—we're now operating in a space where AI fluency is becoming the new digital literacy.

## The New Skill Stack: Design + Tech + AI

Let's be real—AI isn't coming for our jobs. But it is coming for the version of our job that hasn't evolved.

Right now, learning and development teams are leveraging AI to:

* Generate quiz banks and first-draft assessments
* Summarize SME interview transcripts
* Create scenario-based prompts for branching modules
* Analyze learner data to recommend next steps

And yet, I still meet brilliant designers who feel like they're on the outside looking in.

## It's Not Rocket Science. It's Prompt Science.

You don't need a degree in data science to get started. What you do need is a basic understanding of:

* Prompt engineering – How to write clear, structured requests to get reliable outputs from AI tools
* Workflow automation – Using tools like Zapier or Make to connect apps and eliminate repetitive work
* AI ethics – Understanding where AI belongs (and doesn't) in learner-centered design

When I started dabbling with AI, I made a habit of running small, low-risk experiments. I used ChatGPT to help reword complex safety standards into plain English for a construction course. I tested a branching chatbot prototype using a no-code builder. I rewrote learning objectives using three different AI tones and compared the results with the SME. It wasn't about replacing my judgment—it was about augmenting it.

## 💡 Daily Tip from the Field: My YouTube Workflow for Staying Current

One of the most effective habits I've picked up is using YouTube as my personal AI radar. I regularly watch videos from creators who demo new features, tools, or workflows—often within a day or two of release. This helps me catch updates well before they show up in articles or official documentation.

Not all content is useful (some creators are clearly in it for the clicks), but there are absolutely experts out there who give away incredible insights for free.

Here's how I make it work:

1. Use AI to transcribe the video, then summarize it yourself. This helps me absorb the information better and catch details I missed on the first watch.
2. Pause and try things immediately—if a creator demonstrates a new feature or tool, I apply it in real-time.
3. Take quick notes for later if I can't try it right away. I set a reminder to review those notes once a week. It's wild how much value comes back when you revisit ideas with fresh eyes.

It's not about watching more—it's about engaging smarter.

## Final Thought

The best instructional designers I know are curious, flexible, and always learning. AI doesn't change that—it amplifies it.

So if you're still watching from the sidelines, consider this your nudge. You don't need to become an AI expert overnight. But learning to "speak AI" might be the most valuable skill you add to your toolkit this year.

After all, the future of learning is already here. We just have to design for it.
    `,
    featuredImage: '/lovable-uploads/1af08880-5ae8-4e52-9421-43c978db4317.png',
    category: 'instructional-design',
    author: 'Dean Ahlgren',
    publishedDate: '2025-12-03',
    isPublished: true,
    isDraft: false,
    tags: ['instructional design', 'technology', 'e-learning', 'professional development', 'AI']
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
