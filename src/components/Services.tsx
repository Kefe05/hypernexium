"use client"
import React, { useState } from 'react';
import { VerticalGridLines } from './GridLines';
import { Button } from './ui/button';
import {
  Cloud,
  Shield,
  Zap,
  Users,
  ArrowRight,
  CheckCircle,
  Settings,
  Database
} from 'lucide-react';

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 0,
      title: "Cloud Infrastructure Solutions",
      description: "Modern businesses need scalable, secure cloud infrastructure. We help you migrate, optimize, and manage your cloud environment for maximum efficiency and cost-effectiveness.",
      icon: Cloud,
      features: ["AWS/Azure Migration", "Infrastructure Optimization", "Cost Management", "24/7 Monitoring"]
    },
    {
      id: 1,
      title: "Cybersecurity & Compliance",
      description: "Protect your digital assets with comprehensive security solutions. From threat detection to compliance management, we ensure your business stays secure and compliant.",
      icon: Shield,
      features: ["Threat Detection", "Compliance Management", "Security Audits", "Incident Response"]
    },
    {
      id: 2,
      title: "Digital Transformation",
      description: "Transform your business processes with cutting-edge technology. We help organizations modernize operations, improve efficiency, and accelerate growth through digital innovation.",
      icon: Zap,
      features: ["Process Automation", "Legacy System Modernization", "Digital Strategy", "Change Management"]
    },
    {
      id: 3,
      title: "Enterprise Software Development",
      description: "Custom software solutions tailored to your business needs. From web applications to enterprise systems, we build scalable, maintainable software that drives results.",
      icon: Settings,
      features: ["Custom Development", "API Integration", "Mobile Applications", "System Integration"]
    },
    {
      id: 4,
      title: "Data Analytics & Intelligence",
      description: "Turn your data into actionable insights. Our analytics solutions help you make informed decisions, identify opportunities, and optimize business performance.",
      icon: Database,
      features: ["Business Intelligence", "Data Visualization", "Predictive Analytics", "Real-time Reporting"]
    },
    {
      id: 5,
      title: "IT Consulting & Strategy",
      description: "Strategic IT guidance for business growth. Our consultants help you align technology with business objectives, optimize IT investments, and plan for future success.",
      icon: Users,
      features: ["IT Strategy Planning", "Technology Roadmaps", "Vendor Management", "Digital Governance"]
    }
  ];

  const currentService = services[activeService];
  const CurrentIcon = currentService.icon;

  return (
    <section className="relative py-24 bg-white dark:bg-gray-900">
      <VerticalGridLines opacity={0.06} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left Side - Service Navigation */}
          <div className="space-y-8">
            {/* Section Header */}
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Choose the Right Solutions
              </h2>
            </div>

            {/* Service List */}
            <div className="space-y-2">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 group ${index === activeService
                      ? 'bg-gray-50 dark:bg-gray-800 border-l-4 border-brand-accent'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-800/50 border-l-4 border-transparent'
                    }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg transition-colors ${index === activeService
                        ? 'bg-brand-accent text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 group-hover:bg-brand-accent/10 group-hover:text-brand-accent'
                      }`}>
                      <service.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold transition-colors ${index === activeService
                          ? 'text-gray-900 dark:text-white'
                          : 'text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white'
                        }`}>
                        {service.title}
                      </h3>
                    </div>
                    <ArrowRight className={`w-4 h-4 transition-all ${index === activeService
                        ? 'text-brand-accent translate-x-1'
                        : 'text-gray-400 group-hover:text-brand-accent group-hover:translate-x-1'
                      }`} />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Service Details */}
          <div className="lg:pl-8">
            <div className="sticky top-8 space-y-8">
              {/* Service Icon */}
              <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center">
                <CurrentIcon className="w-8 h-8 text-brand-accent" />
              </div>

              {/* Service Content */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {currentService.title}
                </h3>

                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {currentService.description}
                </p>

                {/* Features List */}
                <div className="space-y-3">
                  {currentService.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-brand-accent flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button className="bg-brand-accent hover:bg-brand-primary text-white rounded-full px-8 py-3">
                    Get in touch
                  </Button>
                  <Button
                    variant="outline"
                    className="border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white rounded-full px-8 py-3"
                  >
                    Book a consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
