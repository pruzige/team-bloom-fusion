import { Card, CardContent } from "@/components/ui/card";

interface TeamMember {
  name: string;
  title: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Bakari Mhando",
    title: "Managing Director",
    description: "An accomplished educational and social researcher, Bakari Mhando has over 9 years' experience in the design and implementation of research studies and evaluations of community development initiatives.",
    image: "/team/bakari-mhando.png"
  },
  {
    name: "Joyce Kingu",
    title: "Field Executive",
    description: "Joyce has more than 20 years of experience in market research industry. Joyce is an experienced field manager with a lot of experience in the field management activities; training, coordination and data collection as well report preparation. With the skills she acquired in both quantitative, quantitative and retail studies from Alcoholic Drinks, Beverage Drinks, Petroleum products, to Telecommunication industries. The accumulation of the skills, experience, personal intra skills that she possesses in the retail and shopper studies makes her the suitable and fit person to be in any study in Tanzania",
    image: "/team/joyce-kingu.png"
  },
  {
    name: "Gudilla Ngalo",
    title: "Field Executive",
    description: "Gudilla is a Field Executive with more than 15 years of experience implementing and managing all Marketing and Social qualitative studies in different sectors ranging from Energy, FMCG, Automotives, Telecommunication, Health etc. She has worked for reputable clients such as Engen, Total Energies Ltd, Abi InBev, Diageo, Vodacom, Absa Bank etc. She has been conducting Focus Group Discussions and In-depth Interviews moderation for several Clients.",
    image: "/team/gudilla-ngalo.png"
  },
  {
    name: "Herbert Temba",
    title: "Head of Quality Control",
    description: "Temba has been a Head of Quality Control for both Qualitative and Quantitative Projects with experience of more than 15 years with working with clients from different sectors such as Energy, IT & Telecommunication, Automotive, Health, Education, Banking, FMCG as well as Travel and Agriculture. Temba has a good experience in working with reputable clients such as Vodacom, Absa Bank, Engen, Total Energies Limited etc.",
    image: "/team/herbert-temba.png"
  },
  {
    name: "Pendo Songoro",
    title: "Regional Coordinator",
    description: "Pendo Songoro is a Field Supervisor with more than 10 years of experience in both Qualitative and Quantitative Projects. Pendo has an experience of supervising multiple projects from different clients from difference sectors including Energy, IT & Telecommunication, Automotive, Health, Education, Banking, FMCG as well as Travel and Agriculture.",
    image: "/team/pendo-songoro.png"
  }
];

export const TeamSection = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            MEET OUR TEAM OF EXPERIENCED RESEARCHERS
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our dedicated team brings decades of combined experience in market research,
            quality control, and project management across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-3">
                    {member.title}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};