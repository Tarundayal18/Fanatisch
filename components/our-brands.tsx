

// "use client"

// import { useEffect, useRef, useState } from "react"
// import Image from "next/image"

// interface Benefit {
//   title: string
//   description: string
//   icon: string
//   link: string
//   comingSoon?: boolean
// }


// const benefits: Benefit[] = [
//   {
//     title: "ZapMenus",
//     description: "Smart QR based menu and customer management systems",
//     icon: "/zapmenus.png",
//     link: "https://zapmenus.com",
//   },
//   {
//     title: "Basil",
//     description: "Retail-first inventory, POS & commerce engine",
//     icon: "/basil.png",
//     link: "https://fanatisch.vercel.app/",
//     comingSoon: true,
//   },
//   {
//     title: "FdMS",
//     description: "Fanatisch digital Marketing Services",
//     icon: "/fdms.png",
//     link: "https://www.fdms.co.in/",
//   },
//   {
//     title: "BlueBerrie",
//     description: "A Consortium of Consultants",
//     icon: "/blueberrie01.png",
//     link: "https://www.blueberrie.co.in/",
//   },
// ]

// export default function CoreBenefits() {
//   const [isVisible, setIsVisible] = useState(false)
//   const containerRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current) return
      
//       const rect = containerRef.current.getBoundingClientRect()
//       const isInViewport = rect.top < window.innerHeight && rect.bottom > 0
      
//       if (isInViewport && !isVisible) {
//         setIsVisible(true)
//       }
//     }

//     handleScroll()
//     window.addEventListener('scroll', handleScroll, { passive: true })
    
//     return () => {
//       window.removeEventListener('scroll', handleScroll)
//     }
//   }, [isVisible])

//   const handleCardClick = (benefit: Benefit) => {
//     if (benefit.comingSoon) return
//     window.open(benefit.link, "_blank", "noopener,noreferrer")
//   }

//   return (
//     <section
//       ref={containerRef}
//       className="relative w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#f2cb05] overflow-hidden"
//     >
//       {/* Top Center Shape */}
//       <div
//         className="absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-white rotate-180"
//         style={{
//           width: "10%",
//           aspectRatio: "2",
//           WebkitMask:
//             "url('https://framerusercontent.com/images/hu1eUWnLUAIjJFEcHS6XHGyNUQ.svg?width=180&height=90') center / cover no-repeat",
//           mask: "url('https://framerusercontent.com/images/hu1eUWnLUAIjJFEcHS6XHGyNUQ.svg?width=180&height=90') center / cover no-repeat",
//         }}
//       />

//       {/* Background Effects */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5" />
//       </div>

//       {/* Custom CSS for animations */}
//       <style jsx>{`
//         @keyframes gradientGlow {
//           0%, 100% {
//             box-shadow: 
//               0 0 30px rgba(59, 130, 246, 0.8),
//               0 0 60px rgba(59, 130, 246, 0.6),
//               0 0 90px rgba(59, 130, 246, 0.4),
//               0 0 120px rgba(59, 130, 246, 0.2);
//           }
//           25% {
//             box-shadow: 
//               0 0 30px rgba(147, 51, 234, 0.8),
//               0 0 60px rgba(147, 51, 234, 0.6),
//               0 0 90px rgba(147, 51, 234, 0.4),
//               0 0 120px rgba(147, 51, 234, 0.2);
//           }
//           50% {
//             box-shadow: 
//               0 0 30px rgba(239, 68, 68, 0.8),
//               0 0 60px rgba(239, 68, 68, 0.6),
//               0 0 90px rgba(239, 68, 68, 0.4),
//               0 0 120px rgba(239, 68, 68, 0.2);
//           }
//           75% {
//             box-shadow: 
//               0 0 30px rgba(147, 51, 234, 0.8),
//               0 0 60px rgba(147, 51, 234, 0.6),
//               0 0 90px rgba(147, 51, 234, 0.4),
//               0 0 120px rgba(147, 51, 234, 0.2);
//           }
//         }
        
