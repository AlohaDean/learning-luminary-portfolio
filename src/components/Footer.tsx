
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
    <footer className="bg-nordic-darkGray text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="inline-block">
              <img 
                src="/lovable-uploads/714bd596-25ca-4447-9136-af5ee2c11829.png" 
                alt="Dean Ahlgren Logo" 
                className="h-12 w-auto" 
              />
            </Link>
            <p className="mt-4 text-gray-300 max-w-md">
              Building learning experiences that transcend screens—creating connections that transform lives.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-center md:text-right">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
            <Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link>
            <Link to="/photography" className="text-gray-300 hover:text-white transition-colors">Photography</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
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
