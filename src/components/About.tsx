import * as React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 px-10 space-y-10 ">
    <div className="space-y-5 w-[700px]">
      <h2 className="text-4xl">Lorem ipsum lorem tote te</h2>
      <p className="text-lg">
        Lorem ipsum dolor sit amet consectetur. Mattis vel feugiat vitae at
        turpis. Elementum tellus se n fringilla at sed varius id tristique.
        Fusce nunc ut ut est semper amet a urna. Elementum leo malesuada.
      </p>
      <Button className="bg-brand-accent hover:bg-brand-primary text-white rounded-full px-6 text-sm">
        Contact us
      </Button>
    </div>
    <div className="flex ">
      <div className="flex-1 h-full flex flex-col gap-5">
       {[1, 2,3].map((number) => (
         <div className="space-y-3" key={number}>
          <span className="border-l dark:border-white border-black pl-5 text-2xl font-semibold">5+</span>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, sint ad delectus exercitationem quam excepturi.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, sint ad delectus exercitationem quam excepturi.
          </p>
        </div>
       ))}
     
      </div>
      <div className="bg-brand-accent flex-1 h-full rounded-md">
        <Image src={"/one.jpg"} width={300} height={200} className="w-full h-full rounded-md" alt={"hellow World"} />
      </div>
    </div>
    </section>
  )
}
