import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageCircle, Send, Twitter, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-400" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-600" },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Start Building{" "}
            <span className="hero-title">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions? Want to collaborate? Or just want to say hello? 
            We'd love to hear from you and help you get started.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <MessageCircle className="text-brand-orange" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="rounded-xl border-2 focus:border-brand-orange"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="rounded-xl border-2 focus:border-brand-orange"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, ideas, or how we can help..."
                    rows={6}
                    required
                    className="rounded-xl border-2 focus:border-brand-orange resize-none"
                  />
                </div>

                <Button type="submit" variant="gradient" size="lg" className="w-full group">
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <Card className="border-0 gradient-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center">
                    <Mail className="text-brand-orange" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Direct Contact</h3>
                    <p className="text-muted-foreground">Get in touch directly</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <span className="font-medium">Community Email:</span>
                    <a href="mailto:hello@secretstartups.com" className="text-brand-orange hover:underline">
                      hello@secretstartups.com
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-medium">Partnership Inquiries:</span>
                    <a href="mailto:partners@secretstartups.com" className="text-brand-orange hover:underline">
                      partners@secretstartups.com
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-0 gradient-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Follow Our Journey</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 rounded-2xl bg-background/50 border border-border/50 flex items-center justify-center transition-smooth ${social.color} hover:scale-110 hover:bg-background`}
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Stay updated with our latest announcements, success stories, and community highlights.
                </p>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border-0 gradient-bg text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-6">Join Our Growing Community</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold">24h</div>
                    <div className="text-white/80 text-sm">Avg Response Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">95%</div>
                    <div className="text-white/80 text-sm">Satisfaction Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;