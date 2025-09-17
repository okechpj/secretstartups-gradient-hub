import { Heart } from "lucide-react";

const NewFooter = () => {
  const links = [
    { label: "About", href: "#about" },
    { label: "Events", href: "#events" },
    { label: "Workshop", href: "#workshop" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-bright-blue to-bright-green flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-md"></div>
              </div>
              <span className="text-2xl font-bold text-foreground">SecretStartups</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Empowering developers to learn, collaborate, and launch faster. 
              Join our community and accelerate your journey from idea to market.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-smooth hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Community</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-bright-blue"></div>
                <span className="text-muted-foreground text-sm">1000+ Developers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-bright-green"></div>
                <span className="text-muted-foreground text-sm">50+ Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-bright-yellow"></div>
                <span className="text-muted-foreground text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-muted pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>© 2025 SecretStartups Community. Made with</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>for developers everywhere.</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex -space-x-1">
                <div className="w-6 h-6 rounded-full bg-bright-blue border-2 border-background"></div>
                <div className="w-6 h-6 rounded-full bg-bright-green border-2 border-background"></div>
                <div className="w-6 h-6 rounded-full bg-bright-yellow border-2 border-background"></div>
                <div className="w-6 h-6 rounded-full bg-brand-purple border-2 border-background"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;