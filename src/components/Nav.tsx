import React from "react";
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
  return (
    <nav className="w-full fixed top-3 z-50">
      <div className="rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg border border-gray-200 dark:border-gray-700 w-[90%] mx-auto">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Hyper Nexium Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>

            {/* Navigation Links */}
            <ul className="hidden md:flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-brand-accent dark:hover:text-brand-accent transition-colors duration-200 hover:text-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="flex items-center gap-2">
              <Button className="bg-brand-accent hover:bg-brand-primary text-white rounded-full px-6 text-sm">
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
