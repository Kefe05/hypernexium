"use client"
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { AnimatedButton } from './AnimateButton';
import { slidesData as slides } from '../../public/constants';


// Hero Carousel Component
export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);



  const animateContent = () => {
    const ctx = gsap.context(() => {
      gsap.set([labelRef.current, titleRef.current, descRef.current, buttonRef.current], {
        opacity: 0,
        y: 40
      });

      const tl = gsap.timeline();

      tl.to(labelRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      })
        .to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out"
        }, "-=0.5")
        .to(descRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.6")
        .to(buttonRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.5");
    }, containerRef);

    return () => ctx.revert();
  };

  useEffect(() => {
    animateContent();
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex items-center overflow-hidden"
    >
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          style={{
            backgroundImage: `url('${slide.image}')`
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-slate-900 opacity-60"
      />

      {/* Content Container */}
      <div className="relative z-10  max-w-7xl mx-auto px-3 md:px-12 lg:px-16 w-full">
        <div className="  max-w-[370px] md:max-w-3xl space-y-8">
          {/* Label */}
          <div ref={labelRef}>
            <span className="inline-block px-5 py-2 bg-brand-accent/20 backdrop-blur-sm border border-brand-secondary rounded-full text-brand-accent text-xs md:text-sm font-medium tracking-wide">
              {slides[currentSlide].label}
            </span>
          </div>

          {/* Main Title */}
          <h1
            ref={titleRef}
            className="text-3xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            {slides[currentSlide].title}{' '}
            <span className="text-brand-accent">{slides[currentSlide].titleAccent}</span>
            {slides[currentSlide].titleEnd}
          </h1>

         

          {/* CTA Button */}
          <div ref={buttonRef} className="pt-4 ">
            <AnimatedButton />
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full transition-all duration-300 text-white border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full transition-all duration-300 text-white border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button> */}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${index === currentSlide
                ? 'w-12 h-3 bg-brand-accent'
                : 'w-3 h-3 bg-white/40 hover:bg-white/60'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none" />
    </section>
  );
}