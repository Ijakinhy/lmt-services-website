"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import type React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import propertyManagementImage from "@/images/property-management.jpg";
import fumigationImage from "@/images/fumigation.png"
import electricalImage from "@/images/electrical-services.png"
import projectImage from "@/images/project-management.png"
import MushroomPro from "@/images/mushroom.jpg"
import Link from "next/link";
import { ChevronLeft, ChevronRight, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WorkItem {
  id: string;
  title: string;
  category: string;
  image: StaticImageData; 
  description: string;
  technologies: string[];
  liveUrl?: string;
  caseStudyUrl?: string;
}

interface WorkModalProps {
  work: WorkItem | null;
  isOpen: boolean;
  onClose: () => void;
}

function WorkModal({ work, isOpen, onClose }: WorkModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Prevent iOS bounce scrolling
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.position = "unset";
      document.body.style.width = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.position = "unset";
      document.body.style.width = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !work) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 ease-out"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 rounded-full transition-colors duration-200 touch-manipulation"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Image */}
        <div className="relative h-48 sm:h-64 lg:h-80">
          <Image
            src={work.image || "/placeholder.svg"}
            alt={work.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            priority
          />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="mb-4">
            <span className="text-xs sm:text-sm font-medium text-blue-500 dark:text-blue-400 uppercase tracking-wider">
              {work.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-2">
              {work.title}
            </h2>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
            {work.description}
          </p>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {work.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            {work.liveUrl && (
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105 active:scale-95 touch-manipulation"
              >
                <a
                  href={work.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live Site
                </a>
              </Button>
            )}
            {work.caseStudyUrl && (
              <Button
                asChild
                variant="outline"
                className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 active:bg-gray-100 dark:active:bg-gray-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105 active:scale-95 bg-transparent touch-manipulation"
              >
                <Link href={work.caseStudyUrl}>View Case Study</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Works() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Detect mobile and set loaded state
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    setIsLoaded(true);

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const works: WorkItem[] = [
    {
      id: "property-management",
      title: "PROPERTY MANAGEMENT",
      category: "Property Management",
      image: propertyManagementImage,
      description:
        "A comprehensive SaaS marketing campaign that increased user acquisition by 280% and improved conversion rates through strategic content marketing and SEO optimization.",
      technologies: ["SEO", "Content Marketing", "Analytics", "A/B Testing"],
      liveUrl: "https://example.com",
      caseStudyUrl: "/case-studies/unex-saas",
    },
    {
      id: "electrical-services",
      title: "ELECTRICAL SERVICES",
      category: "Electrical Services",
      image: electricalImage,
      description:
        "Developed a content strategy that generated 42M impressions and established thought leadership in the digital commerce space through strategic storytelling.",
      technologies: [
        "Content Strategy",
        "Social Media",
        "Video Production",
        "Copywriting",
      ],
      liveUrl: "https://example.com",
      caseStudyUrl: "/case-studies/digicom-content",
    },
    {
      id: "fumigation",
      title: "FUMIGATION",
      category: "Fumigation",
      image: fumigationImage,
      description:
        "Created high-converting social media ad campaigns across multiple platforms, achieving a 94% client satisfaction rate and significant ROI improvements.",
      technologies: [
        "Facebook Ads",
        "Instagram Marketing",
        "LinkedIn Ads",
        "Creative Design",
      ],
      liveUrl: "https://example.com",
      caseStudyUrl: "/case-studies/humix-social",
    },
    {
      id: "project-management",
      title: "PROJECT MANAGEMENT",
      category: "Project Management",
      image: projectImage,
      description:
        "Complete brand transformation including visual identity, messaging strategy, and market positioning that resulted in 150% increase in brand recognition.",
      technologies: [
        "Brand Strategy",
        "Visual Design",
        "Market Research",
        "Brand Guidelines",
      ],
      liveUrl: "https://example.com",
      caseStudyUrl: "/case-studies/helon-branding",
    },
    {
      id: "mushroom-production",
      title: "MUSHROOM PRODUCTION",
      category: "Mushroom Production",
      image:MushroomPro,
      description:
        "Mushroom production is an essencial areas of agricultural practice that is not common this verious areas of vegitaion.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://example.com",
      caseStudyUrl: "/case-studies/techflow-web",
    },
  ];

  // Responsive items per view
  const itemsPerView = isMobile ? 1 : 3;
  const maxIndex = Math.max(0, works.length - itemsPerView);

  // Optimized slide functions with transition state
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 300); // Match CSS transition duration
  }, [maxIndex, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setTimeout(() => setIsTransitioning(false), 300);
  }, [maxIndex, isTransitioning]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const openModal = (work: WorkItem) => {
    setSelectedWork(work);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWork(null);
  };

  // Auto-play functionality (optional)
  useEffect(() => {
    if (isMobile) return; // Disable auto-play on mobile

    const interval = setInterval(() => {
      if (!isModalOpen && !isTransitioning) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide, isModalOpen, isTransitioning, isMobile]);

  return (
    <>
      <section className="bg-white dark:bg-black text-gray-900 dark:text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-8 sm:mb-12">
            {/* Left content */}
            <div
              className={`transform transition-all duration-800 ease-out ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 sm:mb-6 tracking-wider">
                /WORKS
              </div>
              <div className="space-y-1 sm:space-y-2">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-tight">
                  SOME WORKS OF
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light italic leading-tight">
                  our beloved company
                </h2>
              </div>
            </div>

            {/* Explore All Button */}
            <div
              className={`transform transition-all duration-800 ease-out delay-200 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <Button
                variant="secondary"
                className="bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 active:bg-gray-700 dark:active:bg-gray-200 rounded-full px-4 sm:px-6 py-2 sm:py-3 font-semibold transition-all duration-200 hover:scale-105 active:scale-95 touch-manipulation text-sm sm:text-base"
              >
                EXPLORE ALL
              </Button>
            </div>
          </div>

          {/* Navigation and Slider Container */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            {/* Navigation Buttons - Hidden on mobile, shown on desktop */}
            <div
              className={`hidden sm:flex gap-4 transform transition-all duration-800 ease-out delay-300 ${
                isLoaded
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
            >
              <button
                onClick={prevSlide}
                disabled={isTransitioning}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-700 transition-colors duration-200 disabled:opacity-50 touch-manipulation"
                aria-label="Previous work"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={nextSlide}
                disabled={isTransitioning}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-700 transition-colors duration-200 disabled:opacity-50 touch-manipulation"
                aria-label="Next work"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Slider */}
            <div className="flex-1 w-full overflow-hidden">
              <div
                ref={sliderRef}
                className="flex transition-transform duration-300 ease-out will-change-transform"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / itemsPerView)
                  }%)`,
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {works.map((work, index) => (
                  <div
                    key={work.id}
                    className={`flex-shrink-0 ${
                      isMobile ? "w-full px-2" : "w-1/3 px-3"
                    } transform transition-all duration-800 ease-out ${
                      isLoaded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <div
                      className="group cursor-pointer touch-manipulation"
                      onClick={() => openModal(work)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          openModal(work);
                        }
                      }}
                    >
                      {/* Image */}
                      <div className="relative h-48 sm:h-56 lg:h-64 xl:h-80 rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-105 group-active:scale-95 shadow-lg dark:shadow-2xl will-change-transform">
                        <Image
                          src={work.image || "/placeholder.svg"}
                          alt={work.title}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          sizes={
                            isMobile
                              ? "100vw"
                              : "(max-width: 1200px) 33vw, 25vw"
                          }
                          loading={index < 3 ? "eager" : "lazy"}
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 group-active:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100">
                            <div className="bg-white/90 dark:bg-black/90 rounded-full p-2 sm:p-3">
                              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 dark:text-white" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                        {work.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex sm:hidden justify-center mt-6 gap-4">
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-700 transition-colors duration-200 disabled:opacity-50 touch-manipulation"
              aria-label="Previous work"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-700 transition-colors duration-200 disabled:opacity-50 touch-manipulation"
              aria-label="Next work"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 sm:mt-8 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsTransitioning(false), 300);
                  }
                }}
                disabled={isTransitioning}
                className={`w-2 h-2 rounded-full transition-colors duration-200 touch-manipulation ${
                  index === currentIndex
                    ? "bg-blue-500 dark:bg-blue-400"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 active:bg-gray-500 dark:active:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <WorkModal
        work={selectedWork}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}
