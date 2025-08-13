import { Button } from "@/components/ui/button";
import { CalendarDays, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-hero-gradient flex items-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-start rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-end rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-white">
          <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
            Your Business,
            <span className="gradient-text block">On Autopilot</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-gray-300 font-light">
            At SmartServeAI, we use the power of AI to elevate your customer experience, automate operations, and help your business scale — smartly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-premium-gradient px-8 py-4 rounded-full text-white font-bold text-lg premium-hover animate-glow"
              onClick={() => window.open('https://calendly.com/smartservesa1/30min', '_blank')}
              data-testid="hero-book-consultation"
            >
              <CalendarDays className="mr-2" />
              Book Free Consultation
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-white px-8 py-4 rounded-full text-white font-bold text-lg premium-hover hover:bg-white hover:text-navy"
              onClick={() => window.open('https://wa.me/27823333775', '_blank')}
              data-testid="hero-watch-demo"
            >
              <Play className="mr-2" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
            alt="3D AI neural network visualization showing interconnected nodes and data flows representing smart business automation" 
            className="w-full h-auto animate-float rounded-2xl shadow-2xl"
            data-testid="hero-3d-illustration"
          />
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-premium-gradient rounded-2xl flex items-center justify-center animate-pulse">
            <i className="fas fa-robot text-white text-2xl"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
