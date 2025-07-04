"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import lmtPhoto from "@/images/lmtPhoto.jpg";
import { Button } from "@/components/ui/button"

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


// Individual statistic component with counter
function AnimatedStatistic({
  value,
  label,
  isVisible,
  delay,
}: {
  value: string
  label: string
  isVisible: boolean
  delay: string
}) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  const animatedValue = useCountAnimation(value, isVisible && hasMounted, 2000)

  return (
    <div
      className={`text-center lg:text-left transform transition-all duration-700 ease-out ${isVisible ? `translate-y-0 opacity-100 ${delay}` : "translate-y-8 opacity-0"
        }`}
    >
      <div className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-2 transition-colors duration-300 hover:text-blue-400 cursor-default tabular-nums">
        <span suppressHydrationWarning>
          {hasMounted ? animatedValue : "0"}
        </span>
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
        {label}
      </p>
    </div>
  )
}


export default function AboutUs() {
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

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">LUCKYMOTECH SERVICES LIMITED</h1>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light italic">solution based</h2>
            </div>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-md leading-relaxed">
              We are an award winning Agency with top notch services and actions. We have our clients living worldwide.
            </p>

            <Button
              variant="secondary"
              size="lg"
              className="bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 active:bg-gray-700 dark:active:bg-gray-200 rounded-full px-6 sm:px-8 py-2 sm:py-3 font-semibold text-sm sm:text-base transition-all duration-200 hover:scale-105 active:scale-95 transform touch-manipulation"
            >
              LEARN ABOUT US
            </Button>
          </div>

          {/* Right image */}
          <div
            className={`relative transform transition-all duration-800 ease-out delay-200 ${isLoaded ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
          >
            <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-xl sm:rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-100 transform will-change-transform shadow-lg dark:shadow-2xl">
              <Image
                src={lmtPhoto}
                alt="Professional working on laptop"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Statistics section */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {statistics.map((stat, index) => (
            <AnimatedStatistic
              key={index}
              value={stat.value}
              label={stat.label}
              isVisible={isVisible}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
