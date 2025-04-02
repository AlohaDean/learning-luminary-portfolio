
import { BlogPost } from '../../types/blog';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { formatDate } from '../../utils/dateUtils';
import { Card, CardContent } from '@/components/ui/card';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <Link to={`/blog/${post.slug}`} className="block">
      <Card className="h-full overflow-hidden hover:shadow-md transition-all duration-300">
        <div className="h-48 overflow-hidden">
          <img 
            src={post.featuredImage} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
          />
        </div>
        <CardContent className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <Calendar size={14} className="mr-1" />
            <span>{formatDate(post.publishedDate)}</span>
            <span className="mx-2">•</span>
            <span>{post.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</span>
          </div>
          <h3 className="text-xl font-medium text-nordic-blue mb-2">{post.title}</h3>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">By {post.author}</span>
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 2).map((tag, index) => (
                <span 
                  key={index} 
                  className="text-xs bg-nordic-blue bg-opacity-10 text-nordic-blue px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogPostCard;
