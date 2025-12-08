// import type React from "react"
// // ... existing code ...
// import type { Metadata } from "next"
// import { Geist } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
// import "./globals.css"

// const _geist = Geist({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Fanatisch - Scale Your Brand Globally",
//   description: "Proven multi-brand strategies, rapid execution, and founder partnership for global brand domination.",
//   generator: "v0.app",
//   icons: {
//     icon: [
//       {
//         url: "/icon-light-32x32.png",
//         media: "(prefers-color-scheme: light)",
//       },
//       {
//         url: "/icon-dark-32x32.png",
//         media: "(prefers-color-scheme: dark)",
//       },
//       {
//         url: "/icon.svg",
//         type: "image/svg+xml",
//       },
//     ],
//     apple: "/apple-icon.png",
//   },
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${_geist.className} antialiased`}>
//         {children}
//         <Analytics />
//       </body>
//     </html>
//   )
// }


import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Google font
const _geist = Geist({ subsets: ["latin"] })

// Local Lufga font
const lufga = localFont({
  src: [
    {
      path: "./../public/fonts/Lufga/LufgaRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../public/fonts/Lufga/LufgaMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./../public/fonts/Lufga/LufgaSemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./../public/fonts/Lufga/LufgaBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./../public/fonts/Lufga/LufgaExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-lufga",
})


export const metadata: Metadata = {
  title: "Fanatisch",
  description:
    "Proven multi-brand strategies, rapid execution, and founder partnership for global brand domination.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={lufga.variable}>
      <body className={`${_geist.className} ${lufga.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
