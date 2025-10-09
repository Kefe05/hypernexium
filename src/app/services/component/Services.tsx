import React from 'react';
import { Card } from '@/components/ui/card';
import { Code, Search, Smartphone, Palette, ShoppingCart, BarChart, ArrowRight, LucideIcon } from 'lucide-react';
import Link from 'next/link';

// Types
type AccentColor = 'blue' | 'green' | 'purple' | 'orange';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  accentColor: AccentColor;
  slug: string;
}

// Reusable Service Card Component
function ServiceCard({ icon: Icon, title, subtitle, tags, description, accentColor, slug }: ServiceCardProps) {
  const accentColors: Record<AccentColor, string> = {
    blue: "text-blue-900",
    green: "text-green-900",
    purple: "text-purple-900",
    orange: "text-orange-900"
  };

  const hoverColors: Record<AccentColor, string> = {
    blue: "group-hover:bg-blue-50",
    green: "group-hover:bg-green-50",
    purple: "group-hover:bg-purple-50",
    orange: "group-hover:bg-orange-50"
  };

  return (
    <Link href={`/services/${slug}`} className="group block">
      <Card className={`p-8 h-full flex flex-col bg-white hover:shadow-xl transition-all duration-300 cursor-pointer ${hoverColors[accentColor]} border-2 hover:border-gray-300`}>
        {/* Header with Icon and Label */}
        <div className="flex items-start justify-between mb-8">
          <div className="relative w-32 h-32">
            <div className={`text-8xl font-bold ${accentColors[accentColor]} opacity-10 absolute -top-4 -left-2 group-hover:opacity-20 transition-opacity`}>
              {title.charAt(0)}
            </div>
            <Icon className={`w-16 h-16 ${accentColors[accentColor]} relative z-10 group-hover:scale-110 transition-transform duration-300`} strokeWidth={1.5} />
          </div>
          <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">
            {subtitle}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-3xl font-semibold text-gray-900 mb-6 group-hover:text-gray-700 transition-colors">
          <span className="font-bold">{title.split(' ')[0]}</span>{' '}
          <span className="font-normal">{title.split(' ').slice(1).join(' ')}</span>
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 group-hover:bg-white text-gray-700 text-sm rounded-full transition-colors"
            >
              + {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed text-lg flex-grow mb-6 group-hover:text-gray-700 transition-colors">
          {description}
        </p>

        {/* Learn More Link */}
        <div className="flex items-center text-gray-900 font-medium group-hover:text-gray-700 transition-colors">
          <span className="mr-2">Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </Card>
    </Link>
  );
}

// Services data with slugs for routing
const services: ServiceCardProps[] = [
  {
    icon: Code,
    title: "Cloud Infrastructure",
    subtitle: "CLOUD",
    tags: ["AWS", "Azure", "scalability", "migration"],
    description: "Transform your business with enterprise-grade cloud solutions. We design and implement robust infrastructure that scales with your growth, ensuring maximum uptime and security.",
    accentColor: "blue",
    slug: "cloud-infrastructure"
  },
  {
    icon: Search,
    title: "Cybersecurity Solutions",
    subtitle: "SECURITY",
    tags: ["threat detection", "compliance", "monitoring", "incident response"],
    description: "Protect your digital assets with our comprehensive cybersecurity framework. From threat detection to incident response, we safeguard your business against evolving cyber threats.",
    accentColor: "green",
    slug: "cybersecurity"
  },
  {
    icon: Smartphone,
    title: "Digital Transformation",
    subtitle: "DIGITAL",
    tags: ["automation", "modernization", "efficiency", "innovation"],
    description: "Modernize your operations with cutting-edge technology solutions. We help organizations embrace digital innovation to improve efficiency and accelerate growth.",
    accentColor: "purple",
    slug: "digital-transformation"
  },
  {
    icon: Palette,
    title: "Enterprise Software",
    subtitle: "SOFTWARE",
    tags: ["custom development", "integration", "scalable solutions", "maintenance"],
    description: "Build powerful enterprise applications tailored to your specific needs. Our custom software solutions streamline operations and drive business efficiency.",
    accentColor: "orange",
    slug: "enterprise-software"
  },
  {
    icon: ShoppingCart,
    title: "IT Consulting",
    subtitle: "CONSULTING",
    tags: ["strategy", "planning", "optimization", "best practices"],
    description: "Strategic IT guidance to align technology with your business goals. Our experts provide actionable insights to optimize your technology investments.",
    accentColor: "blue",
    slug: "it-consulting"
  },
  {
    icon: BarChart,
    title: "Support & Maintenance",
    subtitle: "SUPPORT",
    tags: ["24/7 monitoring", "updates", "troubleshooting", "optimization"],
    description: "Comprehensive support services to keep your systems running smoothly. Our team provides round-the-clock monitoring and proactive maintenance.",
    accentColor: "green",
    slug: "support-maintenance"
  }
]

export default function ServiceSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business and drive meaningful results
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.slug} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}