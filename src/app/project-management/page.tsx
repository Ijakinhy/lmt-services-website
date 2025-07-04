"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  CheckCircle,
  Target,
  Lightbulb,
  Repeat,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SaasMarketingPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const contentSections = [
    {
      id: "content-strategy",
      title: "CONTENT STRATEGY",
      description:
        "At Genius, we believe that providing value-based financial services is the key to success. That's why we're committed to helping our clients achieve their financial goals through our comprehensive suite of services. Our content marketing strategy focuses on empowering users with the knowledge and tools they need to succeed financially.",
      icon: Target,
    },
    {
      id: "content-writing",
      title: "CONTENT WRITING",
      description:
        "Your website is often the first interaction potential customers have with your brand. We specialize in creating clear, persuasive, and engaging website content that communicates your value proposition, highlights your offerings, and encourages visitors to take action. From homepage copy to product descriptions, we craft content that converts visitors into customers and drives business growth through strategic messaging and increase conversions.",
      icon: Lightbulb,
    },
    {
      id: "content-repurposing",
      title: "CONTENT REPURPOSING",
      description:
        "Repurposing content allows you to extend the life and reach of your existing assets by turning them into different formats. We take your high-performing content and adapt it into new formats—such as infographics, videos, podcasts, or social media posts. This approach helps you reach new audiences, increase content efficiency, and maximize the value of your marketing efforts without starting from scratch.",
      icon: Repeat,
    },
  ];

  const approachPoints = [
    "The foundation of any successful project is a strong concept.",
    "We collaborate with you to understand your business goals and challenges.",
    "Our team develops innovative strategies that resonate with your audience.",
    "SEO-optimized content is essential for your search engine rankings.",
    "The foundation of any successful project is a strong concept.",
  ];

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      {/* Header */}
       <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className={`text-4xl sm:text-5xl lg:text-7xl font-bold mb-12 transform transition-all duration-800 ease-out ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            PROPERTY
            <br />
            MANAGEMENT
          </h1>

          {/* Hero Image */}
          <div
            className={`relative h-64 sm:h-80 lg:h-96 w-full rounded-2xl overflow-hidden mb-16 transform transition-all duration-800 ease-out delay-200 shadow-lg dark:shadow-2xl ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <Image
              src="/saas-hero.png"
              alt="SaaS Marketing geometric design"
              fill
              className="object-cover grayscale"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          {contentSections.map((section, index) => (
            <div
              key={section.id}
              className={`transform transition-all duration-800 ease-out ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <section.icon className="w-6 h-6 text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl font-bold tracking-wide">
                  {section.title}
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Turning Ideas Into Reality Section */}
       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div
              className={`relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden transform transition-all duration-800 ease-out shadow-lg dark:shadow-2xl ${
                isLoaded
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: "900ms" }}
            >
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Creative process visualization"
                fill
                className="object-cover grayscale"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div
              className={`space-y-6 transform transition-all duration-800 ease-out ${
                isLoaded
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: "1000ms" }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                TURNING IDEAS INTO REALITY
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                The foundation of any successful project is a strong concept. At
                Genius, we work closely with you to understand your business
                goals and challenges, then develop innovative strategies that
                resonate with your audience and drive meaningful results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-12 transform transition-all duration-800 ease-out ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "1100ms" }}
          >
            OUR APPROACH
          </h2>

          <div className="space-y-6">
            {approachPoints.map((point, index) => (
              <div
                key={index}
                className={`flex items-start space-x-4 transform transition-all duration-700 ease-out ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: `${1200 + index * 100}ms` }}
              >
                 <CheckCircle className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 dark:bg-blue-700 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
         <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Ready to Transform Your SaaS Marketing?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's work together to create a comprehensive marketing strategy
            that drives growth and delivers results for your SaaS business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-semibold bg-transparent transition-all duration-300 hover:scale-105"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Bottom Image Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div
             className={`relative h-48 sm:h-64 lg:h-80 rounded-2xl overflow-hidden transform transition-all duration-800 ease-out shadow-lg dark:shadow-2xl ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "1700ms" }}
          >
            <Image
              src="/placeholder.svg?height=300&width=800"
              alt="Modern workspace"
              fill
              className="object-cover grayscale"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
