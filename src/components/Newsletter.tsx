"use client"
import React, { useState } from "react";
import { Button } from "./ui/button";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Handle newsletter subscription logic here
      console.log("Subscribing email:", email);
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Content */}
          <div className="flex-1 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Stay In the Loop
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg">
              Keep up-to-date with all things Hyper Nexium by signing up for our newsletter.
            </p>
          </div>

          {/* Right Content - Form */}
          <div className="flex-1 max-w-lg">
            <form onSubmit={handleSubmit} className="flex gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 rounded-l-full border border-r-0 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
              />
              <Button
                type="submit"
                className="px-8 py-4 bg-brand-primary hover:bg-brand-secondary text-white rounded-r-full font-medium border border-l-0 border-brand-primary h-20"
              >
                Subscribe
              </Button>
            </form>
            
            {/* Privacy Notice */}
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
              By submitting this form, you agree to our{" "}
              <a 
                href="/privacy" 
                className="text-brand-accent hover:underline"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}