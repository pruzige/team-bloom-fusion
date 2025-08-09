import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-orange text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Quantum Research</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A vibrant fully fledged research firm driving growth for our esteemed clients across Tanzania and East Africa
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Quantum Research is situated in Tanzania Dar es Salaam. The firm was formed
                basically to drive growth for our esteemed clients through comprehensive
                market research and strategic insights.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We are a composition of experienced, vibrant and young market research
                professionals. The team is multi-talented and from the synergy of the team
                we leverage on to always meet and surpass our clients expectations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team is always on the learning curve since innovation is what we leverage
                on to navigate through the market research dynamism.
              </p>
            </div>
            <div className="space-y-6">
              <Card className="p-6">
                <CardContent className="p-0 flex items-start space-x-4">
                  <Users className="w-8 h-8 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Expert Team</h3>
                    <p className="text-muted-foreground text-sm">
                      Multi-talented professionals with diverse expertise
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="p-0 flex items-start space-x-4">
                  <Target className="w-8 h-8 text-orange mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Client-Focused</h3>
                    <p className="text-muted-foreground text-sm">
                      Always exceeding client expectations through quality service
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="p-0 flex items-start space-x-4">
                  <Award className="w-8 h-8 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Innovation</h3>
                    <p className="text-muted-foreground text-sm">
                      Continuous learning and adaptation to market dynamics
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-l-4 border-l-orange">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-orange mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We commit to be always focused by serving our customers, and our employees
                  with a focused commitment on integrity, quality, service, stewardship, and discovery.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-l-4 border-l-primary">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Globe className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading market research firm in East Africa, providing innovative
                  and comprehensive research solutions that drive our clients' success and
                  contribute to sustainable economic growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;