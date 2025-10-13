import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle, Clock, Shield, Building2, Heart, GraduationCap, ShoppingBag, Home, Factory, Banknote, Zap } from 'lucide-react';
import Link from 'next/link';
import { VerticalGridLines } from '@/components/GridLines';

// Industry data based on sector.txt content
const industriesData = {
    'healthcare': {
        title: 'Healthcare',
        subtitle: 'Empowering Africa\'s Healthcare Sector with Smart, Secure, and Reliable Technology',
        icon: Heart,
        description: 'Transform healthcare delivery with technology solutions that prioritize patient outcomes, data security, and operational efficiency.',
        longDescription: 'At Hyper Nexium Technologies Ltd, we understand that healthcare organizations across Africa operate in an environment where data accuracy, system uptime, and security can directly impact patient outcomes. Hospitals, laboratories, and clinics depend on reliable digital infrastructure, secure communication systems, and robust data protection to deliver high-quality care efficiently.',
        challenges: [
            'Safeguarding patient data and ensuring compliance with data protection laws',
            'Maintaining real-time access to critical medical records and imaging systems',
            'Ensuring system uptime where every second counts',
            'Preventing downtime or data loss in critical healthcare environments'
        ],
        solutions: [
            'Proven Expertise in Healthcare IT with deep technical expertise in digital infrastructure, cybersecurity, and cloud-based solutions',
            'Data Protection through partnerships with Veeam, Veritas, and Dell Technologies for world-class backup and recovery systems',
            'Secure Network & Surveillance with advanced network modernization and surveillance systems',
            'Scalable and Future-Ready Solutions that grow from small clinics to large hospital networks',
            'Training & Support with IT training programs to empower healthcare teams'
        ],
        approach: [
            'Assessment & Understanding of existing IT ecosystem and security gaps',
            'Design & Customization of tailored solutions aligned with operational priorities',
            'Implementation & Integration using vendor partnerships with minimal disruption',
            'Continuous Monitoring & Support with ongoing optimization and staff training'
        ]
    },
    'education': {
        title: 'Education',
        subtitle: 'Transforming Education in Africa Through Smart, Secure, and Connected Technology',
        icon: GraduationCap,
        description: 'Enable innovative learning environments with technology solutions that support digital transformation and hybrid learning.',
        longDescription: 'At Hyper Nexium Technologies Ltd, we understand that the education sector across Africa is evolving rapidly — driven by digital transformation, hybrid learning, and the need for secure, connected, and scalable IT environments. From primary institutions to universities, schools today require reliable digital infrastructure, robust cybersecurity, and data management systems.',
        challenges: [
            'Limited IT resources and inadequate network coverage',
            'Cyber risks and security threats to educational systems',
            'Need to integrate multiple digital learning tools effectively',
            'Supporting virtual learning and student data protection'
        ],
        solutions: [
            'Specialized Education Technology Expertise understanding unique academic environment demands',
            'Robust Digital Infrastructure through partnerships with Cisco, Huawei, Dell Technologies, and Microsoft',
            'Cybersecurity for Education protecting student data while ensuring compliance',
            'Reliable Backup & Recovery using Veeam, Veritas, and VMware for academic data protection',
            'Smart Campus Surveillance with AI-powered systems from Hikvision',
            'Empowering Through IT Training for educators, administrators, and IT teams'
        ],
        approach: [
            'Needs Assessment & Strategy with school leaders and IT administrators',
            'Solution Design based on connectivity, security, and learning delivery goals',
            'Implementation & Integration with smooth deployment and system integration',
            'Continuous Support & Evolution with ongoing monitoring and updates'
        ]
    },
    'corporate': {
        title: 'Corporate',
        subtitle: 'Driving Corporate Excellence Through Intelligent, Secure, and Scalable Technology',
        icon: Building2,
        description: 'Enhance corporate efficiency and competitiveness with comprehensive IT solutions designed for modern enterprises.',
        longDescription: 'At Hyper Nexium Technologies Ltd, we understand that corporate organizations across Africa are constantly striving to improve efficiency, collaboration, and competitiveness in a fast-changing digital world. Today\'s enterprises rely on secure networks, data protection, and digital agility to operate effectively.',
        challenges: [
            'Cybersecurity threats and evolving security risks',
            'System downtime and operational disruptions',
            'Data loss and business continuity concerns',
            'Complexity of digital transformation initiatives'
        ],
        solutions: [
            'Comprehensive IT Solutions covering cybersecurity to network modernization',
            'Trusted Technology Partnerships with Cisco, Huawei, Dell Technologies, Microsoft, HP, and Fortinet',
            'Unmatched Data Protection using Veeam, Veritas, and VMware backup systems',
            'Robust Cybersecurity Frameworks with Kaspersky, Sophos, Palo Alto, and Symantec',
            'Smart Surveillance Systems with AI-driven solutions from Hikvision and D-Link',
            'Capacity Building & Training for IT teams with technical and cybersecurity training'
        ],
        approach: [
            'Business Discovery & Consultation understanding business model and workflows',
            'Solution Design & Strategy with customized technology frameworks',
            'Seamless Implementation leveraging vendor relationships for efficient deployment',
            'Optimization & Ongoing Support with continuous monitoring and performance optimization'
        ]
    },
    'retail': {
        title: 'Retail',
        subtitle: 'Empowering Retail Innovation Through Smart, Secure, and Connected Technology',
        icon: ShoppingBag,
        description: 'Transform retail operations with technology solutions that enhance customer experience and operational efficiency.',
        longDescription: 'At Hyper Nexium Technologies Ltd, we understand that today\'s retail businesses in Africa are evolving rapidly — driven by digital transformation, customer experience, and data intelligence. Retailers are delivering seamless, technology-driven experiences across physical stores, online platforms, and mobile apps.',
        challenges: [
            'Protecting sensitive customer data and transaction information',
            'Managing multi-branch operations effectively',
            'Ensuring system uptime and reliability',
            'Integrating digital sales channels seamlessly'
        ],
        solutions: [
            'End-to-End Retail Technology Solutions ensuring seamless business continuity',
            'Cybersecurity for Retail with Kaspersky, Fortinet, Palo Alto, and Sophos protection',
            'Smart Store Surveillance with AI-powered systems from Hikvision and D-Link',
            'Reliable Backup & Recovery through Veeam, Veritas, and Dell Technologies',
            'Seamless Connectivity with Cisco, Huawei, and Microsoft infrastructure solutions',
            'Scalable & Future-Ready solutions for single stores to multi-branch networks'
        ],
        approach: [
            'Assessment & Strategy Development understanding retail model and customer goals',
            'Solution Design enhancing connectivity, customer experience, and data protection',
            'Deployment & Integration across all retail touchpoints with minimal disruption',
            'Continuous Optimization & Support ensuring reliability and sustained growth'
        ]
    },
    'real-estate': {
        title: 'Real Estate',
        subtitle: 'Transforming Real Estate Operations with Smart, Secure, and Connected Technology',
        icon: Home,
        description: 'Modernize property management and real estate operations with intelligent technology solutions.',
        longDescription: 'At Hyper Nexium Technologies Ltd, we understand that the real estate industry in Africa is undergoing a digital transformation. Property developers, facility managers, and real estate investors are increasingly relying on technology to manage assets, automate operations, and enhance tenant experiences.',
        challenges: [
            'Maintaining security across multiple property sites',
            'Ensuring data protection for client and property information',
            'Managing property systems remotely and efficiently',
            'Creating sustainable digital environments that attract clients and investors'
        ],
        solutions: [
            'Smart Building Solutions with IoT-enabled systems for energy and facility management',
            'Advanced Security & Surveillance with AI-powered systems from Hikvision, D-Link, and TP-Link',
            'Reliable Network Infrastructure using Cisco, Huawei, and Fortinet connectivity solutions',
            'Data Protection & Backup with Veeam, Veritas, and Dell Technologies',
            'Cloud Solutions & Collaboration through Microsoft and Google Cloud services',
            'Digital Transformation guidance for enhanced efficiency and customer engagement'
        ],
        approach: [
            'Discovery & Needs Assessment understanding property portfolio and management systems',
            'Customized Solution Design integrating with current infrastructure for future scalability',
            'Deployment & Integration across offices, facilities, and properties with minimal downtime',
            'Ongoing Support & Optimization with continuous performance monitoring and upgrades'
        ]
    },
    'manufacturing': {
        title: 'Manufacturing',
        subtitle: 'Driving Manufacturing Excellence Through Smart, Secure, and Scalable Technologies',
        icon: Factory,
        description: 'Optimize manufacturing operations with digital solutions that enhance productivity and operational control.',
        longDescription: 'At Hyper Nexium Technologies Ltd, we understand that the manufacturing sector across Africa is under growing pressure to improve productivity, efficiency, and quality while minimizing downtime and operational costs. Manufacturers must embrace digital transformation with automation, IoT, data analytics, and cloud systems.',
        challenges: [
            'Need for real-time visibility across production lines and warehouses',
            'Ensuring secure communication and robust network infrastructure',
            'Reliable data protection for production and operational systems',
            'Factory floor connectivity and cybersecurity for industrial systems'
        ],
        solutions: [
            'Secure Industrial Networks with Cisco, Huawei, and Fortinet technologies',
            'Data Backup & Recovery using Veeam, Veritas, and Dell Technologies',
            'Cybersecurity for Industrial Systems with Kaspersky, Sophos, and Palo Alto protection',
            'Cloud & Digital Infrastructure through Microsoft and VMware solutions',
            'Surveillance & Facility Security with Hikvision and D-Link monitoring systems',
            'Smart Factory Transformation with IoT and automation technologies'
        ],
        approach: [
            'Assessment & Planning evaluating current infrastructure and digital maturity',
            'Tailored Solution Design aligning with business goals and manufacturing processes',
            'Implementation & Integration with minimal disruption to production workflow',
            'Continuous Support & Optimization ensuring maximum system performance and reliability'
        ]
    },
    'financial-services': {
        title: 'Financial Services',
        subtitle: 'Securing and Accelerating Financial Services Through Intelligent IT Solutions',
        icon: Banknote,
        description: 'Strengthen financial operations with technology solutions that prioritize security, compliance, and performance.',
        longDescription: 'At Hyper Nexium Technologies Ltd, we understand that financial institutions — from banks and insurance companies to fintech startups — rely heavily on security, reliability, and speed. In Africa\'s fast-evolving financial landscape, customer trust is built on technology that performs flawlessly and securely.',
        challenges: [
            'Managing sensitive financial data and ensuring transaction integrity',
            'Meeting stringent regulatory standards and compliance requirements',
            'Providing seamless digital experiences for customers',
            'Protecting against evolving cybersecurity threats'
        ],
        solutions: [
            'Uncompromised Cybersecurity with Fortinet, Palo Alto, Kaspersky, and Sophos protection',
            'Data Backup & Recovery through Veeam, Veritas, and Dell Technologies partnerships',
            'Digital Infrastructure with Cisco, Huawei, and HP for mission-critical operations',
            'Cloud & Virtualization using Microsoft Azure and VMware solutions',
            'Surveillance & Branch Security with Hikvision and D-Link monitoring systems',
            'Compliance & Risk Management meeting regulatory and data protection requirements'
        ],
        approach: [
            'Assessment & Strategy Development understanding unique digital and compliance challenges',
            'Solution Design & Architecture building customized security frameworks',
            'Deployment & Integration ensuring seamless implementation with minimal disruption',
            'Continuous Monitoring & Support with 24/7 support and system optimization'
        ]
    },
    'energy': {
        title: 'Energy',
        subtitle: 'Empowering the Energy Sector with Secure, Smart, and Sustainable Technology Solutions',
        icon: Zap,
        description: 'Power energy operations with technology solutions that enhance efficiency, security, and sustainability.',
        longDescription: 'At Hyper Nexium Technologies Ltd, we understand that the energy sector is the backbone of economic development — powering industries, homes, and innovation across Africa. Energy providers are transforming operations with technology to improve performance, ensure security, and meet regulatory standards.',
        challenges: [
            'Data management and cybersecurity threats to critical infrastructure',
            'Asset monitoring and grid modernization requirements',
            'System uptime and operational reliability demands',
            'Need for real-time analytics and secure digital ecosystems'
        ],
        solutions: [
            'Advanced Cybersecurity Protection with Fortinet, Palo Alto, Kaspersky, and Sophos',
            'Network & Infrastructure Modernization through Cisco, Huawei, and Dell Technologies',
            'Backup & Disaster Recovery using Veeam and Veritas for critical data protection',
            'Cloud & Virtualization Solutions with Microsoft Azure and VMware',
            'Surveillance & Safety Systems using Hikvision and D-Link AI-powered monitoring',
            'Operational Visibility & IoT Integration for real-time asset tracking and optimization'
        ],
        approach: [
            'Discovery & Assessment analyzing existing IT landscape and operational challenges',
            'Solution Design creating customized, industry-specific IT frameworks',
            'Implementation & Integration ensuring seamless integration with minimal downtime',
            'Continuous Monitoring & Support providing proactive support and compliance maintenance'
        ]
    }
};

