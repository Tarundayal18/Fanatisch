"use client"

import type React from "react"

import { useRef } from "react"

interface Card {
  id: number
  title: string
  description: string
  link: string
  logo?: string
}

interface BenefitCardProps {
  card: Card
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function BenefitCard({ card, onImageUpload }: BenefitCardProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  return (
    <div className="relative">
      <div className="bg-white rounded-2xl p-6 md:p-8 h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Logo Section */}
        <div className="mb-6 flex items-center justify-between">
          <div className="w-10 h-10 md:w-12 md:h-12 relative">
            <img src={card.logo || "/placeholder.svg"} alt={card.title} className="w-full h-full object-contain" />
          </div>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="text-[#5B6BE6] hover:text-[#4A59C4] transition-colors text-xs opacity-0 group-hover:opacity-100"
            title="Upload logo"
          >
            ✎
          </button>
          <input type="file" accept="image/*" ref={fileInputRef} onChange={onImageUpload} className="hidden" />
        </div>

        {/* Content */}
        <h3 className="text-xl md:text-2xl font-bold text-[#3D2817] mb-3">{card.title}</h3>

        <p className="text-sm md:text-base text-[#3D2817] mb-6 leading-relaxed">{card.description}</p>

        {/* Link */}
        <a
          href="#"
          className="inline-block text-[#5B6BE6] font-semibold text-sm md:text-base hover:text-[#4A59C4] transition-colors"
        >
          {card.link}
        </a>
      </div>
    </div>
  )
}
