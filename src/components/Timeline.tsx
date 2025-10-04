import React from 'react'
import { Button } from './ui/button'
import { ChevronRight } from 'lucide-react'

export default function Timeline() {
  return (
     <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cyan-400 text-sm uppercase tracking-wide mb-4">Tagline</p>
            <h2 className="text-4xl font-bold mb-6">Medium length section heading goes here</h2>
            <p className="text-gray-400 max-w-3xl mx-auto mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
            </p>
            <Button variant="ghost" className="hover:bg-white/10">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Timeline Carousel */}
          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <ChevronRight className="w-6 h-6 rotate-180" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Timeline Item 1 */}
              <div className="text-center">
                <div className="mb-6 h-48 bg-gradient-to-br from-teal-900/30 to-cyan-900/30 rounded-lg flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-cyan-500/10 to-teal-500/10"></div>
                </div>
                <div className="relative">
                  <div className="w-3 h-3 bg-white rounded-full mx-auto mb-4"></div>
                  <div className="h-0.5 bg-gray-700 absolute top-1 left-0 right-0 -z-10"></div>
                </div>
                <p className="font-semibold mb-3">Date</p>
                <p className="text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>

              {/* Timeline Item 2 */}
              <div className="text-center">
                <div className="mb-6 h-48 bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-lg flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-orange-500/10 to-red-500/10"></div>
                </div>
                <div className="relative">
                  <div className="w-3 h-3 bg-white rounded-full mx-auto mb-4"></div>
                  <div className="h-0.5 bg-gray-700 absolute top-1 left-0 right-0 -z-10"></div>
                </div>
                <p className="font-semibold mb-3">Date</p>
                <p className="text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>

              {/* Timeline Item 3 */}
              <div className="text-center">
                <div className="mb-6 h-48 bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"></div>
                </div>
                <div className="relative">
                  <div className="w-3 h-3 bg-white rounded-full mx-auto mb-4"></div>
                  <div className="h-0.5 bg-gray-700 absolute top-1 left-0 right-0 -z-10"></div>
                </div>
                <p className="font-semibold mb-3">Date</p>
                <p className="text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
