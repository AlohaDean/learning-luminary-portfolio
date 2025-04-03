
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'educational', label: 'Educational Courses' }
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

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
              {filteredItems.map(item => (
                <div 
                  key={item.id} 
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
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
                
                {/* Styled div instead of image */}
                <div className="h-64 bg-gradient-to-br from-nordic-blue to-nordic-lightBlue rounded mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-5xl font-medium text-white mb-3">한글</h3>
                    <p className="text-white text-opacity-90 text-xl">Hangul</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-2">Client: {selectedItem.client}</p>
                  <p className="text-gray-700 mb-4">{selectedItem.description}</p>
                  <p className="text-gray-700">
                    Hangul consists of 14 consonants and 10 vowels, designed scientifically to represent the sounds of the Korean language. King Sejong's creation was revolutionary because it was specifically designed to be easy to learn and use, unlike the complex Chinese characters that were previously used.
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
