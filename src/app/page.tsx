import AboutUs from "@/components/ui/about-us";
import HeroSection from "@/components/hero-section";
import OurServices from "@/components/ui/our-services";
import Works from "@/components/ui/works";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <div className="fixed top-6 right-6 z-50">
      </div>
      <AboutUs />
      <OurServices />
      <Works />
    </main>
  );
}
