import React from 'react'
import { Button } from './ui/button'
import { Box, ChevronRight } from 'lucide-react'

export default function Service() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-950 ">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-3">
            {/* Bottom Left Card - Red/Black */}
            <div className="relative group overflow-hidden rounded-lg h-64 bg-gray-500 ">
              <div className="absolute inset-0">
                <div className="absolute inset-0 "></div>
              </div>
              <div className="relative h-full p-6 flex flex-col justify-between">
                <Box className="w-6 h-6 text-white" />
                <div>
                  <h3 className="text-xl font-bold mb-3">Digital Infrastructure</h3>
                  <p className="text-gray-400 text-sm mb-4">
                   Designing, deploying, and managing scalable infrastructure that supports cloud, hybrid, and on-premises environments.
                  </p>
                 
                </div>
              </div>
            </div>

            {/* Bottom Middle Card - Teal */}
            <div className="relative group overflow-hidden rounded-lg h-64 bg-gray-500 ">
              <div className="relative h-full p-6 flex flex-col justify-between">
                <Box className="w-6 h-6 " />
                <div>
                  <h3 className="text-xl font-bold mb-3">Network Modernization</h3>
                  <p className="text-gray-400 text-sm mb-4">
                   Upgrading traditional networks with smart, agile, and secure networking solutions to meet current and future demands.
                  </p>
                  
                </div>
              </div>
            </div>

            {/* Bottom Right Card - Gray */}
            <div className="relative group overflow-hidden rounded-lg h-64 bg-gray-500">
              <div className="relative h-full p-6 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-gray-300 mb-2"></p>
                  <h3 className="text-xl font-bold mb-3">Surveillance Security Systems</h3>
                  <p className="text-gray-200 text-sm mb-4">
                   Advanced video surveillance and monitoring systems tailored for enterprise security, leveraging AI and IoT integrations.
                  </p>
                </div>
                <div className="flex space-x-4">
                
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Bottom Left Card - Red/Black */}
            <div className="relative group overflow-hidden rounded-lg h-64 bg-gray-500 ">
              <div className="absolute inset-0">
                <div className="absolute inset-0 "></div>
              </div>
              <div className="relative h-full p-6 flex flex-col justify-between">
                <Box className="w-6 h-6 text-white" />
                <div>
                  <h3 className="text-xl font-bold mb-3">Digital Infrastructure</h3>
                  <p className="text-gray-400 text-sm mb-4">
                   Designing, deploying, and managing scalable infrastructure that supports cloud, hybrid, and on-premises environments.
                  </p>
                 
                </div>
              </div>
            </div>

            {/* Bottom Middle Card - Teal */}
            <div className="relative group overflow-hidden rounded-lg h-64 bg-gray-500 ">
              <div className="relative h-full p-6 flex flex-col justify-between">
                <Box className="w-6 h-6 " />
                <div>
                  <h3 className="text-xl font-bold mb-3">Network Modernization</h3>
                  <p className="text-gray-400 text-sm mb-4">
                   Upgrading traditional networks with smart, agile, and secure networking solutions to meet current and future demands.
                  </p>
                  
                </div>
              </div>
            </div>

            {/* Bottom Right Card - Gray */}
            <div className="relative group overflow-hidden rounded-lg h-64 bg-gray-500">
              <div className="relative h-full p-6 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-gray-300 mb-2"></p>
                  <h3 className="text-xl font-bold mb-3">Surveillance Security Systems</h3>
                  <p className="text-gray-200 text-sm mb-4">
                   Advanced video surveillance and monitoring systems tailored for enterprise security, leveraging AI and IoT integrations.
                  </p>
                </div>
                <div className="flex space-x-4">
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
