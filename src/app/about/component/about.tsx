"use client"
import { AnimatedButton } from '@/components/AnimateButton';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, XIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function AboutPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    // Add video play logic here
  };

  return (
    <section className="relative min-h-screen  dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[80vh]">
          
          {/* Left Side - Image with Play Button */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              {/* Background Image */}
              <Image
                src="/two.jpg"
                alt="Hyper Nexium Team"
                fill
                className="object-cover"
                priority
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/20"></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  onClick={handlePlayVideo}
                  className="group relative w-20 h-20 bg-white dark:bg-dark-surface rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
                  aria-label="Play video"
                >
                  <Play className="w-8 h-8 text-brand-primary ml-1 group-hover:text-brand-accent transition-colors" />
                  
                  {/* Ripple Effect */}
                  <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-20"></div>
                </Button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-brand-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-5 order-1 lg:order-2">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-brand-accent/10 text-brand-accent rounded-full md:stext-sm font-medium text-xs">
              ABOUT COMPANY
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Provide advanced
                <br />
                <span className="text-brand-accent dark:text-brand-accent">business solutions.</span>
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-6 text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                At Hyper Nexium Technologies, we transform businesses through innovative IT solutions 
                and strategic consulting. Our expertise spans cloud infrastructure, cybersecurity, 
                digital transformation, and enterprise software development.
              </p>
             
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link href="/services">
               <AnimatedButton />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        {/* <div className="mt-20 pt-16 border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-brand-primary dark:text-brand-accent">50+</div>
              <div className="text-gray-600 dark:text-gray-400">Enterprise Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-brand-primary dark:text-brand-accent">99.9%</div>
              <div className="text-gray-600 dark:text-gray-400">System Uptime</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-brand-primary dark:text-brand-accent">24/7</div>
              <div className="text-gray-600 dark:text-gray-400">Support Coverage</div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Video Modal (if needed) */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
            <Button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <XIcon />
            </Button>
            {/* Add your video component here */}
            <div className="w-full h-full flex items-center justify-center text-white">
              <p>Video player would go here</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}