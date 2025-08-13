import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

export default function Pricing() {
  return (
    <div className="font-inter bg-gray-50 overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Premium AI Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transparent pricing for South African businesses. All prices in ZAR.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-platinum to-silver">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Advanced Automation Bots */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl premium-hover relative overflow-hidden" data-testid="pricing-automation">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-start opacity-5 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-navy mb-2">Advanced Automation</h3>
                  <p className="text-gray-600">Custom AI workflows & automations</p>
                </div>
                
                <div className="text-center mb-8">
                  <div className="text-4xl font-black text-navy mb-2">R1,500<span className="text-lg font-normal">/mo</span></div>
                  <p className="text-sm text-gray-500">License & API Access</p>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-navy mb-4">Usage Tiers (per month):</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">0-50 executions:</span>
                      <span className="font-semibold text-navy">R600</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">50-250 executions:</span>
                      <span className="font-semibold text-navy">R850</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">250-500 executions:</span>
                      <span className="font-semibold text-navy">R1,250</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">500+ executions:</span>
                      <span className="font-semibold text-navy">R2,500</span>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="bg-gradient-start bg-opacity-10 rounded-2xl p-4 text-center">
                    <div className="text-sm text-gray-600">One-time Setup</div>
                    <div className="text-2xl font-bold text-navy">R800</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 text-sm">
                  <li className="flex items-center">
                    <Check className="text-gradient-start mr-3 w-4 h-4" />
                    Lead scraping & collection
                  </li>
                  <li className="flex items-center">
                    <Check className="text-gradient-start mr-3 w-4 h-4" />
                    Automated booking systems
                  </li>
                  <li className="flex items-center">
                    <Check className="text-gradient-start mr-3 w-4 h-4" />
                    CRM updates & follow-ups
                  </li>
                  <li className="flex items-center">
                    <Check className="text-gradient-start mr-3 w-4 h-4" />
                    Data syncing workflows
                  </li>
                  <li className="flex items-center">
                    <Check className="text-gradient-start mr-3 w-4 h-4" />
                    AI receptionist
                  </li>
                </ul>

                <Button 
                  className="w-full bg-premium-gradient text-white py-4 rounded-full font-bold text-lg premium-hover"
                  onClick={() => window.open('https://calendly.com/smartservesa1/30min', '_blank')}
                  data-testid="button-get-advanced-ai"
                >
                  Get Advanced AI
                </Button>
              </div>
            </div>

            {/* WhatsApp Bot Integration */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl premium-hover relative overflow-hidden border-4 border-gradient-start" data-testid="pricing-whatsapp">
              <div className="absolute top-4 right-4 bg-gradient-start text-white px-4 py-1 rounded-full text-xs font-bold">
                POPULAR
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-end opacity-5 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-navy mb-2">WhatsApp Integration</h3>
                  <p className="text-gray-600">Add WhatsApp to any automation</p>
                </div>
                
                <div className="text-center mb-8">
                  <div className="text-4xl font-black text-navy mb-2">+R400<span className="text-lg font-normal">/mo</span></div>
                  <p className="text-sm text-gray-500">Added to existing license</p>
                </div>

                <div className="mb-8">
                  <div className="bg-gradient-end bg-opacity-10 rounded-2xl p-6 text-center">
                    <div className="text-sm text-gray-600 mb-2">Combined with Automation License</div>
                    <div className="text-3xl font-black gradient-text">R1,900/mo</div>
                    <div className="text-xs text-gray-500">+ usage tiers</div>
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <div className="text-xs text-gray-600">One-time Implementation</div>
                      <div className="text-lg font-bold text-navy">R1,500</div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 text-sm">
                  <li className="flex items-center">
                    <Check className="text-gradient-end mr-3 w-4 h-4" />
                    Real-time WhatsApp conversations
                  </li>
                  <li className="flex items-center">
                    <Check className="text-gradient-end mr-3 w-4 h-4" />
                    Social media auto-replies
                  </li>
                  <li className="flex items-center">
                    <Check className="text-gradient-end mr-3 w-4 h-4" />
                    Direct calendar booking
                  </li>
                  <li className="flex items-center">
                    <Check className="text-gradient-end mr-3 w-4 h-4" />
                    24/7 instant responses
                  </li>
                  <li className="flex items-center">
                    <Check className="text-gradient-end mr-3 w-4 h-4" />
                    Message volume optimization
                  </li>
                </ul>

                <Button 
                  className="w-full bg-premium-gradient text-white py-4 rounded-full font-bold text-lg premium-hover animate-glow"
                  onClick={() => window.open('https://calendly.com/smartservesa1/30min', '_blank')}
                  data-testid="button-add-whatsapp-bot"
                >
                  Add WhatsApp Bot
                </Button>
              </div>
            </div>

            {/* Basic Chatbots */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl premium-hover relative overflow-hidden" data-testid="pricing-chatbots">
              <div className="absolute top-0 right-0 w-32 h-32 bg-electric opacity-5 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-navy mb-2">Premium Chatbots</h3>
                  <p className="text-gray-600">Perfect for FAQs & lead capture</p>
                </div>
                
                <div className="text-center mb-8">
                  <div className="text-4xl font-black text-navy mb-2">R450<span className="text-lg font-normal">/mo</span></div>
                  <p className="text-sm text-gray-500">Monthly subscription</p>
                </div>

                <div className="mb-8">
                  <div className="bg-electric bg-opacity-10 rounded-2xl p-4 text-center">
                    <div className="text-sm text-gray-600">One-time Setup</div>
                    <div className="text-2xl font-bold text-navy">R1,000</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 text-sm">
                  <li className="flex items-center">
                    <Check className="text-electric mr-3 w-4 h-4" />
                    FAQ automation
                  </li>
                  <li className="flex items-center">
                    <Check className="text-electric mr-3 w-4 h-4" />
                    Customer query handling
                  </li>
                  <li className="flex items-center">
                    <Check className="text-electric mr-3 w-4 h-4" />
                    Lead capture & qualification
                  </li>
                  <li className="flex items-center">
                    <Check className="text-electric mr-3 w-4 h-4" />
                    Support redirection
                  </li>
                  <li className="flex items-center">
                    <Check className="text-electric mr-3 w-4 h-4" />
                    Landing page integration
                  </li>
                </ul>

                <Button 
                  variant="outline"
                  className="w-full border-2 border-electric text-electric py-4 rounded-full font-bold text-lg premium-hover hover:bg-electric hover:text-white"
                  onClick={() => window.open('https://calendly.com/smartservesa1/30min', '_blank')}
                  data-testid="button-start-with-chatbot"
                >
                  Start with Chatbot
                </Button>
              </div>
            </div>
          </div>

          {/* Enterprise CTA */}
          <div className="bg-midnight rounded-3xl p-12 text-center text-white relative overflow-hidden" data-testid="pricing-enterprise">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-start rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-end rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Need a Custom Enterprise Solution?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Large-scale implementations, custom integrations, and dedicated support for enterprise clients.
              </p>
              <Button 
                className="bg-premium-gradient px-10 py-4 rounded-full text-white font-bold text-lg premium-hover"
                onClick={() => window.open('mailto:smartservesa1@gmail.com', '_blank')}
                data-testid="button-contact-enterprise-sales"
              >
                Contact Enterprise Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-silver to-platinum">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real results from real South African businesses</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl" data-testid="pricing-testimonial-lailaa">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80" 
                  alt="Professional businesswoman representing successful boutique owner" 
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-bold text-lg text-navy">Lailaa</div>
                  <div className="text-gray-600 text-sm">Boutique Owner • Cape Town</div>
                </div>
              </div>
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-4">
                "I don't even check my DMs anymore. My bot handles everything."
              </blockquote>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl" data-testid="pricing-testimonial-lebo">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80" 
                  alt="Professional hair stylist representing successful service provider" 
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-bold text-lg text-navy">Lebo</div>
                  <div className="text-gray-600 text-sm">Hair Stylist • Pretoria</div>
                </div>
              </div>
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-4">
                "Saved me so much time. I booked 5 new clients in a weekend."
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

      <Footer />
    </div>
  );
}
