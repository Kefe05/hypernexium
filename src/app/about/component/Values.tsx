"use client"
import { useEffect, useRef, useState } from 'react'
import { Target, Eye } from 'lucide-react'

export default function MissionVisionComponent() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({})
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({})

  useEffect(() => {
    const observers: Record<string, IntersectionObserver> = {}

    Object.keys(sectionRefs.current).forEach(key => {
      const element = sectionRefs.current[key]
      if (element) {
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
        observers[key].observe(element)
      }
    })

    return () => {
      Object.values(observers).forEach(observer => observer.disconnect())
    }
  }, [])

  return (
    <div className="bg-primary">
      {/* Hero Section */}
      <section className=" px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <div
            ref={el => { sectionRefs.current['hero'] = el }}
            className={`transition-all duration-1000 ${isVisible['hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            {/* <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary dark:bg-brand-primary/20 dark:text-brand-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>Our Foundation</span>
            </div> */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              Mission, Vision & Values
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Driving innovation and excellence in technology solutions for smart enterprises across Africa and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div
              ref={el => { sectionRefs.current['mission'] = el }}
              className={`group relative bg-gray-50 dark:bg-gray-800 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 ${isVisible['mission'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-bl-full"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                  To empower businesses with intelligent, secure, and future-ready technology solutions that enable them to scale, adapt, and thrive in an ever-evolving digital world.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div
              ref={el => { sectionRefs.current['vision'] = el }}
              className={`group relative bg-gray-50 dark:bg-gray-800 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 ${isVisible['vision'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-secondary/10 to-brand-accent-light/10 rounded-bl-full"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-accent to-brand-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
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