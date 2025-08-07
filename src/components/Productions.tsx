"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import type { StaticImageData } from "next/image"

import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import mushPhoto from "@/images/mushroom.jpg";

interface ProductionItem {
  id: string
  title: string
  category: string
  image: string | StaticImageData
  slug: string
}

export default function OnsiteProductions() {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const productionsRef = useRef<HTMLDivElement>(null)

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

    if (productionsRef.current) {
      observer.observe(productionsRef.current)
    }

    return () => {
      if (productionsRef.current) {
        observer.unobserve(productionsRef.current)
      }
    }
  }, [])

  const productions: ProductionItem[] = [
    {
      id: "Mushroom-production",
      title: "MUSHROOM PRODUCTION",
      category: "Mushroom production",
      image: mushPhoto,
      slug: "Mushroom-production",
    },
    {
      id: "unex-saas",
      title: "UNEX SAAS MARKETING",
      category: "SaaS Marketing",
      image: "/placeholder.svg?height=300&width=400",
      slug: "unex-saas-marketing",
    },
    {
      id: "digicom-content",
      title: "DIGICOM CONTENT MARKETING",
      category: "Content Marketing",
      image: "/placeholder.svg?height=300&width=400",
      slug: "digicom-content-marketing",
    },
    {
      id: "humix-social",
      title: "HUMIX SOCIAL AD'S MARKETING",
      category: "Social Media",
      image: "/placeholder.svg?height=300&width=400",
      slug: "humix-social-ads-marketing",
    },
    {
      id: "brand-strategy",
      title: "BRAND STRATEGY CAMPAIGN",
      category: "Brand Strategy",
      image: "/placeholder.svg?height=300&width=400",
      slug: "brand-strategy-campaign",
    },
    {
      id: "digital-transformation",
      title: "DIGITAL TRANSFORMATION",
      category: "Digital Marketing",
      image: "/placeholder.svg?height=300&width=400",
      slug: "digital-transformation",
    },
  ]

  return (
      <section
      id="productions-section"
      className="bg-black text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div
            className={`transform transition-all duration-800 ease-out ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-4">
              PRODUCTIONS
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light italic text-gray-300 mb-8">our recent productions</h2>
          </div>
        </div>

        {/* Productions Grid */}
        <div ref={productionsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {productions.map((production, index) => (
            <Link key={production.id} href={`/productions/${production.slug}`} className="group block">
              <div
                className={`transform transition-all duration-700 ease-out ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden mb-4 transition-transform duration-500 group-hover:scale-105 shadow-lg hover:shadow-2xl will-change-transform">
                  <Image
                    src={production.image || "/placeholder.svg"}
                    alt={production.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading={index < 3 ? "eager" : "lazy"}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100">
                      <div className="bg-white/90 rounded-full p-3 sm:p-4">
                        <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-600/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                      {production.category}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                    {production.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center transform transition-all duration-800 ease-out delay-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation"
          >
            <Link href="/productions">
              <span className="mr-2">VIEW ALL PRODUCTIONS</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
