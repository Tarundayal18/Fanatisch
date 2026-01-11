


// "use client"

// import { useRef } from "react"
// import Image from "next/image"

// interface HeroSectionProps {
//   scrollY: number
// }

// export default function HeroSection({ scrollY }: HeroSectionProps) {
//   const containerRef = useRef<HTMLDivElement>(null)

//   return (
//     <section
//       ref={containerRef}
//       className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#f2cb05]"
//     >
//       {/* Animated background elements */}

//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#4744a6]/10 blur-3xl animate-pulse" />
//         <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#f12d3d]/10 blur-3xl animate-pulse delay-700" />
//         <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-[#f2cb05]/5 blur-2xl animate-pulse delay-1000" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
//   <div className="space-y-2"> {/* aur tight gap */}
//     {/* ⭐ Top Center Logo */}
//     <div className="w-full flex justify-center">
//       <div className="relative w-58 h-70 md:w-80 md:h-58 lg:w-70 lg:h-80">
//         <Image src="/Logo/mainlogo.png" alt="Main Logo" fill className="object-contain" />
//       </div>
//     </div>

//     <div className="space-y-1 relative"> {/* Heading ke andar bhi gap kam */}
//       <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[0.95]">
//         <span className="block font-lufga font-bold text-[#0e0f26]">TRANSFORMING</span>
//         <span className="text-[#4744a6] font-lufga font-bold">VISION INTO</span>
//         <span className="text-[#f12d3d] font-lufga font-bold"> REVENUE</span>
//         <br />
//         <span className="text-[#0e0f26] mt-1 inline-block font-lufga font-bold">EFFECTIVELY</span> {/* mt-2 → mt-1 */}
//       </h1>
//     </div>

//     <p className="text-lg sm:text-xl text-[#0e0f26] max-w-2xl mx-auto font-lufga font-bold leading-relaxed">
//       Experience growth through innovative strategies, rapid execution, and unwavering founder partnership.
//     </p>

//     <div className="pt-4 mb-[100px]">
//       <button className="relative group px-8 py-4 bg-[#0e0f26] text-white font-lufga font-bold rounded-full text-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-[#0e0f26]/50">
//         Get In Touch
//         <span className="absolute inset-0 rounded-full bg-[#0e0f26] opacity-0 group-hover:opacity-20 blur transition-opacity" />
//       </button>
//     </div>
//   </div>
// </div>


//       {/* Floating symbols */}
//       <div
//         className="false absolute top-32 left-12 text-[#f12d3d] text-5xl font-light opacity-70 animate-float"
//         style={{ animationDelay: "0s" }}
//       >
//         +
//       </div>
//       <div
//         className="absolute top-40 right-20 text-[#f12d3d] text-4xl opacity-70 animate-float"
//         style={{ animationDelay: "1s" }}
//       >
//         ♥
//       </div>
//       <div
//         className="absolute top-1/2 left-8 text-[#4744a6] text-5xl opacity-60 animate-float"
//         style={{ animationDelay: "0.5s" }}
//       >
//         ★
//       </div>
//       <div
//         className="absolute top-2/3 right-12 text-[#0e0f26] text-4xl opacity-50 animate-float"
//         style={{ animationDelay: "1.5s" }}
//       >
//         ★
//       </div>
//       <div
//         className="absolute bottom-40 left-1/4 w-8 h-8 border-2 border-[#4744a6] rounded-lg opacity-60 animate-float"
//         style={{ animationDelay: "0.7s" }}
//       />
//       <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-[#4744a6]/20 border-2 border-[#4744a6] blur-sm opacity-50 animate-pulse" />

//       {/* ⬇️ Bottom Center Framer Shape */}
//       <div
//         className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 bg-white"
//         style={{
//           width: "10%",
//           aspectRatio: "2",
//           WebkitMask:
//             "url('https://framerusercontent.com/images/hu1eUWnLUAIjJFEcHS6XHGyNUQ.svg?width=180&height=90') center / cover no-repeat",
//           mask: "url('https://framerusercontent.com/images/hu1eUWnLUAIjJFEcHS6XHGyNUQ.svg?width=180&height=90') center / cover no-repeat",
//         }}
//       />

//       <style jsx>{`
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-20px) rotate(5deg);
//           }
//         }
//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   )
// }


"use client"

import { useRef, useState } from "react"
import Image from "next/image"

interface HeroSectionProps {
  scrollY: number
}