interface IndustryPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function IndustryPage({ params }: IndustryPageProps) {
    const { slug } = await params;
    const industry = industriesData[slug as keyof typeof industriesData];

    if (!industry) {
        notFound();
    }

    const IconComponent = industry.icon;

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <VerticalGridLines opacity={0.06} />

            {/* Hero Section */}
            <section className="relative py-24 bg-white dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Back Button */}
                    <Link
                        href="/industries"
                        className="inline-flex items-center text-brand-accent hover:text-brand-primary transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Industries
                    </Link>

                    <div className="max-w-4xl">
                        <div className="flex items-center mb-6">
                            <IconComponent className="w-12 h-12 text-brand-accent mr-4" />
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
                                {industry.title}
                            </h1>
                        </div>
                        <p className="text-xl md:text-2xl text-brand-accent font-medium mb-6">
                            {industry.subtitle}
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            {industry.longDescription}
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Challenges */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                                <Shield className="w-6 h-6 text-brand-accent mr-3" />
                                Industry Challenges
                            </h2>
                            <ul className="space-y-4">
                                {industry.challenges.map((challenge, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <span className="text-gray-600 dark:text-gray-300">{challenge}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Solutions */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                                <CheckCircle className="w-6 h-6 text-brand-accent mr-3" />
                                Our Solutions
                            </h2>
                            <ul className="space-y-4">
                                {industry.solutions.map((solution, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="w-2 h-2 bg-brand-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <span className="text-gray-600 dark:text-gray-300">{solution}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Approach */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                                <Clock className="w-6 h-6 text-brand-accent mr-3" />
                                Our Approach
                            </h2>
                            <ol className="space-y-4">
                                {industry.approach.map((step, index) => (
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
                        Let&apos;s discuss how our {industry.title.toLowerCase()} solutions can help transform your business.
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

// Generate static params for all industries
export function generateStaticParams() {
    return Object.keys(industriesData).map((slug) => ({
        slug,
    }));
}

// Generate metadata for each industry page
export async function generateMetadata({ params }: IndustryPageProps) {
    const { slug } = await params;
    const industry = industriesData[slug as keyof typeof industriesData];

    if (!industry) {
        return {
            title: 'Industry Not Found - Hyper Nexium Technologies',
            description: 'The requested industry page could not be found.',
        };
    }

    return {
        title: `${industry.title} Solutions - Hyper Nexium Technologies`,
        description: industry.description,
    };
}