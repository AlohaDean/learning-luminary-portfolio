
import { BlogPost } from '../../types/blog';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { formatDate } from '../../utils/dateUtils';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <Link to={`/blog/${post.slug}`} className="block">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
        <div className="h-48 overflow-hidden">
          <img 
            src={post.featuredImage} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
          />
        </div>
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <Calendar size={14} className="mr-1" />
            <span>{formatDate(post.publishedDate)}</span>
            <span className="mx-2">•</span>
            <span>{post.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</span>
          </div>
          <h3 className="text-xl font-medium text-nordic-blue hover:text-nordic-lightBlue transition-colors mb-2">{post.title}</h3>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">By {post.author}</span>
            <span className="text-nordic-blue text-sm font-medium">Read More →</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostCard;
