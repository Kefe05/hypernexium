"use client"
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';

// Animated Button Component
function AnimatedButton() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const hoverBgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const btn = btnRef.current;
    const hoverBg = hoverBgRef.current;

    if (!btn || !hoverBg) return;

    const handleMouseEnter = () => {
      gsap.to(hoverBg, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(hoverBg, {
        scale: 0,
        duration: 0.4,
        ease: "power2.in"
      });
    };

    btn.addEventListener('mouseenter', handleMouseEnter);
    btn.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      btn.removeEventListener('mouseenter', handleMouseEnter);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <button
      ref={btnRef}
      className="relative overflow-hidden bg-brand-accent text-white rounded-full px-6 py-4 text-lg w-[250px] flex justify-between items-center cursor-pointer border-0 shadow-lg transition-shadow hover:shadow-xl"
    >
      <div
        ref={hoverBgRef}
        className="absolute inset-0 bg-brand-accent rounded-full"
        style={{ transform: 'scale(0)' }}
      />
      <span className="pl-2 font-medium relative z-10">
        Learn More
      </span>
      <span className="rounded-full p-2.5 bg-white text-brand-accent shadow-md flex items-center justify-center relative z-10">
        <ArrowRight className="w-5 h-5" />
      </span>
    </button>
  );
}

// Hero Carousel Component
export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
      label: "HYPERNEXIUM TECHNOLOGIES",
      title: "Empowering businesses with",
      titleAccent: "intelligent",
      titleEnd: " technology solutions",
      description: "Your trusted technology partner delivering innovative, secure,and future ready IT solutions that drive smart enterprise growth across Africa and beyond."
    },
    {
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80",
      label: "DIGITAL TRANSFORMATION",
      title: "Building the",
      titleAccent: "future",
      titleEnd: " of enterprise technology",
      description: "Partner with certified experts delivering world-class IT infrastructure, network modenization and seamless digital transforation across Africa and beyond."
    },
    {
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80",
      label: "TRUSTED TECHNOLOGY PARTNER",
      title: "Your success is our",
      titleAccent: "mission",
      titleEnd: " secure, scalable, reliable",
      description: "From cybersecurity to disaster recovery, we deliver end-to-end IT solutions backed by industry-leading partners like Cisco, Microsoft, Dell, and Palo Alto Networks."
    }
  ];

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
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="max-w-3xl space-y-8">
          {/* Label */}
          <div ref={labelRef}>
            <span className="inline-block px-5 py-2 bg-brand-accent/20 backdrop-blur-sm border border-brand-secondary rounded-full text-brand-accent text-sm font-medium tracking-wide">
              {slides[currentSlide].label}
            </span>
          </div>

          {/* Main Title */}
          <h1
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            {slides[currentSlide].title}{' '}
            <span className="text-brand-accent">{slides[currentSlide].titleAccent}</span>
            {slides[currentSlide].titleEnd}
          </h1>

          {/* Description */}
          <p
            ref={descRef}
            className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl"
          >
            {slides[currentSlide].description}
          </p>

          {/* CTA Button */}
          <div ref={buttonRef} className="pt-4">
            <AnimatedButton />
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
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
      </button>

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