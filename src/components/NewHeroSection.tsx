import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";

const NewHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 geometric-pattern geometric-shapes" />
      
      {/* Additional geometric elements */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-bright-yellow/20 rounded-lg rotate-12 transform animate-pulse"></div>
      <div className="absolute top-40 right-32 w-12 h-12 bg-bright-blue/20 rounded-full transform animate-bounce"></div>
      <div className="absolute bottom-32 left-40 w-20 h-20 bg-bright-green/20 clip-path-triangle transform rotate-45"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          
          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8 text-foreground">
            Accelerate Your{" "}
            <span className="hero-title">
              Skills
            </span>
            ,{" "}
            <br className="hidden md:block" />
            Build{" "}
            <span className="hero-title">
              Together
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl leading-relaxed mb-12 text-muted-foreground max-w-4xl mx-auto">
            Learn, collaborate, and launch projects with the SecretStartups Community.
            Join thousands of developers accelerating their journey from idea to market.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="group px-8 py-4 text-lg font-bold">
              Join the Community
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg font-bold border-2 border-bright-blue text-bright-blue hover:bg-bright-blue hover:text-white"
            >
              <Rocket size={20} />
              Explore DevX Workshop
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-muted">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-bright-blue mb-2">1000+</div>
              <div className="text-muted-foreground font-medium">Active Developers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-bright-green mb-2">50+</div>
              <div className="text-muted-foreground font-medium">Projects Launched</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-bright-yellow mb-2">24/7</div>
              <div className="text-muted-foreground font-medium">Community Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;