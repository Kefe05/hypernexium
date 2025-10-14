"use client"
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate newsletter section
      gsap.fromTo('.newsletter-content',
        {
          opacity: 0,
          y: 60,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate form elements with stagger
      gsap.fromTo('.newsletter-form > *',
        {
          opacity: 0,
          x: 30
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.newsletter-form',
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setMessage("");
    setIsError(false);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setEmail("");
        setIsError(false);
      } else {
        setMessage(data.error || 'Failed to subscribe');
        setIsError(true);
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section ref={sectionRef} className="">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 newsletter-content">
          
          {/* Left Content */}
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
             Subscribe to our newsletter
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-lg">
              Keep up-to-date with all things Hyper Nexium by signing up for our newsletter.
            </p>
          </div>

          {/* Right Content - Form */}
          <div className="flex-1 w-full md:max-w-lg newsletter-form">
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
                disabled={isLoading}
                className="px-8 py-4 bg-brand-secondary bg-brand-secondary/90 hover:shadow-md text-white rounded-r-full font-medium border border-l-0 border-brand-primary h-15 md:h-20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
            
            {/* Status Message */}
            {message && (
              <div className={`mt-3 ml-5 text-sm ${
                isError 
                  ? 'text-red-600 dark:text-red-400' 
                  : 'text-green-600 dark:text-green-400'
              }`}>
                {message}
              </div>
            )}
            
            {/* Privacy Notice */}
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 ml-5">
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