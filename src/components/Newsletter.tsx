import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

export default function Newsletter() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black/80"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
           Subscribe to our Newsletter Today
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
          <div className="flex items-center justify-center space-x-4 ">
            <Input className='w-[300px]' />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
  )
}