//         .gradient-glow-circle {
//           animation: gradientGlow 4s ease-in-out infinite;
//           background: white;
//         }
//       `}</style>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-8 sm:mb-12 lg:mb-20 space-y-6">
//           <div className="inline-block px-6 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/60 text-sm sm:text-base font-lufga font-semibold tracking-widest text-[#6c0505] uppercase shadow-lg">
//             Core Benefits
//           </div>
//           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-lufga font-bold text-[#6c0505] leading-tight">
//             The Value Behind the{" "}
//             <span className="bg-gradient-to-r from-blue-600 font-lufga font-regular via-purple-600 to-red-600 bg-clip-text text-transparent">
//               Platform
//             </span>
//           </h2>
//           <p className="text-base sm:text-lg text-[#070756] max-w-2xl mx-auto leading-relaxed font-lufga font-medium">
//             Easily track and manage your sales pipeline with real-time updates, visual deal stages to keep your sales
//             flow seamless.
//           </p>
//         </div>

//         {/* Mobile Layout */}
//         <div className="lg:hidden">
//           <div className="space-y-20 sm:space-y-24">
//             {/* Top Row */}
//             <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 justify-center">
//               {benefits.slice(0, 2).map((benefit, index) => (
//                 <div
//                   key={benefit.title}
//                   className={`transition-all duration-700 transform ${
//                     isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//                   }`}
//                   style={{ transitionDelay: `${index * 150}ms` }}
//                 >
//                   <div
//                     className={`group relative bg-white border-2 border-blue-600/20 rounded-3xl p-8 w-full sm:w-96 shadow-lg hover:border-blue-600/50 hover:shadow-2xl hover:shadow-blue-600/30 transition-all duration-300 ${
//                       !benefit.comingSoon ? "cursor-pointer active:scale-95" : "cursor-default"
//                     }`}
//                     onClick={() => handleCardClick(benefit)}
//                   >
//                     <div className="space-y-6">
//                       <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
//                         <Image
//                           src={benefit.icon || "/placeholder.svg"}
//                           alt={benefit.title}
//                           width={64}
//                           height={64}
//                           className="object-contain"
//                           priority={index < 2}
//                         />
//                       </div>

//                       <h3 className="text-2xl font-lufga font-bold text-[#6c0505] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-red-600 transition-all duration-300 leading-tight">
//                         {benefit.title}
//                       </h3>

//                       <p className="text-sm sm:text-base text-[#070756] leading-relaxed font-lufga font-medium">
//                         {benefit.description}
//                       </p>

//                       <div className="pt-4 border-t border-blue-600/20 group-hover:border-red-500/50 transition-colors duration-300">
//                         {benefit.comingSoon ? (
//                           <span className="text-sm text-gray-500 font-lufga font-semibold">Coming Soon</span>
//                         ) : (
//                           <span className="text-sm text-blue-600 font-lufga font-semibold group-hover:translate-x-1 inline-block transition-transform duration-300">
//                             Learn More →
//                           </span>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Center Icon */}
//             <div className="relative flex justify-center py-8">
//               <div
//                 className={`transition-all duration-700 transform ${
//                   isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
//                 }`}
//               >
//                 <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white flex items-center justify-center border-4 border-blue-600/20 gradient-glow-circle">
//                   <Image src="/F.png" alt="Fanatisch" width={48} height={48} className="object-contain" />
//                 </div>
//               </div>
//             </div>

//             {/* Bottom Row */}
//             <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 justify-center">
//               {benefits.slice(2, 4).map((benefit, index) => (
//                 <div
//                   key={benefit.title}
//                   className={`transition-all duration-700 transform ${
//                     isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//                   }`}
//                   style={{ transitionDelay: `${(index + 2) * 150}ms` }}
//                 >
//                   <div
//                     className={`group relative bg-white border-2 border-blue-600/20 rounded-3xl p-8 w-full sm:w-96 shadow-lg hover:border-blue-600/50 hover:shadow-2xl hover:shadow-blue-600/30 transition-all duration-300 ${
//                       !benefit.comingSoon ? "cursor-pointer active:scale-95" : "cursor-default"
//                     }`}
//                     onClick={() => handleCardClick(benefit)}
//                   >
//                     <div className="space-y-6">
//                       <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
//                         <Image
//                           src={benefit.icon || "/placeholder.svg"}
//                           alt={benefit.title}
//                           width={64}
//                           height={64}
//                           className="object-contain"
//                           priority={index < 2}
//                         />
//                       </div>

