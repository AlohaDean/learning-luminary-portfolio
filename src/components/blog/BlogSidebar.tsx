
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BLOG_CATEGORIES } from '../../data/blogPosts';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';

const BlogSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/blog/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };
  
  const isActiveCategory = (categoryId: string) => {
    return location.pathname === `/blog/category/${categoryId}`;
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch} className="mb-6">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search blog posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pr-10"
          />
          <button
            type="submit" 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-nordic-blue"
          >
            <Search size={18} />
          </button>
        </div>
      </form>
      
      <ul className="space-y-1">
        <li>
          <Link 
            to="/blog"
            className={`block py-2 px-3 rounded transition-colors ${
              location.pathname === "/blog" ? 
              "bg-nordic-blue text-white" : 
              "text-gray-700 hover:bg-gray-100"
            }`}
          >
            All Posts
          </Link>
        </li>
        {BLOG_CATEGORIES.map(category => (
          <li key={category.id}>
            <Link 
              to={`/blog/category/${category.id}`}
              className={`block py-2 px-3 rounded transition-colors ${
                isActiveCategory(category.id) ? 
                "bg-nordic-blue text-white" : 
                "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogSidebar;