export default function HeroSection({ scrollY }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const data = {
      access_key: "ecd694d2-035c-4a7c-a769-d672ef5d870f",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    }

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })

    const result = await res.json()

    if (result.success) {
      alert("Message sent successfully!")
      setFormData({ name: "", email: "", phone: "", message: "" })
      setIsModalOpen(false)
    } else {
      alert("Something went wrong. Please try again.")
    }
  }

  return (
    <>
      {/* Modal Backdrop */}
      {isModalOpen && (
  <div
    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    onClick={() => setIsModalOpen(false)}
  >
    <div
      className="relative w-full max-w-md rounded-2xl shadow-2xl p-6 md:p-8 bg-[#4744a6]"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        onClick={() => setIsModalOpen(false)}
        className="absolute top-4 right-4 text-[#f2cb05] hover:text-[#f12d3d] text-2xl font-bold transition-colors"
      >
        ✕
      </button>

      {/* Modal Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#f2cb05] mb-6 text-center">
        Get in Touch
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-[#f2cb05] font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg border border-[#f2cb05] bg-[#4744a6] text-white outline-none"
          />
        </div>
        <div>
          <label className="block text-[#f2cb05] font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg border border-[#f2cb05] bg-[#4744a6] text-white outline-none"
          />
        </div>
        <div>
          <label className="block text-[#f2cb05] font-semibold mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg border border-[#f2cb05] bg-[#4744a6] text-white outline-none"
          />
        </div>
        <div>
          <label className="block text-[#f2cb05] font-semibold mb-1">Message</label>
          <textarea
            rows={3}
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg border border-[#f2cb05] bg-[#4744a6] text-white outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-full bg-[#f2cb05] text-[#4744a6] font-bold text-lg hover:bg-[#f12d3d] hover:text-white transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
)}


      {/* Hero Section */}
      <section
        ref={containerRef}
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#f2cb05]"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#4744a6]/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#f12d3d]/10 blur-3xl animate-pulse delay-700" />
          <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-[#f2cb05]/5 blur-2xl animate-pulse delay-1000" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="space-y-2">
            <div className="w-full flex justify-center">
              <div className="relative w-58 h-70 md:w-80 md:h-58 lg:w-70 lg:h-80">
                <Image src="/Logo/mainlogo.png" alt="Main Logo" fill className="object-contain" />
              </div>
            </div>

            <div className="space-y-1 relative">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl tracking-tight leading-[0.95]">
                <span className="block font-lufga font-bold text-[#6c0505]">TRANSFORMING</span>
                <span className="text-[#4744a6] font-lufga font-bold">VISION INTO</span>
                <span className="text-[#f12d3d] font-lufga font-bold"> REVENUE</span>
                <br />
                <span className="text-[#6c0505] mt-1 inline-block font-lufga font-bold">EFFECTIVELY</span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-[#6c0505] max-w-2xl mx-auto font-lufga font-bold leading-relaxed">
              Experience growth through innovative strategies, rapid execution, and unwavering founder partnership.
            </p>

            <div className="pt-4 mb-[100px]">
              <button
                onClick={() => setIsModalOpen(true)}
                className="relative group px-8 py-4 bg-[#070756] text-white font-lufga font-bold rounded-full text-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-[#0e0f26]/50"
              >
                Get In Touch
                <span className="absolute inset-0 rounded-full bg-[#0e0f26] opacity-0 group-hover:opacity-20 blur transition-opacity" />
              </button>
            </div>
          </div>
        </div>

        {/* Floating symbols and bottom shape remain unchanged */}
        <div className="absolute top-32 left-12 text-[#f12d3d] text-5xl font-light opacity-70 animate-float">+</div>
        <div className="absolute top-40 right-20 text-[#f12d3d] text-4xl opacity-70 animate-float" style={{ animationDelay: "1s" }}>♥</div>
        <div className="absolute top-1/2 left-8 text-[#4744a6] text-5xl opacity-60 animate-float" style={{ animationDelay: "0.5s" }}>★</div>
        <div className="absolute top-2/3 right-12 text-[#0e0f26] text-4xl opacity-50 animate-float" style={{ animationDelay: "1.5s" }}>★</div>
        <div className="absolute bottom-40 left-1/4 w-8 h-8 border-2 border-[#4744a6] rounded-lg opacity-60 animate-float" style={{ animationDelay: "0.7s" }} />
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-[#4744a6]/20 border-2 border-[#4744a6] blur-sm opacity-50 animate-pulse" />

        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 bg-white"
          style={{
            width: "10%",
            aspectRatio: "2",
            WebkitMask:
              "url('https://framerusercontent.com/images/hu1eUWnLUAIjJFEcHS6XHGyNUQ.svg?width=180&height=90') center / cover no-repeat",
            mask: "url('https://framerusercontent.com/images/hu1eUWnLUAIjJFEcHS6XHGyNUQ.svg?width=180&height=90') center / cover no-repeat",
          }}
        />

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}</style>
      </section>
    </>
  )
}

