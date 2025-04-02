
import { useEffect } from 'react';
import { Calendar, User, Tag } from 'lucide-react';
import { BlogPost } from '../../types/blog';
import { formatDate } from '../../utils/dateUtils';
import ReactMarkdown from 'react-markdown';
import { Separator } from '@/components/ui/separator';
import SocialShareButtons from './SocialShareButtons';

interface BlogContentProps {
  post: BlogPost;
}

const BlogContent = ({ post }: BlogContentProps) => {
  useEffect(() => {
    // Set meta tags for SEO
    document.title = `${post.title} | Dean Ahlgren`;
    
    // You would typically update meta tags here
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', post.excerpt);
    }
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [post]);

  return (
    <article className="w-full">
      <h1 className="text-3xl md:text-4xl font-light text-nordic-blue mb-4">{post.title}</h1>
      
      <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 gap-y-2">
        <div className="flex items-center mr-4">
          <Calendar size={14} className="mr-1" />
          <span>{formatDate(post.publishedDate)}</span>
        </div>
        <div className="flex items-center mr-4">
          <User size={14} className="mr-1" />
          <span>{post.author}</span>
        </div>
        <div className="flex items-center">
          <Tag size={14} className="mr-1" />
          <span>{post.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</span>
        </div>
      </div>
      
      {post.featuredImage && (
        <div className="mb-8">
          <img 
            src={post.featuredImage} 
            alt={post.title}
            className="w-full h-auto rounded-md" 
          />
        </div>
      )}
      
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
      
      <Separator className="my-8" />
      
      <div className="flex flex-wrap items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Tags:</h4>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span 
                key={index}
                className="inline-block bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <SocialShareButtons title={post.title} />
      </div>
    </article>
  );
};

export default BlogContent;
