import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// Example industry data - can be used for reference or future implementation
// const industryData = [
//   {
//     name: "All Industries",
//     description: "Comprehensive solutions across all sectors, tailored to meet diverse business needs and industry requirements."
//   },
//   {
//     name: "Health", 
//     description: "Specialized healthcare IT solutions including patient management systems, telemedicine platforms, and compliance tools."
//   },
//   {
//     name: "Finance",
//     description: "Secure financial technology solutions with advanced encryption, fraud detection, and regulatory compliance features."
//   },
//   {
//     name: "Education",
//     description: "Educational technology platforms, learning management systems, and digital classroom solutions for modern learning."
//   },
//   {
//     name: "Real Estate", 
//     description: "Property management systems, virtual tours, CRM solutions, and market analysis tools for real estate professionals."
//   },
//   {
//     name: "Manufacturing",
//     description: "Industrial IoT solutions, supply chain management, quality control systems, and production optimization tools."
//   },
//   {
//     name: "Transportation",
//     description: "Fleet management systems, route optimization, logistics platforms, and transportation safety solutions."
//   }
// ]

export interface IndustryItem {
  name: string;
  description?: string;
}

export interface IndustryProps {
  industry: IndustryItem[];
}

export function AccordionDemo({ industry }: IndustryProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
    >
    {industry.map((item: IndustryItem, index: number) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-0 border-b border-gray-300 dark:border-gray-700 rounded-none px-0 pb-4">
        <AccordionTrigger className="text-xl font-normal text-black dark:text-white hover:no-underline py-4">
          {item.name}
        </AccordionTrigger>
        <AccordionContent className="text-gray-700 dark:text-gray-300 pb-6">
          <p>
            {item.description}
          </p>
        </AccordionContent>
      </AccordionItem>
    ))} 

      
    </Accordion>
  )
}
