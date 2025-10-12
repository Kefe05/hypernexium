import Hero from './component/Hero'
import ServiceSection from './component/Services'
import Newsletter from '@/components/Newsletter'

// Comprehensive services data based on Nav.tsx structure
const services = [
  {
    serviceName: "Cybersecurity",
    p1: "Protect your business from evolving cyber threats with our comprehensive security solutions. We provide advanced threat detection, vulnerability assessments, and 24/7 monitoring to safeguard your critical assets and ensure compliance with industry standards.",
    p2: "Our cybersecurity experts implement multi-layered defense strategies, including endpoint protection, network security, and incident response protocols. With over 18 years of experience, we've successfully protected businesses across various sectors from sophisticated cyber attacks.",
    industry: [
      {
        name: "Healthcare",
        description: "HIPAA-compliant security solutions protecting patient data and medical systems from cyber threats and ensuring regulatory compliance."
      },
      {
        name: "Finance",
        description: "Advanced financial cybersecurity with fraud detection, secure transactions, and compliance with banking regulations and standards."
      },
      {
        name: "Education",
        description: "Comprehensive security for educational institutions protecting student data, research, and academic systems from cyber threats."
      },
      {
        name: "Real Estate",
        description: "Secure property management systems and client data protection for real estate agencies and property developers."
      },
      {
        name: "Manufacturing",
        description: "Industrial cybersecurity solutions protecting operational technology, supply chains, and intellectual property from cyber attacks."
      },
      {
        name: "Transportation",
        description: "Secure logistics and transportation systems with fleet protection and supply chain security measures."
      }
    ]
  },
  {
    serviceName: "Backup and Recovery",
    p1: "Ensure business continuity with our comprehensive data backup and disaster recovery solutions. We provide automated backup systems, cloud-based recovery options, and rapid restoration services to minimize downtime and protect against data loss.",
    p2: "Our disaster recovery specialists design customized backup strategies that include real-time data replication, offsite storage, and tested recovery procedures. We guarantee rapid data restoration with minimal business disruption, backed by our proven track record of successful recoveries.",
    industry: [
      {
        name: "Healthcare",
        description: "Critical patient data backup and recovery solutions ensuring medical records are always accessible and compliant with healthcare regulations."
      },
      {
        name: "Finance",
        description: "Secure financial data backup with instant recovery capabilities for trading systems, customer records, and regulatory compliance data."
      },
      {
        name: "Education",
        description: "Academic data protection including student records, research data, and institutional systems with automated backup and recovery."
      },
      {
        name: "Real Estate",
        description: "Property data and transaction record backup solutions ensuring client information and deal documentation are always protected."
      },
      {
        name: "Manufacturing",
        description: "Industrial data backup protecting production data, supply chain information, and operational systems from data loss."
      },
      {
        name: "Transportation",
        description: "Logistics data backup and recovery for fleet management, shipping records, and transportation coordination systems."
      }
    ]
  },
  {
    serviceName: "Digital Infrastructure",
    p1: "Transform your business with modern IT infrastructure solutions that form the backbone of your digital operations. We provide cloud migration, server virtualization, network architecture design, and scalable systems that grow with your business needs.",
    p2: "Our infrastructure specialists design and implement robust, scalable technology foundations that support your business growth. From hybrid cloud solutions to network optimization, we ensure your infrastructure is reliable, secure, and future-ready.",
    industry: [
      {
        name: "Healthcare",
        description: "HIPAA-compliant infrastructure supporting telemedicine, electronic health records, and medical device integration."
      },
      {
        name: "Finance",
        description: "High-performance financial infrastructure with low-latency trading systems, secure data centers, and regulatory compliance."
      },
      {
        name: "Education",
        description: "Educational technology infrastructure supporting online learning, campus networks, and research computing systems."
      },
      {
        name: "Real Estate",
        description: "Property management infrastructure with CRM systems, virtual tour platforms, and market analysis tools."
      },
      {
        name: "Manufacturing",
        description: "Industrial IoT infrastructure connecting production systems, supply chain management, and quality control systems."
      },
      {
        name: "Transportation",
        description: "Transportation infrastructure supporting fleet management, route optimization, and logistics coordination systems."
      }
    ]
  },
  {
    serviceName: "IT Training",
    p1: "Empower your workforce with cutting-edge technology skills through our comprehensive IT training programs. We offer customized training modules, certification preparation, and hands-on workshops designed to keep your team ahead of technological advances.",
    p2: "Our expert trainers deliver practical, industry-relevant education that translates directly into improved productivity and innovation. With flexible learning options and ongoing support, we ensure your team masters the latest technologies and best practices.",
    industry: [
      {
        name: "Healthcare",
        description: "Medical technology training including EHR systems, telemedicine platforms, and healthcare IT security protocols."
      },
      {
        name: "Finance",
        description: "Financial technology training covering fintech platforms, blockchain, cybersecurity, and regulatory compliance systems."
      },
      {
        name: "Education",
        description: "Educational technology training for faculty and staff on learning management systems, digital tools, and online teaching."
      },
      {
        name: "Real Estate",
        description: "Real estate technology training including CRM systems, virtual tour creation, and property management software."
      },
      {
        name: "Manufacturing",
        description: "Industrial technology training covering IoT systems, automation tools, and digital manufacturing processes."
      },
      {
        name: "Transportation",
        description: "Transportation technology training for fleet management systems, logistics software, and supply chain optimization."
      }
    ]
  },
  {
    serviceName: "Network Modernization",
    p1: "Upgrade and optimize your network infrastructure for enhanced performance, security, and scalability. Our network modernization services include assessment, redesign, implementation of modern technologies, and ongoing management support.",
    p2: "Our network engineers transform legacy systems into high-performance, secure networks that support modern business requirements. We implement the latest networking technologies while ensuring seamless integration with existing systems.",
    industry: [
      {
        name: "Healthcare",
        description: "Medical network modernization supporting telemedicine, medical devices, and secure patient data transmission."
      },
      {
        name: "Finance",
        description: "High-speed financial networks with ultra-low latency for trading, secure transactions, and real-time data processing."
      },
      {
        name: "Education",
        description: "Campus network modernization supporting online learning, research collaboration, and administrative systems."
      },
      {
        name: "Real Estate",
        description: "Property network infrastructure supporting smart buildings, IoT devices, and integrated property management systems."
      },
      {
        name: "Manufacturing",
        description: "Industrial network modernization connecting production lines, IoT sensors, and supply chain management systems."
      },
      {
        name: "Transportation",
        description: "Transportation network infrastructure supporting fleet connectivity, GPS tracking, and logistics coordination."
      }
    ]
  },
  {
    serviceName: "Surveillance Security Systems",
    p1: "Enhance your physical security with state-of-the-art surveillance and monitoring systems. We provide IP camera systems, access control solutions, intrusion detection, and integrated security management platforms for comprehensive protection.",
    p2: "Our security specialists design and implement advanced surveillance systems that provide real-time monitoring, intelligent analytics, and seamless integration with existing security infrastructure. We ensure your premises are protected 24/7 with cutting-edge technology.",
    industry: [
      {
        name: "Healthcare",
        description: "Medical facility security systems protecting patients, staff, and sensitive areas with HIPAA-compliant surveillance solutions."
      },
      {
        name: "Finance",
        description: "Bank and financial institution security with advanced surveillance, access control, and fraud prevention systems."
      },
      {
        name: "Education",
        description: "Campus security systems ensuring student and staff safety with comprehensive surveillance and emergency response integration."
      },
      {
        name: "Real Estate",
        description: "Property security solutions including building surveillance, access control, and tenant safety management systems."
      },
      {
        name: "Manufacturing",
        description: "Industrial security systems protecting facilities, equipment, and personnel with integrated surveillance and access control."
      },
      {
        name: "Transportation",
        description: "Transportation security including depot surveillance, vehicle tracking, and cargo protection systems."
      }
    ]
  }
]

export default function Services() {
  return (
    <main className="bg-white dark:bg-gray-900">
      {/* Service Hero */}
      <Hero />

      {/* Services Sections */}
      {services.map((data, index) => (
        <div key={index} className="py-16 md:py-20 lg:py-24">
          <ServiceSection
            title={data.serviceName}
            p1={data.p1}
            p2={data.p2}
            industryData={data.industry}
          />
        </div>
      ))}

      {/* Newsletter */}
      <div className="py-16 md:py-20 lg:py-24">
        <Newsletter />
      </div>

     
    </main>
  )
}
