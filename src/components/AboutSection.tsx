import { Card, CardContent } from "@/components/ui/card";
import { Users, Code, GraduationCap, Target, Lightbulb, Zap } from "lucide-react";

const AboutSection = () => {
  const audiences = [
    {
      icon: Target,
      title: "Founders",
      subtitle: "Tech & Non-Tech",
      description: "Whether you're a seasoned entrepreneur or just starting out, connect with like-minded founders to share insights, challenges, and victories.",
      color: "brand-orange"
    },
    {
      icon: Code,
      title: "Freelance Developers",
      subtitle: "Build. Ship. Repeat.",
      description: "Join a network of talented developers, find exciting projects, collaborate on innovative solutions, and grow your skillset.",
      color: "brand-pink"
    },
    {
      icon: GraduationCap,
      title: "Tech Students",
      subtitle: "Learn & Launch",
      description: "Bridge the gap between education and industry. Get real-world experience, mentorship, and opportunities to work on actual projects.",
      color: "brand-purple"
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We believe in pushing boundaries and creating solutions that matter."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Our strength comes from the collective knowledge and support of our members."
    },
    {
      icon: Zap,
      title: "Fast Execution",
      description: "We help you move from idea to market faster than ever before."
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Who We Are
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            SecretStartups Community is a vibrant ecosystem where innovation meets collaboration. 
            We're building the future by connecting the right people with the right opportunities.
          </p>
        </div>

        {/* Audience Groups */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {audiences.map((audience, index) => (
            <Card key={index} className="group hover:shadow-card transition-smooth border-0 gradient-card">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-${audience.color}/10 flex items-center justify-center group-hover:scale-110 transition-bounce`}>
                  <audience.icon size={32} className={`text-${audience.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{audience.title}</h3>
                <p className={`text-${audience.color} font-semibold mb-4`}>
                  {audience.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {audience.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-16">
          <div className="max-w-4xl mx-auto gradient-bg rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-xl leading-relaxed">
              To democratize entrepreneurship by providing the tools, connections, and support 
              needed for anyone to transform their ideas into successful businesses. We believe 
              that the next big innovation could come from anywhere, and we're here to help it happen.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-brand-orange/20 flex items-center justify-center group-hover:border-brand-orange/60 group-hover:bg-brand-orange/10 transition-smooth">
                <value.icon size={32} className="text-brand-orange" />
              </div>
              <h4 className="text-xl font-bold mb-3">{value.title}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;