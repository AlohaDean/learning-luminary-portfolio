
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PortfolioItem } from '../types';

const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Foundation-Level Design Course',
    client: 'Academy of Art University',
    description: 'Interactive course helping students build essential skills in design principles and techniques.',
    technologies: ['Articulate 360', 'Adobe Creative Suite', 'D2L Brightspace'],
    image: '/lovable-uploads/77905c03-a0cb-45c3-8d10-cbe7f1efd5a4.png',
    category: 'educational'
  },
  {
    id: '2',
    title: 'VR Car Design Visualization',
    client: 'Automotive Design Department',
    description: 'Innovative VR project transforming hand-drawn car designs into interactive 3D models.',
    technologies: ['Unity', 'VR Development', '3D Modeling'],
    image: '/lovable-uploads/12fef8d6-87bc-4fce-8d07-cbcf28a5ce25.png',
    category: 'interactive'
  },
  {
    id: '3',
    title: 'QA Workflow Optimization',
    client: 'Educational Technology Division',
    description: 'Interactive quality assurance tool replacing complex Excel spreadsheets with user-friendly interface.',
    technologies: ['AI Tools', 'LMS Integration', 'Workflow Automation'],
    image: '/lovable-uploads/6f8e9bd3-7a1b-4582-817e-6bd82fd0706c.png',
    category: 'ai'
  }
];

const Portfolio = () => {
  const [displayedItems, setDisplayedItems] = useState<PortfolioItem[]>([]);
  
  useEffect(() => {
    setDisplayedItems(portfolioItems.slice(0, 3));
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
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
