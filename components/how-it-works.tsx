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
      icon: "📦",
      title: "Product Built",
      description: "Brand owner develops the product while retaining full control and ownership.",
    },
    {
      icon: "⚡",
      title: "Smart Spend",
      description: "Brand owner funds minimal, optimized marketing guided by Fanatisch's expertise.",
    },
    {
      icon: "👑",
      title: "Strategy Engine",
      description: "Fanatisch drives GTM, branding, and execution with zero consulting charges.",
    },
    {
      icon: "🤝",
      title: "Shared Growth",
      description: "Revenue flows centrally and is distributed fairly with shared brand ownership.",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f2cb05] py-20 px-4 md:px-8 lg:px-16"
    >
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto opacity-0 translate-y-8 transition-all duration-700"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#6c0505] mb-20 text-center leading-tight max-w-5xl mx-auto">
          How Fanatisch{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent animate-pulse">
            Works
          </span>
        </h2>

        <div className="relative bg-gradient-to-r from-blue-100 to-blue-50 rounded-full p-8 md:p-12 lg:p-16 shadow-lg mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center group animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative mb-6">
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center text-4xl transform group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 shadow-md"
                    style={{
                      backgroundColor: idx === 0 ? '#4744a6' : idx === 1 ? '#f2cb05' : idx === 2 ? '#6c0505' : '#22c55e'
                    }}
                  >
                    <span className="filter brightness-0 invert">{step.icon}</span>
                  </div>

                  <div className="absolute inset-0 rounded-full border-2 border-[#4744a6] animate-pulse"></div>
                </div>

                <h3 className="text-lg md:text-xl font-extrabold text-[#6c0505] mb-3 tracking-tight">
                  {step.title}
                </h3>

                <p className="text-[#070756] text-sm md:text-base leading-relaxed opacity-85">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM SHAPE */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 bg-white"
        style={{
          width: "10%",
          aspectRatio: "2",
          WebkitMask:
            "url('https://framerusercontent.com/images/hu1eUWnLUAIjJFEcHS6XHGyNUQ.svg?width=180&height=90') center / cover no-repeat",
          mask:
            "url('https://framerusercontent.com/images/hu1eUWnLUAIjJFEcHS6XHGyNUQ.svg?width=180&height=90') center / cover no-repeat",
        }}
      />

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        :global(.animate-fade-in) {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}