import { Card } from "@/components/ui/card";
import { 
  Stethoscope, 
  Wheat, 
  MapPin, 
  GraduationCap, 
  Car, 
  Computer, 
  CreditCard, 
  ShoppingCart 
} from "lucide-react";

const ServicesGrid = () => {
  const services = [
    { name: "Healthcare", icon: Stethoscope },
    { name: "Agriculture", icon: Wheat },
    { name: "Travel", icon: MapPin },
    { name: "Education", icon: GraduationCap },
    { name: "Automotive", icon: Car },
    { name: "IT", icon: Computer },
    { name: "Banking", icon: CreditCard },
    { name: "FMCG", icon: ShoppingCart }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.name}
                className="group p-8 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-none bg-background"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:bg-orange transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.name}
                </h3>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;