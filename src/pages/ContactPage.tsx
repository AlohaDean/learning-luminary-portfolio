import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, Mail, Linkedin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <section className="relative py-16">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-nordic-blue via-nordic-lightBlue to-transparent opacity-70 z-10"></div>
            <img 
              src="/lovable-uploads/a9646a40-6333-4a65-b6b7-8c9aa06db7a5.png" 
              alt="Contact background" 
              className="w-full h-full object-cover opacity-30" 
            />
          </div>
          <div className="container mx-auto px-4 relative z-20">
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6">Contact Me</h1>
            <p className="text-lg max-w-2xl text-white opacity-90">
              Let's discuss how I can help with your e-learning and instructional design needs.
            </p>
          </div>
        </section>

        <div className="flex flex-1 max-w-sm mx-auto my-8">
          <div className="rounded-lg overflow-hidden border-4 border-white shadow-xl">
            <img 
              src="/lovable-uploads/4ee4f273-2293-4298-a228-6233895f833b.png" 
              alt="Dean Ahlgren" 
              className="w-full h-auto"
            />
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="section-title">Get in Touch</h2>
              <div className="w-20 h-1 bg-nordic-gold mx-auto mt-4 mb-8"></div>
              <p className="text-gray-600">
                Whether you're building a new learning program, reimagining your onboarding process, or just need someone to help align training with your business goals—I'm here to help.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="mb-12">                  
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
                </div>
                
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/ba83da5e-c919-4514-af6f-53211d710a79.png" 
                    alt="Dean Ahlgren" 
                    className="w-full h-auto" 
                  />
                </div>
              </div>
              
              <div className="bg-nordic-offWhite p-8 rounded-lg">
                <h2 className="text-2xl font-light text-nordic-blue mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-nordic-blue"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-nordic-blue"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-nordic-blue"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-nordic-blue"
                    />
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2 bg-nordic-blue text-white rounded hover:bg-opacity-90 transition-all duration-300 disabled:opacity-70"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        
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
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
