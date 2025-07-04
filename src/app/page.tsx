import HeroSection from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import AboutUs from "@/components/ui/about-us";
import OurServices from "@/components/ui/our-services";
import Works from "@/components/ui/works"
import { ThemeToggle } from "@/components/ui/theme-toggle"
export default function Home() {
  return (
    
     
    <main className="relative">
       <HeroSection />
      {/* Theme Toggle - Fixed position */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      <AboutUs />
      <OurServices />
      <Works />
    </main>
  );
}
