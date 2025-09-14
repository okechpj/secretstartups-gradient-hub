import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Rocket, 
  Users, 
  BookOpen, 
  Mic, 
  Trophy, 
  Settings, 
  ArrowRight,
  Sparkles
} from "lucide-react";

const OffersSection = () => {
  const offers = [
    {
      icon: Rocket,
      title: "Fast Product Acceleration Tools",
      description: "Access cutting-edge tools and frameworks designed to speed up your development process from concept to launch.",
      features: ["MVP Builder Tools", "Market Validation Frameworks", "Growth Metrics Dashboard"],
      color: "brand-orange"
    },
    {
      icon: Users,
      title: "Access to Dev Teams & Microservices",
      description: "Connect with skilled development teams and leverage pre-built microservices to accelerate your product development.",
      features: ["Vetted Developer Network", "Ready-to-Use APIs", "Scalable Architecture Patterns"],
      color: "brand-pink"
    },
    {
      icon: BookOpen,
      title: "Peer-to-Peer Learning",
      description: "Learn from experienced founders and developers through interactive sessions, case studies, and collaborative projects.",
      features: ["Knowledge Sharing Sessions", "Code Reviews", "Best Practices Library"],
      color: "brand-purple"
    },
    {
      icon: Mic,
      title: "Mentorship & Webinars",
      description: "Get guidance from industry experts through one-on-one mentorship and attend exclusive webinars on trending topics.",
      features: ["1:1 Mentor Matching", "Weekly Expert Webinars", "Q&A Sessions"],
      color: "brand-orange"
    },
    {
      icon: Trophy,
      title: "Hackathons & Competitions",
      description: "Participate in exciting hackathons and competitions to showcase your skills, win prizes, and get noticed by potential investors.",
      features: ["Monthly Hackathons", "Startup Competitions", "Demo Days"],
      color: "brand-pink"
    },
    {
      icon: Settings,
      title: "Resource Marketplace",
      description: "Access a curated marketplace of tools, templates, and resources specifically chosen for startup success.",
      features: ["Startup Tool Directory", "Template Library", "Discount Partnerships"],
      color: "brand-purple"
    }
  ];

  return (
    <section id="offers" className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange rounded-full px-4 py-2 mb-6">
            <Sparkles size={16} />
            <span className="font-semibold">What You'll Get</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="hero-title">Succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our comprehensive platform provides all the tools, connections, and support 
            you need to turn your ideas into successful businesses.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {offers.map((offer, index) => (
            <Card key={index} className="group hover:shadow-card transition-smooth border-0 gradient-card h-full">
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 rounded-2xl bg-${offer.color}/10 flex items-center justify-center group-hover:scale-110 transition-bounce mb-4`}>
                  <offer.icon size={28} className={`text-${offer.color}`} />
                </div>
                <CardTitle className="text-xl font-bold leading-tight">
                  {offer.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {offer.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {offer.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${offer.color}`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto gradient-bg rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Accelerate?</h3>
            <p className="text-lg mb-8 text-white/90">
              Join our community today and get access to all these resources plus exclusive member benefits.
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-brand-purple group"
            >
              Start Your Journey
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;