"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import WhatWeOffer from "@/components/what-we-offer"
import OurBrands from "@/components/our-brands"
import Footer from "@/components/footer"
import HowItWorks from "@/components/how-it-works"
import ContactCTA from "@/components/contact-cta"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="bg-fanatisch-dark text-white overflow-hidden">
      {/* <Navigation /> */}
      <HeroSection scrollY={scrollY} />
      <WhatWeOffer scrollY={scrollY} />
      <OurBrands scrollY={scrollY} />
       <HowItWorks scrollY={scrollY} />
      <ContactCTA scrollY={scrollY} />
      <Footer />
    </main>
  )
}
