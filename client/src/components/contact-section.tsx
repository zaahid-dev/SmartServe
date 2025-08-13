import { Calendar, MessageSquare, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section className="py-20 bg-midnight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Book a free consultation and discover how SmartServeAI can revolutionize your operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* Book a Call */}
          <div className="glass-morphism rounded-3xl p-8 premium-hover" data-testid="contact-consultation">
            <div className="w-16 h-16 bg-premium-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Book Free Consultation</h3>
            <p className="text-gray-300 mb-6">Schedule a 30-minute strategy session to discuss your AI automation needs.</p>
            <Button 
              className="bg-premium-gradient px-8 py-3 rounded-full text-white font-bold premium-hover"
              onClick={() => window.open('https://calendly.com/smartservesa1/30min', '_blank')}
              data-testid="button-schedule-consultation"
            >
              Schedule Now
            </Button>
          </div>

          {/* WhatsApp */}
          <div className="glass-morphism rounded-3xl p-8 premium-hover" data-testid="contact-whatsapp">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">WhatsApp Chat</h3>
            <p className="text-gray-300 mb-6">Get instant answers to your questions via WhatsApp. We respond within hours.</p>
            <Button 
              className="bg-green-500 px-8 py-3 rounded-full text-white font-bold premium-hover"
              onClick={() => window.open('https://wa.me/27823333775', '_blank')}
              data-testid="button-whatsapp-chat"
            >
              Chat Now
            </Button>
          </div>

          {/* Email */}
          <div className="glass-morphism rounded-3xl p-8 premium-hover" data-testid="contact-email">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Email Us</h3>
            <p className="text-gray-300 mb-6">Send us detailed information about your project and we'll get back to you soon.</p>
            <Button 
              className="bg-blue-500 px-8 py-3 rounded-full text-white font-bold premium-hover"
              onClick={() => window.open('mailto:smartservesa1@gmail.com')}
              data-testid="button-send-email"
            >
              Send Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
