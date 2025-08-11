import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import BrandsStrip from "@/components/BrandsStrip";
import AboutSection from "@/components/AboutSection";
import { TeamSection } from "@/components/TeamSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesGrid />
      <BrandsStrip />
      <AboutSection />
      <TeamSection />
    </div>
  );
};

export default Index;
