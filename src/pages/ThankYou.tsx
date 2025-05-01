import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import AnimatedElement from '@/components/AnimatedElement';
import AnimatedSection from '@/components/AnimatedSection';
import { CheckCircle, Home, ArrowLeft, Sparkles } from 'lucide-react';

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedSection className="pt-32 pb-16 md:pt-40 md:pb-24 flex-grow flex items-center justify-center" gradient="dark-to-charcoal">
        <div className="w-full max-w-lg px-4">
          <AnimatedElement>
            <div className="bg-card-gradient shadow-neuro-glow border border-white/5 rounded-2xl p-8 text-center backdrop-blur-sm">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-neuro-teal/20 rounded-full blur-xl animate-pulse"></div>
                  <CheckCircle className="h-20 w-20 text-neuro-teal relative z-10" />
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent mb-4">
                Thank You!
              </h1>
              
              <p className="text-xl text-foreground/80 mb-6">
                This is a mockup demonstration of the NeuroNest login/signup experience.
              </p>
              
              <div className="bg-neuro-purple/10 border border-neuro-purple/20 rounded-lg p-4 mb-8">
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-neuro-teal shrink-0 mt-1" />
                  <p className="text-sm text-foreground/70 text-left">
                    In a real application, you would now be logged in and redirected to your personalized dashboard with AI-powered mindfulness exercises and progress tracking.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button className="w-full sm:w-auto flex items-center gap-2 bg-gradient-to-r from-neuro-purple to-neuro-teal hover:opacity-90 transition-all">
                    <Home className="h-4 w-4" /> Return Home
                  </Button>
                </Link>
                
                <Link to="/signup">
                  <Button variant="outline" className="w-full sm:w-auto flex items-center gap-2 border-white/10 hover:border-neuro-teal/50 transition-all">
                    <ArrowLeft className="h-4 w-4" /> Back to Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ThankYou; 