"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image"; // ✅ this is the Next.js Image component
import servicesImage from "@/images/services.jpg"; // ✅ renamed to avoid conflict
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
  isVisible: boolean;
  delay: number;
}

function ServiceCard({
  title,
  description,
  slug,
  isVisible,
  delay,
}: ServiceCardProps) {
  return (
    <Link href={`/services/${slug}`} className="block">
      <div
        className={`group cursor-pointer transform transition-all duration-700 ease-out ${
          isVisible ? `translate-y-0 opacity-100` : "translate-y-8 opacity-0"
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className="flex items-start justify-between mb-4 group-hover:mb-6 transition-all duration-300">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
          <ArrowUpRight className="w-6 h-6 text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 flex-shrink-0 ml-4" />
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
        <div className="mt-4 h-px bg-gray-300 dark:bg-gray-800 group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition-colors duration-300"></div>
      </div>
    </Link>
  );
}

export default function OurServices() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  const services = [
    {
      title: "PROPERTY MANAGEMENT",
      description:
        "We offer a comprehensive range of property management services, including property monitoring, property maintenance.",
      slug: "property-management", // ✅ use kebab-case
    },
    {
      title: "ELECTRICAL SERVICES",
      description:
        "We offer a comprehensive range of electrical services, home installation, correcting wire bridge.",
      slug: "electrical-services", // ✅ match the slug you'll use in `servicesData`
    },
    {
      title: "FUMIGATION",
      description:
        "We offer a comprehensive range of fumigation, home fumigation, office fumigation.",
      slug: "fumigation", // ✅ if defined in servicesData
    },
    {
      title: "PROJECT MANAGEMENT",
      description:
        "We offer a comprehensive range of managing projects as well as contracts, home fumigation, office fumigation.",
      slug: "project-management", // ✅ if defined in servicesData
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-black text-gray-900 dark:text-white py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left content */}
          <div className="space-y-8">
            {/* Header */}
            <div
              className={`transform transition-all duration-800 ease-out ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-6 tracking-wider">
                /SERVICES
              </div>
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  EXPLORE
                </h1>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light italic">
                  our services
                </h2>
              </div>
            </div>

            {/* Image */}
            <div
              className={`transform transition-all duration-800 ease-out delay-200 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="relative h-64 sm:h-80 lg:h-96 w-full rounded-2xl overflow-hidden transition-transform duration-500 hover:scale-105 transform shadow-lg dark:shadow-2xl">
                <Image
                  src={servicesImage}
                  alt="Professional working on computer"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="space-y-8 lg:pt-16">
            {/* Top description */}
            <div
              className={`transform transition-all duration-800 ease-out delay-300 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
               <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed max-w-md ml-auto text-right">
                Explore our website to learn about our services and about your
                needs
              </p>
            </div>

            {/* Services */}
            <div ref={servicesRef} className="space-y-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  slug={service.slug}
                  isVisible={isVisible}
                  delay={400 + index * 200}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
