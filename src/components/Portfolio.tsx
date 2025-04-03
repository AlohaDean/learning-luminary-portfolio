
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PortfolioItem } from '../types';

const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'The History of Hangul',
    client: 'Korean Language Studies',
    description: 'Hangul (한글) is the Korean alphabet, created in 1443 during the reign of King Sejong the Great. Before Hangul, Koreans used complex Chinese characters (Hanja) which were difficult for common people to learn.',
    technologies: ['Language', 'History', 'Cultural Studies'],
    category: 'educational'
  }
];

const Portfolio = () => {
  const [displayedItems, setDisplayedItems] = useState<PortfolioItem[]>([]);
  
  useEffect(() => {
    setDisplayedItems(portfolioItems.slice(0, 1));
  }, []);
  
  return (
    <section className="py-24 bg-nordic-offWhite">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="section-title">Featured Projects</h2>
          <div className="w-20 h-1 bg-nordic-gold mx-auto mt-4 mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of my most innovative projects in e-learning development and instructional design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 mb-12">
          {displayedItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              {/* Styled div instead of image */}
              <div className="h-48 bg-gradient-to-br from-nordic-blue to-nordic-lightBlue p-6 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-3xl font-medium text-white mb-2">한글</h3>
                  <p className="text-white text-opacity-90">Hangul</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-nordic-blue mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{item.client}</p>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-nordic-blue bg-opacity-10 text-nordic-blue px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center text-nordic-blue hover:text-nordic-lightBlue transition-colors duration-300"
          >
            <span className="mr-2">View All Projects</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
