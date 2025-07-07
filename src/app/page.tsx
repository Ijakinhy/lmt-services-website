import HeroSection from "@/components/hero-section";
import HomePricingSection from "@/components/Home-pricing-section";
import AboutUs from "@/components/ui/about-us";
import OurServices from "@/components/ui/our-services";
import Works from "@/components/ui/works";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <AboutUs />
      <OurServices />
      <Works />
      <HomePricingSection />
    </main>
  );
}
