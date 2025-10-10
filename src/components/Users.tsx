import React from "react";
import {
  Heart,
  GraduationCap,
  Building2,
  ShoppingCart,
  Home,
  Factory,
  Landmark,
  Truck
} from "lucide-react";
import { VerticalGridLines } from "./GridLines";

export default function Users() {
  const industries = [
    {
      id: 1,
      title: "Healthcare",
      description: "Innovative solutions tailored for the healthcare sector.",
      icon: Heart,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      hoverColor: "hover:bg-red-500/20"
    },
    {
      id: 2,
      title: "Education",
      description: "Innovative solutions tailored for the education sector.",
      icon: GraduationCap,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      hoverColor: "hover:bg-blue-500/20"
    },
    {
      id: 3,
      title: "Corporate",
      description: "Innovative solutions tailored for the corporate sector.",
      icon: Building2,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      hoverColor: "hover:bg-purple-500/20"
    },
    {
      id: 4,
      title: "Retail",
      description: "Innovative solutions tailored for the retail sector.",
      icon: ShoppingCart,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      hoverColor: "hover:bg-green-500/20"
    },
    {
      id: 5,
      title: "Real Estate",
      description: "Innovative solutions tailored for the real estate sector.",
      icon: Home,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      hoverColor: "hover:bg-orange-500/20"
    },
    {
      id: 6,
      title: "Manufacturing",
      description: "Innovative solutions tailored for the manufacturing sector.",
      icon: Factory,
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
      hoverColor: "hover:bg-indigo-500/20"
    },
    {
      id: 7,
      title: "Finance",
      description: "Innovative solutions tailored for the finance sector.",
      icon: Landmark,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      hoverColor: "hover:bg-yellow-500/20"
    },
    {
      id: 8,
      title: "Transportation",
      description: "Innovative solutions tailored for the transportation sector.",
      icon: Truck,
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
      hoverColor: "hover:bg-cyan-500/20"
    }
  ];

  return (
    <section className="relative py-24 bg-base text-primary overflow-hidden">
      <VerticalGridLines opacity={0.05} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            We have a solution {" "}
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
              <div
                key={industry.id}
                className={`group relative p-8 rounded-2xl border  bg-light-surface backdrop-blur-sm transition-all duration-300  hover:bg-brand-accent/20 hover:transform hover:-translate-y-2 cursor-pointer`}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 text-brand-accent-light`} />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg md:text-2xl font-bold text-secondary  transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-secondary transition-colors leading-relaxed md:text-base text-sm">
                    {industry.description}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

       
      </div>
    </section>
  );
}
