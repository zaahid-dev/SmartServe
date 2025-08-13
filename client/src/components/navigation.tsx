import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/Smart-Serve-LOGO(NORMAL)_1755070777977.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-morphism' : 'glass-morphism'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3" data-testid="nav-logo">
            <img src={logoImage} alt="SmartServeAI Logo" className="w-12 h-12" />
            <div>
              <div className="text-xl font-bold text-navy">SMART-SERVE</div>
              <div className="text-xs text-silver">YOUR BUSINESS ON AUTOPILOT</div>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`text-gray-700 hover:text-gradient-start transition-colors font-medium ${location === '/' ? 'text-gradient-start' : ''}`} data-testid="nav-home">
              Home
            </Link>
            <Link href="/pricing" className={`text-gray-700 hover:text-gradient-start transition-colors font-medium ${location === '/pricing' ? 'text-gradient-start' : ''}`} data-testid="nav-pricing">
              Pricing
            </Link>
            <Button 
              className="bg-premium-gradient text-white px-6 py-2 rounded-full font-semibold premium-hover"
              onClick={() => window.open('https://calendly.com/smartservesa1/30min', '_blank')}
              data-testid="nav-get-started"
            >
              Get Started
            </Button>
          </div>
          
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="nav-mobile-toggle"
          >
            {isMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-gradient-start font-medium" data-testid="mobile-nav-home">
                Home
              </Link>
              <Link href="/pricing" className="block px-3 py-2 text-gray-700 hover:text-gradient-start font-medium" data-testid="mobile-nav-pricing">
                Pricing
              </Link>
              <Button 
                className="w-full mt-2 bg-premium-gradient text-white font-semibold premium-hover"
                onClick={() => window.open('https://calendly.com/smartservesa1/30min', '_blank')}
                data-testid="mobile-nav-get-started"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
