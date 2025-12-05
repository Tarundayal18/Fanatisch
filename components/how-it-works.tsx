"use client"

import { useEffect, useRef } from "react"

interface HowItWorksProps {
  scrollY: number
}

export default function HowItWorks({ scrollY }: HowItWorksProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && containerRef.current) {
          containerRef.current.classList.add("opacity-100", "translate-y-0")
        }
      },
      { threshold: 0.3 },
    )

    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      title: "Product Built",
      description: "Brand owner develops the product while retaining full control and ownership.",
    },
    {
      title: "Smart Spend",
      description: "Brand owner funds minimal, optimized marketing guided by Fanatisch's expertise.",
    },
    {
      title: "Strategy Engine",
      description: "Fanatisch drives GTM, branding, and execution with zero consulting charges.",
    },
    {
      title: "Shared Growth",
      description: "Revenue flows centrally and is distributed fairly with shared brand ownership.",
    },
  ]

  return (
    <section ref={sectionRef} className="bg-white py-20 px-4 md:px-8 lg:px-16">
      <div ref={containerRef} className="max-w-6xl mx-auto opacity-0 translate-y-8 transition-all duration-700">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-16 text-center leading-tight">
          How <span className="text-fanatisch-dark">Fanatisch</span> Works
        </h2>

        {/* Feature Container - Light Blue Background */}
        <div className="bg-blue-100 rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start group hover:scale-105 transition-transform duration-300"
              >
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-full bg-fanatisch-dark flex items-center justify-center mb-6 group-hover:bg-fanatisch-blue transition-colors duration-300">
                  <span className="text-white font-bold text-xl">{idx + 1}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-lg font-black text-fanatisch-dark mb-3">{step.title}</h3>

                {/* Description */}
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
