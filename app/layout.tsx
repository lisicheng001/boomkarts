import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: "Boom Karts - Super Fun Racing Game for Kids!",
  description:
    "🏎️ Join the most exciting kart racing adventure! Race, jump, and have amazing fun with Boom Karts - the coolest online racing game for kids and families!",
  keywords: "Boom Karts, kids racing game, fun online games, family games, kart racing, safe games for children",
  authors: [{ name: "Boom Karts Team" }],
  creator: "Boom Karts",
  publisher: "Boom Karts",
  robots: "index, follow",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  openGraph: {
    title: "Boom Karts - Super Fun Racing Game for Kids!",
    description: "🏎️ Join the most exciting kart racing adventure! Race, jump, and have amazing fun with Boom Karts!",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://boomkarts.com",
    siteName: "Boom Karts",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boom Karts - Super Fun Racing Game for Kids!",
    description: "🏎️ Join the most exciting kart racing adventure! Race, jump, and have amazing fun!",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://boomkarts.com",
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${workSans.variable} ${openSans.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
