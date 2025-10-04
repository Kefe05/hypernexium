import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-sm border-b border-light-border dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Image
            src="/logo.png"
            alt="Hyper Nexium Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#"
              className="text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-brand-accent transition"
            >
              Contact
            </Link>
            <Link
              href="#"
              className="text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-brand-accent transition"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-brand-accent transition"
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-brand-accent transition"
            >
              Support
            </Link>
            <Link
              href="#"
              className="text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-brand-accent transition"
            >
              Partner
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}