
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogSidebar from '../components/blog/BlogSidebar';
import BlogContent from '../components/blog/BlogContent';
import CommentSection from '../components/blog/CommentSection';
import { getBlogPostBySlug } from '../data/blogPosts';
import { ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useState } from 'react';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  
  // Find the blog post
  const post = getBlogPostBySlug(slug || '');
  
  // Redirect if post not found
  useEffect(() => {
    if (!post) {
      navigate('/blog', { replace: true });
    }
  }, [post, navigate]);
  
  if (!post) {
    return null;
  }
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 py-12">
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
              <div className="bg-white rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300 h-[75vh]">
                <div className="relative p-8 h-full overflow-auto">
                  <BlogContent post={post} />
                  <CommentSection postId={post.id} />
                  
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
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPostPage;
