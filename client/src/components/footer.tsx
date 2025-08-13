export default function Footer() {
  const logoSvg = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iMjAiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xXzEpIi8+CjxwYXRoIGQ9Ik0yMCA4QzE4LjM0IDggMTcgOS4zNCAxNyAxMUMxNyAxMi42NiAxOC4zNCAxNCAyMCAxNEMyMS42NiAxNCAyMyAxMi42NiAyMyAxMUMyMyA5LjM0IDIxLjY2IDggMjAgOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yNyAxNkMyNS4zNCAxNiAyNCAxNy4zNCAyNCAxOUMyNCAyMC42NiAyNS4zNCAyMiAyNyAyMkMyOC42NiAyMiAzMCAyMC42NiAzMCAxOUMzMCAxNy4zNCAyOC42NiAxNiAyNyAxNloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMyAxNkMxMS4zNCAxNiAxMCAxNy4zNCAxMCAxOUMxMCAyMC42NiAxMS4zNCAyMiAxMyAyMkMxNC42NiAyMiAxNiAyMC42NiAxNiAxOUMxNiAxNy4zNCAyOC42NiAxNiAxMyAxNloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMCAyNEMxOC4zNCAyNCAxNyAyNS4zNCAxNyAyN0MxNyAyOC42NiAxOC4zNCAzMCAyMCAzMEMyMS42NiAzMCAyMyAyOC42NiAyMyAyN0MyMyAyNS4zNCAyMS42NiAyNCAyMCAyNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMCAxNkgxMy4zTDEwIDI3SDMwTDI2LjcgMTZIMjAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzFfMSIgeDE9IjAiIHkxPSIwIiB4Mj0iNDAiIHkyPSI0MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjNjM2NkYxIi8+CjxzdG9wIG9mZnNldD0iMC41IiBzdG9wLWNvbG9yPSIjOEI1Q0Y2Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzNCODJGNiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=`;

  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div data-testid="footer-brand">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logoSvg} alt="SmartServeAI Logo" className="w-10 h-10" />
              <div className="text-white font-bold text-xl">SmartServeAI</div>
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
