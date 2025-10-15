import type { Metadata } from "next";
// import Team from "@/components/Team"
import Hero from './component/Hero';
import Values from './component/Values';
import CoreValues from './component/CoreValues';
import Newsletter from '@/components/Newsletter';
import AboutPage from './component/about';

export const metadata: Metadata = {
  title: "About Us - Hyper Nexium Technologies",
  description: "Learn about Hyper Nexium Technologies, our mission, vision, and core values in empowering smart enterprises.",
};

export default function About() {
  return (
   <main className="bg-white dark:bg-gray-900">
    {/* About Hero */}
    <Hero />

    {/* About Section */}
    <div className="pb-16 md:pb-20 lg:pb-24">
      <AboutPage />
    </div>

    {/* Core Values and Mission Statement */}
    <div className="pb-16 md:pb-20 lg:pb-24">
      <Values />
    </div>

    {/* Core Values */}
    <div className="pb-16 md:pb-20 lg:pb-24">
      <CoreValues />
    </div>

    {/* Team Section
    <div className="py-16 md:py-20 lg:py-24">
      <Team />
    </div> */}

    {/* Newsletter */}
    <div className="pb-16 md:pb-20 lg:pb-24">
      <Newsletter />
    </div>

   
   </main>
  )
}
