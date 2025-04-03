
const ContactHeader = () => {
  return (
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
  );
};

export default ContactHeader;
