"use client"

import { useEffect, useRef } from "react"

interface ContactCTAProps {
  scrollY: number
}

export default function ContactCTA({ scrollY }: ContactCTAProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && containerRef.current) {
          containerRef.current.classList.add("opacity-100", "scale-100")
        }
      },
      { threshold: 0.3 },
    )

    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-fanatisch-dark py-20 px-4 md:px-8 lg:px-16">
      <div ref={containerRef} className="max-w-4xl mx-auto opacity-0 scale-95 transition-all duration-700">
        {/* CTA Container - Dark Rounded Box */}
        <div className="bg-gradient-to-br from-fanatisch-dark to-black rounded-4xl p-12 md:p-16 lg:p-20 text-center border border-gray-800">
          {/* Main Heading - Mixed Colors */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-8">
            Ready to partner with <span className="text-fanatisch-yellow">Fanatisch</span> & Unlock the{" "}
            <span className="text-fanatisch-red">Real Potential</span>?
          </h2>

          {/* Subtitle */}
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Let's transform your vision into measurable impact through proven strategies and dedicated partnership.
          </p>

          {/* CTA Button */}
          <button className="bg-white hover:bg-gray-100 text-fanatisch-dark font-bold py-4 px-8 md:py-5 md:px-12 rounded-full transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 text-lg">
            Get In Touch
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
