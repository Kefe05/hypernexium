import React from "react";
import {
  Heart,
  GraduationCap,
  Building2,
  ShoppingCart,
  Home,
  Factory,
  Landmark,
  Truck,
  ArrowRight
} from "lucide-react";
import { VerticalGridLines } from "./GridLines";
import Link from "next/link";

export default function Users() {
  const industries = [
    {
      id: 1,
      title: "Healthcare",
      description: "Innovative solutions tailored for the healthcare sector.",
      icon: Heart,
    },
    {
      id: 2,
      title: "Education",
      description: "Innovative solutions tailored for the education sector.",
      icon: GraduationCap,
    },
    {
      id: 3,
      title: "Corporate",
      description: "Innovative solutions tailored for the corporate sector.",
      icon: Building2,
    },
    {
      id: 4,
      title: "Retail",
      description: "Innovative solutions tailored for the retail sector.",
      icon: ShoppingCart,
    },
    {
      id: 5,
      title: "Real Estate",
      description: "Innovative solutions tailored for the real estate sector.",
      icon: Home,
    },
    {
      id: 6,
      title: "Manufacturing",
      description: "Innovative solutions tailored for the manufacturing sector.",
      icon: Factory,
    },
    {
      id: 7,
      title: "Finance",
      description: "Innovative solutions tailored for the finance sector.",
      icon: Landmark,
    },
    {
      id: 8,
      title: "Transportation",
      description: "Innovative solutions tailored for the transportation sector.",
      icon: Truck,
    }
  ];

  return (
    <section className="relative py-24 bg-base text-primary overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            We have a solution{" "}
            <span className="text-brand-accent">for Every Sector</span>
          </h2>
          <p className="text-base md:text-xl text-secondary max-w-4xl mx-auto leading-relaxed">
            From healthcare to finance, we deliver cutting-edge technology solutions that drive innovation and
            efficiency across diverse industries.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => {
            const IconComponent = industry.icon;

            return (
              <Link key={industry.id} href={`/sector/${industry.id}`}>
                <div
                  className="group relative p-8 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden
                  border-light-border dark:border-dark-border 
                  bg-light-surface dark:bg-dark-surface
                  hover:border-brand-accent dark:hover:border-brand-accent
                  hover:shadow-2xl hover:shadow-brand-accent/10 dark:hover:shadow-brand-accent/20
                  hover:-translate-y-1 hover:scale-[1.02]
                  backdrop-blur-sm"
                >
                  {/* Gradient Overlay - Different for light and dark */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
                  bg-gradient-to-br from-brand-accent/5 via-transparent to-brand-accent/10
                  dark:from-brand-accent/10 dark:via-transparent dark:to-brand-accent/20"></div>

                  {/* Content Container */}
                  <div className="relative z-10">
                    {/* Icon and Title on same line */}
                    <div className="flex items-center mb-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mr-4 transition-all duration-300
                      bg-brand-accent/10 dark:bg-brand-accent/20
                      group-hover:bg-brand-accent/20 dark:group-hover:bg-brand-accent/30
                      group-hover:scale-110 group-hover:rotate-3">
                        <IconComponent className="w-6 h-6 text-brand-accent transition-all duration-300 group-hover:scale-110" />
                      </div>
                      <h3 className="text-lg md:text-2xl font-bold transition-colors duration-300
                      text-light-text-primary dark:text-dark-text-primary
                      group-hover:text-brand-accent dark:group-hover:text-brand-accent-light">
                        {industry.title}
                      </h3>
                    </div>

                    {/* Content */}
                    <div className="space-y-3 mb-4">
                      <p className="transition-colors duration-300 leading-relaxed md:text-base text-sm
                      text-light-text-secondary dark:text-dark-text-secondary
                      group-hover:text-light-text-primary dark:group-hover:text-dark-text-primary">
                        {industry.description}
                      </p>
                    </div>

                    {/* Learn More with Arrow */}
                    <div className="flex items-center justify-between transition-all duration-300
                    opacity-60 group-hover:opacity-100">
                      <span className="text-sm font-medium text-brand-accent dark:text-brand-accent-light">
                        Learn More
                      </span>
                      <ArrowRight className="w-4 h-4 text-brand-accent dark:text-brand-accent-light transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Animated Border Glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
                  ring-1 ring-brand-accent/50 dark:ring-brand-accent-light/50"></div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}