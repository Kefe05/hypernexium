import Team from "@/components/Team"
import Hero from './component/Hero';
import Values from './component/Values';
import CoreValues from './component/CoreValues';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import AboutPage from './component/about';

export default function About() {
  return (
   <main>
    {/* About Hero */}
    <Hero    />

   <AboutPage/>

   
    {/* Core Values and Mission Statement */}
    <Values />

    {/* Core Values */}
    <CoreValues />

    <Team />

    {/*Newsletter */}
    <Newsletter />


    {/* Footer */}
    <Footer />
   </main>
  )
}
