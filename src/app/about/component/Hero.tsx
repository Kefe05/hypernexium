"use client"
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ChevronDown, Briefcase, Globe, Building2 } from 'lucide-react'

gsap.registerPlugin(ScrollToPlugin)

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const statsRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([labelRef.current, titleRef.current, descRef.current, statsRef.current], {
        opacity: 0,
        y: 40
      })

      const tl = gsap.timeline()

      tl.to(labelRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      })
        .to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out"
        }, "-=0.5")
        .to(descRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.6")
        .to(statsRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.5")
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const scrollToNextSection = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: window.innerHeight },
      ease: "power2.inOut"
    })
  }

  return (
    <div className="min-h-screen bg-slate-900" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden pt-16 md:pt-0" aria-labelledby="about-title">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop')"
          }}
          aria-hidden="true"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-900 opacity-60" aria-hidden="true" />

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
          <div className="max-w-3xl space-y-8">
            {/* Label */}
            <div>
              <span ref={labelRef} className="inline-block px-5 py-2 bg-brand-accent/20 backdrop-blur-sm border border-brand-secondary rounded-full text-brand-accent text-xs md:text-sm font-medium tracking-wide">
                WHO WE ARE
              </span>
            </div>

            {/* Main Title */}
            <h1 ref={titleRef} id="about-title" className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              About{' '}
              <span className="text-brand-accent">Hyper Nexium</span>
            </h1>

            {/* Description */}
            <p ref={descRef} className="text-lg md:text-xl text-white leading-relaxed max-w-2xl">
              A forward-thinking technology partner specializing in advanced IT solutions that empower enterprises across Africa and beyond.
            </p>

            {/* Stats Grid */}
            <ul ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4" role="list">
              {/* Services */}
              <li className="bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 backdrop-blur-sm rounded-xl p-6 border border-brand-accent/30 hover:border-brand-accent/50 transition-all duration-300 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center flex-shrink-0" role="img" aria-label="Briefcase icon">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">6</div>
                    <div className="text-base text-white/80">Core Solutions</div>
                  </div>
                </div>
              </li>

              {/* Global Partners */}
              <li className="bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 backdrop-blur-sm rounded-xl p-6 border border-brand-accent/30 hover:border-brand-accent/50 transition-all duration-300 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center flex-shrink-0" role="img" aria-label="Globe icon">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">18+</div>
                    <div className="text-base text-white/80">Global Partners</div>
                  </div>
                </div>
              </li>

              {/* Industries Served */}
              <li className="bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 backdrop-blur-sm rounded-xl p-6 border border-brand-accent/30 hover:border-brand-accent/50 transition-all duration-300 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center flex-shrink-0" role="img" aria-label="Building icon">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">8+</div>
                    <div className="text-base text-white/80">Industries Served</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNextSection}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full transition-all duration-300 text-white border border-white/20"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-8 h-8" />
        </button>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none" aria-hidden="true" />
      </section>
    </div>
  )
}