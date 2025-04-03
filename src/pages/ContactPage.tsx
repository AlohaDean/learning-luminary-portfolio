
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactHeader from '../components/contact/ContactHeader';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import AvailabilitySection from '../components/contact/AvailabilitySection';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <ContactHeader />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Message and Form */}
              <div>
                <div className="mb-8">
                  <h2 className="section-title">Let's Connect</h2>
                  <div className="w-20 h-1 bg-nordic-gold mt-4 mb-6"></div>
                  <p className="text-gray-600 mb-8">
                    Whether you're building a new learning program, rethinking your onboarding, or need help aligning training with business goals—I'm here to help.
                  </p>
                
                  {/* Contact Form */}
                  <ContactForm />
                </div>
              </div>
              
              {/* Right Column - Image and Contact Info */}
              <div>
                {/* Profile image at the top */}
                <div className="relative w-full md:max-w-sm mx-auto mb-10">
                  <div className="absolute inset-0 bg-white shadow-xl rounded-xl"></div>
                  <div className="relative overflow-hidden rounded-xl">
                    <img 
                      src="/lovable-uploads/47f3f70d-6171-4d8c-98c6-737cee3097a0.png" 
                      alt="Dean Ahlgren" 
                      className="w-full h-auto" 
                    />
                    <div className="absolute inset-0 shadow-inner pointer-events-none border-4 border-white rounded-xl"></div>
                  </div>
                </div>
                
                {/* Contact information */}
                <div className="mb-12">                  
                  <ContactInfo />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <AvailabilitySection />
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
