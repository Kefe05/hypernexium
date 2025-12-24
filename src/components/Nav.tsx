"use client"
import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggleSimple } from "./ui/ThemeToggle";
import Logo from "./Logo";
import { MenuIcon, ChevronDown, X, ArrowRight, Shield, Database, Building, GraduationCap, Globe, Camera, Heart, Building2, ShoppingCart, Home, Factory, Landmark, Zap } from "lucide-react";
import { usePathname } from "next/navigation";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

const servicesData = {
  title: "Services",
  description: "Comprehensive IT solutions tailored to your business needs. From cybersecurity to infrastructure, we've got you covered.",
  items: [
    {
      name: "Cybersecurity",
      href: "/services/cybersecurity",
      icon: Shield
    },
    {
      name: "Backup and Recovery",
      href: "/services/backup-recovery",
      icon: Database
    },
    {
      name: "Digital Infrastructure",
      href: "/services/digital-infrastructure",
      icon: Building
    },
    {
      name: "IT Training",
      href: "/services/it-training",
      icon: GraduationCap
    },
    {
      name: "Network Modernization",
      href: "/services/network-modernization",
      icon: Globe
    },
    {
      name: "Surveillance Security Systems",
      href: "/services/surveillance-security",
      icon: Camera
    }
  ]
};

