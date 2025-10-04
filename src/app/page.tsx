import React from 'react';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Service from '@/components/Service';
import Stat from '@/components/Stat';
import Logo from '@/components/Logo';
import Timeline from '@/components/Timeline';
import Newsletter from '@/components/Newsletter';
import Contact from '@/components/Contact';

export default function HyperNexiumLanding() {
  return (
    <div className="min-h-screen bg-base text-primary">
      {/* Navigation */}
      <Nav />
     

      {/* Hero Section */}
      <Hero  />    

      {/* Srevices Grid Section */}
      <Service />
     

      {/* Stats Section */}
      <Stat />

      {/* Logo Section */}
      <Logo/>

      {/* Timeline Section */}
      <Timeline />

      {/* CTA Section */}
      <Newsletter  />

      {/* Contact Section */}
      {/* <Contact /> */}

      {/* Footer */}
    </div>
  );
}