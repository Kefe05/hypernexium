import React from 'react'

export default function Contact() {
  return (
    <section className="bg-black ">
     

        <div className="max-w-7xl mx-auto px-6 py-16">
        
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact us</h2>
          <p className="text-gray-400 mb-16 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="grid md:grid-cols-4 gap-12">
            {/* Email */}
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Email</h3>
              <p className="text-gray-400 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.
              </p>
              <a href="mailto:email@example.com" className="text-cyan-400 hover:text-cyan-300 text-sm underline">
                email@example.com
              </a>
            </div>

           

            {/* Phone */}
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Phone</h3>
              <p className="text-gray-400 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.
              </p>
              <a href="tel:+10550000000" className="text-cyan-400 hover:text-cyan-300 text-sm underline">
                +1 (055) 000-0000
              </a>
            </div>

            {/* Office */}
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Office</h3>
              <p className="text-gray-400 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.
              </p>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm underline">
                123 Sample St, Sydney NSW 2000 AU
              </a>
            </div>
          </div>
        </div>
      </section>
  )
}
