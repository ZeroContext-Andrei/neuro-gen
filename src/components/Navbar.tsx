import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-nav py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-3 transition-transform hover:scale-105"
          >
            <img 
              src="/favicon.png" 
              alt="NeuroNest Brain Icon" 
              className="h-8 w-auto" 
            />
            <span className="font-bold text-2xl">NeuroNest</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "Product", "How It Works", "About Us"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-foreground/80 hover:text-foreground transition-colors relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neuro-purple to-neuro-teal transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button 
              className="bg-gradient-to-r from-neuro-purple to-neuro-teal hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              <Link to="/signup">Join the Beta</Link>
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu with glass effect */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-nav p-4 border-t border-white/20">
            <nav className="flex flex-col space-y-4">
              {["Home", "Product", "How It Works", "About Us"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-foreground/80 hover:text-foreground transition-colors px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
              <Button className="bg-gradient-to-r from-neuro-purple to-neuro-teal hover:opacity-90 transition-opacity w-full">
                Join the Beta
              </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
