
import { Link, useLocation } from 'react-router-dom';
import { File, Settings, LogOut } from 'lucide-react';

const AdminSidebar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="w-64 bg-white h-full shadow-sm flex flex-col">
      <div className="p-4 border-b">
        <Link to="/" className="flex items-center">
          <span className="text-nordic-blue text-xl font-bold">Admin Panel</span>
        </Link>
      </div>
      
      <div className="flex-1 py-6 px-4">
        <nav className="space-y-1">
          <Link
            to="/admin/posts"
            className={`flex items-center px-4 py-3 rounded-md transition-colors ${
              isActive('/admin/posts') ? 
              'bg-nordic-blue text-white' : 
              'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <File size={18} className="mr-3" />
            Blog Posts
          </Link>
          
          <Link
            to="/admin/settings"
            className={`flex items-center px-4 py-3 rounded-md transition-colors ${
              isActive('/admin/settings') ? 
              'bg-nordic-blue text-white' : 
              'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Settings size={18} className="mr-3" />
            Settings
          </Link>
        </nav>
      </div>
      
      <div className="p-4 border-t">
        <button
          className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
          onClick={() => {/* Handle logout */}}
        >
          <LogOut size={18} className="mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
