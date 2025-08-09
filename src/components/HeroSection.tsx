import { Button } from "@/components/ui/button";
import heroImage from "@/assets/meeting-room-hero.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Hero Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Quantum Research Meeting Room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-orange/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-center mx-auto text-white">
          {/* Logo */}
          <div className="mb-8">
            <div className="inline-flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30">
                <span className="text-white font-bold text-2xl">R</span>
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-6xl font-bold leading-none">
                  QUANTUM
                </h1>
                <h1 className="text-4xl md:text-6xl font-bold leading-none">
                  RESEARCH
                </h1>
                <p className="text-xl md:text-2xl font-light italic mt-2">
                  we drive growth
                </p>
              </div>
            </div>
          </div>

          <p className="text-lg md:text-xl mb-8 font-light">
            We promise to always drive your growth whenever tasked at whatever cost.
          </p>

          <Button
            size="lg"
            className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300"
          >
            Learn More About Us
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slider Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-white"></div>
        <div className="w-3 h-3 rounded-full bg-white/50"></div>
        <div className="w-3 h-3 rounded-full bg-white/50"></div>
      </div>
    </section>
  );
};

export default HeroSection;