
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PhotoItem } from '../types';
import { useToast } from "@/hooks/use-toast";

const photoItems: PhotoItem[] = [
  {
    id: '1',
    title: 'Mountain Serenity',
    description: 'Early morning light on distant mountains.',
    image: '/lovable-uploads/f4e1b818-8c6d-4698-a7d8-8bf8f21f92d9.png',
    isWallpaper: true
  },
  {
    id: '2',
    title: 'Blue Mountains',
    description: 'Geometric mountains in shades of blue.',
    image: '/lovable-uploads/2b0c6016-939b-415d-99cb-84996a5dd9a3.png',
    isWallpaper: true
  },
  {
    id: '3',
    title: 'Coastal Waves',
    description: 'Gentle waves forming abstract patterns.',
    image: '/lovable-uploads/e727046f-ec83-43f7-84c2-8fdfe5a3ee59.png',
    isWallpaper: true
  },
  {
    id: '4',
    title: 'Desert Dunes',
    description: 'Beautiful sand dunes at sunset.',
    image: '/lovable-uploads/77905c03-a0cb-45c3-8d10-cbe7f1efd5a4.png'
  },
  {
    id: '5',
    title: 'Blue Shapes',
    description: 'Abstract shapes in various blues.',
    image: '/lovable-uploads/2b0c6016-939b-415d-99cb-84996a5dd9a3.png'
  },
  {
    id: '6',
    title: 'Digital Inspiration',
    description: 'Network of ideas and digital connections.',
    image: '/lovable-uploads/fc34746d-bff5-4209-9cac-4aaabcf99c07.png'
  }
];

const Photography = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedImage, setSelectedImage] = useState<PhotoItem | null>(null);
  const { toast } = useToast();
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to receive monthly wallpapers.",
      });
      setIsSubmitting(false);
      setEmail('');
    }, 1500);
  };
  
  const handleDownload = (photo: PhotoItem) => {
    // In a real app, this would trigger a download
    toast({
      title: "Download started",
      description: `Downloading ${photo.title} wallpaper...`,
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <section className="relative py-16">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-nordic-blue to-transparent opacity-70 z-10"></div>
            <img 
              src="/lovable-uploads/4dede139-f3af-4a6f-90b4-670d0f277eab.png" 
              alt="Photography background" 
              className="w-full h-full object-cover opacity-40" 
            />
          </div>
          <div className="container mx-auto px-4 relative z-20">
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6">Photography</h1>
            <p className="text-lg max-w-2xl text-white opacity-90">
              When I'm not designing learning experiences, I explore the world through my camera lens. Enjoy my collection of landscapes and abstract compositions.
            </p>
          </div>
        </section>

        <section className="py-16 bg-nordic-offWhite">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="section-title">Photo Gallery</h2>
              <div className="w-20 h-1 bg-nordic-gold mx-auto mt-4 mb-8"></div>
              <p className="text-gray-600">
                A collection of landscapes and abstract compositions captured during my travels and creative explorations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {photoItems.map(photo => (
                <div 
                  key={photo.id} 
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(photo)}
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={photo.image} 
                      alt={photo.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-nordic-blue">{photo.title}</h3>
                    <p className="text-gray-600 text-sm">{photo.description}</p>
                    {photo.isWallpaper && (
                      <div className="mt-3">
                        <span className="text-xs bg-nordic-gold bg-opacity-20 text-nordic-gold px-3 py-1 rounded-full">
                          Available as wallpaper
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-nordic-offWhite p-8 rounded-lg">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-light text-nordic-blue mb-4">Get Free Monthly Desktop Wallpapers</h2>
                <div className="w-20 h-1 bg-nordic-gold mx-auto mt-4 mb-8"></div>
                <p className="text-gray-600">
                  Subscribe to receive a high-resolution desktop wallpaper each month, straight to your inbox.
                </p>
              </div>
              
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-nordic-blue"
                  />
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-2 bg-nordic-blue text-white rounded hover:bg-opacity-90 transition-all duration-300 disabled:opacity-70"
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </button>
                  <p className="mt-2 text-xs text-gray-500">
                    Your email will only be used to send monthly wallpapers. You can unsubscribe at any time.
                  </p>
                </div>
              </form>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-medium text-nordic-blue mb-4 text-center">Featured Wallpaper</h3>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <img 
                    src={photoItems.find(p => p.isWallpaper)?.image || photoItems[0].image} 
                    alt="Featured wallpaper" 
                    className="w-full h-auto rounded mb-4" 
                  />
                  <button
                    onClick={() => handleDownload(photoItems.find(p => p.isWallpaper) || photoItems[0])}
                    className="w-full px-4 py-2 bg-nordic-gold text-white rounded hover:bg-opacity-90 transition-all duration-300"
                  >
                    Download This Wallpaper
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Modal for viewing images */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-medium text-nordic-blue">{selectedImage.title}</h2>
                  <button 
                    onClick={() => setSelectedImage(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    &times;
                  </button>
                </div>
                
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title} 
                  className="w-full h-auto mb-6 rounded" 
                />
                
                <p className="text-gray-700 mb-6">{selectedImage.description}</p>
                
                {selectedImage.isWallpaper && (
                  <button
                    onClick={() => handleDownload(selectedImage)}
                    className="px-6 py-2 bg-nordic-gold text-white rounded hover:bg-opacity-90 transition-all duration-300 mr-4"
                  >
                    Download Wallpaper
                  </button>
                )}
                
                <button
                  onClick={() => setSelectedImage(null)}
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

export default Photography;
