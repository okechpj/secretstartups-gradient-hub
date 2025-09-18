import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Events", href: "#events" },
    { label: "Workshop", href: "#workshop" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg gradient-bg"></div>
          <span className="text-xl font-bold hero-title">SecretStartups</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground hover:text-brand-orange transition-smooth font-medium"
            >
              {item.label}
            </a>
          ))}
          
          {/* Auth Links */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/profile">
                  <Button variant="ghost" className="text-foreground hover:text-bright-blue">
                    Profile
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  className="text-foreground hover:text-bright-blue"
                  onClick={signOut}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link to="/signin">
                  <Button variant="ghost" className="text-foreground hover:text-bright-blue">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-bright-blue hover:bg-bright-blue/90 text-white rounded-xl">
                    Join Community
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-foreground hover:text-brand-orange transition-smooth font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Mobile Auth Links */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                {user ? (
                  <>
                    <Link to="/profile" className="block">
                      <Button variant="ghost" className="w-full justify-start text-foreground hover:text-bright-blue mb-2">
                        Profile
                      </Button>
                    </Link>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start text-foreground hover:text-bright-blue"
                      onClick={signOut}
                    >
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/signin" className="block">
                      <Button variant="ghost" className="w-full justify-start text-foreground hover:text-bright-blue mb-2">
                        Sign In
                      </Button>
                    </Link>
                    <Link to="/signup" className="block">
                      <Button className="w-full bg-bright-blue hover:bg-bright-blue/90 text-white rounded-xl">
                        Join Community
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;