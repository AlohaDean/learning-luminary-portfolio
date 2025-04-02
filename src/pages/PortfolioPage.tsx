
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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
  },
  {
    id: '4',
    title: 'Healthcare Training Program',
    client: 'Medical Education Center',
    description: 'Comprehensive training program for healthcare professionals focusing on patient care protocols.',
    technologies: ['Video Production', 'Interactive Scenarios', 'Assessment Tools'],
    image: '/lovable-uploads/2040a3ac-9046-472e-95c3-bfa69d701184.png',
    category: 'corporate'
  },
  {
    id: '5',
    title: 'LMS Transition & Implementation',
    client: 'Academy of Art University',
    description: 'Led transition from custom LMS to D2L Brightspace, including faculty training and content migration.',
    technologies: ['D2L Brightspace', 'Adobe Experience Manager', 'Migration Tools'],
    image: '/lovable-uploads/ca965b12-8943-4ec0-8786-93376030e915.png',
    category: 'educational'
  },
  {
    id: '6',
    title: 'AI Learning Assistant',
    client: 'EdTech Startup',
    description: 'Developed an AI-powered learning assistant to provide personalized feedback to students.',
    technologies: ['NLP', 'Machine Learning', 'API Integration'],
    image: '/lovable-uploads/fc34746d-bff5-4209-9cac-4aaabcf99c07.png',
    category: 'ai'
  }
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'corporate', label: 'Corporate Training' },
  { id: 'educational', label: 'Educational Courses' },
  { id: 'interactive', label: 'Interactive Modules' },
  { id: 'ai', label: 'AI-Enhanced Learning' }
];

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <section className="relative py-16">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-nordic-blue to-transparent opacity-80 z-10"></div>
            <img 
              src="/lovable-uploads/f5d73a61-7ae0-48a4-94cb-6e97cd3da0d1.png" 
              alt="Portfolio background" 
              className="w-full h-full object-cover opacity-40" 
            />
          </div>
          <div className="container mx-auto px-4 relative z-20">
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6">Portfolio</h1>
            <p className="text-lg max-w-2xl text-white opacity-90">
              Explore a selection of my work in e-learning development, instructional design, and educational technology implementation.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-12 overflow-x-auto">
              <div className="flex space-x-4 min-w-max">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      activeCategory === category.id 
                        ? 'bg-nordic-blue text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map(item => (
                <div 
                  key={item.id} 
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
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
                    <div className="flex flex-wrap gap-2">
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

            {filteredItems.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500">No projects found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Modal for project details */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-medium text-nordic-blue">{selectedItem.title}</h2>
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    &times;
                  </button>
                </div>
                
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title} 
                  className="w-full h-auto mb-6 rounded" 
                />
                
                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-2">Client: {selectedItem.client}</p>
                  <p className="text-gray-700 mb-4">{selectedItem.description}</p>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Mauris euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-nordic-blue mb-2">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="text-sm bg-nordic-blue bg-opacity-10 text-nordic-blue px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-6 py-2 bg-nordic-blue text-white rounded hover:bg-opacity-90 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default PortfolioPage;
