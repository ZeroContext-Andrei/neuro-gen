import React from 'react';
import { Button } from "@/components/ui/button";
import { Brain, ChartLine, Calendar, Clock, User, Settings } from "lucide-react";
import FeatureCard from '@/components/FeatureCard';
import CTA from '@/components/CTA';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedHeading from '@/components/AnimatedHeading';
import AnimatedElement from '@/components/AnimatedElement';
import useAnimatedGroup from '@/hooks/useAnimatedGroup';

const Product = () => {
  const featureDelays = useAnimatedGroup(6);
  const listItemDelays = useAnimatedGroup(3);
  const cardItemDelays = useAnimatedGroup(3);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <AnimatedSection className="pt-32 pb-16 md:pt-40 md:pb-24" gradient="dark-to-charcoal">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedElement>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your <span className="text-gradient">Personal</span> Mental Wellness Platform
            </h1>
            </AnimatedElement>
            <AnimatedElement delay={100}>
            <p className="text-xl text-foreground/80 mb-8">
              Discover how our AI-powered platform adapts to your unique mental wellness needs and goals.
            </p>
            </AnimatedElement>
            <AnimatedElement delay={200}>
            <Button className="bg-gradient-to-r from-neuro-purple to-neuro-teal hover:opacity-90 transition-opacity px-8 py-6 h-auto text-lg">
              Join the Beta
            </Button>
            </AnimatedElement>
          </div>
        </div>
      </AnimatedSection>

      {/* AI Recommendation Section */}
      <AnimatedSection className="py-20" gradient="charcoal-to-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">AI-Powered Personal Recommendations</h2>
              </AnimatedElement>
              <AnimatedElement delay={100}>
              <p className="text-lg text-foreground/70 mb-6">
                Our proprietary algorithms analyze your usage patterns, feedback, and progress to create a deeply personalized experience that evolves with you.
              </p>
              </AnimatedElement>
              <ul className="space-y-4">
                <AnimatedElement delay={listItemDelays[0]}>
                <li className="flex items-start">
                  <div className="mt-1 mr-4 text-neuro-purple">
                    <Brain size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Cognitive Pattern Recognition</h3>
                    <p className="text-foreground/70">Our AI learns your unique cognitive patterns and mental wellness needs.</p>
                  </div>
                </li>
                </AnimatedElement>
                <AnimatedElement delay={listItemDelays[1]}>
                <li className="flex items-start">
                  <div className="mt-1 mr-4 text-neuro-purple">
                    <ChartLine size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Progress-Based Adjustments</h3>
                    <p className="text-foreground/70">Exercises and recommendations adapt based on your progress and feedback.</p>
                  </div>
                </li>
                </AnimatedElement>
                <AnimatedElement delay={listItemDelays[2]}>
                <li className="flex items-start">
                  <div className="mt-1 mr-4 text-neuro-purple">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Contextual Awareness</h3>
                    <p className="text-foreground/70">Suggestions change based on time of day, your schedule, and emotional state.</p>
                  </div>
                </li>
                </AnimatedElement>
              </ul>
            </div>
            <div className="md:w-1/2">
              <AnimatedElement delay={200}>
              <div className="glass-card overflow-hidden p-6">
                <div className="bg-neuro-purple/10 p-4 rounded-lg mb-4">
                  <h4 className="font-medium mb-2">Your Personalized Recommendation</h4>
                  <div className="bg-background/40 backdrop-blur-sm p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <Brain className="text-neuro-purple mr-2" size={20} />
                        <span className="font-medium">Focused Attention Exercise</span>
                      </div>
                      <span className="text-sm bg-neuro-teal/20 text-neuro-teal px-2 py-1 rounded">Recommended</span>
                    </div>
                    <p className="text-sm text-foreground/70 mb-3">
                      Based on your recent stress patterns and sleep data, this 10-minute exercise is optimized for your current state.
                    </p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="flex items-center">
                        <Clock size={16} className="mr-1" /> 10 min
                      </span>
                      <Button size="sm" className="bg-neuro-teal hover:bg-neuro-teal/90">
                        Start Now
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                    <AnimatedElement delay={cardItemDelays[0]}>
                  <div className="flex items-center justify-between p-3 bg-card/50 rounded-lg">
                    <div className="flex items-center">
                      <div className="bg-neuro-blue/30 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                        <Clock size={16} />
                      </div>
                      <span>Morning Focus Session</span>
                    </div>
                    <Button variant="ghost" size="sm">View</Button>
                  </div>
                    </AnimatedElement>
                    <AnimatedElement delay={cardItemDelays[1]}>
                  <div className="flex items-center justify-between p-3 bg-card/50 rounded-lg">
                    <div className="flex items-center">
                      <div className="bg-neuro-blue/30 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                        <User size={16} />
                      </div>
                      <span>Stress Reduction</span>
                    </div>
                    <Button variant="ghost" size="sm">View</Button>
                  </div>
                    </AnimatedElement>
                    <AnimatedElement delay={cardItemDelays[2]}>
                  <div className="flex items-center justify-between p-3 bg-card/50 rounded-lg">
                    <div className="flex items-center">
                      <div className="bg-neuro-blue/30 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                        <Settings size={16} />
                      </div>
                      <span>Customize Your Plan</span>
                    </div>
                    <Button variant="ghost" size="sm">View</Button>
                      </div>
                    </AnimatedElement>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Features Grid */}
      <AnimatedSection className="py-20" gradient="dark-to-charcoal">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedHeading 
            centered
            subtitle="Everything you need for a comprehensive mental wellness journey in one intuitive platform."
          >
            Key Platform Features
          </AnimatedHeading>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Personalized Dashboard"
              description="View your progress, upcoming exercises, and personalized insights all in one place."
              icon={<User size={32} />}
              delay={featureDelays[0]}
            />
            <FeatureCard
              title="Progress Analytics"
              description="Detailed metrics and visualizations to track your mental wellness journey."
              icon={<ChartLine size={32} />}
              delay={featureDelays[1]}
            />
            <FeatureCard
              title="Exercise Library"
              description="Hundreds of neuroscience-backed exercises for different mental wellness goals."
              icon={<Brain size={32} />}
              delay={featureDelays[2]}
            />
            <FeatureCard
              title="Scheduled Sessions"
              description="Plan your mental wellness activities with intelligent scheduling assistance."
              icon={<Calendar size={32} />}
              delay={featureDelays[3]}
            />
            <FeatureCard
              title="Quick Sessions"
              description="Short, effective exercises for busy days when time is limited."
              icon={<Clock size={32} />}
              delay={featureDelays[4]}
            />
            <FeatureCard
              title="Customizable Program"
              description="Create your own wellness program or let our AI design one for you."
              icon={<Settings size={32} />}
              delay={featureDelays[5]}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <AnimatedSection className="py-20" gradient="charcoal-to-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedElement>
            <CTA
              title="Ready to Try NeuroNest?"
              subtitle="Join our exclusive beta program and be among the first to experience the future of mental wellness."
              buttonText="Join the Beta"
            />
            </AnimatedElement>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default Product;
