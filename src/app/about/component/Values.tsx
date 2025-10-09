import React from 'react'

export default function About() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Mission Card */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-10 lg:p-12 shadow-sm">
            <h2 className="text-4xl lg:text-5xl font-normal mb-6 leading-tight">
              <span className="text-blue-700 font-semibold">Our Mission</span>{' '}
              <span className="text-gray-900 dark:text-gray-100">
                to improve patient outcomes by simplifying cardiac care.
              </span>
            </h2>
            
            {/* Decorative circles */}
            <div className="mt-12 relative h-64">
              <div className="absolute top-0 left-0 w-24 h-32 border-2 border-gray-200 rounded-full"></div>
              <div className="absolute top-0 left-28 w-28 h-28 border-2 border-gray-200 rounded-full"></div>
              <div className="absolute top-0 left-60 w-48 h-24 border-2 border-gray-200 rounded-full"></div>
              <div className="absolute top-32 left-16 w-32 h-32 border-2 border-gray-200 rounded-full"></div>
              <div className="absolute top-32 left-52 w-28 h-28 border-2 border-gray-200 rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-36 h-40 border-2 border-gray-200 rounded-3xl"></div>
              <div className="absolute bottom-0 left-40 w-24 h-24 border-2 border-gray-200 rounded-full"></div>
              <div className="absolute bottom-0 right-20 w-32 h-36 border-2 border-gray-200 rounded-3xl"></div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-10 lg:p-12 shadow-sm">
            <h2 className="text-4xl lg:text-5xl font-normal mb-6 leading-tight">
              <span className="text-blue-700 font-semibold">Our Vision</span>{' '}
              <span className="text-gray-900 dark:text-gray-100">
                to shape a future where patient care is seamless, precise, and accessible to all.
              </span>
            </h2>
            
            {/* Decorative circles */}
            <div className="mt-12 relative h-64">
              <div className="absolute top-0 left-8 w-20 h-20 border-2 border-gray-200 rounded-full"></div>
              <div className="absolute top-0 left-32 w-24 h-24 border-2 border-gray-200 rounded-full"></div>
              <div className="absolute top-0 left-60 w-20 h-20 border-2 border-gray-200 rounded-full"></div>
              <div className="absolute top-0 right-12 w-28 h-28 border-2 border-gray-200 rounded-full"></div>
              <div className="absolute top-28 left-16 w-28 h-28 border-2 border-gray-200 rounded-full"></div>
              <div className="absolute top-28 left-48 w-40 h-20 border-2 border-gray-200 rounded-full"></div>
              <div className="absolute top-28 right-4 w-32 h-32 border-2 border-gray-200 rounded-full"></div>
              <div className="absolute bottom-0 left-4 w-24 h-24 border-2 border-gray-200 rounded-full"></div>
              <div className="absolute bottom-0 left-32 w-36 h-20 border-2 border-gray-200 rounded-full"></div>
              <div className="absolute bottom-0 left-72 w-48 h-28 border-2 border-gray-200 rounded-full"></div>
              <div className="absolute bottom-0 right-4 w-24 h-24 border-2 border-gray-200 rounded-full"></div>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  )
}