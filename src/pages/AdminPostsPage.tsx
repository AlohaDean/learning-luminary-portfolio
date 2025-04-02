import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogPostList from '../components/admin/BlogPostList';
import BlogPostEditor from '../components/admin/BlogPostEditor';
import { BlogPost } from '../types/blog';
import { BLOG_POSTS } from '../data/blogPosts';
import { toast } from '@/hooks/use-toast';

const AdminPostsPage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>(BLOG_POSTS);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  
  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setIsCreating(false);
  };
  
  const handleNewPost = () => {
    setIsCreating(true);
    setEditingPost(null);
  };
  
  const handleSave = (postData: Partial<BlogPost>) => {
    if (editingPost) {
      // Update existing post
      const updatedPosts = posts.map(post => 
        post.id === editingPost.id ? { ...post, ...postData } : post
      );
      setPosts(updatedPosts);
      toast({
        title: "Post updated",
        description: "The post has been successfully updated",
      });
    } else {
      // Create new post
      const newPost: BlogPost = {
        id: Date.now().toString(),
        title: postData.title || 'Untitled',
        slug: postData.slug || 'untitled',
        excerpt: postData.excerpt || '',
        content: postData.content || '',
        featuredImage: postData.featuredImage || '',
        category: postData.category || 'instructional-design',
        author: 'Dean Ahlgren',
        publishedDate: postData.publishedDate || new Date().toISOString().split('T')[0],
        isPublished: postData.isPublished || false,
        isDraft: postData.isDraft || true,
        tags: postData.tags || []
      };
      
      setPosts([...posts, newPost]);
      toast({
        title: "Post created",
        description: "The post has been successfully created",
      });
    }
    
    // Reset state
    setEditingPost(null);
    setIsCreating(false);
  };
  
  const handleCancel = () => {
    setEditingPost(null);
    setIsCreating(false);
  };
  
  const handleView = (postId: string) => {
    const post = posts.find(p => p.id === postId);
    if (post) {
      window.open(`/blog/${post.slug}`, '_blank');
    }
  };
  
  const handleDelete = (postId: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(post => post.id !== postId));
      toast({
        title: "Post deleted",
        description: "The post has been successfully deleted",
      });
    }
  };
  
  // Show editor if creating or editing
  if (isCreating || editingPost) {
    return (
      <div>
        <h1 className="text-2xl font-medium text-nordic-blue mb-8">
          {isCreating ? "Create New Post" : "Edit Post"}
        </h1>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <BlogPostEditor
            post={editingPost || undefined}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        </div>
      </div>
    );
  }
  
  // Otherwise show post list
  return (
    <BlogPostList
      posts={posts}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onView={handleView}
      onNewPost={handleNewPost}
    />
  );
};

export default AdminPostsPage;
