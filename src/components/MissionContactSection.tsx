import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Twitter, Send } from "lucide-react";

const MissionContactSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Mission Statement */}
        <div className="text-center mb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">
              Building{" "}
              <span className="hero-title">
                Together
              </span>
              , Faster
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground max-w-4xl mx-auto mb-12">
              We believe in building together, faster. Our mission is to shorten the journey 
              from learning to launching by connecting passionate developers with the right 
              opportunities, mentors, and collaborators.
            </p>
            
            {/* Mission highlights */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-bright-blue/10 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-bright-blue"></div>
                </div>
                <h4 className="font-bold text-foreground mb-2">Community First</h4>
                <p className="text-muted-foreground">Every decision we make prioritizes our developer community</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-bright-green/10 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-bright-green"></div>
                </div>
                <h4 className="font-bold text-foreground mb-2">Learn by Doing</h4>
                <p className="text-muted-foreground">Hands-on experience through real projects and collaboration</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-bright-yellow/10 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-bright-yellow"></div>
                </div>
                <h4 className="font-bold text-foreground mb-2">Launch Faster</h4>
                <p className="text-muted-foreground">Accelerate your journey from idea to production</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <Card className="border-0 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Get in Touch</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                    <Input placeholder="Your name" className="rounded-xl" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" className="rounded-xl" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project or how you'd like to get involved..." 
                    className="rounded-xl min-h-32"
                  />
                </div>
                <Button className="w-full group" size="lg">
                  Send Message
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Connect With Us</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-smooth">
                  <div className="w-12 h-12 rounded-xl bg-bright-blue/10 flex items-center justify-center">
                    <Mail size={24} className="text-bright-blue" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">hello@secretstartups.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-foreground">Follow Us</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-xl border-bright-blue text-bright-blue hover:bg-bright-blue hover:text-white">
                  <Linkedin size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-xl border-bright-green text-bright-green hover:bg-bright-green hover:text-white">
                  <Twitter size={20} />
                </Button>
              </div>
            </div>

            {/* Community Stats */}
            <div className="bg-gradient-to-r from-bright-blue/10 via-bright-green/10 to-bright-yellow/10 rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-4 text-foreground">Join Our Growing Community</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-bright-blue">1000+</div>
                  <div className="text-sm text-muted-foreground">Developers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-bright-green">50+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionContactSection;