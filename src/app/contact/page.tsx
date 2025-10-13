"use client"
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)


export default function Contacts() {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      gsap.fromTo('.contact-header',
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out"
        }
      )

      // Animate contact methods with stagger
      gsap.fromTo('.contact-method',
        {
          opacity: 0,
          x: -50,
          scale: 0.9
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          delay: 0.3
        }
      )

      // Animate form
      gsap.fromTo('.contact-form',
        {
          opacity: 0,
          x: 50,
          scale: 0.95
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.5
        }
      )

      // Animate decorative dots
      gsap.fromTo('.decorative-dot',
        {
          opacity: 0,
          scale: 0
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          delay: 1
        }
      )

    }, containerRef)

    return () => ctx.revert()
  }, [])
  return (
    <main ref={containerRef} className="bg-white dark:bg-gray-900">
      <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 md:py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Content - Contact Information */}
            <div className="space-y-12">
              {/* Header */}
              <div className="space-y-4 contact-header">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  Contact Information
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Get in touch with us.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-10">
                {/* Write to us */}
                <div className="flex items-start space-x-6 contact-method">
                  <div className="flex-shrink-0 w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center">
                    <Mail className="w-8 h-8 text-orange-500" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      Write to us
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                      contact@hypernexium.com
                    </p>
                  </div>
                </div>

                {/* Call us */}
                <div className="flex items-start space-x-6 contact-method">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center">
                    <Phone className="w-8 h-8 text-blue-500" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      Call us
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                {/* Visit us */}
                <div className="flex items-start space-x-6 contact-method">
                  <div className="flex-shrink-0 w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-red-500" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      Visit us
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                      123 Innovation Drive, Tech Valley, CA 94025, United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-3 h-3 bg-orange-400 rounded-full decorative-dot"></div>
                <div className="absolute top-8 -left-2 w-2 h-2 bg-blue-400 rounded-full decorative-dot"></div>
                <div className="absolute -bottom-2 right-8 w-2 h-2 bg-red-400 rounded-full decorative-dot"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-gray-400 rounded-full decorative-dot"></div>
              </div>
            </div>

            {/* Right Content - Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 contact-form">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-accent-light focus:border-brand-aring-brand-accent-light dark:bg-gray-700 dark:text-white transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-accent-light focus:border-brand-aring-brand-accent-light dark:bg-gray-700 dark:text-white transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-accent-light focus:border-brand-aring-brand-accent-light dark:bg-gray-700 dark:text-white transition-colors resize-vertical"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full  bg-brand-accent text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
