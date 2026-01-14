"use client"

import { useEffect, useState } from "react"
import HeroSection from "@/components/hero-section"
import WhatWeOffer from "@/components/what-we-offer"
import OurBrands from "@/components/our-brands"
import HowItWorks from "@/components/how-it-works"
import ContactCTA from "@/components/contact-cta"
import ShowcaseSlider from "@/components/showcase-slider"
import CenterCircleSection from "@/components/centercircle"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="bg-fanatisch-dark text-white overflow-hidden">
      <HeroSection scrollY={scrollY} />
      <WhatWeOffer scrollY={scrollY} />
      {/* <CenterCircleSection /> */}
      <OurBrands />
       <HowItWorks scrollY={scrollY} />
       <ShowcaseSlider />
      <ContactCTA scrollY={scrollY} />
    </main>
  )
}
