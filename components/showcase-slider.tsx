
"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

interface SlideItem {
  id: string
  category: string
  leftTitle: string
  leftTitle2: string
  leftDescription: string
  leftStatNumber: string
  rightTitle: string
  rightTitle2: string
  rightDescription: string
  rightStatNumber: string
  rightStatText: string
  image: string
  heading: string
  headingHighlight: string
}

const allSlides: SlideItem[] = [
  {
    id: "lot-1",
    category: "Little Other Things",
    leftTitle: "Loved Online. Adored in Stores.",
    leftTitle2: "Cute toys, fun stationery, and everyday essentials that customers can’t resist picking up.",
    leftDescription:
      "Cute toys, fun stationery, and everyday essentials that customers can't resist picking up.",
    leftStatNumber: "Open a Little Other Things store in your city.",
    rightTitle: "Cute Products. Reliable Support.",
    rightTitle2: "Turn cute products into a smart business.",
    rightDescription: "Fast-moving designs with consistent quality and seamless support.",
    rightStatNumber: "Turn cute products into a smart business.",
    rightStatText: "https://franchisee.littleotherthings.com/",
    image: "/img1.jpg",
    heading: "Little Other",
    headingHighlight: "Things"
  },
]

export default function ShowcaseSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    setFadeIn(false)
    const timer = setTimeout(() => setFadeIn(true), 50)
    return () => clearTimeout(timer)
  }, [currentIndex])

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % allSlides.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + allSlides.length) % allSlides.length)
  }

  const current = allSlides[currentIndex]

  return (
    <section className="w-full bg-white py-20 md:py-32 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Page Heading */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-lufga font-bold text-[#6c0505] leading-tight">
            {current.heading}{" "}
            <span className=" bg-gradient-to-r from-blue-600 via-purple-600 font-lufga font-bold to-red-600 bg-clip-text text-transparent animate-pulse">
              {current.headingHighlight}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center min-h-[600px] md:min-h-[500px]">
          {/* Left Card */}
          <div
            className={`flex flex-col justify-between h-full transform transition-all duration-700 ${
              fadeIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="space-y-2 flex-1 flex flex-col gap-6 justify-center">
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-lufga font-extrabold text-[#6c0505] mb-2 leading-tight uppercase tracking-tight">
                  {current.leftTitle}
                </h3>
                <p className="text-xs md:text-sm text-[#6c0505] font-lufga font-regular leading-relaxed">
                  {current.leftDescription}
                </p>
              </div>

              <div className="group relative">
                <div className="bg-[#8b7cf6] rounded-[1.75rem] p-5 md:p-6 text-white relative overflow-visible shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#8b7cf6] rounded-full opacity-40"></div>
                  
                  <div className="absolute -bottom-5 left-5 w-10 h-10 bg-[#8b7cf6] rounded-full opacity-30"></div>

                  <div className="relative z-10">
                    <div className="text-2xl md:text-3xl font-lufga font-extrabold mb-2 tracking-tight">
                      {current.leftStatNumber}
                    </div>
                  </div>

                  <div className="absolute top-5 right-5 bg-white bg-opacity-25 p-2.5 rounded-full transform group-hover:rotate-45 transition-all duration-300">
                    <ArrowRight size={18} className="text-white" strokeWidth={3} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div
            className={`relative flex justify-center items-center h-full transform transition-all duration-700 ${
              fadeIn ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div className="relative w-full aspect-auto max-w-md">
  {/* Main Image Container */}
  <div className="relative w-full h-[450px] md:h-[585px]">
    <img
      src={current.image || "/placeholder.svg?height=600&width=500&query=showcase"}
      alt="Showcase"
      className="w-full h-full object-cover rounded-[3rem] shadow-2xl transform transition-transform duration-500 hover:scale-105 relative z-10"
    />

    {/* Dark border frame */}
    <div className="absolute inset-0 rounded-[3rem] border-[12px] border-[#6c0505] pointer-events-none"></div>
  </div>
</div>

          </div>

          {/* Right Card */}
          <div
            className={`flex flex-col justify-between h-full transform transition-all duration-700 ${
              fadeIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="space-y-2 flex-1 flex flex-col justify-end">
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-lufga font-extrabold text-[#6c0505] mb-2 leading-tight uppercase tracking-tight">
                  {current.rightTitle}
                </h3>
                <p className="text-xs md:text-sm text-[#6c0505] font-lufga font-regular leading-relaxed">
                  {current.rightDescription}
                </p>
              </div>

              <div className="group relative cursor-pointer" onClick={() => window.open(current.rightStatText, '_blank', 'noopener,noreferrer')}>
                <div className="bg-[#ff5c5c] rounded-[1.75rem] p-5 md:p-6 text-white relative overflow-visible shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  {/* Top decorative shape */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#ff5c5c] rounded-full opacity-40"></div>
                  
                  {/* Bottom decorative shape */}
                  <div className="absolute -bottom-5 right-5 w-10 h-10 bg-[#ff5c5c] rounded-full opacity-30"></div>

                  <div className="relative z-10">
                    <div className="text-2xl md:text-3xl font-lufga font-extrabold mb-2 tracking-tight">
                      {current.rightStatNumber}
                    </div>
                    {/* <div className="text-xs md:text-sm font-lufga font-medium leading-relaxed">{current.rightStatText}</div> */}
                  </div>

                  <div className="absolute top-5 right-5 bg-white bg-opacity-25 p-2.5 rounded-full transform group-hover:rotate-45 transition-all duration-300">
                    <ArrowRight size={18} className="text-white" strokeWidth={3} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        {/* <div className="flex flex-col items-center gap-8 mt-16">
          <div className="flex justify-center gap-6">
            <button
              onClick={handlePrev}
              className="p-4 rounded-full bg-[#6c0505] text-white hover:bg-gray-800 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl"
              aria-label="Previous slide"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={handleNext}
              className="p-4 rounded-full bg-[#6c0505] text-white hover:bg-gray-800 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl"
              aria-label="Next slide"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          <div className="flex justify-center gap-3">
            {allSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#6c0505] w-10 h-3"
                    : "bg-[#6c0505] bg-opacity-30 w-3 h-3 hover:bg-opacity-50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}