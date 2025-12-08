// "use client"

// import { useEffect, useRef } from "react"

// interface ContactCTAProps {
//   scrollY: number
// }

// export default function ContactCTA({ scrollY }: ContactCTAProps) {
//   const containerRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && containerRef.current) {
//           containerRef.current.classList.add("opacity-100", "scale-100")
//         }
//       },
//       { threshold: 0.3 },
//     )

//     if (containerRef.current) observer.observe(containerRef.current)
//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section className="bg-fanatisch-dark py-20 px-4 md:px-8 lg:px-16">
//       <div ref={containerRef} className="max-w-4xl mx-auto opacity-0 scale-95 transition-all duration-700">
//         {/* CTA Container - Dark Rounded Box */}
//         <div className="bg-gradient-to-br from-fanatisch-dark to-black rounded-4xl p-12 md:p-16 lg:p-20 text-center border border-gray-800">
//           {/* Main Heading - Mixed Colors */}
//           <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-8">
//             Ready to partner with <span className="text-fanatisch-yellow">Fanatisch</span> & Unlock the{" "}
//             <span className="text-fanatisch-red">Real Potential</span>?
//           </h2>

//           {/* Subtitle */}
//           <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
//             Let's transform your vision into measurable impact through proven strategies and dedicated partnership.
//           </p>

//           {/* CTA Button */}
//           <button className="bg-white hover:bg-gray-100 text-fanatisch-dark font-bold py-4 px-8 md:py-5 md:px-12 rounded-full transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 text-lg">
//             Get In Touch
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }


// "use client"

// import { useEffect, useRef } from "react"

// interface ContactCTAProps {
//   scrollY: number
// }

// export default function ContactCTA({ scrollY }: ContactCTAProps) {
//   const containerRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && containerRef.current) {
//           containerRef.current.classList.add("opacity-100", "scale-100")
//         }
//       },
//       { threshold: 0.3 },
//     )

//     if (containerRef.current) observer.observe(containerRef.current)
//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section className="bg-[#f2cb05] py-20 px-4 md:px-8 lg:px-16">
//       <div ref={containerRef} className="max-w-6xl mx-auto opacity-0 scale-95 transition-all duration-700">
//         {/* CTA Container - Dark Rounded Box */}
//         <div className="bg-gradient-to-br from-[#4744a6] to-black rounded-4xl p-12 md:p-16 lg:p-20 text-center border border-gray-800">
//           {/* Main Heading - Mixed Colors */}
//           <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-8">
//             Ready to partner with <span className="text-[#f2cb05]">Fanatisch</span> & Unlock the{" "}
//             <span className="text-[#f12d3d]">Real Potential</span>?
//           </h2>

//           {/* Subtitle */}
//           <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
//             Let's transform your vision into measurable impact through proven strategies and dedicated partnership.
//           </p>

//           {/* CTA Button */}
//           <button className="bg-white hover:bg-gray-100 text-[#0e0f26] font-bold py-4 px-8 md:py-5 md:px-12 rounded-full transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 text-lg">
//             Get In Touch
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//             </svg>
//           </button>
//         </div>
//         <div
//         className="absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-white"
//         style={{
//           width: "10%",
//           aspectRatio: "2",
//           WebkitMask:
//             "url('https://framerusercontent.com/images/hu1eUWnLUAIjJFEcHS6XHGyNUQ.svg?width=180&height=90') center / cover no-repeat",
//           mask: "url('https://framerusercontent.com/images/hu1eUWnLUAIjJFEcHS6XHGyNUQ.svg?width=180&height=90') center / cover no-repeat",
//         }}
//       />
//       </div>

//     </section>
//   )
// }

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
      { threshold: 0.3 }
    )

    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className=" bg-[#f2cb05]">

      <div
        ref={containerRef}
        className="relative mx-auto max-w-6xl px-6 py-20 opacity-0 scale-95 transition-all duration-700 bg-[#f2cb05]"
      >
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


        {/* CTA Container */}
        <div className="relative overflow-visible rounded-[3rem] bg-[#0a1628] px-8 py-16 text-center md:px-16 border border-[#1f2a3c] shadow-2xl bg-[#4744a6]">


          {/* Top Left Shape */}
          <div className="absolute -top-16 -left-16 w-40 h-40 bg-[#f12d3d] rounded-[2rem] rotate-45" />

          {/* Top Right Shape */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#f12d3d] rounded-[2rem] -rotate-12" />

          {/* Heading */}
          <h2 className="relative z-10 mb-6 text-4xl font-lufga font-bold leading-tight md:text-5xl lg:text-6xl">
            <span className="text-white">Ready to partner with </span>
            <span className="text-purple-400">Fanatisch</span>
            <span className="text-white"> & Unlock the </span>
            <span className="relative inline-block">
              <span className="text-orange-400">Real</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-orange-400 rounded-full"></span>
            </span>
            <span className="text-white"> Potential?</span>
          </h2>
          <br />

          {/* Subtitle */}
          {/* <p className="relative z-10 mx-auto mb-8 max-w-2xl text-lg font-lufga font-regular text-gray-300 md:text-xl">
            Let's transform your vision into measurable impact through proven
            strategies and dedicated partnership.
          </p> */}

          {/* Button */}
          <button className="group relative inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-lufga font-semibold text-[#0a1628] transition-all hover:bg-gray-100 hover:scale-105">
            Get In Touch
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section >
  )
}
