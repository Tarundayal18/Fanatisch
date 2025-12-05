// "use client"

// import { useEffect, useRef, useState } from "react"

// interface OurBrandsProps {
//   scrollY: number
// }

// const brands = [
//   {
//     name: "ZapMenus",
//     description: "Smart menu systems for restaurants",
//     color: "from-fanatisch-yellow to-orange-500",
//     bgColor: "bg-fanatisch-yellow",
//   },
//   {
//     name: "Basil",
//     description: "Retail-first inventory, POS & commerce engine",
//     color: "from-fanatisch-blue to-cyan-500",
//     bgColor: "bg-fanatisch-blue",
//   },
//   {
//     name: "FdMS",
//     description: "Fanatisch digital Marketing Services",
//     color: "from-fanatisch-red to-pink-500",
//     bgColor: "bg-fanatisch-red",
//   },
//   {
//     name: "BlueBerrie",
//     description: "A Consortium of Consultants",
//     color: "from-purple-600 to-purple-400",
//     bgColor: "bg-purple-600",
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
//     <section ref={containerRef} className="relative py-20 sm:py-28 px-4 sm:px-6 bg-fanatisch-dark">
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-fanatisch-yellow/5 rounded-full blur-3xl" />
//         <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-fanatisch-blue/5 rounded-full blur-3xl" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Section header */}
//         <div className="text-center mb-16 sm:mb-20">
//           <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
//             Our <span className="text-fanatisch-yellow">Brands</span>
//           </h2>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Diverse solutions powering businesses across industries
//           </p>
//         </div>

//         <div className="relative w-full h-screen lg:h-auto lg:min-h-96 flex items-center justify-center">
//           {/* SVG Connecting lines - EXACT CROSS PATTERN */}
//           <svg
//             className="absolute inset-0 w-full h-full"
//             viewBox="0 0 1000 800"
//             preserveAspectRatio="xMidYMid meet"
//             style={{ pointerEvents: "none" }}
//           >
//             {/* Horizontal line */}
//             <line x1="100" y1="400" x2="900" y2="400" stroke="#f2cb05" strokeWidth="2" opacity="0.4" />
//             {/* Vertical line */}
//             <line x1="500" y1="100" x2="500" y2="700" stroke="#4744a6" strokeWidth="2" opacity="0.4" />
//           </svg>

//           {/* Center glowing circle */}
//           <div
//             className={`absolute z-20 w-32 h-32 rounded-full bg-gradient-to-br from-fanatisch-blue to-fanatisch-yellow flex items-center justify-center text-white font-black text-center transition-all duration-700 shadow-2xl ${
//               isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
//             }`}
//             style={{
//               boxShadow: isVisible ? "0 0 60px rgba(71, 68, 166, 0.6), 0 0 120px rgba(242, 203, 5, 0.3)" : "none",
//             }}
//           >
//             <div className="text-2xl">✦</div>
//           </div>

//           {/* Brand cards in 4 positions - top-left, top-right, bottom-right, bottom-left */}
//           {brands.map((brand, index) => {
//             const positions = [
//               "top-0 left-0 lg:top-24 lg:left-20", // top-left
//               "top-0 right-0 lg:top-24 lg:right-20", // top-right
//               "bottom-0 right-0 lg:bottom-24 lg:right-20", // bottom-right
//               "bottom-0 left-0 lg:bottom-24 lg:left-20", // bottom-left
//             ]

//             return (
//               <div
//                 key={index}
//                 className={`absolute ${positions[index]} p-6 lg:p-8 w-32 lg:w-48 transition-all duration-500 group ${
//                   isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
//                 }`}
//                 style={{ transitionDelay: `${index * 150}ms` }}
//               >
//                 {/* Brand icon with glow */}
//                 <div
//                   className={`mb-4 w-20 h-20 lg:w-24 lg:h-24 mx-auto rounded-3xl bg-gradient-to-br ${brand.color} flex items-center justify-center text-white font-black text-xl lg:text-2xl shadow-xl group-hover:scale-110 transition-all duration-300`}
//                   style={{
//                     boxShadow: `0 0 30px rgba(${
//                       brand.bgColor === "bg-fanatisch-yellow"
//                         ? "242, 203, 5"
//                         : brand.bgColor === "bg-fanatisch-blue"
//                           ? "71, 68, 166"
//                           : brand.bgColor === "bg-fanatisch-red"
//                             ? "241, 45, 61"
//                             : "147, 51, 234"
//                     }, 0.4)`,
//                   }}
//                 >
//                   {brand.name[0]}
//                 </div>

//                 {/* Brand name and description */}
//                 <h3 className="text-base lg:text-lg font-bold text-white text-center mb-2 group-hover:text-fanatisch-yellow transition-colors">
//                   {brand.name}
//                 </h3>
//                 <p className="text-xs lg:text-sm text-gray-300 text-center group-hover:text-gray-200 transition-colors">
//                   {brand.description}
//                 </p>
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

interface OurBrandsProps {
  scrollY?: number
}

const brands = [
  {
    name: "ZapMenus",
    description: "Smart menu systems for restaurants",
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-yellow-400",
    rgb: "234, 179, 8"
  },
  {
    name: "Basil",
    description: "Retail-first inventory, POS & commerce engine",
    color: "from-blue-600 to-cyan-500",
    bgColor: "bg-blue-600",
    rgb: "37, 99, 235"
  },
  {
    name: "FdMS",
    description: "Fanatisch digital Marketing Services",
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-500",
    rgb: "239, 68, 68"
  },
  {
    name: "BlueBerrie",
    description: "A Consortium of Consultants",
    color: "from-purple-600 to-purple-400",
    bgColor: "bg-purple-600",
    rgb: "147, 51, 234"
  },
]

