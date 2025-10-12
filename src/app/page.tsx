"use client"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Newsletter from "@/components/Newsletter";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import Users from "@/components/Users";
import Footer from "@/components/Footer";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function HyperNexiumLanding() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate sections on scroll
      const sections = gsap.utils.toArray(".animate-section");

      sections.forEach((section: any, index) => {
        gsap.fromTo(section,
          {
            opacity: 0,
            y: 100,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
              markers: false // Set to true for debugging
            }
          }
        );
      });

      // Stagger animation for multiple elements
      gsap.fromTo(".stagger-animate",
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".stagger-container",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, mainRef);

    return () => ctx.revert();
  }, []);
  return (
    <main ref={mainRef} className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <Hero />

      {/* Services Grid Section */}
      <div className="py-16 md:py-20 lg:py-24 animate-section">
        <About />
      </div>

      {/* Stats Section */}
      <div className="py-16 md:py-20 lg:py-24 animate-section">
        <Services />
      </div>

      {/* Logo Section */}
      <div className="py-16 md:py-20 lg:py-24 animate-section">
        <Partners />
      </div>

      {/* Our Target users Section */}
      <div className="py-16 md:py-20 lg:py-24 animate-section">
        <Users />
      </div>

      {/* The Team */}
      <div className="py-16 md:py-20 lg:py-24 animate-section">
        <Team />
      </div>

      {/* CTA Section */}
      <div className="py-16 md:py-20 lg:py-24 animate-section">
        <Newsletter />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
