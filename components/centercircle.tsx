
// "use client"

// import Image from "next/image"

// const cards = [
//   {
//     id: 1,
//     title: "ZapMenus",
//     description: "Smart QR based menu and customer management systems",
//     logo: "/zapmenus.png",
//     link: "https://zapmenus.com",
//   },
//   {
//     id: 2,
//     title: "Basil",
//     description: "Retail-first inventory, POS & commerce engine",
//     logo: "/basil.png",
//     link: "https://fanatisch.vercel.app/",
//     comingSoon: true,
//   },
//   {
//     id: 3,
//     title: "FdMS",
//     description: "Fanatisch digital Marketing Services",
//     logo: "/fdms.png",
//     link: "https://www.fdms.co.in/",
//   },
//   {
//     id: 4,
//     title: "BlueBerrie",
//     description: "A Consortium of Consultants",
//     logo: "/blueberrie01.png",
//     link: "https://www.blueberrie.co.in/",
//   },
// ]

// export default function OurBrands() {
//   return (
//     <>
//       <style>{`
//         @keyframes gradientGlow {
//           0%, 100% {
//             box-shadow:
//               0 0 30px rgba(249, 115, 22, 0.9),
//               0 0 60px rgba(249, 115, 22, 0.7),
//               0 0 90px rgba(249, 115, 22, 0.5),
//               0 0 120px rgba(249, 115, 22, 0.3),
//               0 0 150px rgba(249, 115, 22, 0.1),
//               inset 0 0 20px rgba(255, 255, 255, 0.4);
//           }
//           50% {
//             box-shadow:
//               0 0 40px rgba(249, 115, 22, 0.95),
//               0 0 80px rgba(249, 115, 22, 0.75),
//               0 0 120px rgba(249, 115, 22, 0.55),
//               0 0 160px rgba(249, 115, 22, 0.35),
//               0 0 200px rgba(249, 115, 22, 0.15),
//               inset 0 0 30px rgba(255, 255, 255, 0.5);
//           }
//         }

//         .gradient-glow-circle {
//           animation: gradientGlow 3s ease-in-out infinite;
//         }
//       `}</style>
      
//       <section className="w-full bg-gradient-to-b from-[#F4D45A] to-[#F4C644] min-h-screen flex flex-col items-center justify-center px-6 py-16 md:py-24">
        
//         {/* Header */}
//         <div className="text-center mb-16 max-w-4xl">
//           <div className="inline-block mb-5">
//             <span className="bg-white/70 text-[#8B4513] px-6 py-2 rounded-full text-sm font-bold tracking-wide">
//               CORE BENEFITS
//             </span>
//           </div>

//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#3D1F3F] mb-4 leading-tight">
//             The Value Behind <span className="text-blue-600">Platform</span>
//           </h1>

//           <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//             Easily track and manage your sales pipeline with real-time updates, visual deal stages to keep your sales flow seamless.
//           </p>
//         </div>

//         {/* Cards + Center */}
//         <div className="relative w-full max-w-7xl mx-auto">

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-74 gap-y-42 px-4 md:px-8 py-12">
            
//             <div className="flex justify-center md:justify-end">
//               <Card card={cards[0]} />
//             </div>

//             <div className="flex justify-center md:justify-start">
//               <Card card={cards[1]} />
//             </div>

//             {/* Center Circle */}
//             <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
//               <CenterCircle />
//             </div>

//             <div className="flex justify-center md:justify-end">
//               <Card card={cards[2]} />
//             </div>

//             <div className="flex justify-center md:justify-start">
//               <Card card={cards[3]} />
//             </div>
//           </div>

//           {/* Mobile Circle */}
//           <div className="md:hidden flex justify-center my-8">
//             <CenterCircle />
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// function Card({ card }: { card: (typeof cards)[0] & { comingSoon?: boolean } }) {
//   return (
//     <div className="w-full max-w-sm bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-auto">

//       {/* Logo Box */}
//       <div className="mb-6">
//         <div className="w-20 h-20 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] rounded-2xl flex items-center justify-center">
//           <div className="relative w-18 h-18">
//             <Image src={card.logo} alt={card.title} fill className="object-contain" />
//           </div>
//         </div>
//       </div>

