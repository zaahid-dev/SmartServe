export default function ProcessSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-navy mb-6">
            Executive-Level <span className="gradient-text">Implementation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium service delivery in just 1-3 days with white-glove implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group" data-testid="process-step-1">
            <div className="w-20 h-20 bg-premium-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span className="text-white text-2xl font-black">1</span>
            </div>
            <h3 className="text-2xl font-bold text-navy mb-4">Strategic Consultation</h3>
            <p className="text-gray-600">
              Deep-dive analysis of your business needs. Chatbot? Bookings? Follow-ups? We design the perfect solution.
            </p>
          </div>

          <div className="text-center group" data-testid="process-step-2">
            <div className="w-20 h-20 bg-premium-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span className="text-white text-2xl font-black">2</span>
            </div>
            <h3 className="text-2xl font-bold text-navy mb-4">Custom Development</h3>
            <p className="text-gray-600">
              Bespoke AI system tailored to your business, built by our expert team in just 1–3 days.
            </p>
          </div>

          <div className="text-center group" data-testid="process-step-3">
            <div className="w-20 h-20 bg-premium-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span className="text-white text-2xl font-black">3</span>
            </div>
            <h3 className="text-2xl font-bold text-navy mb-4">Premium Launch</h3>
            <p className="text-gray-600">
              Your system goes live with full support. Get your time back while your business runs on autopilot.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
