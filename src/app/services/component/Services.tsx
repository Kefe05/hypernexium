import { AccordionDemo } from "./ServiceAccordion"

export default function ServiceSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-normal text-black dark:text-white">
              Web development solutions
            </h2>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                Our team offers time-proven services for various industries: 
                fintech, e-learning, healthcare, e-commerce, etc. The 
                development process is full-cycle—we start with an initial idea, 
                bring it into code form, and keep nourishing it even after the 
                release.
              </p>
              
              <p className="text-lg leading-relaxed">
                The team has more than 18 years of experience, and its skills 
                have been tested countless times with various challenges and 
                tasks.
              </p>
            </div>
            
            <div className="pt-4">
              <button className="px-8 py-3 border border-gray-400 dark:border-gray-600 rounded-full text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
                Start your project
              </button>
            </div>
          </div>

          {/* Right Content - Accordion */}
          <div>
            <AccordionDemo />
          </div>
        </div>
      </div>
    </section>
  )
}