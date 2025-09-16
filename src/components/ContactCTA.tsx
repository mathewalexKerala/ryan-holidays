import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import {handleClick , handleCall} from '@/components/functionality/communication'
const ContactCTA = () => {
  return (
    <section id="contact" className="py-20 gradient-ocean text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Book Your Journey?
        </h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          Contact us today to reserve your perfect vehicle and start planning your unforgettable holiday experience.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-medium" onClick={handleClick}
          >
            <MessageCircle className="w-5 h-5 mr-3" />
            Chat on WhatsApp
          </Button>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-medium" onClick={handleCall}
          >
            <Phone className="w-5 h-5 mr-3" />
            Call Us Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;