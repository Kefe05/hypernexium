"use client"
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Phone, MapPin } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Contacts = React.memo(() => {
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
    <main ref={containerRef} className="" role="main">
      <section className="min-h-screen py-20 md:py-24 lg:py-32 px-6" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Content - Contact Information */}
            <div className="space-y-12">
              {/* Header */}
              <div className="space-y-4 contact-header">
                <h1 id="contact-heading" className="text-3xl md:text-5xl lg:text-6xl font-bold">
                  Contact Information
                </h1>
                <p className="text-base md:text-xl text-light-text-secondary dark:text-dark-text-secondary">
                  Get in touch with us. We&apos;re here to power your smart enterprise beyond limits.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-10">
                {/* Write to us */}
                <div className="flex items-start space-x-6 contact-method">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center">
                    <Mail className="w-8 h-8 text-brand-accent dark:text-dark-text-primary" aria-hidden="true" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-2xl font-semibold text-light-text-primary dark:text-dark-text-primary">
                      Write to us
                    </h3>
                    <p className="transition-colors duration-300 leading-relaxed md:text-base text-sm text-light-text-secondary dark:text-dark-text-secondary">
                      sales@hypernexium.com
                    </p>
                  </div>
                </div>

                {/* Call us - Combined Ghana and Nigeria */}
                <div className="flex items-start space-x-6 contact-method">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center">
                    <Phone className="w-8 h-8 text-brand-accent" aria-hidden="true" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-2xl font-semibold text-light-text-primary dark:text-dark-text-primary">
                      Call us
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-3xl" aria-hidden="true">🇬🇭</span>
                          <span className="text-lg font-medium text-light-text-primary dark:text-dark-text-primary">Ghana (Main Office)</span>
                        </div>
                        <p className="transition-colors duration-300 leading-relaxed md:text-base text-sm text-light-text-secondary dark:text-dark-text-secondary">
                          +233 500 610 405
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-3xl" aria-hidden="true">🇳🇬</span>
                          <span className="text-lg font-medium text-light-text-primary dark:text-dark-text-primary">Nigeria</span>
                        </div>
                        <p className="transition-colors duration-300 leading-relaxed md:text-base text-sm text-light-text-secondary dark:text-dark-text-secondary">
                          +234 903 204 8604
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visit us - Ghana */}
                <div className="flex items-start space-x-6 contact-method">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-brand-accent" aria-hidden="true" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl" aria-hidden="true">🇬🇭</span>
                      <h3 className="text-lg md:text-2xl font-semibold text-light-text-primary dark:text-dark-text-primary">
                        Office
                      </h3>
                    </div>
                    <p className="transition-colors duration-300 leading-relaxed md:text-base text-sm text-light-text-secondary dark:text-dark-text-secondary">
                      Plot 128, HFC Estate,<br />Community 18, Accra, Ghana
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="relative" aria-hidden="true">
                <div className="absolute -top-4 -right-4 w-3 h-3 bg-brand-accent rounded-full decorative-dot"></div>
                <div className="absolute top-8 -left-2 w-2 h-2 bg-brand-primary rounded-full decorative-dot"></div>
                <div className="absolute -bottom-2 right-8 w-2 h-2 bg-brand-accent rounded-full decorative-dot"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-light-border dark:bg-dark-border rounded-full decorative-dot"></div>
              </div>
            </div>

            {/* Right Content - Contact Form */}
            <div className="rounded-2xl p-8 contact-form">
              <h2 className="text-lg md:text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6" noValidate>
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-light-text-primary dark:text-dark-text-primary mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 border border-light-border dark:border-dark-border rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent bg-light dark:bg-dark text-light-text-primary dark:text-dark-text-primary transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-light-text-primary dark:text-dark-text-primary mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 border border-light-border dark:border-dark-border rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent bg-light dark:bg-dark text-light-text-primary dark:text-dark-text-primary transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-light-text-primary dark:text-dark-text-primary mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 border border-light-border dark:border-dark-border rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent bg-light dark:bg-dark text-light-text-primary dark:text-dark-text-primary transition-colors resize-vertical"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-accent hover:bg-brand-primary text-light font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
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
})

Contacts.displayName = 'Contacts'

export default Contacts