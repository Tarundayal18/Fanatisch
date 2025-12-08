

// "use client"

// import { useEffect, useRef, useState } from "react"

// interface OurBrandsProps {
//   scrollY?: number
// }

// const brands = [
//   {
//     name: "ZapMenus",
//     description: "Smart menu systems for restaurants",
//     color: "from-yellow-400 to-orange-500",
//     bgColor: "bg-yellow-400",
//     rgb: "234, 179, 8",
//   },
//   {
//     name: "Basil",
//     description: "Retail-first inventory, POS & commerce engine",
//     color: "from-blue-600 to-cyan-500",
//     bgColor: "bg-blue-600",
//     rgb: "37, 99, 235",
//   },
//   {
//     name: "FdMS",
//     description: "Fanatisch digital Marketing Services",
//     color: "from-red-500 to-pink-500",
//     bgColor: "bg-red-500",
//     rgb: "239, 68, 68",
//   },
//   {
//     name: "BlueBerrie",
//     description: "A Consortium of Consultants",
//     color: "from-purple-600 to-purple-400",
//     bgColor: "bg-purple-600",
//     rgb: "147, 51, 234",
//   },
// ]

// export default function OurBrands({ scrollY }: OurBrandsProps) {
//   const [isVisible, setIsVisible] = useState(false)
//   const containerRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//         }
//       },
//       { threshold: 0.2 },
//     )

//     if (containerRef.current) {
//       observer.observe(containerRef.current)
//     }

//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section ref={containerRef} className="relative py-12 sm:py-20 lg:py-28 px-4 sm:px-6 bg-[#f2cb05]">
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-yellow-400/5 rounded-full blur-3xl" />
//         <div className="absolute bottom-1/4 left-1/3 w-64 h-64 sm:w-96 sm:h-96 bg-blue-600/5 rounded-full blur-3xl" />
//       </div>

//       {/* ⬆️ Top Center Framer Shape */}
// <div
//   className="absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-white rotate-180"
//   style={{
//     width: "10%",
//     aspectRatio: "2",
//     WebkitMask:
//       "url('https://framerusercontent.com/images/hu1eUWnLUAIjJFEcHS6XHGyNUQ.svg?width=180&height=90') center / cover no-repeat",
//     mask: "url('https://framerusercontent.com/images/hu1eUWnLUAIjJFEcHS6XHGyNUQ.svg?width=180&height=90') center / cover no-repeat",
//   }}
// />


//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Section header */}
//         <div className="text-center mb-10 sm:mb-16 lg:mb-20">
//           <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#0e0f26] mb-3 sm:mb-4">
//             Our <span className="text-[#4744a6]">Brands</span>
//           </h2>
//           <p className="text-[#0e0f26] text-base sm:text-lg max-w-2xl mx-auto px-4">
//             Diverse solutions powering businesses across industries
//           </p>
//         </div>

//         {/* Mobile Layout - Vertical Stack with Cross Lines */}
//         <div className="block md:hidden">
//           <div className="relative w-full px-2">
//             {/* Top Row - 2 cards */}
//             <div className="flex justify-center gap-3 mb-8">
//               {brands.slice(0, 2).map((brand, index) => (
//                 <div
//                   key={index}
//                   className={`transition-all duration-500 ${
//                     isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
//                   }`}
//                   style={{ transitionDelay: `${index * 150}ms` }}
//                 >
//                   <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/70 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5 w-[160px] hover:border-gray-600 transition-all duration-300">
//                     <div className="flex justify-center mb-3">
//                       <div
//                         className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${brand.color} flex items-center justify-center text-white font-black text-2xl shadow-lg`}
//                         style={{
//                           boxShadow: `0 0 25px rgba(${brand.rgb}, 0.4)`,
//                         }}
//                       >
//                         {brand.name[0]}
//                       </div>
//                     </div>
//                     <h3 className="text-base font-bold text-white text-center mb-2">{brand.name}</h3>
//                     <p className="text-xs text-gray-400 text-center leading-relaxed">{brand.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Center Circle with Lines */}
//             <div className="relative flex justify-center my-8">
//               {/* Horizontal line */}
//               <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent -translate-y-1/2" />
//               {/* Vertical line */}
//               <div
//                 className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-gradient-to-b from-transparent via-blue-600/40 to-transparent -translate-x-1/2"
//                 style={{ height: "200px", top: "-100px" }}
//               />

