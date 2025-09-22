import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Suspense } from "react"
import "./globals.css"
import LoadingScreen from "@/components/loading-screen"

const formula1 = localFont({
  src: [
    {
      path: "./fonts/Formula1-Regular-1.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Formula1-Bold_web.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Formula1-Bold-4.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Formula1-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Formula1-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Formula1-Wide.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-formula1",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Aditya Pandey | AI/ML Engineer & Data Scientist",
  description:
    "Final year AI/ML student passionate about building intelligent systems. Specializing in computer vision, data engineering, and autonomous AI agents.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${formula1.variable} antialiased`}>
      <body className="font-sans bg-background text-foreground">
        <Suspense fallback={<LoadingScreen />}>{children}</Suspense>
      </body>
    </html>
  )
}
