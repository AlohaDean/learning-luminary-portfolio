
import { Calendar } from 'lucide-react';

const AvailabilitySection = () => {
  return (
    <section className="py-16 bg-nordic-offWhite">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-light text-nordic-blue mb-4">Available For</h2>
          <div className="w-20 h-1 bg-nordic-gold mx-auto mt-4 mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <Calendar className="text-nordic-gold" size={32} />
            </div>
            <h3 className="text-xl font-medium text-nordic-blue mb-2">Guest Speaking</h3>
            <p className="text-gray-700">
              Educational technology conferences, webinars, and workshops.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <img 
                src="/lovable-uploads/fc34746d-bff5-4209-9cac-4aaabcf99c07.png" 
                alt="Consulting" 
                className="h-10 w-auto" 
              />
            </div>
            <h3 className="text-xl font-medium text-nordic-blue mb-2">Consulting</h3>
            <p className="text-gray-700">
              LMS implementation, workflow optimization, and e-learning strategy.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <img 
                src="/lovable-uploads/ec6d4ce9-13f9-4994-9043-f0d4c589f4e6.png" 
                alt="Collaboration" 
                className="h-10 w-auto" 
              />
            </div>
            <h3 className="text-xl font-medium text-nordic-blue mb-2">Collaboration</h3>
            <p className="text-gray-700">
              Joint projects in educational technology and learning design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailabilitySection;
