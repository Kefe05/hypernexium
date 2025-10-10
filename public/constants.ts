import {  Shield,Database,Cloud,Network,Video,Users } from "lucide-react" 
import { Partner } from "@/types/common";
export const slidesData = [
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
      label: "HYPERNEXIUM TECHNOLOGIES",
      title: "Empowering businesses with",
      titleAccent: "intelligent",
      titleEnd: " technology solutions",
      description: "Your trusted technology partner delivering innovative, secure,and future ready IT solutions that drive smart enterprise growth across Africa and beyond."
    },
    {
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80",
      label: "DIGITAL TRANSFORMATION",
      title: "Building the",
      titleAccent: "future",
      titleEnd: " of enterprise technology",
      description: "Partner with certified experts delivering world-class IT infrastructure, network modenization and seamless digital transforation across Africa and beyond."
    },
    {
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80",
      label: "TRUSTED TECHNOLOGY PARTNER",
      title: "Your success is our",
      titleAccent: "mission",
      titleEnd: " secure, scalable, reliable",
      description: "From cybersecurity to disaster recovery, we deliver end-to-end IT solutions backed by industry-leading partners like Cisco, Microsoft, Dell, and Palo Alto Networks."
    }
  ];

// this for the about section in the home page
export const AboutData = [
      {
        id: 0,
        title: "Cybersecurity",
        subtitle: "Proactive Defense",
        description: "Safeguard your digital assets with our multi-layered cybersecurity frameworks. We provide advanced threat detection, prevention, and response to protect your business from modern cyber threats.",
        image: "/cybersecurity.jpeg",
        stats: { number: "99.9%", label: "Threat Detection Rate" }
      },
      {
        id: 1,
        title: "Digital Infrastructure",
        subtitle: "Scalable Solutions",
        description: "Build a future-ready enterprise with our scalable infrastructure solutions. We design and manage cloud, hybrid, and on-premises environments to ensure performance, reliability, and growth.",
        image: "/infrastructure.jpeg",
        stats: { number: "100+", label: "Deployed Solutions" }
      },
      {
        id: 2,
        title: "Surveillance Security Systems",
        subtitle: "Intelligent Monitoring",
        description: "Enhance enterprise security with AI and IoT-integrated surveillance systems. Our advanced video monitoring solutions provide real-time insights and robust protection tailored to your needs.",
        image: "/surveillance.jpeg",
        stats: { number: "24/7", label: "Monitoring Coverage" }
      }
    ];

// this for the services section in the homepage
export  const servicesData = [
    {
      id: 0,
      title: "Cybersecurity",
      description: "Protect your digital assets with our proactive and multi-layered security frameworks. We defend against modern cyber threats with advanced solutions tailored to your enterprise needs.",
      icon: Shield,
      features: ["Threat Detection & Prevention", "Multi-Layered Security", "Incident Response", "Security Audits"]
    },
    {
      id: 1,
      title: "Backup and Recovery",
      description: "Ensure business continuity with our enterprise-grade data backup and disaster recovery solutions. We safeguard your data integrity with reliable and efficient recovery systems.",
      icon: Database,
      features: ["Data Backup Solutions", "Disaster Recovery Planning", "Data Integrity Assurance", "Automated Recovery Processes"]
    },
    {
      id: 2,
      title: "Digital Infrastructure",
      description: "Build scalable infrastructure to support your enterprise. We design, deploy, and manage cloud, hybrid, and on-premises environments for optimal performance and growth.",
      icon: Cloud,
      features: ["Cloud Deployment", "Hybrid Infrastructure", "Scalability Optimization", "Infrastructure Management"]
    },
    {
      id: 3,
      title: "Network Modernization",
      description: "Upgrade to smart, agile, and secure networks. Our solutions modernize traditional networks to meet current and future demands, ensuring connectivity and performance.",
      icon: Network,
      features: ["Smart Networking", "Secure Connectivity", "Network Optimization", "Future-Ready Solutions"]
    },
    {
      id: 4,
      title: "Surveillance Security Systems",
      description: "Enhance enterprise security with advanced video surveillance. Our AI and IoT-integrated systems provide real-time monitoring and tailored security solutions.",
      icon: Video,
      features: ["AI-Powered Surveillance", "IoT Integration", "Real-Time Monitoring", "Customized Security Systems"]
    },
    {
      id: 5,
      title: "IT Training",
      description: "Empower your team with our capacity-building programs. We offer technical training to upskill employees in key IT domains, driving enterprise success.",
      icon: Users,
      features: ["Technical Skill Development", "Customized Training Programs", "IT Certification Prep", "Team Upskilling"]
    }
  ];
  
// for the partners section in the home page
export const partners: Partner[] = [
    { name: "Kaspersky", domain: "kaspersky.com" },
    { name: "Dell Technologies", domain: "dell.com" },
    { name: "Cisco", domain: "cisco.com" },
    { name: "Huawei", domain: "huawei.com" },
    { name: "Hikvision", domain: "hikvision.com" },
    { name: "Microsoft", domain: "microsoft.com" },
    { name: "VMware", domain: "vmware.com" },
    { name: "Veeam", domain: "veeam.com" },
    { name: "Veritas", domain: "veritas.com" },
    { name: "Nutanix", domain: "nutanix.com" },
    { name: "D-Link", domain: "dlink.com" },
    { name: "Palo Alto Networks", domain: "paloaltonetworks.com" },
    { name: "Symantec", domain: "symantec.com" },
    { name: "Avaya", domain: "avaya.com" },
    { name: "HP", domain: "hp.com" },
    { name: "Fortinet", domain: "fortinet.com" },
    { name: "Sophos", domain: "sophos.com" },
    { name: "Lenovo", domain: "lenovo.com" },
  ];  
  