
import { Link } from 'react-router-dom';
import { Mail, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="py-12 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/62b4b6e2-9859-4568-83de-57092435d12f.png" 
          alt="Footer Background" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="inline-block">
              <img 
                src="/lovable-uploads/a1a568b6-5f11-4995-8734-81d6595f64a8.png" 
                alt="Ahlgren Academy Logo" 
                className="h-16 w-auto" 
              />
            </Link>
            <p className="mt-4 text-gray-700 max-w-md">
              Building learning experiences that transcend screens—creating connections that transform lives.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-center md:text-right">
            <Link to="/" className="text-gray-700 hover:text-nordic-blue transition-colors">Home</Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-nordic-blue transition-colors">Portfolio</Link>
            <Link to="/blog" className="text-gray-700 hover:text-nordic-blue transition-colors">Blog</Link>
            <Link to="/contact" className="text-gray-700 hover:text-nordic-blue transition-colors">Contact</Link>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-300/50 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-700 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Ahlgren Academy. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="mailto:contact@deanahlgren.com" className="text-gray-700 hover:text-nordic-blue transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-nordic-blue transition-colors">
              <Linkedin size={20} />
            </a>
            <button onClick={scrollToTop} className="text-gray-700 hover:text-nordic-blue transition-colors">
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
