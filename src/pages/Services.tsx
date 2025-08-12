import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { 
  Stethoscope, 
  Wheat, 
  MapPin, 
  GraduationCap, 
  Car, 
  Computer, 
  CreditCard, 
  ShoppingCart,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const Services = () => {
  const [expandedServices, setExpandedServices] = useState<string[]>([]);

  const services = [
    {
      name: "Healthcare",
      icon: Stethoscope,
      description: "Comprehensive market research for healthcare providers, pharmaceutical companies, and medical device manufacturers.",
      features: ["Patient satisfaction surveys", "Market entry strategies", "Competitive analysis"],
      extendedContent: "Our healthcare research division specializes in understanding patient needs, healthcare provider satisfaction, and market dynamics in the rapidly evolving medical sector. We help pharmaceutical companies launch new products, assist medical device manufacturers in understanding user preferences, and support healthcare providers in improving patient experiences."
    },
    {
      name: "Agriculture",
      icon: Wheat,
      description: "Agricultural market research to help farmers, agribusinesses, and food companies make informed decisions.",
      features: ["Crop market analysis", "Supply chain optimization", "Consumer behavior studies"],
      extendedContent: "With deep expertise in East African agricultural markets, we provide insights into crop yields, farming practices, supply chain efficiency, and consumer preferences for agricultural products. Our research supports farmers in making informed planting decisions and helps agribusinesses optimize their operations."
    },
    {
      name: "Travel",
      icon: MapPin,
      description: "Tourism and travel industry research to enhance customer experiences and business performance.",
      features: ["Destination research", "Tourist satisfaction surveys", "Market trend analysis"],
      extendedContent: "Our travel and tourism research covers destination attractiveness, tourist behavior patterns, accommodation preferences, and travel trends across East Africa. We help tourism boards, hotels, and travel companies understand visitor needs and optimize their offerings for better customer satisfaction."
    },
    {
      name: "Education",
      icon: GraduationCap,
      description: "Educational research services for institutions, policymakers, and educational technology companies.",
      features: ["Student engagement studies", "Curriculum effectiveness", "Learning outcome assessments"],
      extendedContent: "We conduct comprehensive educational research covering student performance, teaching methodologies, curriculum effectiveness, and educational technology adoption. Our studies help educational institutions improve learning outcomes and assist policymakers in making evidence-based decisions."
    },
    {
      name: "Automotive",
      icon: Car,
      description: "Automotive industry research covering consumer preferences, market trends, and competitive intelligence.",
      features: ["Vehicle preference studies", "Dealer satisfaction surveys", "Brand perception analysis"],
      extendedContent: "Our automotive research spans consumer vehicle preferences, dealership experiences, brand perception, and market trends in the East African automotive sector. We help manufacturers understand local market needs and assist dealers in improving customer satisfaction."
    },
    {
      name: "IT",
      icon: Computer,
      description: "Technology sector research to help companies understand market needs and competitive landscapes.",
      features: ["Software usability testing", "IT adoption studies", "Digital transformation research"],
      extendedContent: "We specialize in technology adoption patterns, software usability, digital transformation readiness, and IT infrastructure needs across various sectors. Our research helps technology companies understand market requirements and assists organizations in making informed technology decisions."
    },
    {
      name: "Banking",
      icon: CreditCard,
      description: "Financial services research including customer satisfaction, product development, and market analysis.",
      features: ["Customer experience surveys", "Product testing", "Market penetration studies"],
      extendedContent: "Our financial services research covers customer satisfaction, product development, market penetration, and digital banking adoption. We help banks and financial institutions understand customer needs, test new products, and improve service delivery across East Africa."
    },
    {
      name: "FMCG",
      icon: ShoppingCart,
      description: "Fast-moving consumer goods research to understand consumer behavior and market dynamics.",
      features: ["Brand tracking", "Product launch research", "Consumer segmentation"],
      extendedContent: "We conduct extensive FMCG research covering consumer behavior, brand perception, product preferences, and market dynamics. Our studies help manufacturers understand consumer needs, test new products, and develop effective marketing strategies for the East African market."
    }
  ];

  const toggleExpanded = (serviceName: string) => {
    setExpandedServices(prev => 
      prev.includes(serviceName) 
        ? prev.filter(name => name !== serviceName)
        : [...prev, serviceName]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-orange text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive research solutions across multiple industries to drive your business growth
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isExpanded = expandedServices.includes(service.name);
              
              return (
                <Card key={service.name} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:bg-orange transition-colors duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 text-center group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-center">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-2 h-2 bg-orange rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {isExpanded && (
                      <div className="mb-4 p-4 bg-muted/30 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          {service.extendedContent}
                        </p>
                      </div>
                    )}
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      onClick={() => toggleExpanded(service.name)}
                    >
                      {isExpanded ? (
                        <>
                          View Less <ChevronUp className="ml-2 h-4 w-4" />
                        </>
                      ) : (
                        <>
                          View More <ChevronDown className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;