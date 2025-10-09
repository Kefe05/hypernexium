"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

import { ThemeToggleSimple } from "./ui/ThemeToggle";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the height of the viewport (hero section is typically 100vh)
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      
      // Change navbar background when scrolled past hero section
      setIsScrolled(scrollPosition > heroHeight - 100); // 100px before reaching bottom
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="w-full fixed z-50">
      <div 
        className={`w-full transition-all duration-300 mx-auto ${
          isScrolled 
            ? 'bg-brand-secondary/90 backdrop-blur-sm shadow-lg border-b border-brand-secondary' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
        
            <Link href="/">
              <Image
                src="/logo-fullwhite.png"
                alt="Hyper Nexium Logo"
                width={120}
                height={40}
                className="h-12 w-auto  "
              />
            </Link>
       
            {/* Navigation Links */}
            <ul className="hidden md:flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={` transition-colors  duration-200 hover:text-brand-accent ${
                      isScrolled 
                        ? 'text-white' 
                        : 'text-white hover:text-brand-accent'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="flex items-center gap-2">
              <Button 
                className={`rounded-full px-6 text-sm transition-all duration-300 ${
                  isScrolled
                    ? 'bg-white text-brand-primary hover:bg-gray-100'
                    : 'bg-brand-accent hover:bg-brand-primary text-white'
                }`}
              >
                Contact us
              </Button>
              <ThemeToggleSimple />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
