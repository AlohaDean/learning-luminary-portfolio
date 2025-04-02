
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

interface Comment {
  id: string;
  name: string;
  date: string;
  content: string;
}

interface CommentSectionProps {
  postId: string;
}

const CommentSection = ({ postId }: CommentSectionProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !content.trim()) {
      toast({
        title: "Error",
        description: "Please fill out all fields",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      const newComment: Comment = {
        id: Date.now().toString(),
        name,
        date: new Date().toISOString(),
        content
      };
      
      setComments([...comments, newComment]);
      setName('');
      setEmail('');
      setContent('');
      setIsSubmitting(false);
      
      toast({
        title: "Comment posted",
        description: "Thank you for your comment!",
      });
    }, 1000);
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-light text-nordic-blue mb-6">Comments</h2>
      
      {comments.length === 0 ? (
        <div className="bg-gray-50 p-6 rounded-lg text-center mb-8">
          <p className="text-gray-600">No comments yet. Be the first to share your thoughts!</p>
        </div>
      ) : (
        <div className="space-y-6 mb-8">
          {comments.map(comment => (
            <div key={comment.id} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">{comment.name}</h4>
                <span className="text-sm text-gray-500">{new Date(comment.date).toLocaleDateString()}</span>
              </div>
              <p className="text-gray-700">{comment.content}</p>
            </div>
          ))}
        </div>
      )}
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-light text-nordic-blue mb-4">Leave a Comment</h3>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name*
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email* (will not be published)
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
              Comment*
            </label>
            <Textarea
              id="comment"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[120px]"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-nordic-blue hover:bg-opacity-90"
          >
            {isSubmitting ? "Posting..." : "Post Comment"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CommentSection;