export default function OurBrands({ scrollY }: OurBrandsProps) {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

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

  return (
    <section ref={containerRef} className="relative py-12 sm:py-20 lg:py-28 px-4 sm:px-6 bg-gradient-to-b from-[#0a0a1f] to-[#050510]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-yellow-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 sm:w-96 sm:h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-3 sm:mb-4">
            Our <span className="text-yellow-400">Brands</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Diverse solutions powering businesses across industries
          </p>
        </div>

        {/* Mobile Layout - Vertical Stack with Cross Lines */}
        <div className="block md:hidden">
          <div className="relative w-full px-2">
            {/* Top Row - 2 cards */}
            <div className="flex justify-center gap-3 mb-8">
              {brands.slice(0, 2).map((brand, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/70 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5 w-[160px] hover:border-gray-600 transition-all duration-300">
                    <div className="flex justify-center mb-3">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${brand.color} flex items-center justify-center text-white font-black text-2xl shadow-lg`}
                        style={{
                          boxShadow: `0 0 25px rgba(${brand.rgb}, 0.4)`,
                        }}
                      >
                        {brand.name[0]}
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-white text-center mb-2">
                      {brand.name}
                    </h3>
                    <p className="text-xs text-gray-400 text-center leading-relaxed">
                      {brand.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Circle with Lines */}
            <div className="relative flex justify-center my-8">
              {/* Horizontal line */}
              <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent -translate-y-1/2" />
              {/* Vertical line */}
              <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-gradient-to-b from-transparent via-blue-600/40 to-transparent -translate-x-1/2" style={{ height: '200px', top: '-100px' }} />
              
              <div
                className={`relative z-20 transition-all duration-700 ${
                  isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
              >
                <div className="absolute inset-0 w-28 h-28 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full bg-gradient-to-br from-blue-600/20 to-yellow-400/20 blur-2xl animate-pulse" />
                
                <div
                  className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-yellow-400 flex items-center justify-center text-white shadow-2xl"
                  style={{
                    boxShadow: "0 0 50px rgba(37, 99, 235, 0.6), 0 0 100px rgba(234, 179, 8, 0.3), inset 0 0 30px rgba(255,255,255,0.1)",
                  }}
                >
                  <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

            {/* Bottom Row - 2 cards */}
            <div className="flex justify-center gap-3 mt-8">
              {brands.slice(2, 4).map((brand, index) => (
                <div
                  key={index + 2}
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                  style={{ transitionDelay: `${(index + 2) * 150}ms` }}
                >
                  <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/70 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5 w-[160px] hover:border-gray-600 transition-all duration-300">
                    <div className="flex justify-center mb-3">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${brand.color} flex items-center justify-center text-white font-black text-2xl shadow-lg`}
                        style={{
                          boxShadow: `0 0 25px rgba(${brand.rgb}, 0.4)`,
                        }}
                      >
                        {brand.name[0]}
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-white text-center mb-2">
                      {brand.name}
                    </h3>
                    <p className="text-xs text-gray-400 text-center leading-relaxed">
                      {brand.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tablet/Desktop Layout - Cross Pattern */}
        <div className="hidden md:block relative w-full h-[600px] lg:h-[700px]">
          {/* SVG Connecting lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1000 800"
            preserveAspectRatio="xMidYMid meet"
            style={{ pointerEvents: "none" }}
          >
            <line x1="150" y1="400" x2="850" y2="400" stroke="#eab308" strokeWidth="2" opacity="0.4" />
            <line x1="500" y1="120" x2="500" y2="680" stroke="#2563eb" strokeWidth="2" opacity="0.4" />
          </svg>

          {/* Center glowing circle */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-700 ${
              isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
          >
            <div className="absolute inset-0 w-32 h-32 lg:w-40 lg:h-40 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full bg-gradient-to-br from-blue-600/20 to-yellow-400/20 blur-2xl animate-pulse" />
            
            <div
              className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-yellow-400 flex items-center justify-center text-white shadow-2xl"
              style={{
                boxShadow: isVisible
                  ? "0 0 50px rgba(37, 99, 235, 0.6), 0 0 100px rgba(234, 179, 8, 0.3), inset 0 0 30px rgba(255,255,255,0.1)"
                  : "none",
              }}
            >
              <svg className="w-10 h-10 lg:w-12 lg:h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

          {/* Brand cards in 4 positions */}
          {brands.map((brand, index) => {
            const positions = [
              "top-8 left-8 md:top-12 md:left-12 lg:top-16 lg:left-16",
              "top-8 right-8 md:top-12 md:right-12 lg:top-16 lg:right-16",
              "bottom-8 right-8 md:bottom-12 md:right-12 lg:bottom-16 lg:right-16",
              "bottom-8 left-8 md:bottom-12 md:left-12 lg:bottom-16 lg:left-16",
            ]

            return (
              <div
                key={index}
                className={`absolute ${positions[index]} transition-all duration-500 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5 md:p-6 w-48 md:w-56 lg:w-64 hover:border-gray-600 transition-all duration-300 group">
                  <div className="flex justify-center mb-3 md:mb-4">
                    <div
                      className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-gradient-to-br ${brand.color} flex items-center justify-center text-white font-black text-xl md:text-2xl shadow-lg group-hover:scale-110 transition-all duration-300`}
                      style={{
                        boxShadow: `0 0 20px rgba(${brand.rgb}, 0.4)`,
                      }}
                    >
                      {brand.name[0]}
                    </div>
                  </div>

                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-white text-center mb-2 md:mb-3 group-hover:text-yellow-400 transition-colors">
                    {brand.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-400 text-center leading-relaxed group-hover:text-gray-300 transition-colors">
                    {brand.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}