//               <div
//                 className={`relative z-20 transition-all duration-700 ${
//                   isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
//                 }`}
//               >
//                 <div className="absolute inset-0 w-28 h-28 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full bg-gradient-to-br from-blue-600/20 to-yellow-400/20 blur-2xl animate-pulse" />

//                 <div
//                   className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-yellow-400 flex items-center justify-center text-white shadow-2xl"
//                   style={{
//                     boxShadow:
//                       "0 0 50px rgba(37, 99, 235, 0.6), 0 0 100px rgba(234, 179, 8, 0.3), inset 0 0 30px rgba(255,255,255,0.1)",
//                   }}
//                 >
//                   <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path
//                       d="M13 5l7 7-7 7M5 5l7 7-7 7"
//                       stroke="currentColor"
//                       strokeWidth="2.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             {/* Bottom Row - 2 cards */}
//             <div className="flex justify-center gap-3 mt-8">
//               {brands.slice(2, 4).map((brand, index) => (
//                 <div
//                   key={index + 2}
//                   className={`transition-all duration-500 ${
//                     isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
//                   }`}
//                   style={{ transitionDelay: `${(index + 2) * 150}ms` }}
//                 >
//                   <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/70 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5 w-[160px] hover:border-gray-600 transition-all duration-300">
//                     <div className="flex justify-center mb-3">
//                       <div
//                         className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${brand.color} flex items-center justify-center text-white font-black text-2xl shadow-lg`}
//                         style={{
//                           boxShadow: `0 0 25px rgba(${brand.rgb}, 0.4)`,
//                         }}
//                       >
//                         {brand.name[0]}
//                       </div>
//                     </div>
//                     <h3 className="text-base font-bold text-white text-center mb-2">{brand.name}</h3>
//                     <p className="text-xs text-gray-400 text-center leading-relaxed">{brand.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Tablet/Desktop Layout - Cross Pattern */}
//         <div className="hidden md:block relative w-full h-[600px] lg:h-[700px]">
//           {/* SVG Connecting lines */}
//           <svg
//             className="absolute inset-0 w-full h-full"
//             viewBox="0 0 1000 800"
//             preserveAspectRatio="xMidYMid meet"
//             style={{ pointerEvents: "none" }}
//           >
//             <line x1="150" y1="400" x2="850" y2="400" stroke="#eab308" strokeWidth="2" opacity="0.4" />
//             <line x1="500" y1="120" x2="500" y2="680" stroke="#2563eb" strokeWidth="2" opacity="0.4" />
//           </svg>

//           {/* Center glowing circle */}
//           <div
//             className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-700 ${
//               isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
//             }`}
//           >
//             <div className="absolute inset-0 w-32 h-32 lg:w-40 lg:h-40 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full bg-gradient-to-br from-blue-600/20 to-yellow-400/20 blur-2xl animate-pulse" />

//             <div
//               className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-yellow-400 flex items-center justify-center text-white shadow-2xl"
//               style={{
//                 boxShadow: isVisible
//                   ? "0 0 50px rgba(37, 99, 235, 0.6), 0 0 100px rgba(234, 179, 8, 0.3), inset 0 0 30px rgba(255,255,255,0.1)"
//                   : "none",
//               }}
//             >
//               <svg
//                 className="w-10 h-10 lg:w-12 lg:h-12"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M13 5l7 7-7 7M5 5l7 7-7 7"
//                   stroke="currentColor"
//                   strokeWidth="2.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </div>
//           </div>

