"use client"
import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { ThemeToggleSimple } from "./ui/ThemeToggle";
import Logo from "./Logo";
import { MenuIcon, ChevronDown, X } from "lucide-react";
import { usePathname } from "next/navigation";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);

  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  // Memoize handlers to prevent unnecessary re-renders
  const handleMouseEnter = useCallback((dropdown: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActiveDropdown(dropdown);
  }, []);

  const handleMouseLeave = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setHoveredImage(null);
    }, 150);
  }, []);

  const handleDropdownEnter = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  }, []);

  const handleDropdownLeave = useCallback(() => {
    setActiveDropdown(null);
    setHoveredImage(null);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setMobileActiveDropdown(null);
  }, []);

  const toggleMobileDropdown = useCallback((dropdown: string) => {
    setMobileActiveDropdown(prev => prev === dropdown ? null : dropdown);
  }, []);

  // Optimize scroll handler with throttle
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const heroHeight = window.innerHeight;
          const scrollPosition = window.scrollY;
          setIsScrolled(scrollPosition > heroHeight - 100);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    closeMobileMenu();
  }, [pathname, closeMobileMenu]);

  // Handle escape key to close menus
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isMobileMenuOpen) {
          closeMobileMenu();
        }
        if (activeDropdown) {
          setActiveDropdown(null);
          setHoveredImage(null);
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen, activeDropdown, closeMobileMenu]);

  return (
    <nav className="w-full fixed z-50" role="navigation" aria-label="Main navigation">
      <div
        className={`w-full transition-all duration-300 mx-auto ${isScrolled || pathname.startsWith("/contact")
          ? 'bg-brand-secondary/90 backdrop-blur-sm shadow-lg border-b border-brand-secondary'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" aria-label="Hypernexium home">
              <Logo />
            </Link>

            {/* Navigation Links */}
            <ul className="hidden md:flex items-center space-x-8" role="menubar">
              {navigationLinks.map((link) => (
                <li key={link.name} role="none">
                  <Link
                    href={link.href}
                    role="menuitem"
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
                role="none"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-1 transition-colors duration-200 hover:text-brand-accent ${isScrolled
                    ? 'text-white'
                    : 'text-white hover:text-brand-accent'
                    }`}
                  aria-expanded={activeDropdown === 'services'}
                  aria-haspopup="true"
                  role="menuitem"
                >
                  Services
                  <ChevronDown className="w-4 h-4" aria-hidden="true" />
                </button>

                {activeDropdown === 'services' && (
                  <div
                    className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-4xl mt-2 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                    role="menu"
                    aria-label="Services menu"
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
                      
                        <div className="w-full rounded-lg overflow-hidden">
                          <div className="grid">
                            {servicesData.items.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                role="menuitem"
                                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                                onMouseEnter={() => setHoveredImage(item.image)}
                                onMouseLeave={() => setHoveredImage(null)}
                                onFocus={() => setHoveredImage(item.image)}
                                onBlur={() => setHoveredImage(null)}
                              >
                                <span className="text-gray-900 dark:text-white">
                                  {item.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Content - Image */}
                      <div className="relative" aria-hidden="true">
                        <Image
                          src={hoveredImage || servicesData.defaultImage}
                          alt=""
                          width={600}
                          height={600}
                          className="object-cover transition-all duration-300 ease-in-out w-full h-full"
                          loading="eager"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* Industry Mega Menu */}
              <li
                className="relative"
                role="none"
                onMouseEnter={() => handleMouseEnter('industry')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-1 transition-colors duration-200 hover:text-brand-accent ${isScrolled
                    ? 'text-white'
                    : 'text-white hover:text-brand-accent'
                    }`}
                  aria-expanded={activeDropdown === 'industry'}
                  aria-haspopup="true"
                  role="menuitem"
                >
                  Industry
                  <ChevronDown className="w-4 h-4" aria-hidden="true" />
                </button>

                {activeDropdown === 'industry' && (
                  <div
                    className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-4xl mt-2 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                    role="menu"
                    aria-label="Industry menu"
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
                        <div className="w-full rounded-lg overflow-hidden">
                          <div className="space-y-3 grid grid-cols-2 items-center">
                            {industryData.items.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                role="menuitem"
                                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                                onMouseEnter={() => setHoveredImage(item.image)}
                                onMouseLeave={() => setHoveredImage(null)}
                                onFocus={() => setHoveredImage(item.image)}
                                onBlur={() => setHoveredImage(null)}
                              >
                                <span className="text-gray-900 dark:text-white font-medium">
                                  {item.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Content - Image */}
                      <div className="relative" aria-hidden="true">
                        <Image
                          src={hoveredImage || industryData.defaultImage}
                          alt=""
                          width={600}
                          height={600}
                          className="object-cover transition-all duration-300 ease-in-out w-full h-full"
                          loading="eager"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-2">
              <Link href="/contact">
                <Button
                  className={`rounded-full px-6 text-sm transition-all duration-300 ${isScrolled
                    ? 'bg-white text-brand-primary hover:bg-gray-100'
                    : 'bg-brand-accent hover:bg-brand-primary text-white'
                    }`}
                >
                  Contact us
                </Button>
              </Link>
              <ThemeToggleSimple />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white block md:hidden p-2"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 md:hidden" 
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
          
          {/* Mobile Menu */}
          <div className="fixed top-0 right-0 h-full w-full max-w-sm bg-white dark:bg-gray-900 shadow-xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <Logo />
                <button
                  onClick={closeMobileMenu}
                  className="p-2 text-gray-600 dark:text-gray-300"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 overflow-y-auto py-6" aria-label="Mobile navigation">
                <div className="space-y-2 px-6">
                  {/* Regular Navigation Links */}
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block py-3 text-xl font-medium text-gray-900 dark:text-white hover:text-brand-accent transition-colors"
                      onClick={closeMobileMenu}
                    >
                      {link.name}
                    </Link>
                  ))}

                  {/* Services Dropdown */}
                  <div className="py-2">
                    <button
                      onClick={() => toggleMobileDropdown('services')}
                      className="flex items-center justify-between w-full py-3 text-xl font-medium text-gray-900 dark:text-white hover:text-brand-accent transition-colors"
                      aria-expanded={mobileActiveDropdown === 'services'}
                      aria-controls="mobile-services-menu"
                    >
                      Services
                      <ChevronDown 
                        className={`w-5 h-5 transition-transform duration-200 ${
                          mobileActiveDropdown === 'services' ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    
                    {mobileActiveDropdown === 'services' && (
                      <div 
                        id="mobile-services-menu"
                        className="mt-2 ml-4 space-y-2 border-l-2 border-brand-accent pl-4"
                      >
                        <Link
                          href="/services"
                          className="block py-2 text-lg text-gray-700 dark:text-gray-300 hover:text-brand-accent transition-colors"
                          onClick={closeMobileMenu}
                        >
                          All Services
                        </Link>
                        {servicesData.items.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block py-2 text-lg text-gray-700 dark:text-gray-300 hover:text-brand-accent transition-colors"
                            onClick={closeMobileMenu}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Industry Dropdown */}
                  <div className="py-2">
                    <button
                      onClick={() => toggleMobileDropdown('industry')}
                      className="flex items-center justify-between w-full py-3 text-xl font-medium text-gray-900 dark:text-white hover:text-brand-accent transition-colors"
                      aria-expanded={mobileActiveDropdown === 'industry'}
                      aria-controls="mobile-industry-menu"
                    >
                      Industry
                      <ChevronDown 
                        className={`w-5 h-5 transition-transform duration-200 ${
                          mobileActiveDropdown === 'industry' ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    
                    {mobileActiveDropdown === 'industry' && (
                      <div 
                        id="mobile-industry-menu"
                        className="mt-2 ml-4 space-y-2 border-l-2 border-brand-accent pl-4"
                      >
                        <Link
                          href="/industries"
                          className="block py-2 text-lg text-gray-700 dark:text-gray-300 hover:text-brand-accent transition-colors"
                          onClick={closeMobileMenu}
                        >
                          All Industries
                        </Link>
                        {industryData.items.map((industry) => (
                          <Link
                            key={industry.name}
                            href={industry.href}
                            className="block py-2 text-lg text-gray-700 dark:text-gray-300 hover:text-brand-accent transition-colors"
                            onClick={closeMobileMenu}
                          >
                            {industry.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Contact Link */}
                  <Link
                    href="/contact"
                    className="block py-3 text-xl font-medium text-gray-900 dark:text-white hover:text-brand-accent transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Contact
                  </Link>
                </div>
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-gray-200 dark:border-gray-700 space-y-4">
                {/* Theme Toggle */}
                <div className="flex justify-center">
                  <ThemeToggleSimple />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}