// "use client"

// import { useState } from "react"
// import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

// interface SlideItem {
//   id: string
//   leftTitle: string
//   leftDescription: string
//   leftStatNumber: string
//   leftStatText1: string
//   leftStatText2: string
//   leftStatColor: string
//   rightTitle: string
//   rightDescription: string
//   rightStatNumber: string
//   rightStatText: string
//   rightStatColor: string
//   image: string
// }

// interface ShowcaseSliderProps {
//   title: string
//   slides: SlideItem[]
// }

// export default function ShowcaseSlider({ title, slides }: ShowcaseSliderProps) {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
//   }

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
//   }

//   const current = slides[currentIndex]

//   return (
//     <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Title */}
//         <h2 className="text-3xl md:text-4xl font-bold text-black mb-16 text-center">{title}</h2>

//         {/* Slider Container */}
//         <div className="relative">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-center">
//             {/* Left Content */}
//             <div className="flex flex-col justify-between h-full">
//               <div>
//                 <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">{current.leftTitle}</h3>
//                 <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-8">{current.leftDescription}</p>
//               </div>

//               {/* Left Stat Card */}
//               <div className={`${current.leftStatColor} rounded-3xl p-6 w-fit text-white relative overflow-hidden`}>
//                 <div className="relative z-10">
//                   <div className="text-4xl md:text-5xl font-bold mb-2">{current.leftStatNumber}</div>
//                   <div className="text-sm md:text-base font-semibold">
//                     {current.leftStatText1}
//                     <br />
//                     {current.leftStatText2}
//                   </div>
//                 </div>
//                 {/* Decorative Element */}
//                 <div className="absolute top-4 right-4 bg-white bg-opacity-20 p-2 rounded-full">
//                   <ArrowRight size={20} />
//                 </div>
//                 {/* Framer Shape - Bottom Right Curve */}
//                 <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full"></div>
//               </div>
//             </div>

//             {/* Center Image with Framer Shapes */}
//             <div className="relative flex justify-center items-center">
//               {/* Top Framer Shape */}
//               <div className="absolute -top-4 -left-4 w-16 h-16 bg-black rounded-3xl opacity-50"></div>
//               <div className="absolute -top-4 -right-4 w-16 h-16 bg-black rounded-3xl opacity-50"></div>

//               {/* Main Image Container with Rounded Corners */}
//               <div className="relative w-full aspect-square max-w-sm">
//                 <img
//                   src={current.image || "/placeholder.svg"}
//                   alt="Showcase"
//                   className="w-full h-full object-cover rounded-3xl"
//                 />

//                 {/* Decorative Frames */}
//                 <div className="absolute inset-0 rounded-3xl border-8 border-black border-opacity-20 pointer-events-none"></div>
//               </div>

//               {/* Bottom Framer Shape */}
//               <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-black rounded-3xl opacity-50"></div>
//               <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-black rounded-3xl opacity-50"></div>
//             </div>

//             {/* Right Content */}
//             <div className="flex flex-col justify-between h-full">
//               <div>
//                 <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">{current.rightTitle}</h3>
//                 <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-8">{current.rightDescription}</p>
//               </div>

//               {/* Right Stat Card */}
//               <div className={`${current.rightStatColor} rounded-3xl p-6 w-fit text-white relative overflow-hidden`}>
//                 <div className="relative z-10">
//                   <div className="text-4xl md:text-5xl font-bold mb-2">{current.rightStatNumber}</div>
//                   <div className="text-sm md:text-base font-semibold">{current.rightStatText}</div>
//                 </div>
//                 {/* Decorative Element */}
//                 <div className="absolute top-4 right-4 bg-white bg-opacity-20 p-2 rounded-full">
//                   <ArrowRight size={20} />
//                 </div>
//                 {/* Framer Shape - Bottom Right Curve */}
//                 <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full"></div>
//               </div>
//             </div>
//           </div>

//           {/* Slider Controls */}
//           <div className="flex justify-center gap-4 mt-12">
//             <button
//               onClick={handlePrev}
//               className="p-3 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
//               aria-label="Previous slide"
//             >
//               <ChevronLeft size={24} />
//             </button>
//             <button
//               onClick={handleNext}
//               className="p-3 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
//               aria-label="Next slide"
//             >
//               <ChevronRight size={24} />
//             </button>
//           </div>

//           {/* Slide Indicators */}
//           <div className="flex justify-center gap-2 mt-6">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`h-2 rounded-full transition-all ${
//                   index === currentIndex ? "bg-black w-8" : "bg-gray-300 w-2"
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }



"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

