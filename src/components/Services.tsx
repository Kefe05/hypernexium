import Image from 'next/image'
import React from 'react'

export default function Services() {
    const services = ["Cybersecurity", "Backup and Recovery","Surveliance & Security", "IT Training", "Network Modernization", "Digital Infrastructure"]
  return (
         <section className='px-10 py-20'>
            <h2 className="text-4xl">Our Services</h2>
      <div className="flex py-20 px-10 ">
          <div className="flex-1 h-full flex flex-col gap-5">
           {services.map((service, index) => (
             <div className="space-y-3" key={index}>
              <span className="border-l dark:border-white border-black pl-5 text-2xl font-medium">{service}</span>
            </div>
           ))}
         
          </div>
          <div className="bg-brand-accent flex-1 h-full rounded-md">
            <Image src={"/two.jpg"} width={300} height={200} className="w-full h-full rounded-md" alt={"hellow World"} />
          </div>
        </div>
         </section>
  )
}
