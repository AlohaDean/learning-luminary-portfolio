
import { Star } from 'lucide-react';

const Experience = () => {
  return (
    <section className="py-24 bg-nordic-offWhite">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="section-title">💼 Experience Highlight</h2>
          <div className="w-20 h-1 bg-nordic-gold mx-auto mt-4 mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
            <div className="mb-6 flex justify-center">
              <Star className="text-nordic-gold" size={48} />
            </div>
            <h3 className="text-2xl font-light text-nordic-blue mb-4">Over 200 University Courses</h3>
            <p className="text-gray-700">
              From foundational design classes to immersive VR labs, I've developed curriculum that reaches across departments and disciplines.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
            <div className="mb-6 flex justify-center">
              <img 
                src="/lovable-uploads/ec6d4ce9-13f9-4994-9043-f0d4c589f4e6.png" 
                alt="Digital connectivity" 
                className="h-12 w-auto" 
              />
            </div>
            <h3 className="text-2xl font-light text-nordic-blue mb-4">18 Years Remote Experience</h3>
            <p className="text-gray-700">
              I was the first in my department to work remotely full-time. I built the workflows others now rely on.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
            <div className="mb-6 flex justify-center">
              <img 
                src="/lovable-uploads/fc34746d-bff5-4209-9cac-4aaabcf99c07.png" 
                alt="AI and innovation" 
                className="h-12 w-auto" 
              />
            </div>
            <h3 className="text-2xl font-light text-nordic-blue mb-4">AI-Enhanced Tools</h3>
            <p className="text-gray-700">
              I've used AI to speed up development and support instructional clarity—like transforming complex QA spreadsheets into interactive tools that actually work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
