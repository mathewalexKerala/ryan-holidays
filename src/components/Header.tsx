import { Button } from "@/components/ui/button";
import { Facebook,Instagram ,Youtube } from "lucide-react";
import {handleClick , handleCall} from '@/components/functionality/communication'
const Header = () => {
  // const phoneNumber = '+918296210700'
  //  const handleClick = () => {
  //   window.open(`https://wa.me/${phoneNumber}`, "_blank");
  // };
  // const handleCall = () => {
  //   window.location.href = `tel:${phoneNumber}`
  // }
    const instagramUrl = 'https://www.instagram.com/ryanholidays1'
    const youtubeUrl='https://www.youtube.com/@ryanholidays'
    const facebookUrl = 'https://www.facebook.com/ryanholidays1'
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 rounded-full  flex items-center justify-center">
            {/* <span className="text-primary-foreground font-bold text-sm">R</span> */}
            <img src="/logo.webp"  alt="logo of Ryan Holidays" />
          </div>
          <h1 className="text-xl font-bold text-foreground">Ryan Holidays</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#cars" className="text-foreground hover:text-primary transition-colors">Our Cars</a>
          <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>
        
        <div className="flex items-center space-x-3">
          {/* <Button variant="outline" size="sm" className="hidden rounded-full sm:flex items-center space-x-2" onClick={handleCall}>
            <Instagram className="w-4 h-4" />
            
          </Button> */}
       <a
      href={instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: 'var(--gradient-ocean)',
        color: '#fff',
        textDecoration: 'none',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        transition: 'transform 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1.0)')}
    >
      <Instagram size={24} />
    </a>
         <a
      href={youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: 'var(--gradient-ocean)',  // YouTube brand red color
        color: '#fff',
        textDecoration: 'none',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        transition: 'transform 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1.0)')}
    >
      <Youtube size={24} />
    </a>


     <a
      href={facebookUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: 'var(--gradient-ocean)',  // Facebook brand blue
        color: '#fff',
        textDecoration: 'none',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        transition: 'transform 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1.0)')}
    >
      <Facebook size={24} />
    </a>
        </div>
      </div>
    </header>
  );
};

export default Header;