const industryData = {
  title: "Industries",
  description: "Specialized solutions across diverse sectors. We understand the unique challenges of your industry.",
  items: [
    {
      name: "Healthcare",
      href: "/industries/healthcare",
      icon: Heart
    },
    {
      name: "Education",
      href: "/industries/education",
      icon: GraduationCap
    },
    {
      name: "Corporate",
      href: "/industries/corporate",
      icon: Building2
    },
    {
      name: "Retail",
      href: "/industries/retail",
      icon: ShoppingCart
    },
    {
      name: "Real Estate",
      href: "/industries/real-estate",
      icon: Home
    },
    {
      name: "Manufacturing",
      href: "/industries/manufacturing",
      icon: Factory
    },
    {
      name: "Financial Services",
      href: "/industries/financial-services",
      icon: Landmark
    },
    {
      name: "Energy",
      href: "/industries/energy",
      icon: Zap
    }
  ]
};

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen, activeDropdown, closeMobileMenu]);

  return (
    <nav className="w-full fixed z-50" role="navigation" aria-label="Main navigation">
      <div
        className={`w-full transition-all duration-300 mx-auto ${isScrolled || pathname.startsWith("/contact")|| pathname.startsWith("/services/") || pathname.startsWith("/industries/")
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
                      ? 'text-light'
                      : 'text-light hover:text-brand-accent'
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
                    ? 'text-light'
                    : 'text-light hover:text-brand-accent'
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
                    className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-4xl mt-2 bg-light dark:bg-dark rounded-2xl shadow-2xl border border-light-border dark:border-dark-border overflow-hidden min-h-[400px]"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                    role="menu"
                    aria-label="Services menu"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
                      {/* Left Content - Title and Description */}
                      <div className="p-8 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 dark:from-brand-primary/20 dark:to-brand-accent/20">
                        <h3 className="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">
                          {servicesData.title}
                        </h3>
                        <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6 leading-relaxed">
                          {servicesData.description}
                        </p>
                        <Link
                          href="/services"
                          className="inline-flex items-center gap-2 text-brand-accent hover:text-brand-primary transition-colors font-medium"
                        >
                          View All Services
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>

                      {/* Right Content - Service Links */}
                      <div className="p-8 bg-light-surface dark:bg-dark-surface">
                        <div className="grid grid-cols-1 gap-2">
                          {servicesData.items.map((item) => {
                            const IconComponent = item.icon;
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                role="menuitem"
                                className="group flex items-center gap-3 p-3 rounded-lg hover:bg-light dark:hover:bg-dark-surface transition-all duration-200"
                              >
                                <IconComponent className="w-5 h-5 text-brand-accent flex-shrink-0" aria-hidden="true" />
                                <span className="text-light-text-primary dark:text-dark-text-primary group-hover:text-brand-accent transition-colors">
                                  {item.name}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
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
                    ? 'text-light'
                    : 'text-light hover:text-brand-accent'
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
                    className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-4xl mt-2 bg-light dark:bg-dark rounded-2xl shadow-2xl border border-light-border dark:border-dark-border overflow-hidden min-h-[400px]"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                    role="menu"
                    aria-label="Industry menu"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
                      {/* Left Content - Title and Description */}
                      <div className="p-8 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 dark:from-brand-primary/20 dark:to-brand-accent/20">
                        <h3 className="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">
                          {industryData.title}
                        </h3>
                        <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6 leading-relaxed">
                          {industryData.description}
                        </p>
                        <Link
                          href="/industries"
                          className="inline-flex items-center gap-2 text-brand-accent hover:text-brand-primary transition-colors font-medium"
                        >
                          View All Industries
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>

                      {/* Right Content - Industry Links */}
                      <div className="p-8 bg-light-surface dark:bg-dark-surface">
                        <div className="grid grid-cols-1 gap-2">
                          {industryData.items.map((item) => {
                            const IconComponent = item.icon;
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                role="menuitem"
                                className="group flex items-center gap-3 p-3 rounded-lg hover:bg-light dark:hover:bg-dark-surface transition-all duration-200"
                              >
                                <IconComponent className="w-5 h-5 text-brand-accent flex-shrink-0" aria-hidden="true" />
                                <span className="text-light-text-primary dark:text-dark-text-primary group-hover:text-brand-accent transition-colors ">
                                  {item.name}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
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
                    ? 'bg-light text-brand-primary hover:bg-light-surface'
                    : 'bg-brand-accent hover:bg-brand-primary text-light'
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
              className="text-light block md:hidden p-2"
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
          <div className="fixed top-0 right-0 h-full w-full max-w-sm bg-light dark:bg-dark shadow-xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b bg-brand-secondary dark:bg-transparent border-light-border dark:border-dark-border">
                <Logo />
                <button
                  onClick={closeMobileMenu}
                  className="p-2 text-light-text-secondary dark:text-dark-text-secondary"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-light" aria-hidden="true" />
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
                      className="block py-3 text-xl font-medium text-light-text-primary dark:text-dark-text-primary hover:text-brand-accent transition-colors"
                      onClick={closeMobileMenu}
                    >
                      {link.name}
                    </Link>
                  ))}

                  {/* Services Dropdown */}
                  <div className="py-2">
                    <button
                      onClick={() => toggleMobileDropdown('services')}
                      className="flex items-center justify-between w-full py-3 text-xl font-medium text-light-text-primary dark:text-dark-text-primary hover:text-brand-accent transition-colors"
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
                          className="block py-2 text-lg text-light-text-secondary dark:text-dark-text-secondary hover:text-brand-accent transition-colors"
                          onClick={closeMobileMenu}
                        >
                          All Services
                        </Link>
                        {servicesData.items.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block py-2 text-lg text-light-text-secondary dark:text-dark-text-secondary hover:text-brand-accent transition-colors"
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
                      className="flex items-center justify-between w-full py-3 text-xl font-medium text-light-text-primary dark:text-dark-text-primary hover:text-brand-accent transition-colors"
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
                          className="block py-2 text-lg text-light-text-secondary dark:text-dark-text-secondary hover:text-brand-accent transition-colors"
                          onClick={closeMobileMenu}
                        >
                          All Industries
                        </Link>
                        {industryData.items.map((industry) => (
                          <Link
                            key={industry.name}
                            href={industry.href}
                            className="block py-2 text-lg text-light-text-secondary dark:text-dark-text-secondary hover:text-brand-accent transition-colors"
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
                    className="block py-3 text-xl font-medium text-light-text-primary dark:text-dark-text-primary hover:text-brand-accent transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Contact
                  </Link>
                </div>
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-light-border dark:border-dark-border space-y-4">
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