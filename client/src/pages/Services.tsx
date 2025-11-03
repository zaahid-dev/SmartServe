import { Code, Rocket, Bot, Search, Palette, Server } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import React from 'react';

// ...rest of your code

export default function Services() {
  const services = [
    {
      icon: <Code className="w-10 h-10" />,
      title: "Web & App Development",
      description: "Custom-built solutions tailored to your business needs",
      features: [
        "WordPress Development",
        "Shopify E-commerce",
        "Custom Web Applications",
        "Progressive Web Apps (PWA)"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: "SEO Optimization & Lead Generation",
      description: "Drive organic traffic and convert visitors into customers",
      features: [
        "On-page & Technical SEO",
        "Keyword Research & Strategy",
        "Lead Funnel Optimization",
        "Analytics & Reporting"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Bot className="w-10 h-10" />,
      title: "AI-Powered Automation",
      description: "Streamline operations with intelligent automation",
      features: [
        "AI Chatbots & Virtual Assistants",
        "Automated Booking Systems",
        "Workflow Automation",
        "Customer Support Automation"
      ],
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "Frontend Development",
      description: "Build stunning, responsive user interfaces",
      features: [
        "React.js Development",
        "Vue.js Applications",
        "Modern UI/UX Design",
        "Responsive & Mobile-First"
      ],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Server className="w-10 h-10" />,
      title: "Backend Development",
      description: "Robust and scalable server-side solutions",
      features: [
        "Node.js APIs",
        "Database Design & Management",
        "RESTful & GraphQL APIs",
        "Cloud Integration"
      ],
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Branding & Business Setup",
      description: "Establish your brand identity and online presence",
      features: [
        "Logo & Brand Design",
        "Business Strategy Consulting",
        "Social Media Setup",
        "Marketing Materials"
      ],
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive digital solutions to elevate your business. From AI-powered automation to custom development, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-slate-400 mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center shadow-2xl shadow-blue-500/30">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your goals. Contact us for custom pricing tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-slate-100 transition-all duration-300 hover:transform hover:scale-105 shadow-lg">
                Contact Us
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
                View AI Packages
              </Button>
            </Link>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
            <div className="text-slate-400">Projects Completed</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-slate-400">Support Available</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
            <div className="text-slate-400">Client Satisfaction</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .grid > div {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}