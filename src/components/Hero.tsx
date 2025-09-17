
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import kannur1 from '@/assets/kannur1.jpg'
import kannur2 from '@/assets/download.jpg'
import kannur3 from '@/assets/images.jpg'
import kannurairport from '@/assets/kannur-kerala-india.jpg'
import kochi from '@/assets/kochi.jpg'
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: kannurairport,
   
    },
    {
      image: kochi,
  
    },{image:kannur1},{image:kannur2},{image:kannur3}
   

  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-hero"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
           Explore Your Travelling Destinations
          </h1>
        
          <h5 className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
          Kannur , Kochi 
          </h5>
        </div>
        
        <div className="relative max-w-4xl mx-auto mb-8">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-large">
            <img 
              src={slides[currentSlide].image} 
              alt="Premium car rental vehicle"
              className="w-full h-full object-cover"
            />
            
            {slides.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentSlide 
                          ? 'bg-white' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        
        {/* <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button size="lg" className="btn-whatsapp text-lg px-8 py-6" onClick={handleClick}>
            <MessageCircle className="w-5 h-5 mr-3" />
            WhatsApp Us
          </Button>
          <Button size="lg" variant="secondary" className="btn-call text-lg px-8 py-6" onClick={handleCall}>
            <Phone className="w-5 h-5 mr-3" />
            Call Now
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;