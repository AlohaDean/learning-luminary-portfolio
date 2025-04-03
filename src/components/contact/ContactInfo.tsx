
import { Mail, Linkedin, Calendar } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-start">
        <Mail className="text-nordic-gold mt-1 mr-4 flex-shrink-0" size={20} />
        <div>
          <h3 className="text-lg font-medium text-nordic-blue mb-2">Email</h3>
          <a 
            href="mailto:contact@deanahlgren.com" 
            className="text-gray-700 hover:text-nordic-blue transition-colors"
          >
            contact@deanahlgren.com
          </a>
        </div>
      </div>
      
      <div className="flex items-start">
        <Linkedin className="text-nordic-gold mt-1 mr-4 flex-shrink-0" size={20} />
        <div>
          <h3 className="text-lg font-medium text-nordic-blue mb-2">LinkedIn</h3>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-nordic-blue transition-colors"
          >
            linkedin.com/in/dean-ahlgren
          </a>
        </div>
      </div>
      
      <div className="flex items-start">
        <Calendar className="text-nordic-gold mt-1 mr-4 flex-shrink-0" size={20} />
        <div>
          <h3 className="text-lg font-medium text-nordic-blue mb-2">Schedule a Meeting</h3>
          <a 
            href="#" 
            className="text-gray-700 hover:text-nordic-blue transition-colors"
          >
            Schedule a 30-minute consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
