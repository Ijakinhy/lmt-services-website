import ServicePricingCard from "@/components/service-pricing-card"
import { servicesData } from "@/lib/services"
import { CheckCircle, Target, TrendingUp, Zap } from "lucide-react"
import { notFound } from "next/navigation"


export default function ServiceDetailPage() {
  const service = servicesData["property-management"]

  if (!service) {
    notFound()
  }

  return (
    <div className="bg-black text-white min-h-screen">
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
                {" What's Included"}
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
          <ServicePricingCard service={service.pricing} />
        </div>
      </section>
    </div>
  )
}

