import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import hexagonIcon from "@/assets/hexagon-icon.png";

const Services = () => {
  const services = [
    {
      name: "Healthcare",
      description: "Comprehensive market research for healthcare providers, pharmaceutical companies, and medical device manufacturers.",
      features: ["Patient satisfaction surveys", "Market entry strategies", "Competitive analysis"]
    },
    {
      name: "Agriculture",
      description: "Agricultural market research to help farmers, agribusinesses, and food companies make informed decisions.",
      features: ["Crop market analysis", "Supply chain optimization", "Consumer behavior studies"]
    },
    {
      name: "Travel",
      description: "Tourism and travel industry research to enhance customer experiences and business performance.",
      features: ["Destination research", "Tourist satisfaction surveys", "Market trend analysis"]
    },
    {
      name: "Education",
      description: "Educational research services for institutions, policymakers, and educational technology companies.",
      features: ["Student engagement studies", "Curriculum effectiveness", "Learning outcome assessments"]
    },
    {
      name: "Automotive",
      description: "Automotive industry research covering consumer preferences, market trends, and competitive intelligence.",
      features: ["Vehicle preference studies", "Dealer satisfaction surveys", "Brand perception analysis"]
    },
    {
      name: "IT",
      description: "Technology sector research to help companies understand market needs and competitive landscapes.",
      features: ["Software usability testing", "IT adoption studies", "Digital transformation research"]
    },
    {
      name: "Banking",
      description: "Financial services research including customer satisfaction, product development, and market analysis.",
      features: ["Customer experience surveys", "Product testing", "Market penetration studies"]
    },
    {
      name: "FMCG",
      description: "Fast-moving consumer goods research to understand consumer behavior and market dynamics.",
      features: ["Brand tracking", "Product launch research", "Consumer segmentation"]
    }
  ];

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
            {services.map((service, index) => (
              <Card key={service.name} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:bg-orange transition-colors duration-300">
                      <img
                        src={hexagonIcon}
                        alt={`${service.name} Icon`}
                        className="w-8 h-8 invert"
                      />
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
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;