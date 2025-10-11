"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { ThemeToggleSimple } from "./ui/ThemeToggle";
import Logo from "./Logo";
import { MenuIcon, ChevronDown } from "lucide-react";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

const servicesData = {
  title: "Services",
  description: "Comprehensive IT solutions tailored to your business needs. From cybersecurity to infrastructure, we've got you covered.",
  defaultImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center",
  items: [
    {
      name: "All Services",
      href: "/services",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center"
    },
    {
      name: "Cybersecurity",
      href: "/services/cybersecurity",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center"
    },
    {
      name: "Backup and Recovery",
      href: "/services/backup-recovery",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center"
    },
    {
      name: "Digital Infrastructure",
      href: "/services/digital-infrastructure",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center"
    },
    {
      name: "IT Training",
      href: "/services/it-training",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=center"
    },
    {
      name: "Network Modernization",
      href: "/services/network-modernization",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop&crop=center"
    },
    {
      name: "Surveillance Security Systems",
      href: "/services/surveillance-security",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop&crop=center"
    }
  ]
};

const industryData = {
  title: "Industries",
  description: "Specialized solutions across diverse sectors. We understand the unique challenges of your industry.",
  defaultImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&crop=center",
  items: [
    {
      name: "All Industries",
      href: "/industries",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&crop=center"
    },
    {
      name: "Health",
      href: "/industry/health",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=center"
    },
    {
      name: "Finance",
      href: "/industry/finance",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop&crop=center"
    },
    {
      name: "Education",
      href: "/industry/education",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop&crop=center"
    },
    {
      name: "Real Estate",
      href: "/industry/real-estate",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop&crop=center"
    },
    {
      name: "Manufacturing",
      href: "/industry/manufacturing",
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=300&fit=crop&crop=center"
    },
    {
      name: "Transportation",
      href: "/industry/transportation",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&crop=center"
    }
  ]
};

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
      setHoveredImage(null);
    }, 150); // 150ms delay before closing
    setHoverTimeout(timeout);
  };

  const handleDropdownEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
    setHoveredImage(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Get the height of the viewport (hero section is typically 100vh)
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      // Change navbar background when scrolled past hero section
      setIsScrolled(scrollPosition > heroHeight - 100); // 100px before reaching bottom
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="w-full fixed z-50">
      <div
        className={`w-full transition-all duration-300 mx-auto ${isScrolled
          ? 'bg-brand-secondary/90 backdrop-blur-sm shadow-lg border-b border-brand-secondary'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}

            <Link href="/">
              <Logo />
            </Link>

            {/* Navigation Links */}
            <ul className="hidden md:flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`transition-colors duration-200 hover:text-brand-accent ${isScrolled
                      ? 'text-white'
                      : 'text-white hover:text-brand-accent'
                      }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              {/* Services Mega Menu */}
              <li
                className="relative"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-1 transition-colors duration-200 hover:text-brand-accent ${isScrolled
                    ? 'text-white'
                    : 'text-white hover:text-brand-accent'
                    }`}
                >
                  Services
                  <ChevronDown className="w-4 h-4" />
                </button>

                {activeDropdown === 'services' && (
                  <div
                    className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-4xl mt-2 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                      {/* Left Content */}
                      <div className="p-8 bg-gray-50 dark:bg-gray-800">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                          {servicesData.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                          {servicesData.description}
                        </p>
                        <div className="w-full h-32 rounded-lg overflow-hidden">
                          <Image
                            src={hoveredImage || servicesData.defaultImage}
                            alt="Service preview"
                            fill
                            className="object-cover transition-all duration-300 ease-in-out"
                          />
                        </div>
                      </div>

                      {/* Right Content - Links */}
                      <div className="p-8">
                        <div className="space-y-3">
                          {servicesData.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                              onMouseEnter={() => setHoveredImage(item.image)}
                              onMouseLeave={() => setHoveredImage(null)}
                            >
                              <span className="text-gray-900 dark:text-white font-medium">
                                {item.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* Industry Mega Menu */}
              <li
                className="relative"
                onMouseEnter={() => handleMouseEnter('industry')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-1 transition-colors duration-200 hover:text-brand-accent ${isScrolled
                    ? 'text-white'
                    : 'text-white hover:text-brand-accent'
                    }`}
                >
                  Industry
                  <ChevronDown className="w-4 h-4" />
                </button>

                {activeDropdown === 'industry' && (
                  <div
                    className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-4xl mt-2 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                      {/* Left Content */}
                      <div className="p-8 bg-gray-50 dark:bg-gray-800">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                          {industryData.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                          {industryData.description}
                        </p>
                        <div className="w-full h-32 rounded-lg overflow-hidden">
                          <Image
                            src={hoveredImage || industryData.defaultImage}
                            alt="Industry preview"
                            fill
                            className="object-cover transition-all duration-300 ease-in-out"
                          />
                        </div>
                      </div>

                      {/* Right Content - Links */}
                      <div className="p-8">
                        <div className="space-y-3">
                          {industryData.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                              onMouseEnter={() => setHoveredImage(item.image)}
                              onMouseLeave={() => setHoveredImage(null)}
                            >
                              <span className="text-gray-900 dark:text-white font-medium">
                                {item.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-2">
              <Button
                className={`rounded-full px-6 text-sm transition-all duration-300 ${isScrolled
                  ? 'bg-white text-brand-primary hover:bg-gray-100'
                  : 'bg-brand-accent hover:bg-brand-primary text-white'
                  }`}
              >
                Contact us
              </Button>
              <ThemeToggleSimple />
            </div>

            <MenuIcon className="text-white block md:hidden" />
          </div>
        </div>
      </div>
    </nav>
  );
}
