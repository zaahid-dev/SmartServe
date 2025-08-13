import { Settings, MessageSquare, Phone } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-navy mb-6">
            Advanced AI Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI automation designed for premium results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Advanced Automation Bots */}
          <div className="glass-morphism rounded-3xl p-8 premium-hover relative overflow-hidden" data-testid="service-automation">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-start opacity-10 rounded-full -mr-16 -mt-16"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-premium-gradient rounded-2xl flex items-center justify-center mb-6">
                <Settings className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Advanced Automation Bots</h3>
              <p className="text-gray-600 mb-6">
                Custom automation flows for lead scraping, booking systems, CRM updates, and data syncing with logic-based workflows.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <i className="fas fa-check text-gradient-start mr-2"></i> Lead capture & collection
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-gradient-start mr-2"></i> Automated booking systems
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-gradient-start mr-2"></i> CRM integration & follow-ups
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-gradient-start mr-2"></i> AI receptionist capabilities
                </li>
              </ul>
            </div>
          </div>

          {/* WhatsApp Bot Integration */}
          <div className="glass-morphism rounded-3xl p-8 premium-hover relative overflow-hidden" data-testid="service-whatsapp">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-end opacity-10 rounded-full -mr-16 -mt-16"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-premium-gradient rounded-2xl flex items-center justify-center mb-6">
                <Phone className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">WhatsApp Bot Integration</h3>
              <p className="text-gray-600 mb-6">
                Real-time conversations and automation within WhatsApp Business for instant customer engagement and support.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <i className="fas fa-check text-gradient-start mr-2"></i> 24/7 instant responses
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-gradient-start mr-2"></i> Social media auto-replies
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-gradient-start mr-2"></i> Direct calendar booking
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-gradient-start mr-2"></i> Smart conversation routing
                </li>
              </ul>
            </div>
          </div>

          {/* Basic Chatbots */}
          <div className="glass-morphism rounded-3xl p-8 premium-hover relative overflow-hidden" data-testid="service-chatbots">
            <div className="absolute top-0 right-0 w-32 h-32 bg-electric opacity-10 rounded-full -mr-16 -mt-16"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-premium-gradient rounded-2xl flex items-center justify-center mb-6">
                <MessageSquare className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Premium Chatbots</h3>
              <p className="text-gray-600 mb-6">
                Sophisticated conversational AI for FAQs, customer queries, lead capture, and seamless support redirection.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <i className="fas fa-check text-gradient-start mr-2"></i> FAQ automation
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-gradient-start mr-2"></i> Lead capture & qualification
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-gradient-start mr-2"></i> Support ticket routing
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-gradient-start mr-2"></i> Payment page integration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
