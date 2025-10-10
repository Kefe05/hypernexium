import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";


export function AnimatedButton() {
 

  return (
    <Button
      className="relative overflow-hidden bg-brand-accent text-white rounded-full px-6 py-4 text-sm md:text-base lg:text-lg w-[150px] sm:w-[200px] md:w-[250px] flex justify-between items-center cursor-pointer border-0 shadow-lg transition-shadow hover:shadow-xl h-15 md:h-20"
    >
      <div
        
        className="absolute inset-0 bg-brand-accent rounded-full"
        style={{ transform: 'scale(0)' }}
      />
      <span className="pl-2 font-medium relative z-10">
        Learn More
      </span>
      <span className="rounded-full p-1.5 md:p-2.5 bg-white text-brand-accent shadow-md flex items-center justify-center relative z-10">
        <ArrowRight className="w-5 h-5" />
      </span>
    </Button>
  );
}