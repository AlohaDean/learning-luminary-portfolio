
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/d53dee14-ecaa-4b5a-9052-e69a8bfc1d0f.png" 
            alt="Dean Ahlgren Academy" 
            className="h-12" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active-nav-link' : ''}`}>Home</Link>
          <Link to="/portfolio" className={`nav-link ${isActive('/portfolio') ? 'active-nav-link' : ''}`}>Portfolio</Link>
          <Link to="/blog" className={`nav-link ${isActive('/blog') || isActive('/photography') ? 'active-nav-link' : ''}`}>Blog</Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active-nav-link' : ''}`}>Contact</Link>
        </nav>

        {/* Mobile Navigation Button */}
        <button onClick={toggleMenu} className="md:hidden text-nordic-blue">
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className={`py-2 px-4 ${isActive('/') ? 'text-nordic-blue font-medium' : 'text-foreground'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/portfolio" 
                className={`py-2 px-4 ${isActive('/portfolio') ? 'text-nordic-blue font-medium' : 'text-foreground'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link 
                to="/blog" 
                className={`py-2 px-4 ${isActive('/blog') || isActive('/photography') ? 'text-nordic-blue font-medium' : 'text-foreground'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className={`py-2 px-4 ${isActive('/contact') ? 'text-nordic-blue font-medium' : 'text-foreground'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
