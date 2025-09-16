import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import {handleClick , handleCall} from '@/components/functionality/communication'
const Header = () => {
  // const phoneNumber = '+918296210700'
  //  const handleClick = () => {
  //   window.open(`https://wa.me/${phoneNumber}`, "_blank");
  // };
  // const handleCall = () => {
  //   window.location.href = `tel:${phoneNumber}`
  // }
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-16 h-16 rounded-full  flex items-center justify-center">
            {/* <span className="text-primary-foreground font-bold text-sm">R</span> */}
            <img src="/logo.webp" alt="logo of Ryan Holidays" />
          </div>
          <h1 className="text-xl font-bold text-foreground">Ryan Holidays</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#cars" className="text-foreground hover:text-primary transition-colors">Our Cars</a>
          <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="hidden sm:flex items-center space-x-2" onClick={handleCall}>
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </Button>
          <Button size="sm" className="btn-whatsapp" onClick={handleClick}>
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;