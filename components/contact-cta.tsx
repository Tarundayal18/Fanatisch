

// "use client"
// import { useEffect, useRef, useState } from "react"

// export default function ContactCTA({ scrollY }: { scrollY: number }) {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   })

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()

//     const data = {
//       access_key: "ecd694d2-035c-4a7c-a769-d672ef5d870f",
//       name: formData.name,
//       email: formData.email,
//       phone: formData.phone,
//       message: formData.message,
//     }

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify(data),
//     })

//     const result = await res.json()

//     if (result.success) {
//       alert("Message sent successfully!")
//       setFormData({ name: "", email: "", phone: "", message: "" })
//       setIsModalOpen(false)
//     } else {
//       alert("Something went wrong. Please try again.")
//     }
//   }

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && containerRef.current) {
//           containerRef.current.classList.add("opacity-100", "scale-100")
//         }
//       },
//       { threshold: 0.3 }
//     )

//     if (containerRef.current) observer.observe(containerRef.current)
//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section className="bg-[#f2cb05]">
//       {/* Modal */}
//       {isModalOpen && (
//   <div
//     className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//     onClick={() => setIsModalOpen(false)}
//   >
//     <div
//       className="relative w-full max-w-md rounded-2xl shadow-2xl p-6 md:p-8 bg-[#4744a6]"
//       onClick={(e) => e.stopPropagation()}
//     >
//       {/* Close Button */}
//       <button
//         onClick={() => setIsModalOpen(false)}
//         className="absolute top-4 right-4 text-[#f2cb05] hover:text-[#f12d3d] text-2xl font-bold transition-colors"
//       >
//         ✕
//       </button>

//       {/* Modal Title */}
//       <h2 className="text-2xl md:text-3xl font-bold text-[#f2cb05] mb-6 text-center">
//         Get in Touch
//       </h2>

//       {/* Form */}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-[#f2cb05] font-semibold mb-1">Name</label>
//           <input
//             type="text"
//             name="name"
//             required
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full px-3 py-2 rounded-lg border border-[#f2cb05] bg-[#4744a6] text-white outline-none"
//           />
//         </div>
//         <div>
//           <label className="block text-[#f2cb05] font-semibold mb-1">Email</label>
//           <input
//             type="email"
//             name="email"
//             required
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-3 py-2 rounded-lg border border-[#f2cb05] bg-[#4744a6] text-white outline-none"
//           />
//         </div>
//         <div>
//           <label className="block text-[#f2cb05] font-semibold mb-1">Phone</label>
//           <input
//             type="tel"
//             name="phone"
//             required
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full px-3 py-2 rounded-lg border border-[#f2cb05] bg-[#4744a6] text-white outline-none"
//           />
//         </div>
//         <div>
//           <label className="block text-[#f2cb05] font-semibold mb-1">Message</label>
//           <textarea
//             rows={3}
//             name="message"
//             required
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full px-3 py-2 rounded-lg border border-[#f2cb05] bg-[#4744a6] text-white outline-none resize-none"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full py-3 rounded-full bg-[#f2cb05] text-[#4744a6] font-bold text-lg hover:bg-[#f12d3d] hover:text-white transition-colors"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   </div>
// )}


//       {/* Contact CTA */}
//       <div
//         ref={containerRef}
//         className="relative mx-auto max-w-6xl px-6 py-20 opacity-0 scale-95 transition-all duration-700 bg-[#f2cb05]"
//       >
//         <div
//           className="absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-white rotate-180"
//           style={{
//             width: "10%",
//             aspectRatio: "2",
//             WebkitMask:
//               "url('https://framerusercontent.com/images/hu1eUWnLUAIjJFEcHS6XHGyNUQ.svg?width=180&height=90') center / cover no-repeat",
//             mask: "url('https://framerusercontent.com/images/hu1eUWnLUAIjJFEcHS6XHGyNUQ.svg?width=180&height=90') center / cover no-repeat",
//           }}
//         />
//         <div className="relative overflow-visible rounded-[3rem] bg-[#4744a6] px-8 py-16 text-center md:px-16 border border-[#1f2a3c] shadow-2xl">
//           <div className="absolute -top-16 -left-16 w-40 h-40 bg-[#f12d3d] rounded-[2rem] rotate-45" />
//           <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#f12d3d] rounded-[2rem] -rotate-12" />

//           <h2 className="relative z-10 mb-6 text-4xl font-lufga font-bold leading-tight md:text-5xl lg:text-6xl">
//             <span className="text-white">Ready to partner with </span>
//             <span className="text-[#f2cb05]">Fanatisch</span>
//             <span className="text-white"> & Unlock the </span>
//             <span className="relative inline-block">
//               <span className="text-[#f12d3d]">Real</span>
//               <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#f12d3d] rounded-full"></span>
//             </span>
//             <span className="text-white"> Potential?</span>
//           </h2>

//           <button
//             onClick={() => setIsModalOpen(true)}
//             className="group relative inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-lufga font-semibold text-[#0a1628] transition-all hover:bg-gray-100 hover:scale-105"
//           >
//             Get In Touch
//             <svg
//               className="h-5 w-5 transition-transform group-hover:translate-x-1"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }


// "use client"
// import { useEffect, useRef, useState } from "react"

// export default function ContactCTA({ scrollY }: { scrollY: number }) {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   })

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()

//     const data = {
//       access_key: "ecd694d2-035c-4a7c-a769-d672ef5d870f",
//       name: formData.name,
//       email: formData.email,
//       phone: formData.phone,
//       message: formData.message,
//     }

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify(data),
//     })

//     const result = await res.json()

//     if (result.success) {
//       alert("Message sent successfully!")
//       setFormData({ name: "", email: "", phone: "", message: "" })
//       setIsModalOpen(false)
//     } else {
//       alert("Something went wrong. Please try again.")
//     }
//   }

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && containerRef.current) {
//           containerRef.current.classList.add("opacity-100", "scale-100")
//         }
//       },
//       { threshold: 0.3 }
//     )

//     if (containerRef.current) observer.observe(containerRef.current)
//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section className="bg-[#f2cb05]">
//       {/* Modal */}
//       {isModalOpen && (
//   <div
//     className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//     onClick={() => setIsModalOpen(false)}
//   >
//     <div
//       className="relative w-full max-w-md rounded-2xl shadow-2xl p-6 md:p-8 bg-[#4744a6]"
//       onClick={(e) => e.stopPropagation()}
//     >
//       {/* Close Button */}
//       <button
//         onClick={() => setIsModalOpen(false)}
//         className="absolute top-4 right-4 text-[#f2cb05] hover:text-[#f12d3d] text-2xl font-bold transition-colors"
//       >
//         ✕
//       </button>

//       {/* Modal Title */}
//       <h2 className="text-2xl md:text-3xl font-bold text-[#f2cb05] mb-6 text-center">
//         Get in Touch
//       </h2>

//       {/* Form */}
//       <div className="space-y-4">
//         <div>
//           <label className="block text-[#f2cb05] font-semibold mb-1">Name</label>
//           <input
//             type="text"
//             name="name"
//             required
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full px-3 py-2 rounded-lg border border-[#f2cb05] bg-[#4744a6] text-white outline-none"
//           />
//         </div>
//         <div>
//           <label className="block text-[#f2cb05] font-semibold mb-1">Email</label>
//           <input
//             type="email"
//             name="email"
//             required
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-3 py-2 rounded-lg border border-[#f2cb05] bg-[#4744a6] text-white outline-none"
//           />
//         </div>
//         <div>
//           <label className="block text-[#f2cb05] font-semibold mb-1">Phone</label>
//           <input
//             type="tel"
//             name="phone"
//             required
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full px-3 py-2 rounded-lg border border-[#f2cb05] bg-[#4744a6] text-white outline-none"
//           />
//         </div>
//         <div>
//           <label className="block text-[#f2cb05] font-semibold mb-1">Message</label>
//           <textarea
//             rows={3}
//             name="message"
//             required
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full px-3 py-2 rounded-lg border border-[#f2cb05] bg-[#4744a6] text-white outline-none resize-none"
//           />
//         </div>

//         <button
//           onClick={handleSubmit}
//           className="w-full py-3 rounded-full bg-[#f2cb05] text-[#4744a6] font-bold text-lg hover:bg-[#f12d3d] hover:text-white transition-colors"
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   </div>
// )}


//       {/* Contact CTA */}
//       <div
//         ref={containerRef}
//         className="relative mx-auto max-w-6xl px-6 py-20 opacity-0 scale-95 transition-all duration-700 bg-[#f2cb05]"
//       >
//         <div
//           className="absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-white rotate-180"
//           style={{
//             width: "10%",
//             aspectRatio: "2",
//             WebkitMask:
//               "url('https://framerusercontent.com/images/hu1eUWnLUAIjJFEcHS6XHGyNUQ.svg?width=180&height=90') center / cover no-repeat",
//             mask: "url('https://framerusercontent.com/images/hu1eUWnLUAIjJFEcHS6XHGyNUQ.svg?width=180&height=90') center / cover no-repeat",
//           }}
//         />
//         <div className="relative overflow-visible rounded-[3rem] bg-[#4744a6] px-8 py-16 text-center md:px-16 border border-[#1f2a3c] shadow-2xl">
//           {/* Left decorative box with icon */}
//           <div className="absolute -top-16 -left-16 w-40 h-40 bg-[#f12d3d] rounded-[2rem] rotate-45 flex items-center justify-center overflow-hidden shadow-xl">
//             <svg 
//               className="w-20 h-20 text-white/30 -rotate-45 animate-pulse"
//               fill="currentColor" 
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
//             </svg>
//           </div>

//           {/* Right decorative box with icon */}
//           <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#f12d3d] rounded-[2rem] -rotate-12 flex items-center justify-center overflow-hidden shadow-xl">
//             <svg 
//               className="w-16 h-16 text-white/30 rotate-12 animate-spin"
//               style={{ animationDuration: '8s' }}
//               fill="none" 
//               stroke="currentColor" 
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//             </svg>
//           </div>

//           <h2 className="relative z-10 mb-6 text-4xl font-lufga font-bold leading-tight md:text-5xl lg:text-6xl">
//             <span className="text-white">Ready to partner with </span>
//             <span className="text-[#f2cb05]">Fanatisch</span>
//             <span className="text-white"> & Unlock the </span>
//             <span className="relative inline-block">
//               <span className="text-[#f12d3d]">Real</span>
//               <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#f12d3d] rounded-full"></span>
//             </span>
//             <span className="text-white"> Potential?</span>
//           </h2>

//           <button
//             onClick={() => setIsModalOpen(true)}
//             className="group relative inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-lufga font-semibold text-[#0a1628] transition-all hover:bg-gray-100 hover:scale-105"
//           >
//             Get In Touch
//             <svg
//               className="h-5 w-5 transition-transform group-hover:translate-x-1"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"
import { useEffect, useRef, useState } from "react"

export default function ContactCTA({ scrollY }: { scrollY: number }) {
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
    <section className="bg-[#f2cb05]">
      {/* Modal */}
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
      <div className="space-y-4">
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
          onClick={handleSubmit}
          className="w-full py-3 rounded-full bg-[#f2cb05] text-[#4744a6] font-bold text-lg hover:bg-[#f12d3d] hover:text-white transition-colors"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
)}


      {/* Contact CTA */}
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
        <div className="relative overflow-visible rounded-[3rem] bg-[#4744a6] px-8 py-16 text-center md:px-16 border border-[#1f2a3c] shadow-2xl">
          {/* Left decorative box with icon */}
          <div className="absolute -top-8 -left-8 md:-top-16 md:-left-16 w-24 h-24 md:w-40 md:h-40 bg-[#f12d3d] rounded-xl md:rounded-[2rem] rotate-45 flex items-center justify-center overflow-hidden shadow-xl">
            <svg 
              className="w-12 h-12 md:w-20 md:h-20 text-white/30 -rotate-45 animate-pulse"
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>

          {/* Right decorative box with icon */}
          <div className="absolute -top-6 -right-6 md:-top-12 md:-right-12 w-20 h-20 md:w-32 md:h-32 bg-[#f12d3d] rounded-xl md:rounded-[2rem] -rotate-12 flex items-center justify-center overflow-hidden shadow-xl">
            <svg 
              className="w-10 h-10 md:w-16 md:h-16 text-white/30 rotate-12 animate-spin"
              style={{ animationDuration: '8s' }}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>

          <h2 className="relative z-10 mb-6 text-4xl font-lufga font-bold leading-tight md:text-5xl lg:text-6xl">
            <span className="text-white">Ready to partner with </span>
            <span className="text-[#f2cb05]">Fanatisch</span>
            <span className="text-white"> & Unlock the </span>
            <span className="relative inline-block">
              <span className="text-[#f12d3d]">Real</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#f12d3d] rounded-full"></span>
            </span>
            <span className="text-white"> Potential?</span>
          </h2>

          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-lufga font-semibold text-[#0a1628] transition-all hover:bg-gray-100 hover:scale-105"
          >
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
    </section>
  )
}