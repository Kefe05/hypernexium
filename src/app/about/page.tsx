import Team from "@/components/Team"
import Hero from './component/Hero';
import Values from './component/Values';
import CoreValues from './component/CoreValues';
import Newsletter from '@/components/Newsletter';
import AboutPage from './component/about';

export default function About() {
  return (
   <main className="bg-white dark:bg-gray-900">
    {/* About Hero */}
    <Hero />

    {/* About Section */}
    <div className="py-16 md:py-20 lg:py-24">
      <AboutPage />
    </div>

    {/* Core Values and Mission Statement */}
    <div className="py-16 md:py-20 lg:py-24">
      <Values />
    </div>

    {/* Core Values */}
    <div className="py-16 md:py-20 lg:py-24">
      <CoreValues />
    </div>

    {/* Team Section */}
    <div className="py-16 md:py-20 lg:py-24">
      <Team />
    </div>

    {/* Newsletter */}
    <div className="py-16 md:py-20 lg:py-24">
      <Newsletter />
    </div>

   
   </main>
  )
}
