"use client"
import { useEffect, useRef, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

const coreValues = [
  {
    id: 1,
    title: 'Innovation',
    description: 'We continuously explore new technologies to provide cutting-edge solutions.',
  },
  {
    id: 2,
    title: 'Integrity',
    description: 'We uphold honesty, transparency, and strong ethical principles in every engagement.',
  },
  {
    id: 3,
    title: 'Customer Focus',
    description: 'We prioritize our clients needs and deliver personalized experiences that exceed expectations.',
  },
  {
    id: 4,
    title: 'Excellence',
    description: 'We strive for superior quality in everything we do.',
  },
  {
    id: 5,
    title: 'Agility',
    description: 'We adapt quickly to changes, delivering flexible and scalable solutions.',
  },
  {
    id: 6,
    title: 'Collaboration',
    description: 'We foster partnerships and teamwork to drive collective success.',
  },
]

export default function CoreValuesComponent() {
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
    <div>
      {/* Core Values Section */}
      <section className="px-6 md:px-8 lg:px-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div
            ref={el => { sectionRefs.current['values-header'] = el }}
            className={`text-center mb-16 transition-all duration-1000 ${isVisible['values-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
              The principles that guide everything we do at Hyper Nexium Technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={value.id}
                ref={el => { sectionRefs.current[`value-${value.id}`] = el }}
                className={`group bg-light dark:bg-dark-surface rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${isVisible[`value-${value.id}`]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="w-6 h-6 text-light" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-3">
                      {value.title}
                    </h3>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 md:py-20 lg:py-24 px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div
            ref={el => { sectionRefs.current['closing'] = el }}
            className={`transition-all duration-1000 ${isVisible['closing'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
          >
            <div className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-3xl p-12 text-light">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Powering Smart Enterprises Beyond Limits
              </h3>
              <p className="text-xl text-brand-accent-light leading-relaxed">
                Together, let&apos;s transform your vision into reality with technology that works for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}