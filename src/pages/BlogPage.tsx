
import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogSidebar from '../components/blog/BlogSidebar';
import BlogPostCard from '../components/blog/BlogPostCard';
import { BLOG_POSTS, getBlogPostsByCategory, searchBlogPosts } from '../data/blogPosts';
import { BlogCategory } from '../types/blog';
import { ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const BlogPage = () => {
  const { category } = useParams<{ category?: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  
  // Extract search query from URL
  useEffect(() => {
    const query = new URLSearchParams(location.search).get('q');
    if (query) {
      setSearchQuery(query);
    }
  }, [location.search]);
  
  // Get filtered posts based on category or search
  const filteredPosts = searchQuery
    ? searchBlogPosts(searchQuery)
    : category
      ? getBlogPostsByCategory(category as BlogCategory)
      : BLOG_POSTS.filter(post => post.isPublished);
  
  // Get page title based on filters
  const getPageTitle = () => {
    if (searchQuery) {
      return `Search: ${searchQuery}`;
    }
    if (category) {
      return category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
    return 'Blog';
  };
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <section className="relative py-16">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-nordic-blue to-transparent opacity-80 z-10"></div>
            <img 
              src="/lovable-uploads/f5d73a61-7ae0-48a4-94cb-6e97cd3da0d1.png" 
              alt="Blog background" 
              className="w-full h-full object-cover opacity-40" 
            />
          </div>
          <div className="container mx-auto px-4 relative z-20">
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6">{getPageTitle()}</h1>
            <p className="text-lg max-w-2xl text-white opacity-90">
              Insights on instructional design, e-learning development, and educational technology.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row">
              {/* Sidebar - Now as a collapsible on the left */}
              <div className="md:w-1/5 mb-6 md:mb-0">
                <Collapsible open={isOpen} onOpenChange={setIsOpen} className="md:sticky md:top-24">
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg shadow-sm mb-4">
                    <span className="font-medium text-nordic-blue">Categories</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="bg-white rounded-lg shadow-sm overflow-hidden transition-all">
                    <BlogSidebar />
                  </CollapsibleContent>
                </Collapsible>
              </div>
              
              {/* Main Content - Now full width */}
              <div className="md:w-4/5 md:pl-8">
                <div className="bg-white rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300 h-[75vh] overflow-auto">
                  <div className="p-8 relative">
                    {searchQuery && (
                      <div className="mb-8 p-4 bg-white rounded-lg shadow-sm">
                        <h2 className="text-xl text-gray-700">
                          {filteredPosts.length} {filteredPosts.length === 1 ? 'result' : 'results'} for "{searchQuery}"
                        </h2>
                        <button 
                          onClick={() => navigate('/blog')}
                          className="text-sm text-nordic-blue hover:underline mt-2"
                        >
                          Clear search
                        </button>
                      </div>
                    )}
                    
                    {filteredPosts.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map(post => (
                          <BlogPostCard key={post.id} post={post} />
                        ))}
                      </div>
                    ) : (
                      <div className="bg-white p-8 rounded-lg text-center">
                        <h3 className="text-xl font-medium text-gray-700 mb-2">No posts found</h3>
                        <p className="text-gray-600">
                          {searchQuery ? 
                            `We couldn't find any posts matching "${searchQuery}"` : 
                            'There are no posts in this category yet'}
                        </p>
                      </div>
                    )}
                    
                    {/* Book styling elements */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute left-0 inset-y-0 w-[3px] bg-gradient-to-r from-gray-300 to-transparent"></div>
                      <div className="absolute bottom-0 inset-x-0 h-[3px] bg-gradient-to-t from-gray-300 to-transparent"></div>
                      <div className="absolute right-0 inset-y-0 w-[3px] bg-gradient-to-l from-gray-300 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
