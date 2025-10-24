"use client"
import { Button } from '@/components/ui/button';
import Image from 'next/image';

import { useState } from 'react';

export default function AboutPage() {

  return (
    <section className="relative  dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[80vh]">

          {/* Left Side - Image with Play Button */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              {/* Background Image */}
              <Image
                src="https://res.cloudinary.com/dyzanjli6/image/upload/v1761076239/vwt0wvek2tbdokdoey8y.jpg"
                alt="Hyper Nexium Team"
                fill
                className="object-cover"
                priority
              />

            

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-brand-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-5 order-1 lg:order-2">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-brand-accent/10 text-brand-accent rounded-full md:stext-sm font-medium text-xs">
              ABOUT HYPER NEXIUM TECHNOLOGIES LTD
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                Powering Smart Enterprises
                <br />
                <span className="text-brand-accent dark:text-brand-accent">Beyond Limits.</span>
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-6 text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Hyper Nexium Technologies Ltd is a forward-thinking, technology-driven company specializing in advanced IT solutions designed to empower smart enterprises with hyper-efficient and scalable technologies. Our goal is to bridge the digital divide by offering world-class services that drive innovation, efficiency, and security in the modern enterprise landscape.
              </p>
              <p>
                Founded with a passion for cutting-edge technology and a commitment to delivering high-impact solutions, Hyper Nexium Technologies Ltd has become a trusted partner for businesses looking to embrace transformation with speed, intelligence, and confidence.
              </p>
            </div>

            {/* CTA Button */}
            
          </div>
        </div>

       
      </div>

   
    </section>
  );
}