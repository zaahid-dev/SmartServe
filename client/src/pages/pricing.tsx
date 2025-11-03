import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Check, Star, Calculator, Zap, MessageCircle, Bot, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<string>('whatsapp');
  const [executionsSlider, setExecutionsSlider] = useState(100);
  const [showROICalculator, setShowROICalculator] = useState(false);
  const [roiHoursSaved, setRoiHoursSaved] = useState(20);

  // Calculate dynamic pricing based on executions
  const calculateUsageCost = (executions: number) => {
    if (executions <= 50) return 600;
    if (executions <= 250) return 850;
    if (executions <= 500) return 1250;
    return 2500;
  };

  const calculateROI = (hoursSaved: number) => {
    const hourlyRate = 200; // Average SA hourly rate
    const monthlySavings = hoursSaved * 4 * hourlyRate; // 4 weeks
    const automationCost = 1900; // WhatsApp + Automation
    const monthlySavingsNet = monthlySavings - automationCost;
    const yearlyROI = (monthlySavingsNet * 12) / (automationCost * 12) * 100;
    return { monthlySavings, monthlySavingsNet, yearlyROI };
  };

  const pricingPlans = [
    {
      id: 'automation',
      name: 'Advanced Automation',
      description: 'Custom AI workflows & automations',
      basePrice: 1500,
      setupFee: 800,
      icon: Bot,
      color: 'from-blue-500 to-indigo-600',
      features: [
        'Lead scraping & collection',
        'Automated booking systems', 
        'CRM updates & follow-ups',
        'Data syncing workflows',
        'AI receptionist'
      ],
      popular: false
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp Integration',
      description: 'Add WhatsApp to any automation',
      basePrice: 400,
      setupFee: 1500,
      combinedPrice: 1900,
      icon: MessageCircle,
      color: 'from-green-500 to-emerald-600',
      features: [
        'Real-time WhatsApp conversations',
        'Social media auto-replies',
        'Direct calendar booking',
        '24/7 instant responses',
        'Message volume optimization'
      ],
      popular: true
    },
    {
      id: 'chatbot',
      name: 'Premium Chatbots',
      description: 'Perfect for FAQs & lead capture',
      basePrice: 450,
      setupFee: 1000,
      icon: Zap,
      color: 'from-purple-500 to-violet-600',
      features: [
        'FAQ automation',
        'Customer query handling',
        'Lead capture & qualification',
        'Support redirection',
        'Landing page integration'
      ],
      popular: false
    }
  ];

  const roi = calculateROI(roiHoursSaved);

  return (
    <div className="font-inter bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-x-hidden min-h-screen">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/20">
            <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-white text-sm font-medium">Premium AI Solutions for South Africa</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Transparent
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> Pricing</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Professional AI automation that pays for itself. All prices in ZAR with no hidden fees.
          </p>
          
          {/* Interactive ROI Preview */}
          <div className="inline-flex items-center bg-green-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-green-400/30">
            <Calculator className="w-5 h-5 text-green-400 mr-2" />
            <span className="text-green-100 font-medium">Average client saves R{roi.monthlySavingsNet.toLocaleString()}/month</span>
          </div>
        </div>
      </section>

      {/* Interactive Plan Selector */}
      <section className="py-8 bg-white/50 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {pricingPlans.map((plan) => {
              const Icon = plan.icon;
              return (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedPlan === plan.id
                      ? `bg-gradient-to-r ${plan.color} text-white shadow-lg scale-105`
                      : 'bg-white/80 text-slate-700 hover:bg-white/90 border border-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {plan.name}
                  {plan.popular && (
                    <span className="ml-2 bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded-full font-bold">
                      POPULAR
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Interactive Usage Calculator */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 mb-12 border border-white/20 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Usage Calculator</h3>
              <p className="text-slate-600">Adjust the slider to see pricing for your usage level</p>
            </div>
            
            <div className="max-w-md mx-auto">
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Monthly Executions: <span className="font-bold text-blue-600">{executionsSlider}</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={executionsSlider}
                  onChange={(e) => setExecutionsSlider(Number(e.target.value))}
                  className="w-full h-3 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>0</span>
                  <span>250</span>
                  <span>500</span>
                  <span>1000+</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 text-center">
                <div className="text-sm text-slate-600 mb-1">Usage Cost</div>
                <div className="text-3xl font-black text-slate-800">
                  R{calculateUsageCost(executionsSlider).toLocaleString()}
                  <span className="text-lg font-normal">/month</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {pricingPlans.map((plan, index) => {
              const Icon = plan.icon;
              const isSelected = selectedPlan === plan.id;
              
              return (
                <div 
                  key={plan.id}
                  className={`bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl transition-all duration-500 hover:shadow-3xl relative overflow-hidden group cursor-pointer ${
                    isSelected ? 'ring-4 ring-blue-500 ring-opacity-50 scale-105' : 'hover:scale-102'
                  } ${plan.popular ? 'border-4 border-yellow-400' : 'border border-white/20'}`}
                  onClick={() => setSelectedPlan(plan.id)}
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${plan.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Popular badge */}
                  {plan.popular && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full text-xs font-bold transform rotate-12 shadow-lg">
                      <Star className="w-3 h-3 inline mr-1" />
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="relative z-10">
                    {/* Plan header */}
                    <div className="text-center mb-8">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">{plan.name}</h3>
                      <p className="text-slate-600">{plan.description}</p>
                    </div>
                    
                    {/* Enhanced pricing display */}
                    <div className="text-center mb-8">
                      <div className={`text-4xl font-black mb-2 bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                        {plan.id === 'whatsapp' ? (
                          <>
                            <span className="text-2xl">+</span>R{plan.basePrice}
                            <span className="text-lg font-normal text-slate-600">/mo</span>
                          </>
                        ) : (
                          <>
                            R{plan.basePrice}
                            <span className="text-lg font-normal text-slate-600">/mo</span>
                          </>
                        )}
                      </div>
                      
                      {plan.id === 'whatsapp' && (
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 mb-4 border border-green-200">
                          <div className="text-sm text-slate-600 mb-1">Combined License Price</div>
                          <div className="text-3xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                            R{plan.combinedPrice}/mo
                          </div>
                          <div className="text-xs text-slate-500">+ usage tiers from calculator above</div>
                        </div>
                      )}
                      
                      {plan.id === 'automation' && (
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 mb-4 border border-blue-200">
                          <div className="text-sm text-slate-600 mb-1">Usage Cost</div>
                          <div className="text-2xl font-bold text-slate-800">
                            +R{calculateUsageCost(executionsSlider).toLocaleString()}/mo
                          </div>
                          <div className="text-xs text-slate-500">Based on {executionsSlider} executions</div>
                        </div>
                      )}
                      
                      <div className={`bg-gradient-to-r ${plan.color} bg-opacity-10 rounded-xl p-3 mt-4`}>
                        <div className="text-sm text-slate-600">One-time Setup</div>
                        <div className="text-xl font-bold text-slate-800">R{plan.setupFee.toLocaleString()}</div>
                      </div>
                    </div>

                    {/* Enhanced features list */}
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className="flex items-center group-hover:translate-x-1 transition-transform duration-300"
                          style={{animationDelay: `${featureIndex * 50}ms`}}
                        >
                          <div className={`bg-gradient-to-r ${plan.color} p-1 rounded-full mr-3 flex-shrink-0`}>
                            <Check className="text-white w-3 h-3" />
                          </div>
                          <span className="text-slate-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Enhanced CTA button */}
                    <Button 
                      className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 group relative overflow-hidden ${
                        plan.id === 'whatsapp' 
                          ? `bg-gradient-to-r ${plan.color} text-white shadow-lg hover:shadow-xl animate-glow` 
                          : plan.id === 'chatbot'
                          ? `border-2 bg-gradient-to-r ${plan.color} bg-clip-text text-transparent hover:text-white hover:bg-gradient-to-r`
                          : `bg-gradient-to-r ${plan.color} text-white hover:shadow-xl`
                      }`}
                      onClick={() => window.open('https://calendly.com/smartservesa1/30min', '_blank')}
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {plan.id === 'whatsapp' ? 'Add WhatsApp Bot' : 
                         plan.id === 'automation' ? 'Get Advanced AI' :
                         'Start with Chatbot'}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                      {plan.popular && (
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      )}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ROI Calculator Section */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 mb-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">ROI Calculator</h3>
                  <p className="text-green-100">See how much you could save with automation</p>
                </div>
                <button
                  onClick={() => setShowROICalculator(!showROICalculator)}
                  className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors"
                >
                  <Calculator className="w-6 h-6" />
                </button>
              </div>
              
              {showROICalculator && (
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Hours saved per week: <span className="font-bold">{roiHoursSaved}</span>
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="40"
                      value={roiHoursSaved}
                      onChange={(e) => setRoiHoursSaved(Number(e.target.value))}
                      className="w-full h-3 bg-white/20 rounded-full appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-green-100 mt-1">
                      <span>5h</span>
                      <span>20h</span>
                      <span>40h</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                    <div className="text-center">
                      <div className="text-sm text-green-100 mb-1">Monthly Savings</div>
                      <div className="text-3xl font-black">R{roi.monthlySavingsNet.toLocaleString()}</div>
                      <div className="text-xs text-green-100 mt-2">
                        ROI: {roi.yearlyROI.toFixed(0)}% annually
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Enterprise CTA - Enhanced */}
          <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/20">
                <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
                <span className="text-sm font-medium">Enterprise Solutions</span>
              </div>
              <h3 className="text-4xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Large-scale implementations, custom integrations, and dedicated support for enterprise clients.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center text-slate-300">
                  <Check className="w-4 h-4 mr-2 text-green-400" />
                  Dedicated account manager
                </div>
                <div className="flex items-center text-slate-300">
                  <Check className="w-4 h-4 mr-2 text-green-400" />
                  Custom API integrations
                </div>
                <div className="flex items-center text-slate-300">
                  <Check className="w-4 h-4 mr-2 text-green-400" />
                  Priority support
                </div>
              </div>
              <Button 
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-10 py-4 rounded-2xl text-white font-bold text-lg hover:shadow-2xl transition-all duration-300 group"
                onClick={() => window.open('mailto:smartservesa1@gmail.com', '_blank')}
              >
                Contact Enterprise Sales
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-2 mb-6">
              <Star className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-blue-800 text-sm font-medium">Client Success Stories</span>
            </div>
            <h2 className="text-4xl font-black text-slate-800 mb-6">What Our Clients Say</h2>
            <p className="text-xl text-slate-600">Real results from real South African businesses</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-white/20">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80" 
                  alt="Professional businesswoman representing successful boutique owner" 
                  className="w-16 h-16 rounded-full mr-4 object-cover ring-4 ring-blue-100"
                />
                <div>
                  <div className="font-bold text-lg text-slate-800">Lailaa</div>
                  <div className="text-slate-600 text-sm">Boutique Owner • Cape Town</div>
                </div>
              </div>
              <blockquote className="text-slate-700 text-lg leading-relaxed mb-6 italic">
                "I don't even check my DMs anymore. My bot handles everything perfectly and my customers love the instant responses."
              </blockquote>
              <div className="flex items-center justify-between">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <div className="text-sm text-slate-500">Verified Purchase</div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-white/20">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80" 
                  alt="Professional hair stylist representing successful service provider" 
                  className="w-16 h-16 rounded-full mr-4 object-cover ring-4 ring-green-100"
                />
                <div>
                  <div className="font-bold text-lg text-slate-800">Lebo</div>
                  <div className="text-slate-600 text-sm">Hair Stylist • Pretoria</div>
                </div>
              </div>
              <blockquote className="text-slate-700 text-lg leading-relaxed mb-6 italic">
                "Saved me so much time. I booked 5 new clients in a weekend without lifting a finger!"
              </blockquote>
              <div className="flex items-center justify-between">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <div className="text-sm text-slate-500">Verified Purchase</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Custom styles */}
      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          border: 3px solid white;
        }
        
        .slider::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          border: 3px solid white;
        }
      `}</style>
    </div>
  );
}
