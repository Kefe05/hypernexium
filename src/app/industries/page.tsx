export interface IndustryItem {
  name: string;
  description: string;
}

export interface IndustryData {
  serviceName: string;
  slug: string;
  p1: string;
  p2: string;
  industry: IndustryItem[];
}

export const industries: IndustryData[] = [
  {
    serviceName: "Healthcare",
    slug: "healthcare",
    p1: "At Hyper Nexium Technologies Ltd, we understand that healthcare organizations across Africa operate in an environment where data accuracy, system uptime, and security can directly impact patient outcomes. Hospitals, laboratories, and clinics depend on reliable digital infrastructure, secure communication systems, and robust data protection to deliver high-quality care efficiently.",
    p2: "We recognize the unique challenges facing healthcare providers — from safeguarding patient data and ensuring compliance with data protection laws, to maintaining real-time access to critical medical records and imaging systems. In a sector where every second counts, downtime or data loss is not an option.",
    industry: [
      {
        name: "Proven Expertise in Healthcare IT",
        description: "We bring deep technical expertise in digital infrastructure, cybersecurity, and cloud-based solutions tailored to the healthcare environment."
      },
      {
        name: "Data Protection You Can Trust",
        description: "Through partnerships with global leaders like Veeam, Veritas, and Dell Technologies, we deliver world-class backup and recovery systems that ensure critical health data is never lost."
      },
      {
        name: "Secure Network & Surveillance",
        description: "Our advanced network modernization and surveillance systems safeguard sensitive areas and patient information from physical and cyber threats."
      },
      {
        name: "Scalable and Future-Ready Solutions",
        description: "We design systems that grow with your healthcare facility — from small clinics to large hospital networks."
      },
      {
        name: "Training & Support",
        description: "Our IT training programs empower your team to manage and maximize technology for improved patient care and operational efficiency."
      }
    ]
  },
  {
    serviceName: "Education",
    slug: "education",
    p1: "At Hyper Nexium Technologies Ltd, we understand that the education sector across Africa is evolving rapidly — driven by digital transformation, hybrid learning, and the need for secure, connected, and scalable IT environments. From primary institutions to universities, schools today require reliable digital infrastructure, robust cybersecurity, and data management systems that support virtual learning, student data protection, and administrative efficiency.",
    p2: "We recognize that educators face challenges such as limited IT resources, cyber risks, inadequate network coverage, and the need to integrate multiple digital learning tools. Our goal is to empower educational institutions to create innovative, technology-enabled learning environments that inspire growth and inclusivity.",
    industry: [
      {
        name: "Specialized Education Technology Expertise",
        description: "We understand the unique technological demands of academic environments — from e-learning infrastructure to secure data management systems."
      },
      {
        name: "Robust Digital Infrastructure",
        description: "Through partnerships with Cisco, Huawei, Dell Technologies, and Microsoft, we deliver high-performance networks and cloud solutions that keep classrooms connected and resources accessible anytime, anywhere."
      },
      {
        name: "Cybersecurity for Education",
        description: "Protecting student data and academic systems is our top priority. Our cybersecurity solutions safeguard against threats while ensuring compliance with international data protection standards."
      },
      {
        name: "Reliable Backup & Recovery",
        description: "Using solutions from Veeam, Veritas, and VMware, we ensure that vital academic data — from research materials to student records — is always secure and recoverable."
      },
      {
        name: "Smart Campus Surveillance",
        description: "Our AI-powered surveillance systems from Hikvision enhance safety and operational visibility across educational facilities."
      },
      {
        name: "Empowering Through IT Training",
        description: "We don't just deliver technology — we empower educators, administrators, and IT teams with practical training to maximize productivity and efficiency."
      }
    ]
  },
  {
    serviceName: "Corporate",
    slug: "corporate",
    p1: "At Hyper Nexium Technologies Ltd, we understand that corporate organizations across Africa are constantly striving to improve efficiency, collaboration, and competitiveness in a fast-changing digital world. Today's enterprises rely on secure networks, data protection, and digital agility to operate effectively — from managing large-scale business operations to supporting remote teams and ensuring uninterrupted service delivery.",
    p2: "We recognize the challenges faced by corporate institutions, including cybersecurity threats, system downtime, data loss, and the complexity of digital transformation. Our role is to bridge these gaps with smart, innovative technology solutions that help organizations work smarter, faster, and more securely.",
    industry: [
      {
        name: "Comprehensive IT Solutions",
        description: "From cybersecurity to network modernization, we provide integrated solutions that cover every layer of your IT environment."
      },
      {
        name: "Trusted Technology Partnerships",
        description: "Our alliances with global technology leaders such as Cisco, Huawei, Dell Technologies, Microsoft, HP, and Fortinet enable us to deliver enterprise-grade solutions with proven performance."
      },
      {
        name: "Unmatched Data Protection",
        description: "Using industry-leading backup and recovery systems from Veeam, Veritas, and VMware, we ensure your business-critical data is always safe, accessible, and recoverable."
      },
      {
        name: "Robust Cybersecurity Frameworks",
        description: "We safeguard your digital assets with cutting-edge solutions from Kaspersky, Sophos, Palo Alto, and Symantec, defending your business from evolving threats."
      },
      {
        name: "Smart Surveillance Systems",
        description: "Our AI-driven surveillance solutions from Hikvision and D-Link ensure physical and digital security for corporate environments."
      },
      {
        name: "Capacity Building & Training",
        description: "We equip your IT teams with practical technical and cybersecurity training, helping you build in-house capabilities for long-term resilience."
      }
    ]
  },
  {
    serviceName: "Retail",
    slug: "retail",
    p1: "At Hyper Nexium Technologies Ltd, we understand that today's retail businesses in Africa are evolving rapidly — driven by digital transformation, customer experience, and data intelligence. Retailers are no longer just selling products; they're delivering seamless, technology-driven experiences across physical stores, online platforms, and mobile apps.",
    p2: "This shift requires robust digital infrastructure, secure payment systems, network reliability, and real-time data insights to meet changing consumer expectations and market dynamics. We recognize the key challenges in the retail environment — from protecting sensitive customer data to managing multi-branch operations, ensuring system uptime, and integrating digital sales channels.",
    industry: [
      {
        name: "End-to-End Retail Technology Solutions",
        description: "From network modernization to data backup, we deliver integrated systems that ensure seamless business continuity and operational excellence."
      },
      {
        name: "Cybersecurity for Retail",
        description: "With solutions from Kaspersky, Fortinet, Palo Alto, and Sophos, we safeguard retail operations against cyber threats, protecting customer data and transactions."
      },
      {
        name: "Smart Store Surveillance",
        description: "Our advanced AI-powered surveillance systems from Hikvision and D-Link help retailers monitor store activities, enhance security, and improve loss prevention."
      },
      {
        name: "Reliable Backup & Recovery",
        description: "Partnering with Veeam, Veritas, and Dell Technologies, we ensure that your critical sales, inventory, and financial data remain secure and recoverable."
      },
      {
        name: "Seamless Connectivity",
        description: "Through Cisco, Huawei, and Microsoft solutions, we build robust digital infrastructure that supports POS systems, online platforms, and customer engagement tools."
      },
      {
        name: "Scalable & Future-Ready",
        description: "Our solutions are designed to grow with your business — whether you manage a single store or a multi-branch retail network."
      }
    ]
  },
  {
    serviceName: "Real Estate",
    slug: "real-estate",
    p1: "At Hyper Nexium Technologies Ltd, we understand that the real estate industry in Africa is undergoing a digital transformation. Property developers, facility managers, and real estate investors are increasingly relying on technology to manage assets, automate operations, and enhance tenant experiences.",
    p2: "From smart building infrastructure and surveillance systems to data management and secure communication networks, technology is at the heart of modern real estate success. We recognize the unique challenges that real estate businesses face — such as maintaining security across multiple sites, ensuring data protection, managing property systems remotely, and creating sustainable digital environments that attract clients and investors alike.",
    industry: [
      {
        name: "Smart Building Solutions",
        description: "We deploy IoT-enabled systems for energy management, lighting control, and remote facility monitoring — ensuring smarter, greener buildings."
      },
      {
        name: "Advanced Security & Surveillance",
        description: "Our AI-powered CCTV and access control systems from Hikvision, D-Link, and TP-Link provide 24/7 property monitoring and enhanced safety."
      },
      {
        name: "Reliable Network Infrastructure",
        description: "We design and implement robust connectivity solutions using Cisco, Huawei, and Fortinet to ensure seamless communication across offices, apartments, and facilities."
      },
      {
        name: "Data Protection & Backup",
        description: "Partnering with Veeam, Veritas, and Dell Technologies, we safeguard your critical data, lease documents, and client records with world-class backup and disaster recovery solutions."
      },
      {
        name: "Cloud Solutions & Collaboration",
        description: "Our Microsoft and Google Cloud services enable efficient collaboration between real estate teams, agents, and clients — anytime, anywhere."
      },
      {
        name: "Digital Transformation for Real Estate",
        description: "We guide your business through the adoption of new technologies that enhance efficiency, marketing, and customer engagement."
      }
    ]
  },
  {
    serviceName: "Manufacturing",
    slug: "manufacturing",
    p1: "At Hyper Nexium Technologies Ltd, we understand that the manufacturing sector across Africa is under growing pressure to improve productivity, efficiency, and quality while minimizing downtime and operational costs. In today's competitive environment, manufacturers must embrace digital transformation — integrating advanced technologies such as automation, IoT, data analytics, and cloud systems to stay ahead.",
    p2: "We know that your success depends on real-time visibility, secure communication, robust network infrastructure, and reliable data protection across production lines, warehouses, and offices. From factory floor connectivity to cybersecurity and IT system resilience, we provide end-to-end solutions that enable smart manufacturing for the digital era.",
    industry: [
      {
        name: "Secure Industrial Networks",
        description: "We build and modernize your IT and OT (Operational Technology) networks with Cisco, Huawei, and Fortinet technologies — ensuring seamless, high-speed, and secure factory connectivity."
      },
      {
        name: "Data Backup & Recovery",
        description: "Using trusted partners like Veeam, Veritas, and Dell Technologies, we ensure that critical production data, ERP systems, and inventory records are fully protected and recoverable."
      },
      {
        name: "Cybersecurity for Industrial Systems",
        description: "We deploy multi-layered security using Kaspersky, Sophos, and Palo Alto to protect your factory systems from ransomware, breaches, and downtime."
      },
      {
        name: "Cloud & Digital Infrastructure",
        description: "Our Microsoft and VMware solutions provide flexible cloud environments to manage operations, analytics, and collaboration across sites."
      },
      {
        name: "Surveillance & Facility Security",
        description: "With Hikvision and D-Link, we provide advanced video monitoring and access control to safeguard your people, assets, and machinery."
      },
      {
        name: "Smart Factory Transformation",
        description: "We help you adopt IoT and automation technologies that enable predictive maintenance, energy efficiency, and streamlined production processes."
      }
    ]
  },
  {
    serviceName: "Financial Services",
    slug: "financial-services",
    p1: "At Hyper Nexium Technologies Ltd, we understand that financial institutions — from banks and insurance companies to fintech startups — rely heavily on security, reliability, and speed. In Africa's fast-evolving financial landscape, customer trust is built on one foundation: technology that performs flawlessly and securely.",
    p2: "We recognize your need to manage sensitive data, ensure transaction integrity, meet regulatory standards, and provide seamless digital experiences for customers. From core banking systems and data centers to digital payment platforms and cybersecurity, we deliver technology solutions that strengthen your operations and drive innovation in the financial services sector.",
    industry: [
      {
        name: "Uncompromised Cybersecurity",
        description: "We safeguard your digital assets and customer data with advanced, multi-layered security from Fortinet, Palo Alto, Kaspersky, and Sophos, ensuring end-to-end protection against evolving cyber threats."
      },
      {
        name: "Data Backup & Recovery",
        description: "Our partnerships with Veeam, Veritas, and Dell Technologies guarantee business continuity and data resilience — minimizing downtime and preventing loss from system failures or cyber incidents."
      },
      {
        name: "Digital Infrastructure for Financial Institutions",
        description: "With Cisco, Huawei, and HP, we design and modernize robust, scalable, and high-speed IT infrastructures that support mission-critical financial operations."
      },
      {
        name: "Cloud & Virtualization",
        description: "We empower financial services with Microsoft Azure and VMware solutions to achieve scalability, agility, and efficiency in data management and service delivery."
      },
      {
        name: "Surveillance & Branch Security",
        description: "Using Hikvision and D-Link, we implement smart surveillance and monitoring systems to ensure physical and operational security across offices and branches."
      },
      {
        name: "Compliance & Risk Management",
        description: "Our solutions are designed to meet stringent regulatory and compliance requirements for data protection, privacy, and risk governance."
      }
    ]
  },
  {
    serviceName: "Energy",
    slug: "energy",
    p1: "At Hyper Nexium Technologies Ltd, we understand that the energy sector is the backbone of economic development — powering industries, homes, and innovation across Africa. As the demand for reliable, sustainable, and digitally managed energy systems grows, energy providers are transforming their operations with technology to improve performance, ensure security, and meet regulatory standards.",
    p2: "Whether in oil and gas, renewable energy, utilities, or power distribution, your organization faces challenges such as data management, cybersecurity threats, asset monitoring, grid modernization, and system uptime. We recognize that to achieve operational efficiency and sustainability, energy companies need robust IT infrastructures, real-time analytics, and secure digital ecosystems that support innovation and resilience.",
    industry: [
      {
        name: "Advanced Cybersecurity Protection",
        description: "With Fortinet, Palo Alto, Kaspersky, and Sophos, we safeguard your critical infrastructure from cyberattacks that could disrupt operations or compromise sensitive data."
      },
      {
        name: "Network & Infrastructure Modernization",
        description: "Through partnerships with Cisco, Huawei, and Dell Technologies, we build high-performance digital networks that connect your operations from control rooms to remote sites."
      },
      {
        name: "Backup & Disaster Recovery",
        description: "Using Veeam and Veritas, we ensure your critical operational and customer data remain protected and recoverable in the event of system failures or natural disasters."
      },
      {
        name: "Cloud & Virtualization Solutions",
        description: "Our Microsoft Azure and VMware offerings enable flexible, secure, and scalable IT environments for data management, analytics, and energy resource planning."
      },
      {
        name: "Surveillance & Safety Systems",
        description: "With Hikvision and D-Link, we enhance the security of your facilities, substations, and production sites with AI-powered surveillance and access control systems."
      },
      {
        name: "Operational Visibility & IoT Integration",
        description: "We help energy companies adopt smart monitoring systems for real-time asset tracking, predictive maintenance, and energy flow optimization."
      }
    ]
  }
];