//           {/* Brand cards in 4 positions */}
//           {brands.map((brand, index) => {
//             const positions = [
//               "top-8 left-8 md:top-12 md:left-12 lg:top-16 lg:left-16",
//               "top-8 right-8 md:top-12 md:right-12 lg:top-16 lg:right-16",
//               "bottom-8 right-8 md:bottom-12 md:right-12 lg:bottom-16 lg:right-16",
//               "bottom-8 left-8 md:bottom-12 md:left-12 lg:bottom-16 lg:left-16",
//             ]

//             return (
//               <div
//                 key={index}
//                 className={`absolute ${positions[index]} transition-all duration-500 ${
//                   isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
//                 }`}
//                 style={{ transitionDelay: `${index * 150}ms` }}
//               >
//                 <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5 md:p-6 w-48 md:w-56 lg:w-64 hover:border-gray-600 transition-all duration-300 group">
//                   <div className="flex justify-center mb-3 md:mb-4">
//                     <div
//                       className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-gradient-to-br ${brand.color} flex items-center justify-center text-white font-black text-xl md:text-2xl shadow-lg group-hover:scale-110 transition-all duration-300`}
//                       style={{
//                         boxShadow: `0 0 20px rgba(${brand.rgb}, 0.4)`,
//                       }}
//                     >
//                       {brand.name[0]}
//                     </div>
//                   </div>

//                   <h3 className="text-base md:text-lg lg:text-xl font-bold text-white text-center mb-2 md:mb-3 group-hover:text-yellow-400 transition-colors">
//                     {brand.name}
//                   </h3>
//                   <p className="text-xs md:text-sm text-gray-400 text-center leading-relaxed group-hover:text-gray-300 transition-colors">
//                     {brand.description}
//                   </p>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }




"use client"

import { useEffect, useRef, useState } from "react"

interface Benefit {
  title: string
  description: string
  icon: string
}

const benefits: Benefit[] = [
  {
    title: "Unified Data Management",
    description: "Stop digging spreadsheets — Datacore instantly translates data into meaningful.",
    icon: "🚀",
  },
  {
    title: "Smart Data Sorting",
    description: "No more manual cleanup — our system structures raw data for fast insights.",
    icon: "⚡",
  },
  {
    title: "Instant Data Clarity",
    description: "Say goodbye to chaos — we turn complex data into organized, useful information.",
    icon: "✨",
  },
  {
    title: "One-Click Data Cleanse",
    description: "Stop wasting time — our tool makes messy spreadsheets neat and analysis-ready fast.",
    icon: "🎯",
  },
]

export default function CoreBenefits() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#f2cb05] overflow-hidden"
    >

      {/* ⬆️ Top Center Framer Shape */}
<div
  className="absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-white rotate-180"
  style={{
    width: "10%",
    aspectRatio: "2",
    WebkitMask:
      "url('https://framerusercontent.com/images/hu1eUWnLUAIjJFEcHS6XHGyNUQ.svg?width=180&height=90') center / cover no-repeat",
    mask: "url('https://framerusercontent.com/images/hu1eUWnLUAIjJFEcHS6XHGyNUQ.svg?width=180&height=90') center / cover no-repeat",
  }}
