import Image from 'next/image'
import React from 'react'

export default function Stat() {
  return (
   <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className=" mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
               Why Choose Hyper Nexium 
              </h2>
            </div>
            
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Stat Card 1 */}
             <div className="border border-gray-800 rounded-lg overflow-hidden hover:border-cyan-700 transition-colors">
             
              <div className="p-8">
                <div className="text-[28px] font-bold mb-4">	Client-Centric Solutions</div>
                <h3 className="text-lg font-semibold mb-3">Tailored services that align with your business goals</h3>
               
              </div>

               <div className="h-40 bg-gradient-to-br from-orange-500 to-orange-600" >
                <Image src={"/one.jpg"} alt='three' width={300} height={300} className='w-full h-full object-cover'/>
               </div>
          

              
            </div>

            {/* Stat Card 2 - With Image */}
            <div className="border border-gray-800 rounded-lg overflow-hidden hover:border-cyan-700 transition-colors">
              <div className="h-40 bg-gradient-to-br from-orange-500 to-orange-600">
                <Image src={"/two.jpg"} alt='three' width={200} height={200} className='w-full h-full object-cover'/>
              </div>
              <div className="p-8">
                <div className="text-[28px] font-bold mb-4">Certified Experts</div>
                <h3 className="text-lg font-semibold mb-3">A team of trained and certified professionals across multiple domains.</h3>
                
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="border border-gray-800 rounded-lg overflow-hidden hover:border-cyan-700 transition-colors">
              
              <div className="p-8">
                <div className="text-[28px] font-bold mb-4">	Innovative Technology Stack</div>
                <h3 className="text-lg font-semibold mb-3">We leverage top-tier technologies and platforms to deliver high-performance solutions.</h3>
               
              </div>
              <div className="h-40 bg-gradient-to-br from-orange-500 to-orange-600">
                <Image src={"/three.jpg"} alt='three' width={200} height={200} className='w-full h-full object-cover'/>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
