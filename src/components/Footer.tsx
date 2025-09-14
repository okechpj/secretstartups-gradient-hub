import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight, Heart } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "What We Offer", href: "#offers" },
    { label: "Contact", href: "#contact" },
    { label: "Join Community", href: "#hero" },
  ];

  const resources = [
    { label: "Blog", href: "#" },
    { label: "Resources", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ];

  return (
    <footer className="gradient-footer text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm"></div>
              <span className="text-2xl font-bold">SecretStartups</span>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Empowering founders, developers, and students to build the future together. 
              Join our community and accelerate your journey to market.
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold">Stay Updated</h4>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-xl"
                />
                <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-brand-purple shrink-0">
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-smooth hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-smooth hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-white/80">
              <span>© 2025 SecretStartups Community. Made with</span>
              <Heart size={16} className="text-red-400 fill-current" />
              <span>for innovators everywhere.</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="mailto:hello@secretstartups.com" className="flex items-center gap-2 text-white/80 hover:text-white transition-smooth">
                <Mail size={16} />
                <span>hello@secretstartups.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;