import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Users, Rocket } from "lucide-react";

const RoadmapSection = () => {
  const steps = [
    {
      step: "01",
      icon: UserPlus,
      title: "Sign up & complete your profile",
      description: "Create your developer profile, showcase your skills, and tell the community what you're passionate about building.",
      color: "bright-blue"
    },
    {
      step: "02",
      icon: Users,
      title: "Join events and find collaborators",
      description: "Participate in coding jams, attend webinars, and connect with developers who share your interests and goals.",
      color: "bright-green"
    },
    {
      step: "03",
      icon: Rocket,
      title: "Build projects & grow your career",
      description: "Collaborate on real projects, gain valuable experience, and showcase your work to potential employers and partners.",
      color: "bright-yellow"
    }
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-bright-blue/5 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-bright-green/5 rounded-lg rotate-45"></div>
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Your{" "}
            <span className="hero-title">
              Journey
            </span>{" "}
            Starts Here
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Follow our simple 3-step process to accelerate your development career and start building amazing projects.
          </p>
        </div>

        {/* Roadmap Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-bright-blue via-bright-green to-bright-yellow transform -translate-y-1/2 z-0"></div>
          
          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <Card key={index} className="group hover:shadow-card transition-smooth border-0 bg-white relative overflow-hidden">
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${step.color}/10 text-${step.color} font-bold text-2xl mb-6 group-hover:scale-110 transition-bounce`}>
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-${step.color}/10 flex items-center justify-center group-hover:scale-110 transition-bounce`}>
                    <step.icon size={40} className={`text-${step.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
                
                {/* Decorative elements */}
                <div className={`absolute -top-2 -right-2 w-12 h-12 bg-${step.color}/5 rounded-full group-hover:scale-125 transition-smooth`}></div>
                <div className={`absolute -bottom-2 -left-2 w-8 h-8 bg-${step.color}/5 rounded-lg rotate-45 group-hover:scale-125 transition-smooth`}></div>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom encouragement */}
        <div className="text-center mt-16">
          <div className="inline-block">
            <p className="text-lg text-muted-foreground mb-4">Ready to start your journey?</p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-3 h-3 rounded-full bg-bright-blue animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-bright-green animate-pulse delay-100"></div>
              <div className="w-3 h-3 rounded-full bg-bright-yellow animate-pulse delay-200"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;