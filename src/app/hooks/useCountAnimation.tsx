import { useEffect, useState } from "react"

// Custom hook for counting animation
export function useCountAnimation(endValue: string, isVisible: boolean, duration = 2000) {
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