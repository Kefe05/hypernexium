import type { Metadata } from "next";
import Hero from './component/Hero'
import ServiceSection from './component/Services'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Services - Hyper Nexium Technologies",
  description: "Explore our comprehensive IT services including cybersecurity, backup and recovery, and digital infrastructure.",
};

export default function Services() {
  return (
    <section>
      {/* service hero */}
      <Hero />

      {/* services */}
      <ServiceSection />
      {/* services */}
      <ServiceSection />
      {/* services */}
      <ServiceSection />
      {/* services */}
      <ServiceSection />
      {/* services */}
      <ServiceSection />
      {/* services */}
      <ServiceSection />

      {/* newsletter */}
      <Newsletter />


      {/* footer */}
      <Footer />





    </section>
  )
}
