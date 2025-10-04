import React from "react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-cover" style={{
      backgroundImage: "url('/HeroImageTwo.jpg')"
    }}>
      <div className="relative  w-full md:ml-10    px-6 ">
        <p className="text-white">This a place for innovation</p>
        <h1 className="text-6xl md:text-7xl font-semibold mb-6 text-white ">HYPER-NEXIUM</h1>
        <p className="text-xl md:text-2xl text-primary text-white">
          Empowering enterprises with scalable IT solutions for smarter
          innovation.
        </p>

         <Button className="bg-dark-border hover:bg-brand-primary text-white rounded-full px-6 text-xl h-15 w-[300px]" >
          <span> Contact us</span> 
          <ArrowRight           
          </Button>
      </div>
    </section>
  );
}
