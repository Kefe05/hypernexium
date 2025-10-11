"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Target, Eye } from 'lucide-react'

export default function MissionVisionComponent() {
  const [isVisible, setIsVisible] = useState({})
  const sectionRefs = useRef({})

  useEffect(() => {
    const observers = {}
    
    Object.keys(sectionRefs.current).forEach(key => {
      if (sectionRefs.current[key]) {
        observers[key] = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setIsVisible(prev => ({ ...prev, [key]: true }))
              }
            })
          },
          { threshold: 0.1 }
        )
        observers[key].observe(sectionRefs.current[key])
      }
    })

    return () => {
      Object.values(observers).forEach(observer => observer.disconnect())
    }
  }, [])

  return (
    <div className="bg-white dark:bg-dark">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div 
            ref={el => sectionRefs.current['hero'] = el}
            className={`transition-all duration-1000 ${
              isVisible['hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>Our Foundation</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-brand-primary bg-clip-text text-transparent mb-6">
              Mission, Vision & Values
            </h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
              Driving innovation and excellence in technology solutions for smart enterprises across Africa and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div 
              ref={el => sectionRefs.current['mission'] = el}
              className={`group relative bg-light-surface dark:bg-dark-surface rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                isVisible['mission'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-bl-full"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-light" />
                </div>
                <h2 className="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                  To empower businesses with intelligent, secure, and future-ready technology solutions that enable them to scale, adapt, and thrive in an ever-evolving digital world.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div 
              ref={el => sectionRefs.current['vision'] = el}
              className={`group relative bg-light dark:bg-dark-surface rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                isVisible['vision'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-secondary/10 to-brand-accent-light/10 rounded-bl-full"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-secondary to-brand-accent-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-light" />
                </div>
                <h2 className="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">
                  Our Vision
                </h2>
                <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                  To be the preferred technology partner across Africa and beyond, recognized for driving smart enterprise growth through innovative, hyper-efficient solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}