//                       <h3 className="text-2xl font-lufga font-bold text-[#6c0505] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-red-600 transition-all duration-300 leading-tight">
//                         {benefit.title}
//                       </h3>

//                       <p className="text-sm sm:text-base text-[#070756] leading-relaxed font-lufga font-medium">
//                         {benefit.description}
//                       </p>

//                       <div className="pt-4 border-t border-blue-600/20 group-hover:border-red-500/50 transition-colors duration-300">
//                         {benefit.comingSoon ? (
//                           <span className="text-sm text-gray-500 font-lufga font-semibold">Coming Soon</span>
//                         ) : (
//                           <span className="text-sm text-blue-600 font-lufga font-semibold group-hover:translate-x-1 inline-block transition-transform duration-300">
//                             Learn More →
//                           </span>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Desktop Layout */}
//         <div className="hidden lg:block relative h-[700px]">
//           <svg
//             className="absolute inset-0 w-full h-full pointer-events-none"
//             viewBox="0 0 1000 800"
//             preserveAspectRatio="xMidYMid meet"
//           >
//             <line x1="280" y1="400" x2="720" y2="400" stroke="#f12d3d" strokeWidth="2" opacity="0.4" />
//             <line x1="500" y1="200" x2="500" y2="600" stroke="#4744a6" strokeWidth="2" opacity="0.4" />
//           </svg>

//           {/* Center Circle */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
//             <div className={`transition-all duration-700 transform ${
//               isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
//             }`}>
//               <div className="relative w-32 h-32 rounded-full bg-white flex items-center justify-center border-4 border-blue-600/20 gradient-glow-circle">
//                 <Image src="/F.png" alt="Fanatisch" width={64} height={64} className="object-contain" />
//               </div>
//             </div>
//           </div>

//           {/* Benefit Cards */}
//           {benefits.map((benefit, index) => {
//             const positions = ["top-16 left-16", "top-16 right-16", "bottom-16 left-16", "bottom-16 right-16"]

//             return (
//               <div key={benefit.title} className={`absolute ${positions[index]}`}>
//                 <div
//                   className={`transition-all duration-700 transform ${
//                     isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
//                   }`}
//                   style={{ transitionDelay: `${index * 150}ms` }}
//                 >
//                   <div
//                     className={`group relative bg-white border-2 border-blue-600/20 rounded-3xl p-6 w-80 h-64 shadow-lg hover:border-blue-600/50 hover:shadow-2xl hover:shadow-blue-600/30 transition-all duration-300 ${
//                       !benefit.comingSoon ? "cursor-pointer" : "cursor-default"
//                     }`}
//                     onClick={() => handleCardClick(benefit)}
//                   >
//                     <div className="space-y-4 flex flex-col h-full">
//                       <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
//                         <Image
//                           src={benefit.icon || "/placeholder.svg"}
//                           alt={benefit.title}
//                           width={56}
//                           height={56}
//                           className="object-contain"
//                           priority={index < 2}
//                         />
//                       </div>

//                       <h3 className="text-xl font-lufga font-bold text-[#6c0505] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-red-600 transition-all duration-300 leading-tight">
//                         {benefit.title}
//                       </h3>

//                       <p className="text-sm text-[#070756] leading-relaxed group-hover:text-[#070756] transition-colors duration-300 font-lufga font-medium">
//                         {benefit.description}
//                       </p>

//                       <div className="pt-3 border-t border-blue-600/20 group-hover:border-red-500/50 transition-colors duration-300">
//                         {benefit.comingSoon ? (
//                           <span className="text-xs text-gray-500 font-lufga font-semibold">Coming Soon</span>
//                         ) : (
//                           <span className="text-xs text-blue-600 font-lufga font-semibold group-hover:translate-x-1 inline-block transition-transform duration-300">
//                             Learn More →
//                           </span>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }




