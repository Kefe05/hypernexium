import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
    >
      <AccordionItem value="item-1" className="border-0 border-b border-gray-300 dark:border-gray-700 rounded-none px-0 pb-4">
        <AccordionTrigger className="text-xl font-normal text-black dark:text-white hover:no-underline py-4">
          Website development
        </AccordionTrigger>
        <AccordionContent className="text-gray-700 dark:text-gray-300 pb-6">
          <p>
            We create modern, responsive websites that deliver exceptional user experiences.
            From simple landing pages to complex web applications, our development team
            ensures your website is fast, secure, and optimized for all devices.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="border-0 border-b border-gray-300 dark:border-gray-700 rounded-none px-0 pb-4">
        <AccordionTrigger className="text-xl font-normal text-black dark:text-white hover:no-underline py-4">
          Custom web app development
        </AccordionTrigger>
        <AccordionContent className="text-gray-700 dark:text-gray-300 pb-6">
          <p>
            Build powerful, scalable web applications tailored to your business needs.
            We develop custom solutions using the latest technologies and frameworks
            to help you streamline operations and enhance productivity.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" className="border-0 border-b border-gray-300 dark:border-gray-700 rounded-none px-0 pb-4">
        <AccordionTrigger className="text-xl font-normal text-black dark:text-white hover:no-underline py-4">
          Web e-commerce solutions
        </AccordionTrigger>
        <AccordionContent className="text-gray-700 dark:text-gray-300 pb-6">
          <p>
            Launch your online store with our comprehensive e-commerce solutions.
            We integrate secure payment gateways, inventory management, and user-friendly
            interfaces to help you sell effectively online.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4" className="border-0 border-b border-gray-300 dark:border-gray-700 rounded-none px-0 pb-4">
        <AccordionTrigger className="text-xl font-normal text-black dark:text-white hover:no-underline py-4">
          Low code & No code development
        </AccordionTrigger>
        <AccordionContent className="text-gray-700 dark:text-gray-300 pb-6">
          <p>
            Accelerate your digital transformation with low-code and no-code solutions.
            We help you build applications faster and more cost-effectively while
            maintaining quality and functionality.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5" className="border-0 border-b border-gray-300 dark:border-gray-700 rounded-none px-0 pb-4">
        <AccordionTrigger className="text-xl font-normal text-black dark:text-white hover:no-underline py-4">
          Staff augmentation
        </AccordionTrigger>
        <AccordionContent className="text-gray-700 dark:text-gray-300 pb-6">
          <p>
            Scale your development team with our skilled professionals.
            We provide experienced developers who integrate seamlessly with
            your existing team to help you meet project deadlines and goals.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6" className="border-0 border-b border-gray-300 dark:border-gray-700 rounded-none px-0 pb-4">
        <AccordionTrigger className="text-xl font-normal text-black dark:text-white hover:no-underline py-4">
          Web design
        </AccordionTrigger>
        <AccordionContent className="text-gray-700 dark:text-gray-300 pb-6">
          <p>
            Create stunning, user-centered designs that captivate your audience.
            Our design team focuses on creating intuitive interfaces and engaging
            visual experiences that drive conversions and user satisfaction.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
