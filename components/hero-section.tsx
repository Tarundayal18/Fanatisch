// "use client"

// import { useRef } from "react"

// interface HeroSectionProps {
//   scrollY: number
// }

// export default function HeroSection({ scrollY }: HeroSectionProps) {
//   const containerRef = useRef<HTMLDivElement>(null)

//   return (
//     <section
//       ref={containerRef}
//       className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-fanatisch-dark"
//     >
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-fanatisch-blue/10 blur-3xl animate-pulse" />
//         <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-fanatisch-red/10 blur-3xl animate-pulse delay-700" />
//         <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-fanatisch-yellow/5 blur-2xl animate-pulse delay-1000" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
//         <div className="space-y-8">
//           {/* Main headline with mixed colors and gradient - EXACT REVENTO STYLE */}
//           <div className="space-y-6 relative">
//             <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-tight">
//               <span className="block text-white">Scale Your</span>
//               <span className="block">
//                 <span className="text-fanatisch-blue">Brand</span>
//                 <span className="text-white"> </span>
//                 <span className="text-fanatisch-yellow">Globally</span>
//               </span>
//               <span className="block">
//                 <span className="text-white">With </span>
//                 <span className="text-fanatisch-red">Precision</span>
//               </span>
//             </h1>
//           </div>

//           {/* Subtitle */}
//           <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
//             Experience growth through innovative strategies, rapid execution, and unwavering founder partnership.
//           </p>

//           {/* CTA Button */}
//           <div className="pt-4">
//             <button className="relative group px-8 py-4 bg-white text-fanatisch-dark font-bold rounded-full text-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-white/50">
//               Get In Touch
//               <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 blur transition-opacity" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Top left - plus symbol */}
//       <div
//         className="absolute top-32 left-12 text-fanatisch-yellow text-5xl font-light opacity-70 animate-float"
//         style={{ animationDelay: "0s" }}
//       >
//         +
//       </div>

//       {/* Top right - heart symbol */}
//       <div
//         className="absolute top-40 right-20 text-fanatisch-red text-4xl opacity-70 animate-float"
//         style={{ animationDelay: "1s" }}
//       >
//         ♥
//       </div>

//       {/* Left side - star */}
//       <div
//         className="absolute top-1/2 left-8 text-fanatisch-yellow text-5xl opacity-60 animate-float"
//         style={{ animationDelay: "0.5s" }}
//       >
//         ★
//       </div>

//       {/* Right side - star */}
//       <div
//         className="absolute top-2/3 right-12 text-gray-300 text-4xl opacity-50 animate-float"
//         style={{ animationDelay: "1.5s" }}
//       >
//         ★
//       </div>

//       {/* Bottom left - rounded square */}
//       <div
//         className="absolute bottom-40 left-1/4 w-8 h-8 border-2 border-fanatisch-blue rounded-lg opacity-60 animate-float"
//         style={{ animationDelay: "0.7s" }}
//       />

//       {/* Center floating circle with glow */}
//       <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-fanatisch-yellow/20 border-2 border-fanatisch-yellow blur-sm opacity-50 animate-pulse" />



//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(5deg); }
//         }
//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//         }
//         .delay-700 {
//           animation-delay: 700ms;
//         }
//         .delay-1000 {
//           animation-delay: 1000ms;
//         }
//       `}</style>
//     </section>
//   )
// }

"use client"

import { useRef } from "react"
import Image from "next/image"

interface HeroSectionProps {
  scrollY: number
}

export default function HeroSection({ scrollY }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-fanatisch-dark"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-fanatisch-blue/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-fanatisch-red/10 blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-fanatisch-yellow/5 blur-2xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="space-y-8">

          {/* ⭐ Top Center Logo */}
          <div className="w-full flex justify-center mb-4">
            <div className="relative w-38 h-38">
              <Image
                src="/Logo/mainlogo.png"
                alt="Main Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="space-y-6 relative">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-tight">
              <span className="block text-white">TRANSFORMING </span>
              <span className="text-fanatisch-blue">VISION INTO</span>
              <span className="text-fanatisch-red"> REVENUE</span>
              <br />
              <span className="text-fanatisch-yellow">EFFECTIVELY</span>
              <span className="block"></span>
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Experience growth through innovative strategies, rapid execution, and unwavering founder partnership.
          </p>

          <div className="pt-4 mb-[100px]">
            <button className="relative group px-8 py-4 bg-white text-fanatisch-dark font-bold rounded-full text-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-white/50">
              Get In Touch
              <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 blur transition-opacity" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating symbols */}
      <div
        className="false absolute top-32 left-12 text-fanatisch-yellow text-5xl font-light opacity-70 animate-float"
        style={{ animationDelay: "0s" }}
      >
        +
      </div>
      <div
        className="absolute top-40 right-20 text-fanatisch-red text-4xl opacity-70 animate-float"
        style={{ animationDelay: "1s" }}
      >
        ♥
      </div>
      <div
        className="absolute top-1/2 left-8 text-fanatisch-yellow text-5xl opacity-60 animate-float"
        style={{ animationDelay: "0.5s" }}
      >
        ★
      </div>
      <div
        className="absolute top-2/3 right-12 text-gray-300 text-4xl opacity-50 animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        ★
      </div>
      <div
        className="absolute bottom-40 left-1/4 w-8 h-8 border-2 border-fanatisch-blue rounded-lg opacity-60 animate-float"
        style={{ animationDelay: "0.7s" }}
      />
      <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-fanatisch-yellow/20 border-2 border-fanatisch-yellow blur-sm opacity-50 animate-pulse" />

      {/* ⬇️ Bottom Center Framer Shape */}
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
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
