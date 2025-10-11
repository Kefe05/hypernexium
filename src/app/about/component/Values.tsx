import React from 'react'
import LineMosaic from './LineMossaic'

export default function About() {
  return (
    <main className=" dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Mission Card */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-10 lg:p-12 shadow-sm">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-6 leading-tight">
              <span className="text-brand-accent font-semibold">Our Mission</span>{' '}
              <span className="text-gray-900 dark:text-gray-100">
                to improve patient outcomes by simplifying cardiac care.
              </span>
            </h2>
            
            {/* Decorative circles */}
            <div className="mt-12 relative h-64">
              
             <LineMosaic />
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-10 lg:p-12 shadow-sm">
            <h2 className=" text-3xl sm:text-4xl lg:text-5xl font-normal mb-6 leading-tight">
              <span className="text-brand-accent font-semibold">Our Vision</span>{' '}
              <span className="text-gray-900 dark:text-gray-100">
                to shape a future where patient care is seamless, precise, and accessible to all.
              </span>
            </h2>
            
            {/* Decorative circles */}
            <div className="mt-12 relative h-64">
              <LineMosaic />
            </div>
          </div>
          
        </div>
      </div>
    </main>
  )
}