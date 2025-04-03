
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '../contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

const AdminLoginPage = () => {
  const { login, isAuthenticated } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await login(username, password);
      toast({
        title: "Logged in successfully",
        description: "Welcome to the admin panel",
      });
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Invalid username or password",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  // Redirect if already logged in
  if (isAuthenticated) {
    return <Navigate to="/admin/posts" replace />;
  }
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-sm p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-medium text-nordic-blue mb-2">Admin Login</h1>
          <p className="text-gray-600">Sign in to access the admin panel</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="dean"
              required
              autoFocus
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          
          <div>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-nordic-blue hover:bg-opacity-90"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </div>
          
          <div className="text-center text-sm text-gray-500">
            <p>Demo credentials:</p>
            <p>Username: dean</p>
            <p>Password: daddy</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
