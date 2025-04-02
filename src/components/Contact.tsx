
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section className="py-24 bg-nordic-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">📬 Let's Connect</h2>
          <p className="text-lg md:text-xl mb-10 opacity-90">
            Whether you're building a new learning program, rethinking your onboarding, or need help aligning training with business goals—I'm here to help.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-nordic-blue px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300">
            <Mail className="mr-2" size={20} />
            <span>Contact Me</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
