
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
    <footer className="relative text-white py-12">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/bb70c31c-2958-4ce0-af8d-dca20b503c8e.png" 
          alt="Footer background" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-200 max-w-md">
              Creating life-changing connections through immersive learning
            </p>
          </div>
          
          <div className="flex space-x-6 justify-center">
            <Link to="/" className="text-gray-200 hover:text-white transition-colors">Home</Link>
            <Link to="/portfolio" className="text-gray-200 hover:text-white transition-colors">Portfolio</Link>
            <Link to="/blog" className="text-gray-200 hover:text-white transition-colors">Blog</Link>
            <Link to="/contact" className="text-gray-200 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200 border-opacity-20 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Dean Ahlgren. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="mailto:contact@deanahlgren.com" className="text-gray-300 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <button onClick={scrollToTop} className="text-gray-300 hover:text-white transition-colors">
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
