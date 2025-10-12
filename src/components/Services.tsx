"use client"
import React, { useState, useRef, useEffect } from 'react';
// import { VerticalGridLines } from './GridLines';
import { Button } from './ui/button';
import {
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { gsap } from 'gsap'; // Ensure GSAP is installed: npm install gsap
import { servicesData as services } from '../../public/constants';
export default function Services() {
  const [activeService, setActiveService] = useState(0);

  // Refs for animation targets
  const iconRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  // Ref for auto-play interval
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Ref for the section to observe scroll
  const sectionRef = useRef<HTMLElement>(null);



  const currentService = services[activeService];
  const CurrentIcon = currentService.icon;

  // Function to start/reset auto-play
  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000); // Auto-advance every 4 seconds
  };

  // Initialize auto-play on mount
  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Intersection Observer to resume auto-play when section is scrolled past
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          // Section is out of view, resume auto-play
          startAutoPlay();
        }
      },
      { threshold: 0 } // Trigger when the section is completely out of view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      const currentRef = sectionRef.current;
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Animation effect on service change
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      [iconRef.current, titleRef.current, descRef.current, featuresRef.current, buttonsRef.current],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }
    );
  }, [activeService]);

  // Handle service click with smooth sync and auto-play pause
  const handleServiceClick = (index: number) => {
    if (index !== activeService) {
      // Optional: Add a subtle exit animation for the current content before changing
      gsap.to([iconRef.current, titleRef.current, descRef.current, featuresRef.current, buttonsRef.current], {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => setActiveService(index) // Change service after exit animation
      });
    }
    // Pause auto-play on click
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <section ref={sectionRef} className="relative bg-light dark:bg-dark">

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left Side - Service Navigation */}
          <div className="space-y-8">
            {/* Section Header */}
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-wider">
                Choose the Right Solutions
              </h2>
            </div>

            {/* Service List */}
            <div className="space-y-2">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => handleServiceClick(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 group ${index === activeService
                      ? 'bg-light-surface dark:bg-dark-surface border-l-4 border-brand-accent'
                      : 'hover:bg-light-surface dark:hover:bg-dark-surface/50 border-l-4 border-transparent'
                    }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg transition-colors ${index === activeService
                        ? 'bg-brand-accent text-light'
                        : 'bg-light-surface dark:bg-dark-surface text-light-text-secondary dark:text-dark-text-secondary group-hover:bg-brand-accent/10 group-hover:text-brand-accent'
                      }`}>
                      <service.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold transition-colors ${index === activeService
                          ? 'text-light-text-primary dark:text-dark-text-primary'
                          : 'text-light-text-secondary dark:text-dark-text-secondary group-hover:text-light-text-primary dark:group-hover:text-dark-text-primary'
                        }`}>
                        {service.title}
                      </h3>
                    </div>
                    <ArrowRight className={`w-4 h-4 transition-all ${index === activeService
                        ? 'text-brand-accent translate-x-1'
                        : 'text-light-text-secondary dark:text-dark-text-secondary group-hover:text-brand-accent group-hover:translate-x-1'
                      }`} />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Service Details */}
          <div className="lg:pl-8">
            <div className="sticky top-8">
              {/* Card Wrapper */}
              <div className="bg-light-surface dark:bg-dark-surface rounded-xl shadow-xl border border-light-border dark:border-dark-border p-8 space-y-8">
                {/* Icon and Title on the same line */}
                <div className="flex items-center space-x-4">
                  <div ref={iconRef} className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <CurrentIcon className="w-8 h-8 text-brand-accent" />
                  </div>
                  <h3 ref={titleRef} className=" text-xl md:text-3xl font-bold text-light-text-primary dark:text-dark-text-primary">
                    {currentService.title}
                  </h3>
                </div>

                {/* Service Content */}
                <div className="space-y-6">
                  <p ref={descRef} className="text-sm md:text-lg text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                    {currentService.description}
                  </p>

                  {/* Features List */}
                  <div ref={featuresRef} className="space-y-3">
                    {currentService.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-brand-accent flex-shrink-0" />
                        <span className="text-light-text-secondary dark:text-dark-text-secondary text-sm md:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button className="bg-brand-accent hover:bg-brand-primary text-light rounded-full px-8 py-3">
                      Get in touch
                    </Button>
                    <Button
                      variant="outline"
                      className="border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-light rounded-full px-8 py-3"
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
      </div>
    </section>
  );
}