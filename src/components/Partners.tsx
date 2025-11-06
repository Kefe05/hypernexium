"use client";
import { useEffect, useRef } from "react";
import { Box } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { Partner } from "@/types/common";
import { partners } from "../../public/constants";


export default function Partners() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  

  // Split into two rows of 9 each
  const row1Partners = partners?.slice(0, 10);
  const row2Partners = partners?.slice(11, 20);

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

  const renderPartner = (partner: Partner, index: number | string) => {
    // Determine image source based on partner
    let imageSrc = `https://logo.clearbit.com/${partner.domain}`;
    if (partner.domain === "avaya.com") {
      imageSrc = "/aaya.png";
    } else if (partner.domain === "poly.com") {
      imageSrc = "/poly.png";
    }

    return (
      <div
        key={index}
        className="bg-base rounded-lg p-4 flex items-center justify-center h-20 transition-colors  flex-shrink-0 w-28"
      >
        <Image
          src={imageSrc}
          alt={`${partner.name} logo`}
          width={48}
          height={48}
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          onError={(e) => {
            // Fallback to a generic icon if logo fails to load
            e.currentTarget.style.display = "none";
            const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
            if (nextElement) nextElement.style.display = "flex";
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
  };

  return (
    <section className="py-20 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-primary">
            Our Partners
          </h2>
          <p className="text-base md:text-xl text-secondary leading-relaxed">
            We collaborate with industry-leading technology partners to deliver
            cutting-edge solutions in cybersecurity, cloud computing, networking,
            and enterprise infrastructure. Our partnerships ensure access to the
            latest innovations and support for your business needs.
          </p>
        </div>

        {/* Upper Row - Scrolls Left */}
        <div className="overflow-hidden mb-8">
          <div ref={row1Ref} className="flex space-x-4">
            {row1Partners?.map((partner, index) => renderPartner(partner, index))}
            {row1Partners?.map((partner, index) =>
              renderPartner(partner, `dup-${index}`)
            )}
          </div>
        </div>

        {/* Lower Row - Scrolls Right */}
        <div className="overflow-hidden">
          <div ref={row2Ref} className="flex space-x-4">
            {row2Partners?.map((partner, index) => renderPartner(partner, index))}
            {row2Partners?.map((partner, index) =>
              renderPartner(partner, `dup-${index}`)
            )}
          </div>
        </div>
      </div>
    </section>
  );
}