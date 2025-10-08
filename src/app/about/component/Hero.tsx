import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navbar */}


      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">
            About—Us
          </h1>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/70" />
          </div>
        </div>
      </section>

      {/* Content Section Placeholder */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
          <p className="text-lg text-slate-600">
            Content continues here...
          </p>
        </div>
      </section>
    </div>
  );
}