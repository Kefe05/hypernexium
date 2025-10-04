import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Newsletter() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div>
        <div>
          <h3>Stay in Loop</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, veniam.</p>
        </div>
        <div>
          <Input className="w-[300px] rounded-full" placeholder="Enter your mail"/>
          <Button className="bg-brand-accent rounded-full w-[100px] text-white ">Subscribe </Button>
        </div>
      </div>
    </section>
  );
}
