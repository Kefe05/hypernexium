"use client";
import { useEffect, useRef } from "react";
import { Clock, ArrowRight, Shield } from "lucide-react";

import gsap from "gsap";

export default function ComingSoonCard() {
  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const shimmerRef = useRef(null);

  useEffect(() => {
    // Card entrance animation
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });

    // Title reveal animation
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.3,
      ease: "power2.out",
    });

    // Animated circles
    circleRefs.current.forEach((circle: HTMLDivElement | null, i: number) => {
      if (circle) {
        gsap.to(circle, {
          scale: 1.2,
          opacity: 0.3,
          duration: 2 + i * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.3,
        });
      }
    });

    // Shimmer effect
    gsap.to(shimmerRef.current, {
      x: "200%",
      duration: 3,
      repeat: -1,
      ease: "power1.inOut",
      repeatDelay: 1,
    });

    // Countdown animation
    const numbers = document.querySelectorAll(".countdown-number");
    gsap.from(numbers, {
      opacity: 0,
      scale: 0.5,
      stagger: 0.1,
      duration: 0.6,
      delay: 0.5,
      ease: "back.out(1.7)",
    });
  }, []);



  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (circleRefs.current) {
                circleRefs.current[i] = el;
              }
            }}
            className="absolute rounded-full border border-gray-800"
            style={{
              width: `${300 + i * 200}px`,
              height: `${300 + i * 200}px`,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 0.1,
            }}
          />
        ))}
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />

      <div
        ref={cardRef}
        className="relative z-10 w-full max-w-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Shimmer effect */}
        <div
          ref={shimmerRef}
          className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full"
          style={{ transform: "skewX(-20deg)" }}
        />

        <div className="relative p-8 md:p-12">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-black" />
            </div>
          </div>

          {/* Title */}
          <div ref={titleRef} className="text-center mb-4">
            <div className="inline-block px-4 py-1 bg-gray-800 border border-gray-700 rounded-full mb-4">
              <span className="text-gray-300 text-sm font-medium">
                Coming Soon
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Something Exciting
              <br />
              <span className="text-gray-400">Is On Its Way</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-lg mx-auto">
              We&apos;re working on something special. Stay tuned for our latest
              cybersecurity solution.
            </p>
          </div>

          {/* Countdown */}
          <div className="flex justify-center gap-4 my-8">
            {[
              { value: "14", label: "Days" },
              { value: "08", label: "Hours" },
              { value: "32", label: "Minutes" },
              { value: "45", label: "Seconds" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="countdown-number bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 mb-2">
                  <span className="text-3xl font-bold text-white">
                    {item.value}
                  </span>
                </div>
                <span className="text-xs text-gray-600 uppercase tracking-wider">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

       

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-gray-800">
            <div className="text-center">
              <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Shield className="w-5 h-5 text-gray-400" />
              </div>
              <p className="text-gray-500 text-sm">Secure</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Clock className="w-5 h-5 text-gray-400" />
              </div>
              <p className="text-gray-500 text-sm">Fast</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-2">
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
              <p className="text-gray-500 text-sm">Reliable</p>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </div>
  );
}
