import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Eye, Zap, Shield, Users, Lightbulb, TrendingUp, Award } from 'lucide-react';

export default function AboutPage() {
  const coreValues = [
    {
      icon: Zap,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge technology solutions"
    },
    {
      icon: Shield,
      title: "Security",
      description: "Protecting data and systems with unwavering commitment"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building partnerships that drive mutual success"
    },
    {
      icon: Lightbulb,
      title: "Excellence",
      description: "Delivering quality that exceeds expectations"
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Continuously evolving to meet tomorrow's challenges"
    },
    {
      icon: Award,
      title: "Integrity",
      description: "Operating with transparency and ethical standards"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 border-gray-700 text-gray-400 px-4 py-1">
              About Us
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              TechNova Systems
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Architecting the future of digital infrastructure
            </p>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 pb-24">
          {/* Mission Statement */}
          <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 mb-8 hover:border-gray-700 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Target className="w-8 h-8 text-white" />
                <CardTitle className="text-3xl text-white">Mission Statement</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-300 leading-relaxed">
                To empower businesses through transformative technology solutions that drive innovation, 
                efficiency, and sustainable growth. We are committed to delivering enterprise-grade IT 
                infrastructure and services that enable our clients to thrive in an increasingly digital world.
              </p>
            </CardContent>
          </Card>

          {/* Vision Statement */}
          <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 mb-16 hover:border-gray-700 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Eye className="w-8 h-8 text-white" />
                <CardTitle className="text-3xl text-white">Vision Statement</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-300 leading-relaxed">
                To be the global leader in innovative IT solutions, recognized for our technical excellence, 
                forward-thinking approach, and unwavering commitment to client success. We envision a future 
                where technology seamlessly integrates with business strategy, creating limitless possibilities 
                for organizations worldwide.
              </p>
            </CardContent>
          </Card>

          {/* Core Values */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-center mb-4 text-white">Core Values</h2>
            <p className="text-center text-gray-400 mb-12 text-lg">
              The principles that guide everything we do
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card 
                    key={index}
                    className="bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-105 group"
                  >
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center mb-4 group-hover:from-gray-700 group-hover:to-gray-800 transition-all duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-white">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA Section */}
          <Card className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-gray-700 mt-16">
            <CardContent className="py-12 text-center">
              <h3 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Business?</h3>
              <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                Join hundreds of companies leveraging cutting-edge technology to stay ahead of the curve.
              </p>
              <button className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300">
                Get Started
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}