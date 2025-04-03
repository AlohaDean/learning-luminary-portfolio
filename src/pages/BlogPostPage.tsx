
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogSidebar from '../components/blog/BlogSidebar';
import BlogContent from '../components/blog/BlogContent';
import { getBlogPostBySlug } from '../data/blogPosts';
import { ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Card } from '@/components/ui/card';
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="md:w-1/4 lg:w-1/5">
              <div className="md:sticky md:top-24">
                <Collapsible open={isOpen} onOpenChange={setIsOpen} className="bg-white rounded-lg shadow-sm mb-4">
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4">
                    <span className="font-medium text-nordic-blue">Categories</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <BlogSidebar />
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="md:w-3/4 lg:w-4/5">
              <Card className="p-8">
                <BlogContent post={post} />
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPostPage;
