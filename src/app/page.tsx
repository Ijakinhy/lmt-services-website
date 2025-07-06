import AboutUs from "@/components/ui/about-us";
import HeroSection from "@/components/hero-section";
import OurServices from "@/components/ui/our-services";
import Works from "@/components/ui/works";
import ServicePricingCard from "@/components/service-pricing-card";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/lib/services";
import HomePricingSection from "@/components/Home-pricing-section";
import { Contact } from "lucide-react";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <AboutUs />
      <OurServices />
      <Works />
      <HomePricingSection />
      <ContactSection />
    </main>
  );
}
