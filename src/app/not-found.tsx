"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Shield, Database, GraduationCap, Home, ArrowLeft, Search } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import gsap from 'gsap';

export default function NotFoundPage() {
    const titleRef = useRef(null);
    const glitchRef = useRef(null);
    const cardsRef = useRef([]);
    const particlesRef = useRef<HTMLDivElement>(null);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        // Title entrance animation
        gsap.from(titleRef.current, {
            opacity: 0,
            y: -50,
            duration: 1,
            ease: 'power3.out'
        });

        // Glitch effect animation
        const glitchTimeline = gsap.timeline({ repeat: -1, repeatDelay: 3 });
        glitchTimeline
            .to(glitchRef.current, {
                x: -5,
                duration: 0.1,
                ease: 'power1.inOut'
            })
            .to(glitchRef.current, {
                x: 5,
                duration: 0.1,
                ease: 'power1.inOut'
            })
            .to(glitchRef.current, {
                x: -3,
                duration: 0.1,
                ease: 'power1.inOut'
            })
            .to(glitchRef.current, {
                x: 0,
                duration: 0.1,
                ease: 'power1.inOut'
            });

        // Cards stagger animation
        gsap.from(cardsRef.current, {
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 0.8,
            delay: 0.5,
            ease: 'power2.out'
        });

        // Floating particles animation
        if (particlesRef.current) {
            const particles = particlesRef.current.children;
            Array.from(particles).forEach((particle, i) => {
                gsap.to(particle, {
                    y: `+=${Math.random() * 40 - 20}`,
                    x: `+=${Math.random() * 40 - 20}`,
                    duration: 3 + Math.random() * 2,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                    delay: i * 0.2
                });
            });
        }

        // Alert animation
        setTimeout(() => {
            setShowAlert(true);
            gsap.from('.alert-container', {
                opacity: 0,
                y: 20,
                duration: 0.6,
                ease: 'back.out(1.7)'
            });
        }, 1500);
    }, []);

    const services = [
        {
            icon: Shield,
            title: 'Cybersecurity',
            description: 'Protect your digital assets with enterprise-grade security solutions',
            link: '/cybersecurity'
        },
        {
            icon: GraduationCap,
            title: 'IT Training',
            description: 'Empower your team with cutting-edge technical skills and certifications',
            link: '/training'
        },
        {
            icon: Database,
            title: 'Backup & Recovery',
            description: 'Ensure business continuity with robust data protection strategies',
            link: '/backup'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900  to-black text-white relative overflow-hidden">
            {/* Animated background particles */}
            <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                    />
                ))}
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />

            <div className="relative z-10 container mx-auto px-4 py-16 max-w-6xl">
                {/* Header */}
                <div ref={titleRef} className="text-center mb-12">
                    <div ref={glitchRef} className="inline-block">
                        <h1 className="text-9xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                            404
                        </h1>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                        The page you're looking for seems to have been moved or doesn't exist.
                        But don't worry, our security protocols are keeping everything else safe!
                    </p>
                </div>

                {/* Alert */}
                {showAlert && (
                    <div className="alert-container max-w-2xl mx-auto mb-12">
                        <Alert className="bg-blue-950/50 border-blue-400/30 backdrop-blur-sm">
                            <Shield className="h-4 w-4 text-blue-400" />
                            <AlertDescription className="text-blue-100">
                                <strong className="font-semibold">System Status:</strong> All services operational.
                                This appears to be a navigation error, not a security breach.
                            </AlertDescription>
                        </Alert>
                    </div>
                )}

                {/* Services Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                ref={el => cardsRef.current[index] = el}
                                className="group bg-slate-800/50 backdrop-blur-sm border border-blue-400/20 rounded-xl p-6 hover:bg-slate-800/70 hover:border-blue-400/40 transition-all duration-300 cursor-pointer hover:scale-105"
                            >
                                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                                    <Icon className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-white">
                                    {service.title}
                                </h3>
                                <p className="text-blue-200 text-sm mb-4">
                                    {service.description}
                                </p>
                                <span className="text-blue-400 text-sm font-medium group-hover:text-blue-300">
                                    Learn more →
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
                        <Home className="w-5 h-5" />
                        Back to Home
                    </button>
                    <button className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                        <ArrowLeft className="w-5 h-5" />
                        Go Back
                    </button>
                    <button className="flex items-center gap-2 bg-slate-800/50 hover:bg-slate-700/50 border border-blue-400/30 hover:border-blue-400/50 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                        <Search className="w-5 h-5" />
                        Search Site
                    </button>
                </div>

                {/* Footer text */}
                <div className="text-center mt-16 text-blue-300/60 text-sm">
                    <p>Need immediate assistance? Contact our support team 24/7</p>
                </div>
            </div>
        </div>
    );
}