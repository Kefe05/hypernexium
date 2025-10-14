"use client"
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Phone, MapPin } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)


export default function Contacts() {
  const containerRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const [isError, setIsError] = useState(false)

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setIsLoading(true)
    setStatusMessage('')
    setIsError(false)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatusMessage(data.message)
        setFormData({ fullName: '', email: '', message: '' })
        setIsError(false)
      } else {
        setStatusMessage(data.error || 'Failed to send message')
        setIsError(true)
      }
    } catch (error) {
      setStatusMessage('Network error. Please try again.')
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main ref={containerRef} className="">
      <section className="min-h-screen   py-20 md:py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Content - Contact Information */}
            <div className="space-y-12">
              {/* Header */}
              <div className="space-y-4 contact-header">
                <h1 className="text-4xl md:text-5xl font-bold ">
                  Contact Information
                </h1>
                <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary">
                  Get in touch with us. We&apos;re here to power your smart enterprise beyond limits.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-10">
                {/* Write to us */}
                <div className="flex items-start space-x-6 contact-method">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center ">
                    <Mail className="w-8 h-8 text-brand-accent dark:text-dark-text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-light-text-primary dark:text-dark-text-primary">
                      Write to us
                    </h3>
                    <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary">
                      sales@hypernexium.com
                    </p>
                  </div>
                </div>

                {/* Call us - Ghana (Main Office) */}
                <div className="flex items-start space-x-6 contact-method">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center">
                    <Phone className="w-8 h-8 text-brand-accent  " />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl">🇬🇭</span>
                      <h3 className="text-2xl font-semibold text-light-text-primary dark:text-dark-text-primary">
                        Call us - Ghana
                      </h3>
                    </div>
                    <div className="inline-block bg-brand-primary dark:bg-brand-accent text-light text-xs font-bold px-2 py-1 rounded mb-1">
                      MAIN OFFICE
                    </div>
                    <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary">
                      +233 500 610 405
                    </p>
                  </div>
                </div>

                {/* Call us - Nigeria */}
                <div className="flex items-start space-x-6 contact-method">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center">
                    <Phone className="w-8 h-8 text-brand-accent  " />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl">🇳🇬</span>
                      <h3 className="text-2xl font-semibold text-light-text-primary dark:text-dark-text-primary">
                        Call us - Nigeria
                      </h3>
                    </div>
                    <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary">
                      +234 903 204 8604
                    </p>
                  </div>
                </div>

                {/* Visit us - Ghana */}
                <div className="flex items-start space-x-6 contact-method">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-brand-accent" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl">🇬🇭</span>
                      <h3 className="text-2xl font-semibold text-light-text-primary dark:text-dark-text-primary">
                        Office
                      </h3>
                    </div>
                    <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary">
                      Plot 128, HFC Estate,<br />Community 18, Accra, Ghana
                    </p>
                  </div>
                </div>


              </div>

              {/* Decorative Elements */}
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-3 h-3 bg-brand-accent rounded-full decorative-dot"></div>
                <div className="absolute top-8 -left-2 w-2 h-2 bg-brand-primary rounded-full decorative-dot"></div>
                <div className="absolute -bottom-2 right-8 w-2 h-2 bg-brand-accent rounded-full decorative-dot"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-light-border dark:bg-dark-border rounded-full decorative-dot"></div>
              </div>
            </div>

            {/* Right Content - Contact Form */}
            <div className=" rounded-2xl p-8 contact-form">
              <h2 className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-6">
                Send us a Message
              </h2>
              
              {/* Status Message */}
              {statusMessage && (
                <div className={`p-4 rounded-lg mb-6 ${
                  isError 
                    ? 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800' 
                    : 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800'
                }`}>
                  {statusMessage}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
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
                    value={formData.email}
                    onChange={handleInputChange}
                    required
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
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-light-border dark:border-dark-border rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent bg-light dark:bg-dark text-light-text-primary dark:text-dark-text-primary transition-colors resize-vertical"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-brand-accent hover:bg-brand-primary text-light font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
