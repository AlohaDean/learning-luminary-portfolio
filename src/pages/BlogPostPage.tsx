
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogSidebar from '../components/blog/BlogSidebar';
import BlogContent from '../components/blog/BlogContent';
import CommentSection from '../components/blog/CommentSection';
import { getBlogPostBySlug } from '../data/blogPosts';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
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
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="md:w-3/4">
              <BlogContent post={post} />
              <CommentSection postId={post.id} />
            </div>
            
            {/* Sidebar */}
            <div className="md:w-1/4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPostPage;
