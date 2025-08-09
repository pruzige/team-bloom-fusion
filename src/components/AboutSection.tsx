import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-orange mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Company Info */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-bold text-2xl">R</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Quantum Research
                </h3>
                <p className="text-muted-foreground">
                  is a vibrant fully fledged research firm situated in Tanzania Dar es Salaam.
                  The firm was formed basically to drive growth for our esteemed clients.
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              The firm is a composition of experienced, vibrant and young market research
              professionals. The team is multi-talented and its from the synergy of the team
              we leverage on to always meet and surpass our clients expectations.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Our team is always on the learning curve since, innovation is what we leverage
              on to navigate through the market research dynamism that is not put to check
              could be detrimental to the quality of the feedback.
            </p>

            <p className="text-primary font-semibold">
              We promise to always drive your growth whenever tasked at whatever cost.
            </p>

            <Button className="bg-primary hover:bg-primary-light text-primary-foreground">
              Read More
            </Button>
          </div>

          {/* Right Side - Mission & Vision */}
          <div className="space-y-6">
            <Card className="p-6 border-l-4 border-l-orange bg-card">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  The Mission
                </h3>
                <p className="text-muted-foreground">
                  We commit to be always focused by serving our customers, and our
                  employees with a focused commitment on integrity, quality, service,
                  stewardship, and discovery.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-l-4 border-l-primary bg-card">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Vision
                </h3>
                <p className="text-muted-foreground">
                  To be the leading market research firm in East Africa, providing
                  innovative and comprehensive research solutions that drive our
                  clients' success and contribute to sustainable economic growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;