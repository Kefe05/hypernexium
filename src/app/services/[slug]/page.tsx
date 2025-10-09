import React from 'react';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle, Clock, Users, Shield } from 'lucide-react';
import Link from 'next/link';
import { VerticalGridLines } from '@/components/GridLines';

// Service data (you can move this to a separate file later)
const servicesData = {
  'cloud-infrastructure': {
    title: 'Cloud Infrastructure',
    subtitle: 'Enterprise-Grade Cloud Solutions',
    description: 'Transform your business with scalable, secure, and reliable cloud infrastructure that grows with your needs.',
    longDescription: 'Our cloud infrastructure services help businesses migrate, optimize, and manage their cloud environments with confidence. We provide end-to-end solutions from strategy and planning to implementation and ongoing support.',
    features: [
      'AWS & Azure certified expertise',
      'Scalable architecture design',
      'Security-first approach',
      '24/7 monitoring and support',
      'Cost optimization strategies',
      'Disaster recovery planning'
    ],
    benefits: [
      'Reduced operational costs',
      'Improved scalability',
      'Enhanced security',
      'Better performance',
      'Increased reliability'
    ],
    process: [
      'Assessment & Strategy',
      'Architecture Design',
      'Migration Planning',
      'Implementation',
      'Testing & Optimization',
      'Ongoing Support'
    ]
  },
  'cybersecurity': {
    title: 'Cybersecurity Solutions',
    subtitle: 'Advanced Protection & Threat Management',
    description: 'Comprehensive cybersecurity services to protect your business from evolving threats and ensure compliance.',
    longDescription: 'Our cybersecurity experts provide multi-layered protection strategies, from threat detection and prevention to incident response and recovery. We help organizations build resilient security postures.',
    features: [
      'Threat detection & prevention',
      'Security audits & assessments',
      'Compliance management',
      'Incident response planning',
      'Employee security training',
      'Continuous monitoring'
    ],
    benefits: [
      'Reduced security risks',
      'Regulatory compliance',
      'Business continuity',
      'Customer trust',
      'Data protection'
    ],
    process: [
      'Security Assessment',
      'Risk Analysis',
      'Strategy Development',
      'Implementation',
      'Monitoring Setup',
      'Ongoing Management'
    ]
  },
  'digital-transformation': {
    title: 'Digital Transformation',
    subtitle: 'Modernize Your Business Operations',
    description: 'Drive innovation and efficiency through strategic digital transformation initiatives.',
    longDescription: 'We help organizations embrace digital technologies to fundamentally change how they operate and deliver value to customers. Our approach focuses on people, processes, and technology.',
    features: [
      'Process automation',
      'Legacy system modernization',
      'Digital workflow design',
      'Change management',
      'Technology integration',
      'Performance analytics'
    ],
    benefits: [
      'Increased efficiency',
      'Better customer experience',
      'Competitive advantage',
      'Cost reduction',
      'Innovation acceleration'
    ],
    process: [
      'Current State Analysis',
      'Vision & Strategy',
      'Roadmap Planning',
      'Pilot Implementation',
      'Full Deployment',
      'Continuous Improvement'
    ]
  },
  'enterprise-software': {
    title: 'Enterprise Software',
    subtitle: 'Custom Software Development',
    description: 'Build powerful, scalable enterprise applications tailored to your specific business needs.',
    longDescription: 'Our enterprise software development services deliver custom solutions that streamline operations, improve productivity, and drive business growth. We use modern technologies and best practices.',
    features: [
      'Custom application development',
      'System integration',
      'API development',
      'Database design',
      'User experience design',
      'Quality assurance'
    ],
    benefits: [
      'Tailored functionality',
      'Seamless integration',
      'Improved productivity',
      'Scalable architecture',
      'Competitive advantage'
    ],
    process: [
      'Requirements Analysis',
      'System Design',
      'Development',
      'Testing',
      'Deployment',
      'Maintenance'
    ]
  },
  'it-consulting': {
    title: 'IT Consulting',
    subtitle: 'Strategic Technology Guidance',
    description: 'Expert IT consulting services to align technology with your business objectives and drive growth.',
    longDescription: 'Our IT consulting services provide strategic guidance to help organizations make informed technology decisions, optimize their IT investments, and achieve their business goals.',
    features: [
      'Technology strategy development',
      'IT infrastructure assessment',
      'Vendor selection & management',
      'Project management',
      'Risk assessment',
      'Performance optimization'
    ],
    benefits: [
      'Strategic alignment',
      'Cost optimization',
      'Risk mitigation',
      'Improved efficiency',
      'Technology roadmap'
    ],
    process: [
      'Business Analysis',
      'Technology Assessment',
      'Strategy Development',
      'Roadmap Creation',
      'Implementation Planning',
      'Ongoing Advisory'
    ]
  },
  'support-maintenance': {
    title: 'Support & Maintenance',
    subtitle: '24/7 System Support & Optimization',
    description: 'Comprehensive support services to ensure your systems run smoothly and efficiently around the clock.',
    longDescription: 'Our support and maintenance services provide peace of mind with proactive monitoring, regular updates, and rapid issue resolution to keep your business running smoothly.',
    features: [
      '24/7 system monitoring',
      'Proactive maintenance',
      'Issue resolution',
      'Performance optimization',
      'Security updates',
      'Backup management'
    ],
    benefits: [
      'Maximum uptime',
      'Reduced downtime costs',
      'Improved performance',
      'Enhanced security',
      'Peace of mind'
    ],
    process: [
      'System Assessment',
      'Monitoring Setup',
      'Maintenance Planning',
      'Proactive Support',
      'Issue Resolution',
      'Continuous Optimization'
    ]
  }
};

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = servicesData[params.slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <VerticalGridLines opacity={0.06} />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          {/* Back Button */}
          <Link 
            href="/services" 
            className="inline-flex items-center text-brand-accent hover:text-brand-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-brand-accent font-medium mb-6">
              {service.subtitle}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {service.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 text-brand-accent mr-3" />
                Key Features
              </h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-brand-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Shield className="w-6 h-6 text-brand-accent mr-3" />
                Benefits
              </h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Clock className="w-6 h-6 text-brand-accent mr-3" />
                Our Process
              </h2>
              <ol className="space-y-4">
                {service.process.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-brand-accent text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Let's discuss how our {service.title.toLowerCase()} services can help transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="px-8 py-4 bg-brand-accent hover:bg-brand-primary text-white rounded-full font-semibold transition-all duration-200 hover:scale-105"
            >
              Start Your Project
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-4 border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-900 dark:text-white rounded-full font-semibold transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// Generate static params for all services
export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}