import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle, Target, TrendingUp, Zap, Calendar, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"


interface ProductionData {
  title: string
  category: string
  description: string
  longDescription: string
  client: string
  year: string
  duration: string
  team: string[]
  challenges: string[]
  solutions: string[]
  results: string[]
  technologies: string[]
  images: string[]
  testimonial?: {
    quote: string
    author: string
    position: string
  }
}

const productionsData: Record<string, ProductionData> = {
  "Mushroom-production": {
    title: "MUSHROOM-PRODUCTION",
    category: "Mushroom production",
    description: "Comprehensive content marketing strategy that transformed Kuartha's digital presence",
    longDescription:
      "We developed a comprehensive content marketing strategy for Kuartha that focused on building brand authority, engaging their target audience, and driving meaningful conversions. Our approach combined strategic content planning, SEO optimization, and multi-channel distribution to create a cohesive brand narrative that resonated with their audience and delivered measurable results.",
    client: "Mushroom Technologies",
    year: "2024",
    duration: "6 months",
    team: ["Content Strategist", "SEO Specialist", "Supervisor", "Nurture care"],
    challenges: [
      "Low brand awareness in competitive market",
      "Inconsistent messaging across platforms",
      "Limited organic reach and engagement",
      "Difficulty converting visitors to customers",
    ],
    solutions: [
      "Developed comprehensive content strategy and calendar",
      "Created consistent brand voice and messaging guidelines",
      "Implemented SEO-optimized content across all channels",
      "Designed conversion-focused content funnels",
    ],
    results: [
      "300% increase in organic website traffic",
      "150% improvement in social media engagement",
      "85% increase in qualified leads",
      "40% boost in conversion rates",
    ],
    technologies: ["NUXT", "SERVER_SIDE"],
    images: [
     
    ],
    testimonial: {
      quote:
        "The content marketing strategy developed by this team completely transformed our digital presence. We saw immediate improvements in engagement and lead quality.",
      author: "Sarah Johnson",
      position: "Marketing Director, Kuartha Technologies",
    },
  },
  "unex-saas-marketing": {
    title: "UNEX SAAS MARKETING",
    category: "SaaS Marketing",
    description: "Complete SaaS marketing transformation driving user acquisition and retention",
    longDescription:
      "UNEX needed a comprehensive SaaS marketing strategy to scale their user acquisition and improve retention rates. We implemented a data-driven approach that included product-led growth strategies, conversion optimization, and automated email sequences to create a sustainable growth engine for their subscription-based business.",
    client: "UNEX Software Solutions",
    year: "2024",
    duration: "8 months",
    team: ["SaaS Marketing Specialist", "Growth Hacker", "UX Designer", "Data Analyst"],
    challenges: [
      "High customer acquisition costs",
      "Low trial-to-paid conversion rates",
      "Significant user churn in first 30 days",
      "Limited product-market fit validation",
    ],
    solutions: [
      "Implemented product-led growth strategies",
      "Optimized onboarding and trial experience",
      "Created targeted email automation sequences",
      "Developed comprehensive analytics dashboard",
    ],
    results: [
      "60% reduction in customer acquisition cost",
      "280% increase in trial-to-paid conversions",
      "45% decrease in early-stage churn",
      "200% growth in monthly recurring revenue",
    ],
    technologies: ["HubSpot", "Mixpanel", "Intercom", "Hotjar", "Stripe"],
    images: [
      "/placeholder.svg?height=400&width=600&text=UNEX+Dashboard",
      "/placeholder.svg?height=300&width=400&text=User+Onboarding",
      "/placeholder.svg?height=300&width=400&text=Email+Campaigns",
      "/placeholder.svg?height=300&width=400&text=Growth+Metrics",
    ],
    testimonial: {
      quote:
        "Working with this team was a game-changer for our SaaS business. They helped us build a scalable growth engine that continues to drive results.",
      author: "Michael Chen",
      position: "CEO, UNEX Software Solutions",
    },
  },
}

export default function ProductionDetailPage({ params }: { params: { slug: string } }) {
  const production = productionsData[params.slug]

  if (!production) {
    notFound()
  }

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      

      {/* Header */}
      <header className="pt-20 pb-8 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/productions"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Productions
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-blue-600 dark:bg-blue-500 text-white text-sm font-medium rounded-full">
              {production.category}
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">{production.year}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{production.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">{production.description}</p>
        </div>
      </header>

      {/* Hero Image */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg dark:shadow-2xl">
            <Image
              src={production.images[0] || "/placeholder.svg"}
              alt={production.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            />
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Project Overview</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">{production.longDescription}</p>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Calendar className="w-8 h-8 text-blue-500 dark:text-blue-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Duration</h3>
              <p className="text-gray-600 dark:text-gray-300">{production.duration}</p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-blue-500 dark:text-blue-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Client</h3>
              <p className="text-gray-600 dark:text-gray-300">{production.client}</p>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 text-blue-500 dark:text-blue-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Category</h3>
              <p className="text-gray-600 dark:text-gray-300">{production.category}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Challenges */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Target className="w-6 h-6 mr-3 text-red-500" />
                Challenges
              </h3>
              <ul className="space-y-4">
                {production.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-300">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Zap className="w-6 h-6 mr-3 text-blue-500 dark:text-blue-400" />
                Solutions
              </h3>
              <ul className="space-y-4">
                {production.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
            <TrendingUp className="w-8 h-8 mr-3 text-green-500" />
            Results Achieved
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {production.results.map((result, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg transition-colors duration-300"
              >
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="font-semibold text-green-600 dark:text-green-400">Success Metric</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {production.testimonial && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 dark:bg-blue-700 transition-colors duration-300">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-xl sm:text-2xl font-light text-white mb-8 italic">
              "{production.testimonial.quote}"
            </blockquote>
            <div className="text-blue-100">
              <div className="font-semibold text-lg">{production.testimonial.author}</div>
              <div className="text-blue-200">{production.testimonial.position}</div>
            </div>
          </div>
        </section>
      )}

      {/* Image Gallery */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {production.images.slice(1).map((image, index) => (
              <div
                key={index}
                className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${production.title} - Image ${index + 2}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 bg-transparent"
            >
              <Link href="/productions">View More Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function generateStaticParams() {
  return [
    { slug: "Mushroom-production" },
    { slug: "unex-saas-marketing" },
    { slug: "digicom-content-marketing" },
    { slug: "humix-social-ads-marketing" },
    { slug: "brand-strategy-campaign" },
    { slug: "digital-transformation" },
  ]
}
