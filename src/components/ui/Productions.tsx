"use client"


import { Button } from "@/components/ui/button";
import prodPhoto from "@/images/productions.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Custom hook for counting animation
function useCountAnimation(endValue: string, isVisible: boolean, duration = 2000) {
  const [displayValue, setDisplayValue] = useState("0")
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!isVisible || hasAnimated) return

    setHasAnimated(true)

    const numericValue = Number.parseFloat(endValue.replace(/[^\d.]/g, ""))
    const suffix = endValue.replace(/[\d.]/g, "")

    let startTime: number
    let animationId: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime

      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = numericValue * easeOutQuart

      if (suffix.includes("M")) {
        setDisplayValue(`${Math.floor(currentValue)}M`)
      } else if (suffix.includes("%")) {
        setDisplayValue(`${Math.floor(currentValue)}%`)
      } else {
        setDisplayValue(Math.floor(currentValue).toString())
      }

      if (progress < 1) {
        animationId = requestAnimationFrame(animate)
      } else {
        setDisplayValue(endValue)
      }
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [endValue, isVisible, duration, hasAnimated])

  return displayValue
}





export default function Production() {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  // Set loaded state after component mounts
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    const currentRef = statsRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const statistics = [
    { value: "92%", label: "Talentank reach per week", delay: "delay-0" },
    
    { value: "280%", label: "Talentank reach per week", delay: "delay-100" },
    { value: "42M", label: "Talentank reach per week", delay: "delay-200" },
    { value: "94%", label: "Talentank reach per week", delay: "delay-300" },
  ]
  

  return (
    <section className="bg-white dark:bg-black text-gray-900 dark:text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Main content section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left content */}
          <div
            className={`space-y-6 transform transition-all duration-800 ease-out ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
          >
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">PRODUCTIONS</h1>
            </div>
          </div>

          {/* Right image */}
          <div
            className={`relative transform transition-all duration-800 ease-out delay-200 ${isLoaded ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
          >
            <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-xl sm:rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-100 transform will-change-transform shadow-lg dark:shadow-2xl">
              <Image
                src={prodPhoto}
                alt="Professional working on laptop"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

       
      </div>
      {/* Description paragraph */}
<div className="mt-16 flex justify-center">
  <p className="text-center text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
    At Talentank, our production strategy is focused on high-impact storytelling and data-driven content creation. 
    Every piece we produce—whether video, design, or interactive media—is crafted to connect deeply with audiences 
    and drive measurable engagement. Backed by creative talent and robust distribution, our production arm ensures 
    your message resonates across platforms while amplifying your brand’s voice at scale.
  </p>
</div>

    </section>
  )
}
