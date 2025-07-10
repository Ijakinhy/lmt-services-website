"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, ChevronRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Works from "@/components/ui/works"

interface Service {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  features: string[]
  benefits: string[]
  slug: string
}

interface ServiceCardProps {
  service: Service
  isExpanded: boolean
  onToggle: () => void
  delay: number
  isVisible: boolean
}

function ServiceCard({ service, isExpanded, onToggle, delay, isVisible }: ServiceCardProps) {
  return (
    <div
       className={`bg-neutral-900 rounded-none border-none overflow-hidden transition-all duration-500 ease-out transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${isExpanded ? "shadow-2xl scale-[1.01] sm:scale-[1.02]" : "hover:shadow-xl hover:scale-[1.005] sm:hover:scale-[1.01]"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Main Card Content - Darker Solid Styling */}
         <div className="p-4 sm:p-6 lg:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-2 sm:mb-3 leading-tight break-words">
              {service.title}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed pr-2">{service.shortDescription}</p>
          </div>

          <button
            onClick={onToggle}
            className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-gray-700 hover:border-gray-600 active:border-gray-500 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group touch-manipulation"
            aria-label={isExpanded ? "Collapse service details" : "Expand service details"}
          >
            {isExpanded ? (
                 <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-gray-300 group-active:text-gray-200 transition-colors duration-300" />
            ) : (
                   <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-gray-300 group-active:text-gray-200 transition-colors duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Expanded Content - Mobile Optimized with Better Button Visibility */}
      {/* Expanded Content - Darker Styling */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${
           isExpanded ? "max-h-[700px] sm:max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
           <div className="px-4 sm:px-6 lg:px-8 pb-6 sm:pb-6 lg:pb-8 border-t border-gray-800 dark:border-gray-700">
          <div className="pt-4 sm:pt-6 space-y-4 sm:space-y-6">
            {/* Full Description */}
            <div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{service.fullDescription}</p>
            </div>

              {/* Features & Benefits Grid - Mobile Responsive */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Key Features */}
              <div>
                <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-gray-400 text-xs sm:text-sm flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">Benefits:</h4>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-400 text-xs sm:text-sm flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                       <span className="leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button - Enhanced Mobile Visibility */}
            <div className="pt-4 sm:pt-4 flex justify-center sm:justify-start">
              <Button
                asChild
                     size="lg"
                 className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-8 py-4 sm:px-8 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation text-base sm:text-base shadow-xl hover:shadow-2xl border-2 border-blue-500 hover:border-blue-400"
              >
                   <Link href={`/services/${service.slug}`} className="flex items-center justify-center">
                  <span className="mr-2">Click for more details</span>
                       <ArrowUpRight className="w-5 h-5 flex-shrink-0" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    // Trigger visibility after a short delay for stagger effect
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const services: Service[] = [
    {
      id: "property-management",
      title: "PROPERTY MANAGEMENT",
      shortDescription:
        "We offer a comprehensive range of property management services, including property monitoring, property maintenance.",
      fullDescription:
        "property management strategy focuses on creating valuable, relevant management that attracts and engages your target audience. We develop comprehensive property management strategies that drive organic traffic, build brand authority, and convert visitors into customers through strategic storytelling and data-driven insights.",
      features: [
        "Tenant Management",
        "Tenant screening (background, credit, rental history)",
        "Lease Management",
        "Lease tracking (start/end dates, renewals)",

      ],
      benefits: [
        "Maximizing rental income through efficient rent collection and low vacancy.",
        "Owners spend less time on day-to-day operations.",
        "Ensures compliance with housing laws, reducing risk of fines or lawsuits.",
        "Preventive maintenance reduces costly repairs and keeps tenants satisfied.",
      ],
      slug: "property-management",
    },
    {
      id: "electrical-services",
      title: "ELECTRICAL SERVICES",
      shortDescription:
        "We offer a comprehensive range of electrical services, home installation, correcting wire bridge.",
      fullDescription:
        "Specialized electrical services companies.",
      features: [
        "Electrical Installation",
        "Installation of outlets, switches, panels, lighting systems",
        "Electrical Repairs & Maintenance",
        "Troubleshooting faulty systems",
      

      ],
      benefits: [
        "Safety",
        "Prevents electrical fires, shocks, and equipment failure through professional installation and maintenance.",
        "Reliability",
        "Ensures consistent and uninterrupted power supply, especially in critical operations (e.g., hospitals, businesses).",
        "Energy Efficiency",
      ],
      slug: "electrical-services",
    },
    {
      id: "fumigation",
      title: "FUMIGATION",
      shortDescription:
        "We offer a comprehensive range of fumigation, home fumigation, office fumigation.",
      fullDescription:
        "Targeted social media advertising campaigns across all major platforms. We create compelling ad creatives, optimize targeting parameters, and continuously refine campaigns to maximize ROI while building brand awareness and driving conversions through strategic social media presence.",
      features: [
        "Use of Gaseous Chemicals",
        "Fumigation uses volatile or gaseous pesticides (fumigants) to eliminate pests in enclosed areas.",
        "Total Penetration",
        "The gas can penetrate cracks, crevices, and porous materials that conventional sprays cannot reach.",
        "Enclosed Space Requirement",
      ],
      benefits: [
        "Comprehensive Pest Control",
        "Eliminates pests at all life stages (eggs, larvae, pupae, adults)",
        "Prevention of Structural Damage",
        "Protects buildings and structures from pests like termites, wood borers, and rodents",
        "Improved Food Safety & Storage",
      ],
      slug: "fumigation",
    },
    {
      id: "industrial/house-clean_up",
      title: "INDUSTRIAL/HOUSE CLEAN_UP",
      shortDescription:
        "We offer a comprehensive range of industrial/house-clean_up for houses, offices, environment well fairs and other areas of activity",
      fullDescription:
        "Comprehensive Handling of hazardous materials according to environmental regulations.",
      features: [
        "Deep Cleaning",
        "Thorough cleaning of all surfaces, equipment, furniture, walls, and hard-to-reach areas.",
        "Collection, sorting, and safe disposal of industrial and household waste.",
        "Disinfection & Sanitization",
        "High-touch surface sanitization for health safety.",
      ],
      benefits: [
        "Healthier Living Environment: Reduces allergens, bacteria, and viruses.",
        "Improved Indoor Air Quality: Removal of dust, mold, and odor",
        "Better Aesthetics: Clean, tidy, and pleasant-looking space",
        "Stress Reduction: Saves time and effort, giving peace of mind",
      ],
      slug: "industrial/house-clean_up",
    },
    {
      id: "project-management",
      title: "PROJECT MANAGEMENT",
      shortDescription:
        "We offer a comprehensive range of managing projects as well as contracts.",
      fullDescription:
        "Comprehensive project management handlinga and structuring for better performance",
      features: [
        "Project Planning",
        "Task Management",
        "Resource Management",
        "Time Management",
        "Communication Management",
      ],
      benefits: [
        "Improved Efficiency",
        "Clear focus and Objectives",
        "Better Resource Utilization",
        "Effective Risk Management",
        "Cost and Time Control",
      ],
      slug: "project-management",
    },
  ]

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
  }

  return (
    <div className="min-h-screen bg-black text-white relative">

       {/* Hero Section - Increased Mobile Padding */}
      <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-44 pb-16 sm:pb-20 lg:pb-24 xl:pb-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              CREATIVE DESIGN
            </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light italic text-gray-300 mb-6 sm:mb-8">
              solution for brands
            </p>
          </div>
        </div>
      </section>

       <section className="pb-12 sm:pb-16 lg:pb-20 xl:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              isExpanded={expandedService === service.id}
              onToggle={() => toggleService(service.id)}
              delay={300 + index * 150}
              isVisible={isVisible}
            />
          ))}
        </div>
      </section>
      < Works />
    </div>
  )
}
