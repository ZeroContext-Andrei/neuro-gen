import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useNavigate } from 'react-router-dom';
import AnimatedElement from '@/components/AnimatedElement';
import AnimatedSection from '@/components/AnimatedSection';
import { ArrowRight, Mail, Lock, User, Brain } from 'lucide-react';

const Signup = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!termsAccepted) return;
    
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
      <AnimatedSection className="pt-20 pb-16 md:pt-28 md:pb-24 flex-grow flex items-center justify-center" gradient="dark-to-charcoal">
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
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Join NeuroNest Beta</h1>
                <p className="text-foreground/70 mt-2">Create your account and start your mental wellness journey</p>
              </div>
              
              {/* Social Signup Options */}
              <div className="flex justify-center flex-wrap gap-3 mb-6">
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
                
                <Button 
                  variant="outline" 
                  className="flex items-center justify-center border-white/10 hover:border-white/20 hover:bg-white/5 transition-all p-2 h-auto w-9 aspect-square"
                  onClick={() => navigate('/thank-you')}
                >
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                    alt="GitHub"
                    className="h-4 w-4 invert"
                  />
                </Button>
              </div>
              
              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-black/50 backdrop-blur-sm px-4 text-foreground/50">Or sign up with email</span>
                </div>
              </div>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                  <div className="relative group">
                    <User className="absolute left-3 top-3 h-5 w-5 text-foreground/50 group-focus-within:text-neuro-teal transition-colors" />
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="John Doe" 
                      className="pl-10 bg-background/30 border-white/10 focus-visible:border-neuro-purple focus-visible:ring-1 focus-visible:ring-neuro-teal/50 transition-all"
                      required
                    />
                  </div>
                </div>

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
                  <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                  <div className="relative group">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-foreground/50 group-focus-within:text-neuro-teal transition-colors" />
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="••••••••" 
                      className="pl-10 bg-background/30 border-white/10 focus-visible:border-neuro-purple focus-visible:ring-1 focus-visible:ring-neuro-teal/50 transition-all"
                      required
                      minLength={8}
                    />
                  </div>
                  <p className="text-xs text-foreground/50">Must be at least 8 characters with a number and a symbol</p>
                </div>

                <div className="flex items-start space-x-3 pt-2">
                  <Checkbox 
                    id="terms" 
                    className="border-white/20 data-[state=checked]:bg-neuro-purple data-[state=checked]:border-neuro-teal" 
                    checked={termsAccepted}
                    onCheckedChange={(value) => setTermsAccepted(value === true)}
                    required
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms"
                      className="text-xs text-foreground/70 cursor-pointer"
                    >
                      I agree to the{" "}
                      <Link to="/terms" className="text-neuro-teal hover:text-neuro-purple transition-colors">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="text-neuro-teal hover:text-neuro-purple transition-colors">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                </div>
                
                <Button 
                  type="submit"
                  disabled={isLoading || !termsAccepted}
                  className="w-full mt-2 bg-gradient-to-r from-neuro-purple to-neuro-teal hover:opacity-90 transition-all py-5 h-auto text-base font-medium shadow-neuro hover:shadow-neuro-glow transform hover:translate-y-[-1px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Creating account...
                    </div>
                  ) : (
                    <>
                      <Brain className="h-5 w-5 mr-2" /> Create Account
                    </>
                  )}
                </Button>
                
                <div className="text-center text-sm pt-2">
                  <span className="text-foreground/70">Already have an account? </span>
                  <Link to="/login" className="text-neuro-teal hover:text-neuro-purple transition-colors font-medium">
                    Sign in <ArrowRight className="inline h-3 w-3" />
                  </Link>
                </div>
              </form>
            </div>
            
            {/* Notification about beta access */}
            <div className="text-center mt-6 text-xs text-foreground/50 bg-neuro-purple/10 rounded-lg p-3 border border-neuro-purple/20">
              <div className="font-medium text-neuro-teal mb-1">Join Our Exclusive Beta Program</div>
              By creating an account, you'll be among the first to experience NeuroNest's innovative approach to mental wellness and help shape its future.
            </div>
          </AnimatedElement>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Signup; 