"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
// import { VerticalGridLines } from "./GridLines";

export default function Team() {
  const [currentMember, setCurrentMember] = useState(0);

  const boardMembers = [
    {
      id: 1,
      name: "Dr. Samson Okello",
      title: "Chairperson",
      bio: "Dr. Samson brings over 25 years of experience in technology leadership and strategic business development across Africa. As former CTO of a leading telecom provider, he has driven digital transformation initiatives that connected millions. His vision for Hyper Nexium focuses on bridging the digital divide through innovative, Africa-centric solutions.",
      image: "/board-member-2.jpeg",
      expertise: ["Digital Strategy", "African Markets", "Technology Policy", "Innovation Leadership"]
    },
    {
      id: 2,
      name: "Eng. Samuel Mwangi",
      title: "Vice Chairperson",
      bio: "Eng. Samuel Mwangi is a renowned engineer and entrepreneur with expertise in network infrastructure and cybersecurity. He founded Kenya's first indigenous cloud service provider and serves on multiple technology advisory boards. At Hyper Nexium, Samuel drives our commitment to scalable, secure infrastructure that powers African enterprises.",
      image: "/board-member-2.jpeg",
      expertise: ["Network Engineering", "Cybersecurity", "Cloud Infrastructure", "Entrepreneurship"]
    },
    {
      id: 3,
      name: "Mr. James Bello",
      title: "Board Member - Finance & Operations",
      bio: "Mr. James Bello is a financial strategist and operations expert with a proven track record in scaling technology companies across West Africa. His experience in venture capital and corporate governance ensures Hyper Nexium's financial sustainability and operational excellence while maintaining our core values of integrity and customer focus.",
      image: "/board-member-2.jpeg",
      expertise: ["Financial Strategy", "Corporate Governance", "Operations Management", "Venture Capital"]
    }
  ];

  // Auto-advance members
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMember((prev) => (prev + 1) % boardMembers.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [boardMembers.length]);

  const currentMemberData = boardMembers[currentMember];

  return (
    <section className="relative py-24 bg-base overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              {/* Main Image Container */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-brand-accent/20 to-brand-primary/20">
                <Image
                  src={currentMemberData.image}
                  alt={currentMemberData.name}
                  fill
                  className="object-cover transition-all duration-700 ease-out"
                />

                {/* Title Badge */}
                <div className="absolute bottom-6 left-6 bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg">
                  <span className="text-sm font-medium text-brand-accent uppercase tracking-wide">
                    {currentMemberData.title}
                  </span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-accent/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-primary/10 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Right Side - Member Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="space-y-6">
              <div className="text-6xl text-brand-accent/20 font-serif leading-none">&ldquo;</div>
              <blockquote className=" text-lg md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                {currentMemberData.bio}
              </blockquote>
            </div>

            {/* Expertise Areas */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Areas of Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {currentMemberData.expertise.map((area, index) => (
                  <span
                    key={index}
                    className="inline-block bg-brand-accent/10 text-brand-accent px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Member Info */}
            <div className="space-y-2 pt-4">
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">—</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {currentMemberData.name}
                </h3>
              </div>
              <p className="text-brand-accent font-medium text-lg">
                {currentMemberData.title}
              </p>
            </div>

            {/* Navigation Dots */}
            <div className="flex space-x-3 pt-4">
              {boardMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMember(index)}
                  className={`transition-all duration-300 ${index === currentMember
                    ? 'w-12 h-3 bg-brand-accent rounded-full'
                    : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                  aria-label={`View board member ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}