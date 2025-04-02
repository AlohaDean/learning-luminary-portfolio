
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-nordic-blue to-transparent opacity-20 z-10"></div>
        <img 
          src="/lovable-uploads/a9646a40-6333-4a65-b6b7-8c9aa06db7a5.png" 
          alt="Geometric background" 
          className="w-full h-full object-cover opacity-20" 
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-nordic-blue mb-6">
              Creating life-changing connections through immersive learning.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              I'm Dean Ahlgren—an instructional designer and e-learning developer with over 20 years of experience creating meaningful learning solutions. My approach blends technology, creativity, and compassion to help teams thrive in fast-paced environments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/portfolio" className="btn-primary">
                View My Work
              </Link>
              <Link to="/contact" className="btn-secondary">
                Connect with Me
              </Link>
            </div>
          </div>
          <div className="flex-1 max-w-md">
            <div className="rounded-lg overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="/lovable-uploads/4ee4f273-2293-4298-a228-6233895f833b.png" 
                alt="Dean Ahlgren" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <button 
            onClick={scrollToNextSection}
            className="text-nordic-blue hover:text-nordic-lightBlue transition-colors duration-300"
          >
            <ArrowDown size={36} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
