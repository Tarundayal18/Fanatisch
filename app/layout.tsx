


// import type React from "react"
// import type { Metadata } from "next"
// import { Geist } from "next/font/google"
// import localFont from "next/font/local"
// import { Analytics } from "@vercel/analytics/next"
// import "./globals.css"

// // Google font
// const _geist = Geist({ subsets: ["latin"] })

// // Local Lufga font
// const lufga = localFont({
//   src: [
//     {
//       path: "./../public/fonts/Lufga/LufgaRegular.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "./../public/fonts/Lufga/LufgaMedium.ttf",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "./../public/fonts/Lufga/LufgaSemiBold.ttf",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "./../public/fonts/Lufga/LufgaBold.ttf",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "./../public/fonts/Lufga/LufgaExtraBold.ttf",
//       weight: "800",
//       style: "normal",
//     },
//   ],
//   variable: "--font-lufga",
// })


// export const metadata: Metadata = {
//   title: "Fanatisch | Premium Web Design, UI/UX Strategy & Digital Innovation",
//   description:
//     "Fanatisch delivers premium web design and UI/UX solutions engineered for performance and aesthetics. Discover clean layouts, modern interfaces, and innovative digital experiences.",
//   generator: "v0.app",
//   icons: {
//     icon: [
//       { url: "/favicon.ico" },
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
//     <html lang="en" className={lufga.variable}>
//       <body className={`${_geist.className} ${lufga.variable} antialiased`}>
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
import Script from "next/script"
import "./globals.css"

// Google font
const _geist = Geist({ subsets: ["latin"] })

// Local Lufga font
const lufga = localFont({
  src: [
    { path: "./../public/fonts/Lufga/LufgaRegular.ttf", weight: "400", style: "normal" },
    { path: "./../public/fonts/Lufga/LufgaMedium.ttf", weight: "500", style: "normal" },
    { path: "./../public/fonts/Lufga/LufgaSemiBold.ttf", weight: "600", style: "normal" },
    { path: "./../public/fonts/Lufga/LufgaBold.ttf", weight: "700", style: "normal" },
    { path: "./../public/fonts/Lufga/LufgaExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-lufga",
})

export const metadata: Metadata = {
  title: "Fanatisch | Premium Web Design, UI/UX Strategy & Digital Innovation",
  description:
    "Fanatisch delivers premium web design and UI/UX solutions engineered for performance and aesthetics. Discover clean layouts, modern interfaces, and innovative digital experiences.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={lufga.variable}>
      <head>
        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '796641606744839');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* NoScript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=796641606744839&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>

      <body className={`${_geist.className} ${lufga.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
