import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Newsletter from "@/components/Newsletter";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import Users from "@/components/Users";
import Footer from "@/components/Footer"

export default function HyperNexiumLanding() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <Hero />

      {/* Srevices Grid Section */}
      <About />

      {/* Stats Section */}
      <Services />

      {/* Logo Section */}
      <Partners />

      {/* Our Target users Section */}
      <Users />

      {/*The Team */}
      <Team />

      {/* CTA Section */}
      <Newsletter />

      {/* Footer */}
      <Footer/>
    </main>
  );
}