/>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5" />
        <div className="absolute top-32 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-20 w-96 h-96 bg-white/8 rounded-full blur-3xl" />
      </div>


      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-20 space-y-6">
          <div className="inline-block px-6 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/60 text-sm sm:text-base font-lufga font-semibold tracking-widest text-gray-900 uppercase shadow-lg hover:bg-white/50 transition-all duration-300">
            Core Benefits
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-lufga font-bold text-gray-900 leading-tight">
            The Value Behind the{" "}
            <span className=" bg-gradient-to-r from-blue-600 font-lufga font-regular via-purple-600 to-red-600 bg-clip-text text-transparent animate-pulse">
              Platform
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-800 max-w-2xl mx-auto leading-relaxed font-lufga font-medium">
            Easily track and manage your sales pipeline with real-time updates, visual deal stages to keep your sales
            flow seamless.
          </p>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
  <div className="space-y-20 sm:space-y-24">

    {/* Top Row */}
    <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 justify-center">
      {benefits.slice(0, 2).map((benefit, index) => (
        <BenefitCard
          key={index}
          benefit={benefit}
          index={index}
          isVisible={isVisible}
          isHovered={hoveredCard === index}
          onHover={() => setHoveredCard(index)}
          onLeave={() => setHoveredCard(null)}
        />
      ))}
    </div>

    {/* Center ICON (Updated Circle + Glow) */}
    <div className="relative flex justify-center py-8">

      <div
        className={`transition-all duration-700 ${
          isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        {/* Glow background */}
        <div
          className="
            absolute 
            -inset-4 
            w-36 h-36 
            rounded-full 
            bg-gradient-to-br 
            from-[#4744a6]/25 
            to-[#f12d3d]/25 
            blur-2xl 
            animate-pulse
          "
        />

        {/* Main circle */}
        <div
          className="
            relative 
            w-24 h-24 
            sm:w-28 sm:h-28 
            rounded-full 
            bg-gradient-to-br 
            from-[#4744a6] 
            via-[#6a5bcc] 
            to-[#f12d3d]
            flex items-center justify-center 
            text-white 
            shadow-2xl
          "
          style={{
            boxShadow: isVisible
              ? "0 0 35px rgba(71, 68, 166, 0.6), 0 0 60px rgba(241, 45, 61, 0.3), inset 0 0 20px rgba(255,255,255,0.1)"
              : "none",
          }}
        >
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

    </div>

    {/* Bottom Row */}
    <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 justify-center">
      {benefits.slice(2, 4).map((benefit, index) => (
        <BenefitCard
          key={index + 2}
          benefit={benefit}
          index={index + 2}
          isVisible={isVisible}
          isHovered={hoveredCard === index + 2}
          onHover={() => setHoveredCard(index + 2)}
          onLeave={() => setHoveredCard(null)}
        />
      ))}
    </div>

  </div>
</div>

        {/* Desktop Layout - Cross Pattern */}
        <div className="hidden lg:block relative h-[850px]">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1000 800"
            preserveAspectRatio="xMidYMid meet"
            style={{ pointerEvents: "none" }}
          >
            {/* Horizontal line */}
            <line
              x1="150"
              y1="400"
              x2="850"
              y2="400"
              stroke="#f12d3d"
              strokeWidth="2"
              opacity="0.4"
            />

            {/* Vertical line */}
            <line
              x1="500"
              y1="120"
              x2="500"
              y2="680"
              stroke="#4744a6"
              strokeWidth="2"
              opacity="0.4"
            />
          </svg>


          {/* Center glowing circle */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-700 ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
          >
            {/* Glow background */}
            <div
              className="absolute inset-0 w-32 h-32 lg:w-40 lg:h-40 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full bg-gradient-to-br from-[#4744a6]/20 to-[#f12d3d]/20 blur-2xl animate-pulse"
            />

            {/* Main circle */}
            <div
              className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-[#4744a6] via-[#6a5bcc] to-[#f12d3d] flex items-center justify-center text-white shadow-2xl"
              style={{
                boxShadow: isVisible
                  ? "0 0 50px rgba(71, 68, 166, 0.6), 0 0 100px rgba(241, 45, 61, 0.3), inset 0 0 30px rgba(255,255,255,0.1)"
                  : "none",
              }}
            >
              <svg
                className="w-10 h-10 lg:w-12 lg:h-12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>


          {/* Benefit Cards - 4 Corners with improved spacing */}
          <div className="absolute top-0 left-0 pl-4 pt-4">
            <BenefitCard
              benefit={benefits[0]}
              index={0}
              isVisible={isVisible}
              isHovered={hoveredCard === 0}
              onHover={() => setHoveredCard(0)}
              onLeave={() => setHoveredCard(null)}
            />
          </div>
          <div className="absolute top-0 right-0 pr-4 pt-4">
            <BenefitCard
              benefit={benefits[1]}
              index={1}
              isVisible={isVisible}
              isHovered={hoveredCard === 1}
              onHover={() => setHoveredCard(1)}
              onLeave={() => setHoveredCard(null)}
            />
          </div>
          <div className="absolute bottom-0 right-0 pr-4 pb-4">
            <BenefitCard
              benefit={benefits[3]}
              index={3}
              isVisible={isVisible}
              isHovered={hoveredCard === 3}
              onHover={() => setHoveredCard(3)}
              onLeave={() => setHoveredCard(null)}
            />
          </div>
          <div className="absolute bottom-0 left-0 pl-4 pb-4">
            <BenefitCard
              benefit={benefits[2]}
              index={2}
              isVisible={isVisible}
              isHovered={hoveredCard === 2}
              onHover={() => setHoveredCard(2)}
              onLeave={() => setHoveredCard(null)}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes glow-pulse {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(71, 68, 166, 0.6)); }
          50% { filter: drop-shadow(0 0 40px rgba(71, 68, 166, 1)); }
        }
      `}</style>
    </section>
  )
}

