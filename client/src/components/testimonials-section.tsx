import { Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-midnight relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-start rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gradient-end rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join successful business owners who transformed their operations with SmartServeAI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Testimonial 1 - Real from Notion */}
          <div className="glass-morphism rounded-3xl p-8 premium-hover" data-testid="testimonial-lailaa">
            <div className="flex items-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80" 
                alt="Professional businesswoman in stylish attire representing successful boutique owner" 
                className="w-16 h-16 rounded-full mr-4 object-cover"
              />
              <div>
                <div className="text-white font-bold text-lg">Lailaa</div>
                <div className="text-gray-300 text-sm">Boutique Owner • Cape Town</div>
              </div>
            </div>
            <blockquote className="text-white text-lg leading-relaxed mb-4">
              "I don't even check my DMs anymore. My bot handles everything. SmartServe helped me build a custom AI chatbot and virtual bookings agent for my boutique — and it's changed everything."
            </blockquote>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
          </div>

          {/* Testimonial 2 - Real from Notion */}
          <div className="glass-morphism rounded-3xl p-8 premium-hover" data-testid="testimonial-lebo">
            <div className="flex items-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80" 
                alt="Professional hair stylist in modern salon environment representing successful service provider" 
                className="w-16 h-16 rounded-full mr-4 object-cover"
              />
              <div>
                <div className="text-white font-bold text-lg">Lebo</div>
                <div className="text-gray-300 text-sm">Hair Stylist • Pretoria</div>
              </div>
            </div>
            <blockquote className="text-white text-lg leading-relaxed mb-4">
              "Saved me so much time. I booked 5 new clients in a weekend. The system works perfectly and my clients love how easy it is to book appointments."
            </blockquote>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
