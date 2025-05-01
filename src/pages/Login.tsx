import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from 'react-router-dom';
import AnimatedElement from '@/components/AnimatedElement';
import AnimatedSection from '@/components/AnimatedSection';
import { ArrowRight, Mail, Lock } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form processing delay
    setTimeout(() => {
      setIsLoading(false);
      navigate('/thank-you');
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <AnimatedSection className="pt-24 pb-16 md:pt-32 md:pb-24 flex-grow flex items-center justify-center" gradient="dark-to-charcoal">
        <div className="w-full max-w-md px-4 sm:px-0">
          <AnimatedElement>
            {/* Logo at the top of the form */}
            <div className="flex justify-center mb-6">
              <img 
                src="/favicon.png" 
                alt="NeuroNest Logo" 
                className="h-16 w-auto filter drop-shadow-glow animate-pulse-slow" 
              />
            </div>
            
            <div className="bg-card-gradient shadow-neuro-glow border border-white/5 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <div className="text-center mb-6">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Welcome Back</h1>
                <p className="text-foreground/70 mt-2">Sign in to continue your NeuroNest journey</p>
              </div>
              
              {/* Social Login Options */}
              <div className="flex justify-center gap-4 mb-6">
                <Button 
                  variant="outline" 
                  className="flex items-center justify-center border-white/10 hover:border-white/20 hover:bg-white/5 transition-all p-2 h-auto w-9 aspect-square"
                  onClick={() => navigate('/thank-you')}
                >
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" 
                    alt="Google"
                    className="h-4 w-4"
                  />
                </Button>
                
                <Button 
                  variant="outline" 
                  className="flex items-center justify-center border-white/10 hover:border-white/20 hover:bg-white/5 transition-all p-2 h-auto w-9 aspect-square"
                  onClick={() => navigate('/thank-you')}
                >
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" 
                    alt="Facebook"
                    className="h-4 w-4"
                  />
                </Button>
                
                <Button 
                  variant="outline" 
                  className="flex items-center justify-center border-white/10 hover:border-white/20 hover:bg-white/5 transition-all p-2 h-auto w-9 aspect-square"
                  onClick={() => navigate('/thank-you')}
                >
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" 
                    alt="Apple"
                    className="h-4 w-4"
                  />
                </Button>
              </div>
              
              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-black/50 backdrop-blur-sm px-4 text-foreground/50">Or continue with email</span>
                </div>
              </div>
              
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                  <div className="relative group">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-foreground/50 group-focus-within:text-neuro-teal transition-colors" />
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="name@example.com" 
                      className="pl-10 bg-background/30 border-white/10 focus-visible:border-neuro-purple focus-visible:ring-1 focus-visible:ring-neuro-teal/50 transition-all"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                    <Link to="/forgot-password" className="text-xs text-neuro-teal hover:text-neuro-purple transition-colors">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative group">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-foreground/50 group-focus-within:text-neuro-teal transition-colors" />
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="••••••••" 
                      className="pl-10 bg-background/30 border-white/10 focus-visible:border-neuro-purple focus-visible:ring-1 focus-visible:ring-neuro-teal/50 transition-all"
                      required
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-neuro-purple to-neuro-teal hover:opacity-90 transition-all py-5 h-auto text-base font-medium shadow-neuro hover:shadow-neuro-glow transform hover:translate-y-[-1px]"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Signing in...
                    </div>
                  ) : (
                    "Sign In"
                  )}
                </Button>
                
                <div className="text-center text-sm pt-2">
                  <span className="text-foreground/70">Don't have an account? </span>
                  <Link to="/signup" className="text-neuro-teal hover:text-neuro-purple transition-colors font-medium">
                    Create one now <ArrowRight className="inline h-3 w-3" />
                  </Link>
                </div>
              </form>
            </div>
            
            {/* Terms and privacy links */}
            <div className="text-center mt-6 text-xs text-foreground/50">
              By signing in, you agree to our{" "}
              <Link to="/terms" className="text-foreground/70 hover:text-neuro-teal transition-colors">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-foreground/70 hover:text-neuro-teal transition-colors">
                Privacy Policy
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Login; 