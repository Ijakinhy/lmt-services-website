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
        className={`group cursor-pointer transform transition-all duration-700 ease-out ${isVisible ? `translate-y-0 opacity-100` : "translate-y-8 opacity-0"
          }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className="flex items-start justify-between mb-4 group-hover:mb-6 transition-all duration-300">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
            {title}
          </h3>
          <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 flex-shrink-0 ml-4" />
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

    const currentRef = servicesRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const services = [
    {
      title: "PROJECT MANAGEMENT",
      description:
        "We offer a comprehensive range of managing projects as well as contracts.",
      slug: "project-management",
    },
       {
      title: "PROPERTY MANAGEMENT",
      description:
        "We offer a comprehensive range of property management services, including property monitoring, property maintenance.",
      slug: "property-management",
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
      slug: "fumigation",
    },
    
    {
      title: "SALES REPRESENTATIVE",
      description:
        "We offer a comprehensive range of sales representatives in marketing products other kind of business sectors.",
      slug: "sales-representative",
    },
    {
      title: "INDUSTRIAL/HOUSE CLEAN_UP",
      description:
        "We offer a comprehensive range of industrial/house-clean_up for houses, offices, environment well fairs and other areas of activity",
      slug: "industrial/house-clean_up",
    },
    {
      title: "MUSHROOM PRODUCTION",
      description:
        "We offer a comprehensive range of toilet infection control for houses, offices, environment well fairs and other areas of activity",
      slug: "mushroom-production",
    },
    {
      title: "GENERAL CONTRACT",
      description:
        "We offer a comprehensive range of general contract for other areas of activity",
      slug: "general-contract",
    },
    {
      title: "FACILITY MANAGEMENT",
      description:
        "We offer a comprehensive range of general contract for other areas of activity",
      slug: "facility-management",
    },
    {
      title: "LABOUR SUPPLY",
      description:
        "We offer a comprehensive range of general contract for other areas of activity",
      slug: "labour-supply",
    },
  ];

  return (
       <section
      id="services-section"
      className="bg-gray-50 dark:bg-black text-gray-900 dark:text-white py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-12">
          {/* Left content */}
          <div
            className={`transform transition-all duration-800 ease-out ${isLoaded
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

          {/* Top description */}
          <div
            className={`transform transition-all duration-800 ease-out delay-200 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
          >
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed max-w-md">
              Explore our website to learn about our services and about your needs
            </p>
          </div>
        </div>

        {/* Hero Image - Moved to top */}
        <div
          className={`mb-12 transform transition-all duration-800 ease-out delay-300 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="relative h-64 sm:h-80 lg:h-96 w-full rounded-2xl overflow-hidden transition-transform duration-500 hover:scale-105 transform shadow-lg dark:shadow-2xl">
            <Image
              src={servicesImage}
              alt="Professional working on computer"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
              priority
            />
          </div>
        </div>

        {/* Services Grid - Changed from vertical to rectangular grid */}
        <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              slug={service.slug}
              isVisible={isVisible}
              delay={400 + index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
