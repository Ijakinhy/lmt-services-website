import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Target, TrendingUp, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceData {
  title: string
  description: string
  longDescription: string
  features: string[]
  benefits: string[]
  process: { step: string; description: string }[]
  pricing: { plan: string; price: string; features: string[] }[]
}

const servicesData: Record<string, ServiceData> = {
  "property-management": {
    title: "Property Management",
    description: "Comprehensive digital marketing solutions for SaaS companies",
    longDescription:
      "Our Property Management services are designed to help companies scale and manage their user equipments, improve retention, and maximize lifetime value. We understand the unique challenges of property management based on products and provide tailored strategies that drive sustainable growth.",
    features: [
      "Search Engine Optimization (SEO)",
      "Content Marketing Strategy",
      "Pay-Per-Click (PPC) Advertising",
      "Email Marketing Automation",
      "Conversion Rate Optimization",
      "Analytics & Performance Tracking",
    ],
    benefits: [
      "Increased organic traffic and visibility",
      "Higher conversion rates and lead quality",
      "Reduced customer acquisition costs",
      "Improved customer lifetime value",
      "Data-driven marketing decisions",
      "Scalable growth strategies",
    ],
    process: [
      {
        step: "Discovery & Analysis",
        description: "We analyze your current marketing efforts, target audience, and competitive landscape.",
      },
      {
        step: "Strategy Development",
        description: "Create a comprehensive marketing strategy tailored to your SaaS business goals.",
      },
      {
        step: "Implementation",
        description: "Execute campaigns across multiple channels with continuous monitoring and optimization.",
      },
      {
        step: "Optimization & Scaling",
        description: "Analyze performance data and scale successful campaigns while optimizing underperforming ones.",
      },
    ],
    pricing: [
      {
        plan: "Starter",
        price: "$2,500/month",
        features: ["SEO Optimization", "Content Marketing", "Basic Analytics", "Email Support"],
      },
      {
        plan: "Growth",
        price: "$5,000/month",
        features: ["Everything in Starter", "PPC Campaigns", "Advanced Analytics", "Dedicated Manager"],
      },
      {
        plan: "Enterprise",
        price: "Custom",
        features: ["Everything in Growth", "Custom Integrations", "Priority Support", "Strategic Consulting"],
      },
    ],
  },
  "social-ads": {
    title: "Social Media Advertising",
    description: "Targeted social media advertising campaigns that drive results",
    longDescription:
      "Our social media advertising services help businesses reach their ideal customers across all major social platforms. We create compelling ad campaigns that not only capture attention but drive meaningful engagement and conversions.",
    features: [
      "Facebook & Instagram Advertising",
      "LinkedIn B2B Campaigns",
      "Twitter/X Advertising",
      "TikTok Marketing",
      "Creative Design & Copywriting",
      "Audience Targeting & Segmentation",
    ],
    benefits: [
      "Precise audience targeting",
      "Increased brand awareness",
      "Higher engagement rates",
      "Improved ROI on ad spend",
      "Real-time campaign optimization",
      "Cross-platform consistency",
    ],
    process: [
      {
        step: "Audience Research",
        description: "Identify and analyze your target audience across different social platforms.",
      },
      {
        step: "Creative Development",
        description: "Design compelling ad creatives and copy that resonate with your audience.",
      },
      {
        step: "Campaign Launch",
        description: "Launch targeted campaigns with proper tracking and monitoring systems in place.",
      },
      {
        step: "Performance Optimization",
        description: "Continuously optimize campaigns based on performance data and audience feedback.",
      },
    ],
    pricing: [
      {
        plan: "Basic",
        price: "$1,500/month",
        features: ["2 Platforms", "Basic Targeting", "Monthly Reports", "Email Support"],
      },
      {
        plan: "Professional",
        price: "$3,500/month",
        features: ["4 Platforms", "Advanced Targeting", "Weekly Reports", "Phone Support"],
      },
      {
        plan: "Premium",
        price: "$6,500/month",
        features: ["All Platforms", "Custom Audiences", "Daily Reports", "Dedicated Account Manager"],
      },
    ],
  },
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug]

  if (!service) {
    notFound()
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">{service.title}</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{service.description}</p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Service Overview</h2>
          <p className="text-lg text-gray-300 leading-relaxed">{service.longDescription}</p>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Zap className="w-6 h-6 mr-3 text-blue-400" />
                What's Included
              </h3>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Target className="w-6 h-6 mr-3 text-blue-400" />
                Key Benefits
              </h3>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
          <div className="space-y-8">
            {service.process.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-4">
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{step.step}</h4>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.pricing.map((plan, index) => (
              <div
                key={index}
                className={`bg-gray-900 rounded-2xl p-8 ${index === 1 ? "ring-2 ring-blue-500 scale-105" : ""}`}
              >
                <h4 className="text-xl font-bold mb-4">{plan.plan}</h4>
                <div className="text-3xl font-bold mb-6 text-blue-400">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    index === 1 ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-700 hover:bg-gray-600"
                  } transition-colors duration-200`}
                >
                  Choose Plan
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how our {service.title.toLowerCase()} services can help grow your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold">
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-semibold bg-transparent"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function generateStaticParams() {
  return [{ slug: "property-management" }, { slug: "social-ads" }]
}
