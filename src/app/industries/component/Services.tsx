import Link from "next/link";
import { AccordionDemo, IndustryItem } from "./ServiceAccordion"

interface ServiceProps {
  title: string;
  p1: string;
  p2: string;
  industryData: IndustryItem[];
  slug: string;
}

export default function ServiceSection({ title, p1, p2, industryData, slug }: ServiceProps) {
  return (
    <section className="px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-normal text-black dark:text-white">
              {title}
            </h2>

            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                {p1}
              </p>

              <p className="text-lg leading-relaxed">
                {p2}
              </p>
            </div>

            <div className="pt-4">
              <Link href={`/industries/${slug}`} className="px-8 py-3 border border-gray-400 dark:border-gray-600 rounded-full text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
                Learn more
              </Link>
            </div>
          </div>

          {/* Right Content - Accordion */}
          <div>
            <AccordionDemo industry={industryData} />
          </div>
        </div>
      </div>
    </section>
  )
}