"use client";
import { useEffect, useRef } from "react";
import { Box } from "lucide-react";
import gsap from "gsap";

export default function Partners() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  const partners = [
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

  // Split into two rows of 9 each
  const row1Partners = partners.slice(0, 9);
  const row2Partners = partners.slice(9, 18);

  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;

    if (row1 && row2) {
      // Upper row scrolls left
      const animateRow1 = () => {
        gsap.fromTo(
          row1,
          { x: 0 },
          {
            x: -row1.scrollWidth / 2,
            duration: 30,
            ease: "none",
            repeat: -1,
          }
        );
      };

      // Lower row scrolls right
      const animateRow2 = () => {
        gsap.fromTo(
          row2,
          { x: -row2.scrollWidth / 2 },
          {
            x: 0,
            duration: 30,
            ease: "none",
            repeat: -1,
          }
        );
      };

      animateRow1();
      animateRow2();
    }
  }, []);

  const renderPartner = (partner, index) => (
    <div
      key={index}
      className="bg-base rounded-lg p-4 flex items-center justify-center h-20  transition-colors border border-base flex-shrink-0 w-32"
    >
      <img
        src={`https://logo.clearbit.com/${partner.domain}`}
        alt={`${partner.name} logo`}
        className="w-12 h-12 object-contain"
        onError={(e) => {
          // Fallback to a generic icon if logo fails to load
          e.target.style.display = "none";
          e.target.nextSibling.style.display = "flex";
        }}
      />
      <div className="hidden items-center justify-center">
        <Box className="w-4 h-4 mr-1 text-primary" />
        <span className="text-sm font-semibold text-primary">
          {partner.name}
        </span>
      </div>
    </div>
  );

  return (
    <section className="py-20 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 space-y-6">
          <h2 className="text-4xl text-primary">Our Partners</h2>
          <p className="text-secondary">
            We collaborate with industry-leading technology partners to deliver
            cutting-edge solutions in cybersecurity, cloud computing, networking,
            and enterprise infrastructure. Our partnerships ensure access to the
            latest innovations and support for your business needs.
          </p>
        </div>

        {/* Upper Row - Scrolls Left */}
        <div className="overflow-hidden mb-8">
          <div ref={row1Ref} className="flex space-x-4">
            {row1Partners.map(renderPartner)}
            {row1Partners.map((partner, index) =>
              renderPartner(partner, `dup-${index}`)
            )}
          </div>
        </div>

        {/* Lower Row - Scrolls Right */}
        <div className="overflow-hidden">
          <div ref={row2Ref} className="flex space-x-4">
            {row2Partners.map(renderPartner)}
            {row2Partners.map((partner, index) =>
              renderPartner(partner, `dup-${index}`)
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
