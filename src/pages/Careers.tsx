import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Briefcase } from "lucide-react";

const Careers = () => {

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-orange text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Be part of a vibrant team of research professionals driving growth across East Africa
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Work With Us?</h2>
            <div className="w-24 h-1 bg-orange mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Collaborative Team</h3>
                <p className="text-muted-foreground text-sm">
                  Work with experienced, vibrant professionals
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Briefcase className="w-12 h-12 text-orange mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Growth Opportunities</h3>
                <p className="text-muted-foreground text-sm">
                  Continuous learning and career development
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Great Location</h3>
                <p className="text-muted-foreground text-sm">
                  Modern office in Dar es Salaam
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Clock className="w-12 h-12 text-orange mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Work-Life Balance</h3>
                <p className="text-muted-foreground text-sm">
                  Flexible working arrangements
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Open Positions</h2>
            <div className="w-24 h-1 bg-orange mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-12">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-foreground mb-4">No Open Positions</h3>
                <p className="text-muted-foreground mb-6">
                  We don't have open positions for now. However, we're always looking for talented individuals.
                </p>
                <p className="text-foreground font-medium">
                  Send Us your CV for review through: <br />
                  <a href="mailto:Jobs@Quantumresearch.co.tz" className="text-primary hover:text-orange transition-colors">
                    Jobs@Quantumresearch.co.tz
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;