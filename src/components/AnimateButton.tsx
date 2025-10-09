"use client"
import { ArrowRight } from 'lucide-react';

export default function AnimatedButton() {


  return (
    
      <button
        className="relative overflow-hidden bg-brand-accent text-white rounded-full p-3 text-lg h-18 w-[250px] flex justify-between items-center cursor-pointer border-0 shadow-lg"
            >
        <div
       
          className="absolute inset-0  rounded-full"
          style={{ transform: 'scale(0)' }}
        />
        <span className="pl-5 font-medium relative z-10">
          Learn More
        </span>
        <span className="text-2xl rounded-full p-3 bg-white text-brand-accent shadow-md flex items-center justify-center relative z-10">
          <ArrowRight className="w-6 h-6" />
        </span>
      </button>
  );
}