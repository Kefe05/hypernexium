"use client"
import React, { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { SectionDivider } from "./GridLines";
import { AboutData as sections } from "../../public/constants";

export default function About() {
  const [activeSection, setActiveSection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const imageRef = useRef<HTMLDivElement>(null);

 
  // Auto-transition effect
  useEffect(() => {
    const startInterval = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      intervalRef.current = setInterval(() => {
        if (!isPaused) {
          setActiveSection((prev) => (prev + 1) % sections.length);
        }
      }, 4000); // Change every 4 seconds
    };

    startInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  // Handle mouse enter/leave on image
  const handleImageMouseEnter = () => {
    setIsPaused(true);
  };

  const handleImageMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section className="relative py-5 md:py-20 min-h-screen flex items-center">
    

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content - Text */}
          <div className="h-[600px] flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-brand-accent/10 text-brand-accent rounded-full text-xs md:text-sm font-medium">
                {sections[activeSection].subtitle}
              </span>

              <h2 className=" text-3xl md:text-5xl font-bold text-primary transition-all duration-700 ease-out">
                {sections[activeSection].title}
              </h2>

              <p className=" text-base md:text-xl text-secondary leading-relaxed transition-all duration-700 ease-out">
                {sections[activeSection].description}
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className=" text-2xl md:text-4xl font-bold text-brand-primary dark:text-brand-accent transition-all duration-700">
                  {sections[activeSection].stats.number}
                </div>
                <div className="text-xs md:text-sm text-secondary mt-1">
                  {sections[activeSection].stats.label}
                </div>
              </div>

              <div className="h-12 w-px bg-base"></div>

              <Button className="bg-brand-accent hover:bg-brand-primary text-white rounded-full px-8 py-3">
                Learn More
              </Button>
            </div>

            {/* Progress Indicators */}
            <div className="flex space-x-2">
              {sections.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-500 ${index === activeSection
                      ? 'w-12 bg-brand-accent'
                      : 'w-4 bg-base'
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div
            ref={imageRef}
            className="relative h-[600px] rounded-2xl overflow-hidden cursor-pointer hidden md:block"
            onMouseEnter={handleImageMouseEnter}
            onMouseLeave={handleImageMouseLeave}
          >
            {sections.map((section, index) => (
              <div
                key={section.id}
                className={`absolute inset-0 transition-all duration-700 ease-out ${index === activeSection
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-105'
                  }`}
              >
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                {/* Image Label */}
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-sm opacity-80">{section.subtitle}</div>
                  <div className="text-lg font-semibold">{section.title}</div>
                </div>

                {/* Pause Indicator */}
                {isPaused && index === activeSection && (
                  <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
                    Paused
                  </div>
                )}
              </div>
            ))}

            {/* Progress Bar */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex space-x-1">
                {sections.map((_, index) => (
                  <div
                    key={index}
                    className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden"
                  >
                    <div
                      className={`h-full bg-white transition-all duration-300 ${index === activeSection ? 'w-full' : 'w-0'
                        }`}
                      style={{
                        transitionDuration: index === activeSection && !isPaused ? '4000ms' : '300ms'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionDivider className="absolute bottom-0 left-0 right-0 h-px" />
    </section>
  );
}