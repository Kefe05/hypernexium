import React from 'react';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle, Clock, Shield } from 'lucide-react';
import Link from 'next/link';
import { VerticalGridLines } from '@/components/GridLines';

// Service data matching the main services page
const servicesData = {
    'cybersecurity': {
        title: 'Cybersecurity',
        subtitle: 'Advanced Protection & Threat Management',
        description: 'Comprehensive cybersecurity services to protect your business from evolving threats and ensure compliance.',
        longDescription: 'Our cybersecurity experts implement multi-layered defense strategies, including endpoint protection, network security, and incident response protocols. With over 18 years of experience, we\'ve successfully protected businesses across various sectors from sophisticated cyber attacks.',
        features: [
            'Advanced threat detection and vulnerability assessments',
            '24/7 monitoring and incident response protocols',
            'Multi-layered defense strategies and endpoint protection',
            'Network security and compliance management',
            'Employee security training and awareness programs',
            'Continuous monitoring and security updates'
        ],
        benefits: [
            'Protection from evolving cyber threats',
            'Compliance with industry standards',
            'Reduced security risks and vulnerabilities',
            'Enhanced business continuity',
            'Customer trust and data protection'
        ],
        process: [
            'Security Assessment & Risk Analysis',
            'Strategy Development & Planning',
            'Implementation of Security Measures',
            'Monitoring Setup & Configuration',
            'Ongoing Management & Support',
            'Regular Updates & Improvements'
        ]
    },
    'backup-recovery': {
        title: 'Backup and Recovery',
        subtitle: 'Comprehensive Data Protection Solutions',
        description: 'Ensure business continuity with our comprehensive data backup and disaster recovery solutions.',
        longDescription: 'Our disaster recovery specialists design customized backup strategies that include real-time data replication, offsite storage, and tested recovery procedures. We guarantee rapid data restoration with minimal business disruption, backed by our proven track record of successful recoveries.',
        features: [
            'Automated backup systems and cloud-based recovery options',
            'Real-time data replication and offsite storage',
            'Rapid restoration services to minimize downtime',
            'Tested recovery procedures and disaster planning',
            'Customized backup strategies for different industries',
            'Comprehensive data protection and compliance'
        ],
        benefits: [
            'Minimized downtime and data loss protection',
            'Business continuity assurance',
            'Rapid data restoration capabilities',
            'Compliance with data protection regulations',
            'Peace of mind with proven recovery track record'
        ],
        process: [
            'Data Assessment & Backup Strategy Design',
            'Implementation of Backup Systems',
            'Testing & Validation of Recovery Procedures',
            'Monitoring & Maintenance',
            'Regular Recovery Testing',
            'Continuous Optimization & Updates'
        ]
    },
    'digital-infrastructure': {
        title: 'Digital Infrastructure',
        subtitle: 'Modern IT Infrastructure Solutions',
        description: 'Transform your business with modern IT infrastructure solutions that form the backbone of your digital operations.',
        longDescription: 'Our infrastructure specialists design and implement robust, scalable technology foundations that support your business growth. From hybrid cloud solutions to network optimization, we ensure your infrastructure is reliable, secure, and future-ready.',
        features: [
            'Cloud migration and server virtualization',
            'Network architecture design and optimization',
            'Scalable systems that grow with your business',
            'Hybrid cloud solutions and infrastructure management',
            'Security-first infrastructure approach',
            'Performance monitoring and optimization'
        ],
        benefits: [
            'Reliable and secure infrastructure foundation',
            'Scalability to support business growth',
            'Future-ready technology solutions',
            'Improved performance and efficiency',
            'Reduced operational costs'
        ],
        process: [
            'Infrastructure Assessment & Planning',
            'Architecture Design & Strategy',
            'Migration & Implementation',
            'Testing & Optimization',
            'Deployment & Integration',
            'Ongoing Support & Maintenance'
        ]
    },
    'it-training': {
        title: 'IT Training',
        subtitle: 'Comprehensive Technology Skills Development',
        description: 'Empower your workforce with cutting-edge technology skills through our comprehensive IT training programs.',
        longDescription: 'Our expert trainers deliver practical, industry-relevant education that translates directly into improved productivity and innovation. With flexible learning options and ongoing support, we ensure your team masters the latest technologies and best practices.',
        features: [
            'Customized training modules and certification preparation',
            'Hands-on workshops and practical learning',
            'Industry-relevant education and skill development',
            'Flexible learning options and ongoing support',
            'Latest technology training and best practices',
            'Performance tracking and progress monitoring'
        ],
        benefits: [
            'Enhanced workforce technology skills',
            'Improved productivity and innovation',
            'Competitive advantage through skilled teams',
            'Reduced training costs and time',
            'Continuous learning and development'
        ],
        process: [
            'Skills Assessment & Training Needs Analysis',
            'Customized Curriculum Development',
            'Training Delivery & Hands-on Practice',
            'Progress Monitoring & Evaluation',
            'Certification & Skill Validation',
            'Ongoing Support & Advanced Training'
        ]
    },
    'network-modernization': {
        title: 'Network Modernization',
        subtitle: 'Advanced Network Infrastructure Upgrade',
        description: 'Upgrade and optimize your network infrastructure for enhanced performance, security, and scalability.',
        longDescription: 'Our network engineers transform legacy systems into high-performance, secure networks that support modern business requirements. We implement the latest networking technologies while ensuring seamless integration with existing systems.',
        features: [
            'Network assessment and redesign services',
            'Implementation of modern networking technologies',
            'Performance optimization and security enhancement',
            'Scalable network architecture design',
            'Seamless integration with existing systems',
            'Ongoing management and support services'
        ],
        benefits: [
            'Enhanced network performance and reliability',
            'Improved security and compliance',
            'Scalability for future growth',
            'Reduced network downtime and issues',
            'Modern technology integration'
        ],
        process: [
            'Network Assessment & Analysis',
            'Modernization Strategy & Design',
            'Technology Implementation & Integration',
            'Testing & Performance Optimization',
            'Deployment & Migration',
            'Ongoing Management & Support'
        ]
    },
    'surveillance-security': {
        title: 'Surveillance Security Systems',
        subtitle: 'Advanced Security & Monitoring Solutions',
        description: 'Enhance your physical security with state-of-the-art surveillance and monitoring systems.',
        longDescription: 'Our security specialists design and implement advanced surveillance systems that provide real-time monitoring, intelligent analytics, and seamless integration with existing security infrastructure. We ensure your premises are protected 24/7 with cutting-edge technology.',
        features: [
            'IP camera systems and access control solutions',
            'Intrusion detection and monitoring systems',
            'Integrated security management platforms',
            'Real-time monitoring and intelligent analytics',
            'Mobile access and remote monitoring capabilities',
            '24/7 security monitoring and response'
        ],
        benefits: [
            'Comprehensive physical security protection',
            'Real-time threat detection and response',
            'Reduced security incidents and losses',
            'Enhanced safety for personnel and assets',
            'Compliance with security regulations'
        ],
        process: [
            'Security Assessment & Risk Analysis',
            'System Design & Technology Selection',
            'Installation & Integration',
            'Testing & Commissioning',
            'Training & Handover',
            'Ongoing Monitoring & Maintenance'
        ]
    }
};

interface ServicePageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { slug } = await params;
    const service = servicesData[slug as keyof typeof servicesData];

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
                        Let&apos;s discuss how our {service.title.toLowerCase()} services can help transform your business.
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

// Generate metadata for each service page
export async function generateMetadata({ params }: ServicePageProps) {
    const { slug } = await params;
    const service = servicesData[slug as keyof typeof servicesData];
    
    if (!service) {
        return {
            title: 'Service Not Found - Hyper Nexium Technologies',
            description: 'The requested service page could not be found.',
        };
    }

    return {
        title: `${service.title} - Hyper Nexium Technologies`,
        description: service.description,
    };
}