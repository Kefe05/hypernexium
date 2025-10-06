"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { VerticalGridLines } from "./GridLines";

export default function Team() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Hyper Nexium is more than just a vendor; they are true partners. Their customer service is responsive, knowledgeable, and always focused on our company's needs. The cloud infrastructure has streamlined operations, allowing us to adapt quickly in a constantly evolving business environment.",
      author: "Sarah Mitchell",
      title: "CTO, TechFlow Solutions",
      company: "TechFlow Solutions",
      image: "/one.jpg",
      logo: "/logo.png"
    },
    {
      id: 2,
      quote: "The cybersecurity solutions provided by Hyper Nexium have been game-changing for our organization. Their proactive approach to threat detection and incident response has given us peace of mind and allowed us to focus on growing our business without security concerns.",
      author: "Michael Chen",
      title: "IT Director, SecureBank Corp",
      company: "SecureBank Corp",
      image: "/two.jpg",
      logo: "/logo.png"
    },
    {
      id: 3,
      quote: "Working with Hyper Nexium on our digital transformation journey has exceeded all expectations. Their expertise in enterprise software development and strategic consulting has helped us modernize our operations and achieve unprecedented efficiency gains.",
      author: "Emily Rodriguez",
      title: "VP of Operations, InnovateCorp",
      company: "InnovateCorp",
      image: "/three.jpg",
      logo: "/logo.png"
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTest = testimonials[currentTestimonial];

  return (
    <section className="relative py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <VerticalGridLines opacity={0.06} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              {/* Main Image Container */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-brand-accent/20 to-brand-primary/20">
                <Image
                  src={currentTest.image}
                  alt={currentTest.author}
                  fill
                  className="object-cover transition-all duration-700 ease-out"
                />

                {/* Company Logo Badge */}
                <div className="absolute bottom-6 left-6 bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg">
                  <div className="w-12 h-12 relative">
                    <Image
                      src={currentTest.logo}
                      alt={`${currentTest.company} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-accent/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-primary/10 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Right Side - Testimonial Content */}
          <div className="space-y-8">
            {/* Quote */}
            <div className="space-y-6">
              <div className="text-6xl text-brand-accent/20 font-serif leading-none">"</div>
              <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                {currentTest.quote}
              </blockquote>
            </div>

            {/* Author Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">—</span>
                <cite className="text-lg font-semibold text-gray-900 dark:text-white not-italic">
                  {currentTest.author}
                </cite>
              </div>
              <p className="text-brand-accent font-medium">
                {currentTest.title}
              </p>
            </div>

            {/* Navigation Dots */}
            <div className="flex space-x-3 pt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`transition-all duration-300 ${index === currentTestimonial
                    ? 'w-12 h-3 bg-brand-accent rounded-full'
                    : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
