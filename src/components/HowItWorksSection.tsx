import { Card, CardContent } from "@/components/ui/card";
import { Users, Code, TrendingUp } from "lucide-react";

const HowItWorksSection = () => {
  const pillars = [
    {
      icon: Users,
      title: "Onboarding & Profiling",
      description: "Find coding buddies and showcase your skills. Create a comprehensive profile that highlights your expertise and interests.",
      color: "bright-blue"
    },
    {
      icon: Code,
      title: "Collaboration Hubs",
      description: "Work on projects, debugging, or study sessions together. Join focused workspaces tailored to your tech stack.",
      color: "bright-green"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Build your CV and showcase your work. Get recognized for your contributions and accelerate your professional journey.",
      color: "bright-yellow"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            What is{" "}
            <span className="hero-title">
              SecretStartups
            </span>{" "}
            Community?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our platform helps junior and beginner developers collaborate, learn by doing, 
            and accelerate product development through community-driven innovation.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card key={index} className="group hover:shadow-card transition-smooth border-0 gradient-card relative overflow-hidden">
              <CardContent className="p-8 text-center relative z-10">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-${pillar.color}/10 flex items-center justify-center group-hover:scale-110 transition-bounce`}>
                  <pillar.icon size={40} className={`text-${pillar.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </CardContent>
              
              {/* Decorative geometric shape */}
              <div className={`absolute -top-4 -right-4 w-16 h-16 bg-${pillar.color}/5 rounded-full transform rotate-45 group-hover:scale-125 transition-smooth`}></div>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="text-center mt-20">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl p-12 shadow-card relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-bright-blue via-bright-green to-bright-yellow"></div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Mission</h3>
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground">
              We believe in building together, faster. Our mission is to shorten the journey 
              from learning to launching by connecting passionate developers with the right 
              opportunities, mentors, and collaborators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;