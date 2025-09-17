import { Card, CardContent } from "@/components/ui/card";
import { Calendar, FolderOpen, MessageSquare, Wrench } from "lucide-react";

const GetStartedSection = () => {
  const features = [
    {
      icon: Calendar,
      title: "Events",
      description: "Join coding jams, webinars, and hackathons. Connect with like-minded developers and learn from industry experts.",
      color: "bright-blue",
      bgPattern: "radial-gradient(circle at 20% 80%, hsl(var(--bright-blue) / 0.1) 0%, transparent 50%)"
    },
    {
      icon: FolderOpen,
      title: "Projects",
      description: "Collaborate in workspaces and groups. Work on real projects that make a difference and build your portfolio.",
      color: "bright-green",
      bgPattern: "radial-gradient(circle at 80% 20%, hsl(var(--bright-green) / 0.1) 0%, transparent 50%)"
    },
    {
      icon: MessageSquare,
      title: "Feed",
      description: "Share updates and connect socially. Build meaningful relationships with developers across the globe.",
      color: "bright-yellow",
      bgPattern: "radial-gradient(circle at 20% 20%, hsl(var(--bright-yellow) / 0.1) 0%, transparent 50%)"
    },
    {
      icon: Wrench,
      title: "Workshop",
      description: "Seamless access to DevX tools. Get hands-on experience with cutting-edge development technologies.",
      color: "brand-purple",
      bgPattern: "radial-gradient(circle at 80% 80%, hsl(var(--brand-purple) / 0.1) 0%, transparent 50%)"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Get Started{" "}
            <span className="hero-title">
              Today
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover everything you need to accelerate your development journey and connect with fellow builders.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-card transition-smooth border-0 relative overflow-hidden bg-white">
              <div 
                className="absolute inset-0 opacity-50"
                style={{ backgroundImage: feature.bgPattern }}
              />
              
              <CardContent className="p-8 text-center relative z-10">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-${feature.color}/10 flex items-center justify-center group-hover:scale-110 transition-bounce`}>
                  <feature.icon size={32} className={`text-${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>
              </CardContent>
              
              {/* Decorative corner accent */}
              <div className={`absolute top-0 right-0 w-12 h-12 bg-${feature.color}/10 transform rotate-45 translate-x-6 -translate-y-6 group-hover:scale-125 transition-smooth`}></div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-muted/50 rounded-full px-8 py-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-bright-blue"></div>
              <div className="w-8 h-8 rounded-full bg-bright-green"></div>
              <div className="w-8 h-8 rounded-full bg-bright-yellow"></div>
              <div className="w-8 h-8 rounded-full bg-brand-purple"></div>
            </div>
            <span className="text-muted-foreground font-medium">Join 1000+ developers already building together</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;