function CenterIcon({ isVisible }: { isVisible: boolean }) {
  return (
    <div className={`transition-all duration-700 ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
      <div className="absolute inset-0 w-48 h-48 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/40 via-red-500/40 to-blue-600/40 blur-3xl"
          style={{
            animation: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
        />
        <div
          className="absolute inset-4 rounded-full border border-blue-600/50 blur-md"
          style={{
            animation: "spin 15s linear infinite",
          }}
        />
      </div>

      <div
        className="absolute w-32 h-32 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-600 via-red-500 to-blue-600 bg-clip-border"
        style={{
          animation: "spin 20s linear infinite reverse",
        }}
      />

      <div
        className="absolute w-28 h-28 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500/50"
        style={{
          animation: "spin 12s linear infinite reverse",
        }}
      />

      <div
        className="relative w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 via-red-500 to-blue-600 flex items-center justify-center shadow-2xl"
        style={{
          boxShadow:
            "0 0 80px rgba(217, 119, 6, 1), 0 0 160px rgba(180, 83, 9, 0.6), inset 0 0 40px rgba(255,255,255,0.25)",
          animation: "pulse 3s ease-in-out infinite",
        }}
      >
        <svg className="w-14 h-14 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 5v14m-7-7h14"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

interface BenefitCardProps {
  benefit: Benefit
  index: number
  isVisible: boolean
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}

function BenefitCard({ benefit, index, isVisible, isHovered, onHover, onLeave }: BenefitCardProps) {
  const [isCardHovered, setIsCardHovered] = useState(false)

  return (
    <div
      className={`transition-all duration-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
      onMouseEnter={() => {
        setIsCardHovered(true)
        onHover()
      }}
      onMouseLeave={() => {
        setIsCardHovered(false)
        onLeave()
      }}
    >
      <div className="group relative bg-white backdrop-blur-xl border-2 border-blue-600/20 rounded-3xl p-8 w-full sm:w-96 hover:border-blue-600/50 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-600/30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-white/0 to-red-50/0 group-hover:from-blue-50/40 group-hover:via-white/30 group-hover:to-red-50/40 transition-all duration-500 rounded-3xl" />

        {isCardHovered && (
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/15 to-red-400/15 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        )}

        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-500 to-red-500 text-3xl shadow-lg group-hover:scale-125 group-hover:shadow-xl group-hover:shadow-blue-600/50 transition-all duration-300 group-hover:rotate-12">
            {benefit.icon}
          </div>

          <h3 className="text-2xl sm:text-2xl font-lufga font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-red-600 transition-all duration-300 leading-tight">
            {benefit.title}
          </h3>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 font-lufga font-medium">
            {benefit.description}
          </p>

          <div className="pt-4 border-t border-blue-600/20 group-hover:border-red-500/50 transition-colors duration-300">
            <div className="flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 font-lufga font-semibold">
              <span className="text-sm">Learn More</span>
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
