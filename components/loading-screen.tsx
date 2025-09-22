"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* PlayStation X icons */}
        <div className="absolute top-20 left-20 w-8 h-8 opacity-20 floating-icon-1">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-primary">
            <path d="M18.717 8.283L15.717 5.283C15.327 4.893 14.694 4.893 14.304 5.283L12 7.587L9.696 5.283C9.306 4.893 8.673 4.893 8.283 5.283L5.283 8.283C4.893 8.673 4.893 9.306 5.283 9.696L7.587 12L5.283 14.304C4.893 14.694 4.893 15.327 5.283 15.717L8.283 18.717C8.673 19.107 9.306 19.107 9.696 18.717L12 16.413L14.304 18.717C14.694 19.107 15.327 19.107 15.717 18.717L18.717 15.717C19.107 15.327 19.107 14.694 18.717 14.304L16.413 12L18.717 9.696C19.107 9.306 19.107 8.673 18.717 8.283Z" />
          </svg>
        </div>

        {/* PlayStation Triangle icons */}
        <div className="absolute top-40 right-32 w-6 h-6 opacity-15 floating-icon-2">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-secondary">
            <path d="M12 2L22 20H2L12 2Z" />
          </svg>
        </div>

        {/* F1 Logo placeholder */}
        <div className="absolute bottom-32 left-16 w-12 h-8 opacity-25 floating-icon-3">
          <div className="w-full h-full bg-primary rounded-sm flex items-center justify-center text-primary-foreground text-xs font-bold">
            F1
          </div>
        </div>

        {/* Le Mans Logo placeholder */}
        <div className="absolute top-60 left-1/2 w-10 h-10 opacity-20 floating-icon-4">
          <div className="w-full h-full bg-accent rounded-full flex items-center justify-center text-accent-foreground text-xs font-bold">
            LM
          </div>
        </div>

        {/* MotoGP Logo placeholder */}
        <div className="absolute bottom-20 right-20 w-8 h-8 opacity-30 floating-icon-5">
          <div className="w-full h-full bg-secondary rounded-sm flex items-center justify-center text-secondary-foreground text-xs font-bold">
            GP
          </div>
        </div>

        {/* Additional PlayStation X */}
        <div className="absolute top-1/3 right-16 w-6 h-6 opacity-15 floating-icon-6">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-muted-foreground">
            <path d="M18.717 8.283L15.717 5.283C15.327 4.893 14.694 4.893 14.304 5.283L12 7.587L9.696 5.283C9.306 4.893 8.673 4.893 8.283 5.283L5.283 8.283C4.893 8.673 4.893 9.306 5.283 9.696L7.587 12L5.283 14.304C4.893 14.694 4.893 15.327 5.283 15.717L8.283 18.717C8.673 19.107 9.306 19.107 9.696 18.717L12 16.413L14.304 18.717C14.694 19.107 15.327 19.107 15.717 18.717L18.717 15.717C19.107 15.327 19.107 14.694 18.717 14.304L16.413 12L18.717 9.696C19.107 9.306 19.107 8.673 18.717 8.283Z" />
          </svg>
        </div>
      </div>

      <div className="text-center space-y-8 z-10">
        {/* Racing-inspired logo/title */}
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-3 h-8 bg-primary rounded-sm"></div>
            <h1 className="text-4xl font-black text-primary tracking-wider">ADITYA PANDEY</h1>
            <div className="w-3 h-8 bg-primary rounded-sm"></div>
          </div>
          <p className="text-muted-foreground font-medium tracking-wide">AI/ML ENGINEER & DATA SCIENTIST</p>
        </div>

        {/* Racing-style progress bar */}
        <div className="w-80 mx-auto space-y-4">
          <div className="relative h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
            {/* Racing stripes effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          </div>

          {/* Progress percentage */}
          <div className="flex justify-between items-center text-sm font-bold">
            <span className="text-muted-foreground">LOADING</span>
            <span className="text-primary">{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Racing-inspired loading dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: "1s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
