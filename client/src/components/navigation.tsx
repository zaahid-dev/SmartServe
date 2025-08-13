import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  const logoSvg = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iMjAiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xXzEpIi8+CjxwYXRoIGQ9Ik0yMCA4QzE4LjM0IDggMTcgOS4zNCAxNyAxMUMxNyAxMi42NiAxOC4zNCAxNCAyMCAxNEMyMS42NiAxNCAyMyAxMi42NiAyMyAxMUMyMyA5LjM0IDIxLjY2IDggMjAgOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yNyAxNkMyNS4zNCAxNiAyNCAxNy4zNCAyNCAxOUMyNCAyMC42NiAyNS4zNCAyMiAyNyAyMkMyOC42NiAyMiAzMCAyMC42NiAzMCAxOUMzMCAxNy4zNCAyOC42NiAxNiAyNyAxNloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMyAxNkMxMS4zNCAxNiAxMCAxNy4zNCAxMCAxOUMxMCAyMC42NiAxMS4zNCAyMiAxMyAyMkMxNC42NiAyMiAxNiAyMC42NiAxNiAxOUMxNiAxNy4zNCAyOC42NiAxNiAxMyAxNloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMCAyNEMxOC4zNCAyNCAxNyAyNS4zNCAxNyAyN0MxNyAyOC42NiAxOC4zNCAzMCAyMCAzMEMyMS42NiAzMCAyMyAyOC42NiAyMyAyN0MyMyAyNS4zNCAyMS42NiAyNCAyMCAyNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMCAxNkgxMy4zTDEwIDI3SDMwTDI2LjcgMTZIMjAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzFfMSIgeDE9IjAiIHkxPSIwIiB4Mj0iNDAiIHkyPSI0MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjNjM2NkYxIi8+CjxzdG9wIG9mZnNldD0iMC41IiBzdG9wLWNvbG9yPSIjOEI1Q0Y2Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzNCODJGNiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=`;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-morphism' : 'glass-morphism'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3" data-testid="nav-logo">
            <img src={logoSvg} alt="SmartServeAI Logo" className="w-10 h-10" />
            <div>
              <div className="text-xl font-bold text-navy">SmartServeAI</div>
              <div className="text-xs text-gray-500">Your Business on Autopilot</div>
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
