import { MessageCircle, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div style={{backgroundColor:'whitesmoke'}} className="w-10 h-10 rounded-full  flex items-center justify-center">
                {/* <span className="text-primary-foreground font-bold text-sm">R</span> */}
                <img src="/logo.webp" alt="Ryan Holidays Logo" />
              </div>
              <h3 className="text-xl font-bold">Ryan Holidays</h3>
            </div>
            <p className="text-background/80 leading-relaxed">
              
              Choose from our fleet of comfortable and reliable vehicles.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#cars" className="hover:text-primary transition-colors">Our Cars</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-background/80">
                <MessageCircle className="w-4 h-4 text-primary" />
                <span>WhatsApp Available</span>
              </div>
              <div className="flex items-center space-x-3 text-background/80">
                <Phone className="w-4 h-4 text-primary" />
                <span>24/7 Phone Support</span>
              </div>
              <div className="flex items-center space-x-3 text-background/80">
                <Mail className="w-4 h-4 text-primary" />
                <span>ryanholidays1@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; 2025 Ryan Holidays. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;