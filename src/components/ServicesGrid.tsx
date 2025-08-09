import { Card } from "@/components/ui/card";
import hexagonIcon from "@/assets/hexagon-icon.png";

const ServicesGrid = () => {
  const services = [
    "Healthcare",
    "Agriculture",
    "Travel",
    "Education",
    "Automotive",
    "IT",
    "Banking",
    "FMCG"
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={service}
              className="group p-8 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-none bg-background"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:bg-orange transition-colors duration-300">
                  <img
                    src={hexagonIcon}
                    alt="Service Icon"
                    className="w-8 h-8 invert"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {service}
              </h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;