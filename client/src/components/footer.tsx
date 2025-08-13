import logoImage from "@assets/Smart-Serve-LOGO(NORMAL)_1755070777977.png";

export default function Footer() {

  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div data-testid="footer-brand">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logoImage} alt="SmartServeAI Logo" className="w-12 h-12" />
              <div className="text-white font-bold text-xl">SMART-SERVE</div>
            </div>
            <p className="text-gray-400 mb-4">Your business on autopilot. Premium AI automation for South African businesses.</p>
          </div>
          
          <div data-testid="footer-services">
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Advanced Automation Bots</li>
              <li>WhatsApp Integration</li>
              <li>Premium Chatbots</li>
              <li>Custom AI Solutions</li>
            </ul>
          </div>
          
          <div data-testid="footer-company">
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Case Studies</li>
              <li>Support</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          
          <div data-testid="footer-contact">
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>+27 82 333 3775</li>
              <li>smartservesa1@gmail.com</li>
              <li>Cape Town, South Africa</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SmartServeAI. All rights reserved. Built for South African businesses.</p>
        </div>
      </div>
    </footer>
  );
}
