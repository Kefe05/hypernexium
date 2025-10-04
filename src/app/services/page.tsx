import React from 'react'
import Hero from './component/Hero'
import About from './component/About'
import ServiceSection from './component/Services'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Services() {
  return (
    <section>
        {/* service hero */}
        <Hero />

        {/* services about section */}
        <About      />

        {/* services */}
        <ServiceSection />

        {/* newsletter */}
        <Newsletter />


        {/* footer */}
        <Footer />





    </section>
  )
}