//       <h3 className="text-2xl font-extrabold text-[#3D1F3F] mb-3">{card.title}</h3>

//       <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow">
//         {card.description}
//       </p>

//       <a
//         href={card.link}
//         target="_blank"
//         className={`text-sm font-semibold ${
//           card.comingSoon ? "text-gray-500 cursor-default" : "text-blue-600 hover:text-blue-800"
//         }`}
//       >
//         {card.comingSoon ? "Coming Soon" : "Visit Website →"}
//       </a>

//     </div>
//   )
// }

// function CenterCircle() {
//   return (
//     <div className="relative w-24 h-24 md:w-32 md:h-32">

//       <div className="gradient-glow-circle absolute inset-0 rounded-full"></div>

//       <div className="absolute inset-2 md:inset-3 bg-white rounded-full flex items-center justify-center border-4 md:border-6 border-orange-500">
//         <div className="relative w-10 h-10 md:w-14 md:h-14">
//           <Image src="/F.png" alt="Center Logo" fill className="object-contain" />
//         </div>
//       </div>

//       <div className="hidden md:block absolute top-1/2 left-full w-32 lg:w-48 h-0.5 bg-gradient-to-r from-orange-400 to-transparent -translate-y-1/2 ml-2"></div>
//       <div className="hidden md:block absolute top-1/2 right-full w-32 lg:w-48 h-0.5 bg-gradient-to-l from-orange-400 to-transparent -translate-y-1/2 mr-2"></div>
//       <div className="hidden md:block absolute top-full left-1/2 h-32 lg:h-48 w-0.5 bg-gradient-to-b from-orange-400 to-transparent -translate-x-1/2 mt-2"></div>
//       <div className="hidden md:block absolute bottom-full left-1/2 h-32 lg:h-48 w-0.5 bg-gradient-to-t from-orange-400 to-transparent -translate-x-1/2 -mb-2"></div>

//     </div>
//   )
// }




"use client"

import Image from "next/image"


const cards = [
  {
    id: 1,
    title: "ZapMenus",
    description: "Smart QR based menu and customer management systems",
    logo: "/zapmenus.png",
    link: "https://zapmenus.com",
  },
  {
    id: 2,
    title: "Basil",
    description: "Retail-first inventory, POS & commerce engine",
    logo: "/basil.png",
    link: "https://fanatisch.vercel.app/",
    comingSoon: true,
  },
  {
    id: 3,
    title: "FdMS",
    description: "Fanatisch digital Marketing Services",
    logo: "/fdms.png",
    link: "https://www.fdms.co.in/",
  },
  {
    id: 4,
    title: "BlueBerrie",
    description: "A Consortium of Consultants",
    logo: "/blueberrie01.png",
    link: "https://www.blueberrie.co.in/",
  },
]

