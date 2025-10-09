import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const coreValues = [
  {
    id: 1,
    title: "Customer Success",
    description: "Our impact is defined by the success of our healthcare partners and the well-being of their patients."
  },
  {
    id: 2,
    title: "Relentless Innovation",
    description: "We relentlessly pursue cutting-edge solutions to advance cardiac care."
  },
  {
    id: 3,
    title: "Bold Integrity",
    description: "We build trust through transparency and ethical practices."
  },
  {
    id: 4,
    title: "Patient-Centricity",
    description: "We design solutions that prioritize patient outcomes."
  },
  {
    id: 5,
    title: "Collaborative Spirit",
    description: "We believe in the power of people to create impactful change."
  }
]

export default function CoreValues() {
  return (
    <section className="py-20 px-6 bg-opacity-100 inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: "url('about-bg.jpg')"
    }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Title */}
          <div>
            <h2 className="text-5xl lg:text-6xl font-bold text-blue-800">
              Our Values
            </h2>
          </div>

          {/* Right side - Values list */}
          <div className="space-y-10">
            {coreValues.map((value) => (
              <div key={value.id} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-blue-800" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}