
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center section section-gradient dark-to-charcoal">
        <div className="text-center px-4 py-16">
          <div className="mb-6 inline-block p-4 rounded-full bg-neuro-purple/10">
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-12 h-12 text-neuro-purple"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">404</h1>
          <p className="text-xl text-foreground/80 mb-8 max-w-md mx-auto">
            Oops! It seems like the page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="bg-gradient-to-r from-neuro-purple to-neuro-teal hover:opacity-90 transition-opacity">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
