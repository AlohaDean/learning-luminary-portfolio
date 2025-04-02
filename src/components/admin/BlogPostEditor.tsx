
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { BlogPost, BlogCategory } from '../../types/blog';
import { BLOG_CATEGORIES } from '../../data/blogPosts';
import { toast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface BlogPostEditorProps {
  post?: BlogPost;
  onSave: (post: Partial<BlogPost>) => void;
  onCancel: () => void;
}

const BlogPostEditor = ({ post, onSave, onCancel }: BlogPostEditorProps) => {
  const isEditing = !!post;
  
  const [title, setTitle] = useState(post?.title || '');
  const [slug, setSlug] = useState(post?.slug || '');
  const [excerpt, setExcerpt] = useState(post?.excerpt || '');
  const [content, setContent] = useState(post?.content || '');
  const [featuredImage, setFeaturedImage] = useState(post?.featuredImage || '');
  const [category, setCategory] = useState<BlogCategory>(post?.category || 'instructional-design');
  const [tags, setTags] = useState(post?.tags?.join(', ') || '');
  const [publishDate, setPublishDate] = useState<Date | undefined>(
    post?.publishedDate ? new Date(post.publishedDate) : undefined
  );
  const [isDraft, setIsDraft] = useState(post?.isDraft ?? true);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      toast({
        title: "Error",
        description: "Title and content are required",
        variant: "destructive"
      });
      return;
    }
    
    // Generate slug if empty
    const finalSlug = slug.trim() || title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-');
    
    const updatedPost: Partial<BlogPost> = {
      title,
      slug: finalSlug,
      excerpt,
      content,
      featuredImage,
      category,
      tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      publishedDate: publishDate ? format(publishDate, 'yyyy-MM-dd') : format(new Date(), 'yyyy-MM-dd'),
      isDraft,
      isPublished: !isDraft,
    };
    
    onSave(updatedPost);
  };
  
  const generateSlug = () => {
    if (!title.trim()) return;
    setSlug(title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-'));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          Title*
        </label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post title"
          required
        />
      </div>
      
      <div className="flex space-x-4">
        <div className="flex-1">
          <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">
            Slug
          </label>
          <div className="flex space-x-2">
            <Input
              id="slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="post-url-slug"
            />
            <Button 
              type="button" 
              variant="outline" 
              onClick={generateSlug}
              className="whitespace-nowrap"
            >
              Generate
            </Button>
          </div>
        </div>
        
        <div className="w-1/3">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Category*
          </label>
          <Select value={category} onValueChange={(value: BlogCategory) => setCategory(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {BLOG_CATEGORIES.map(cat => (
                <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div>
        <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
          Excerpt
        </label>
        <Textarea
          id="excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          placeholder="Brief description of the post"
          className="h-24"
        />
      </div>
      
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
          Content* (Markdown supported)
        </label>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your post content here..."
          className="min-h-[300px] font-mono"
          required
        />
      </div>
      
      <div>
        <label htmlFor="featuredImage" className="block text-sm font-medium text-gray-700 mb-1">
          Featured Image URL
        </label>
        <Input
          id="featuredImage"
          value={featuredImage}
          onChange={(e) => setFeaturedImage(e.target.value)}
          placeholder="https://example.com/image.jpg"
        />
        {featuredImage && (
          <div className="mt-2 h-40 w-full overflow-hidden rounded border">
            <img 
              src={featuredImage} 
              alt="Featured" 
              className="h-full w-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/placeholder.svg';
              }}
            />
          </div>
        )}
      </div>
      
      <div>
        <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">
          Tags (comma separated)
        </label>
        <Input
          id="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="tag1, tag2, tag3"
        />
      </div>
      
      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Publish Date
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <Calendar className="mr-2 h-4 w-4" />
                {publishDate ? format(publishDate, 'PPP') : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                mode="single"
                selected={publishDate}
                onSelect={setPublishDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <div className="flex space-x-4 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                checked={!isDraft}
                onChange={() => setIsDraft(false)}
                className="mr-2"
              />
              Publish
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={isDraft}
                onChange={() => setIsDraft(true)}
                className="mr-2"
              />
              Save as Draft
            </label>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end space-x-4 pt-4 border-t">
        <Button 
          type="button" 
          variant="outline" 
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button 
          type="submit"
          className="bg-nordic-blue hover:bg-opacity-90"
        >
          {isDraft ? 'Save Draft' : 'Publish Post'}
        </Button>
      </div>
    </form>
  );
};

export default BlogPostEditor;
