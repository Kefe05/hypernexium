import React from 'react'
import Hero from './component/Hero'
import Values from './component/Values'
import CoreValues from './component/CoreValues'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function About() {
  return (
   <main>
    {/* About Hero */}
    <Hero    />

    {/* Core Values and Mission Statement */}
    <Values />

    {/* Core Values */}
    <CoreValues />

    {/*Newsletter */}
    <Newsletter />


    {/* Footer */}
    <Footer />
   </main>
  )
}