interface SlideItem {
  id: string
  category: string
  leftTitle: string
  leftDescription: string
  leftStatNumber: string
  leftStatText1: string
  leftStatText2: string
  leftStatColor: string
  rightTitle: string
  rightDescription: string
  rightStatNumber: string
  rightStatText: string
  rightStatColor: string
  image: string
}

const allSlides: SlideItem[] = [
  // Thinkster slides
  {
    id: "thinkster-1",
    category: "Thinkster Expertise",
    leftTitle: "PROVEN EXPERTISE",
    leftDescription:
      "With years of experience and a track record of delivering measurable results, we craft strategies that work.",
    leftStatNumber: "300+",
    leftStatText1: "Successful Campaigns",
    leftStatText2: "Launched Industries",
    leftStatColor: "bg-[#4744a6]",
    rightTitle: "DATA-DRIVEN APPROACH",
    rightDescription: "Using proven techniques, we build strategies that drive measurable outcomes.",
    rightStatNumber: "200%",
    rightStatText: "Growth in Conversion Rates on Average",
    rightStatColor: "bg-[#f12d3d]",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop",
  },
  // Little Other Things slides
  {
    id: "lot-1",
    category: "Little Other Things",
    leftTitle: "ATTENTION TO DETAIL",
    leftDescription:
      "We believe that small details make a big difference. Our meticulous approach ensures quality in every aspect.",
    leftStatNumber: "100%",
    leftStatText1: "Quality Assurance",
    leftStatText2: "Every Project",
    leftStatColor: "bg-[#4744a6]",
    rightTitle: "PERSONALIZED SERVICE",
    rightDescription: "Each client receives customized solutions tailored to their unique needs and goals.",
    rightStatNumber: "24/7",
    rightStatText: "Customer Support Available",
    rightStatColor: "bg-[#f12d3d]",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop",
  },
 
]

export default function ShowcaseSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % allSlides.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + allSlides.length) % allSlides.length)
  }

  const current = allSlides[currentIndex]

  return (
    <section className="w-full bg-[#f2cb05] py-16 md:py-24 px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto">
        {/* Section Title with category indicator */}
        <div className="text-center mb-18 py-6">
  <h3 className="
   
    text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#4744a6] mb-3 
  ">
    {current.category}
  </h3>
</div>


        {/* Slider Container */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0e0f26] mb-4">{current.leftTitle}</h3>
                <p className="text-sm md:text-base text-[#0e0f26] leading-relaxed mb-8">{current.leftDescription}</p>
              </div>

              {/* Left Stat Card */}
              <div className={`${current.leftStatColor} rounded-3xl p-6 w-fit text-white relative overflow-hidden`}>
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{current.leftStatNumber}</div>
                  <div className="text-sm md:text-base font-semibold">
                    {current.leftStatText1}
                    <br />
                    {current.leftStatText2}
                  </div>
                </div>
                {/* Decorative Element */}
                <div className="absolute top-4 right-4 bg-white bg-opacity-20 p-2 rounded-full">
                  <ArrowRight size={20} />
                </div>
                {/* Framer Shape - Bottom Right Curve */}
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Center Image with Framer Shapes */}
            <div className="relative flex justify-center items-center">
              {/* Top Framer Shape */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-black rounded-3xl opacity-50"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-black rounded-3xl opacity-50"></div>

              {/* Main Image Container with Rounded Corners */}
              <div className="relative w-full aspect-square max-w-sm">
                <img
                  src={current.image || "/placeholder.svg"}
                  alt="Showcase"
                  className="w-full h-full object-cover rounded-3xl"
                />

                {/* Decorative Frames */}
                <div className="absolute inset-0 rounded-3xl border-8 border-black border-opacity-20 pointer-events-none"></div>
              </div>

              {/* Bottom Framer Shape */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-black rounded-3xl opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-black rounded-3xl opacity-50"></div>
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0e0f26] mb-4">{current.rightTitle}</h3>
                <p className="text-sm md:text-base text-[#0e0f26] leading-relaxed mb-8">{current.rightDescription}</p>
              </div>

              {/* Right Stat Card */}
              <div className={`${current.rightStatColor} rounded-3xl p-6 w-fit text-white relative overflow-hidden`}>
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{current.rightStatNumber}</div>
                  <div className="text-sm md:text-base font-semibold">{current.rightStatText}</div>
                </div>
                {/* Decorative Element */}
                <div className="absolute top-4 right-4 bg-white bg-opacity-20 p-2 rounded-full">
                  <ArrowRight size={20} />
                </div>
                {/* Framer Shape - Bottom Right Curve */}
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Slider Controls */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-[#0e0f26] text-white hover:bg-[#4744a6] transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-[#0e0f26] text-white hover:bg-[#4744a6] transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {allSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-[#0e0f26] w-8" : "bg-[#0e0f26] bg-opacity-30 w-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
