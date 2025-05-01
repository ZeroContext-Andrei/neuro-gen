
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neuro-gray-light py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-neuro-purple to-neuro-teal"></div>
              <span className="font-bold text-xl">NeuroNest</span>
            </div>
            <p className="text-sm text-foreground/70 mb-6">
              Building AI-powered tools for mental wellness and cognitive enhancement.
            </p>
            <p className="text-sm text-foreground/70">© 2025 NeuroNest. All rights reserved.</p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/product" className="text-foreground/70 hover:text-neuro-purple transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-foreground/70 hover:text-neuro-purple transition-colors text-sm">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-foreground/70 hover:text-neuro-purple transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="text-foreground/70 hover:text-neuro-purple transition-colors text-sm">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-foreground/70 hover:text-neuro-purple transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-foreground/70 hover:text-neuro-purple transition-colors text-sm">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-foreground/70 hover:text-neuro-purple transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/70 hover:text-neuro-purple transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-foreground/70 hover:text-neuro-purple transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-foreground/70 hover:text-neuro-purple transition-colors text-sm">
                  Research
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-foreground/70 hover:text-neuro-purple transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-foreground/70 hover:text-neuro-purple transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
