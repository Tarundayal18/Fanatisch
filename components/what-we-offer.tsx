"use client"

import { useEffect, useRef, useState } from "react"
import { Zap, Rocket, BarChart3, Handshake, Network, TrendingUp } from "lucide-react"

interface WhatWeOfferProps {
  scrollY: number
}

const benefits = [
  {
    title: "GTM Precision",
    description: "Proven multi-brand strategies tailored to launch, scale, and dominate markets.",
    icon: Zap,
    color: "bg-fanatisch-yellow",
    accentColor: "from-fanatisch-yellow/40 to-transparent",
  },
  {
    title: "Creative Speed",
    description: "Rapid branding execution with consistent quality that accelerates market entry.",
    icon: Rocket,
    color: "bg-fanatisch-blue",
    accentColor: "from-fanatisch-blue/40 to-transparent",
  },
  {
    title: "Marketing Oversight",
    description: "Performance-driven monitoring ensuring campaigns stay efficient and ROI-focused.",
    icon: BarChart3,
    color: "bg-fanatisch-red",
    accentColor: "from-fanatisch-red/40 to-transparent",
  },
  {
    title: "Founder Partnership",
    description: "Skin-in-the-game approach aligned entirely with your long-term success.",
    icon: Handshake,
    color: "bg-fanatisch-yellow",
    accentColor: "from-fanatisch-yellow/40 to-transparent",
  },
  {
    title: "Execution Network",
    description: "Reliable partners delivering operations, tech, and marketing support seamlessly.",
    icon: Network,
    color: "bg-fanatisch-blue",
    accentColor: "from-fanatisch-blue/40 to-transparent",
  },
  {
    title: "Scale Playbook",
    description: "Structured growth systems designed to expand products across multiple markets.",
    icon: TrendingUp,
    color: "bg-fanatisch-red",
    accentColor: "from-fanatisch-red/40 to-transparent",
  },
]

export default function WhatWeOffer({ scrollY }: WhatWeOfferProps) {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(6).fill(false))
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = containerRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={containerRef} className="relative py-20 sm:py-28 px-4 sm:px-6 bg-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-fanatisch-blue/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-fanatisch-yellow/5 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-fanatisch-red/3 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-lufga font-extrabold tracking-tight mb-4 text-[#0e0f26]">
            What We <span className="text-fanatisch-yellow">Bring</span>
          </h2>
          <p className="text-[#0e0f26] font-lufga font-regular text-lg max-w-2xl mx-auto">
            Six core capabilities that drive exceptional results for every brand partnership
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                data-index={index}
                className={`group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-gray-100 to-gray-50 border border-gray-200 hover:border-fanatisch-yellow/50 transition-all duration-500 transform ${
                  visibleCards[index] ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                } overflow-hidden cursor-pointer`}
              >
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${benefit.accentColor} transition-all duration-500 blur-xl group-hover:blur-2xl`}
                />

                {/* Subtle animated shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-500 -skew-x-12 group-hover:translate-x-full" />

                {/* Icon with enhanced styling */}
                <div
                  className={`relative mb-6 w-14 h-14 ${benefit.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-125 transition-transform duration-300`}
                >
                  <Icon size={28} className="group-hover:rotate-12 transition-transform duration-300" />
                </div>

                {/* Content */}
                <h3 className="relative text-xl sm:text-2xl font-lufga font-bold mb-3 text-[#0e0f26] group-hover:text-fanatisch-yellow transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="relative text-gray-600 leading-relaxed group-hover:text-gray-700 font-lufga font-regular transition-colors duration-300">
                  {benefit.description}
                </p>

                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-fanatisch-yellow via-fanatisch-blue to-fanatisch-red w-0 group-hover:w-full transition-all duration-700" />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .delay-500 {
          animation-delay: 500ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  )
}