export default function OurBrands() {
  return (
    <section className="w-full bg-[#f2cb05] min-h-screen flex flex-col items-center justify-center px-6 py-16 md:py-24">
      
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-20 space-y-6">
          <div className="inline-block px-6 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/60 text-sm sm:text-base font-lufga font-semibold tracking-widest text-[#6c0505] uppercase shadow-lg">
            Core Benefits
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-lufga font-bold text-[#6c0505] leading-tight">
            The Value Behind the{" "}
            <span className="bg-gradient-to-r from-blue-600 font-lufga font-regular via-purple-600 to-red-600 bg-clip-text text-transparent">
              Platform
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#070756] max-w-2xl mx-auto leading-relaxed font-lufga font-medium">
            Easily track and manage your sales pipeline with real-time updates, visual deal stages to keep your sales
            flow seamless.
          </p>
        </div>

      {/* Cards + Center */}
      <div className="relative w-full max-w-7xl mx-auto">

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col gap-8 px-4 py-12">
          <div className="flex justify-center">
            <Card card={cards[0]} />
          </div>
          
          <div className="flex justify-center">
            <Card card={cards[1]} />
          </div>

          {/* Mobile Circle */}
          <div className="flex justify-center my-4">
            <CenterCircle />
          </div>

          <div className="flex justify-center">
            <Card card={cards[2]} />
          </div>

          <div className="flex justify-center">
            <Card card={cards[3]} />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-2 gap-x-82 gap-y-42 px-8 py-12">
          
          <div className="flex justify-end">
            <Card card={cards[0]} />
          </div>

          <div className="flex justify-start">
            <Card card={cards[1]} />
          </div>

          {/* Center Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <CenterCircle />
          </div>

          <div className="flex justify-end">
            <Card card={cards[2]} />
          </div>

          <div className="flex justify-start">
            <Card card={cards[3]} />
          </div>
        </div>

      </div>
    </section>
  )
}

function Card({ card }: { card: (typeof cards)[0] & { comingSoon?: boolean } }) {
  return (
    <div className="w-full max-w-sm bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-auto">

      {/* Logo Box */}
      <div className="mb-6">
        <div className="w-20 h-20 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] rounded-2xl flex items-center justify-center">
          <div className="relative w-18 h-18">
            <Image src={card.logo} alt={card.title} fill className="object-contain" />
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-extrabold text-[#3D1F3F]  font-lufga font-bold mb-3">{card.title}</h3>

      <p className="text-gray-700 text-sm leading-relaxed mb-6  font-lufga font-medium flex-grow">
        {card.description}
      </p>

      <a
        href={card.comingSoon ? "#" : card.link}
        target={card.comingSoon ? "_self" : "_blank"}
        onClick={(e) => {
          if (card.comingSoon) {
            e.preventDefault()
          }
        }}
        className={`text-sm font-semibold ${
          card.comingSoon ? "text-gray-500  font-lufga font-medium cursor-default" : "text-blue-600  font-lufga font-medium hover:text-blue-800"
        }`}
      >
        {card.comingSoon ? "Coming Soon" : "Visit Website →"}
      </a>

    </div>
  )
}


function CenterCircle() {
  return (
    <div className="relative w-24 h-24 md:w-32 md:h-32">

      <div className="gradient-glow-circle absolute inset-0 rounded-full"></div>

      <div className="absolute inset-2 md:inset-3 bg-white rounded-full flex items-center justify-center border-4 md:border-6 border-orange-500">
        <div className="relative w-10 h-10 md:w-14 md:h-14">
          <Image src="/F.png" alt="Center Logo" fill className="object-contain" />
        </div>
      </div>

      <div className="hidden md:block absolute top-1/2 left-full w-32 lg:w-48 h-0.5 bg-gradient-to-r from-orange-400 to-transparent -translate-y-1/2 ml-2"></div>
      <div className="hidden md:block absolute top-1/2 right-full w-32 lg:w-48 h-0.5 bg-gradient-to-l from-orange-400 to-transparent -translate-y-1/2 mr-2"></div>
      <div className="hidden md:block absolute top-full left-1/2 h-32 lg:h-48 w-0.5 bg-gradient-to-b from-orange-400 to-transparent -translate-x-1/2 mt-2"></div>
      <div className="hidden md:block absolute bottom-full left-1/2 h-32 lg:h-48 w-0.5 bg-gradient-to-t from-orange-400 to-transparent -translate-x-1/2 -mb-2"></div>

      <style jsx>{`
        @keyframes gradientGlow {
          0%, 100% {
            box-shadow:
              0 0 30px rgba(249, 115, 22, 0.9),
              0 0 60px rgba(249, 115, 22, 0.7),
              0 0 90px rgba(249, 115, 22, 0.5),
              0 0 120px rgba(249, 115, 22, 0.3),
              0 0 150px rgba(249, 115, 22, 0.1),
              inset 0 0 20px rgba(255, 255, 255, 0.4);
          }
          50% {
            box-shadow:
              0 0 40px rgba(249, 115, 22, 0.95),
              0 0 80px rgba(249, 115, 22, 0.75),
              0 0 120px rgba(249, 115, 22, 0.55),
              0 0 160px rgba(249, 115, 22, 0.35),
              0 0 200px rgba(249, 115, 22, 0.15),
              inset 0 0 30px rgba(255, 255, 255, 0.5);
          }
        }

        .gradient-glow-circle {
          animation: gradientGlow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}