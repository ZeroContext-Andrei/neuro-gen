import React from 'react';
import { Button } from "@/components/ui/button";
import { Brain, Activity, Sparkles } from "lucide-react";
import BrainAnimation from '@/components/BrainAnimation';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import CTA from '@/components/CTA';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedHeading from '@/components/AnimatedHeading';
import AnimatedElement from '@/components/AnimatedElement';
import useAnimatedGroup from '@/hooks/useAnimatedGroup';

const Index = () => {
  const featureDelays = useAnimatedGroup(3);
  const testimonialDelays = useAnimatedGroup(3);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <AnimatedSection className="pt-32 pb-16 md:pt-40 md:pb-24" gradient="dark-to-charcoal">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <AnimatedElement>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Build a <span className="text-gradient">Mind</span> You Trust
              </h1>
            </AnimatedElement>
            <AnimatedElement delay={100}>
              <p className="text-xl text-foreground/80 mb-8">
                AI-powered mindfulness exercises with neuroscience-backed progress tracking. Your personal gym for mental wellness.
              </p>
            </AnimatedElement>
            <AnimatedElement delay={200}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                <Button className="bg-gradient-to-r from-neuro-purple to-neuro-teal hover:opacity-90 transition-opacity px-8 py-6 h-auto text-lg">
                  Join the Beta
                </Button>
                </Link>
                <Button variant="outline" className="border-neuro-purple text-foreground px-8 py-6 h-auto text-lg">
                  <Link to="/how-it-works">Learn More</Link>
                </Button>
              </div>
            </AnimatedElement>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <AnimatedElement>
              <div className="w-full max-w-md h-96">
                <BrainAnimation />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection className="py-20" gradient="charcoal-to-dark">
        <AnimatedHeading 
          centered
          subtitle="Our platform adapts to your unique cognitive patterns and mental wellness goals, creating a truly personalized experience."
        >
          Personalized to Your Brain
        </AnimatedHeading>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="AI-Powered Recommendations"
            description="Our algorithms analyze your patterns to suggest personalized mindfulness exercises that work specifically for you."
            icon={<Brain size={32} />}
            delay={featureDelays[0]}
          />
          <FeatureCard
            title="Neuroscience-Backed Tracking"
            description="See tangible progress with scientifically validated measurements of your mental fitness and cognitive improvements."
            icon={<Activity size={32} />}
            delay={featureDelays[1]}
          />
          <FeatureCard
            title="Adaptive Mindfulness"
            description="Exercises that evolve as you do, becoming more effective by learning from your feedback and results."
            icon={<Sparkles size={32} />}
            delay={featureDelays[2]}
          />
        </div>
      </AnimatedSection>

      {/* Mid-page CTA */}
      <AnimatedSection className="py-20" gradient="dark-to-charcoal">
        <div className="max-w-3xl mx-auto">
          <CTA
            title="Ready to transform your mental wellness journey?"
            subtitle="Join our beta and be among the first to experience the future of mindfulness."
            buttonText="Start Your Journey"
          />
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="py-20" gradient="charcoal-to-dark">
        <AnimatedHeading 
          centered
          subtitle="Hear from our early adopters who have experienced the benefits of NeuroNest."
        >
          What Early Users Say
        </AnimatedHeading>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            quote="I've tried dozens of meditation apps, but NeuroNest is the first that actually adapts to my specific needs and shows me real progress."
            author="Sarah L."
            role="Tech Executive"
            delay={testimonialDelays[0]}
          />
          <TestimonialCard
            quote="The personalized approach has helped me stay consistent with my mindfulness practice for the first time in years."
            author="Michael T."
            role="Professor"
            delay={testimonialDelays[1]}
          />
          <TestimonialCard
            quote="As someone with ADHD, having a system that adapts to my specific challenges has been game-changing for my focus and anxiety."
            author="Jamie K."
            role="Designer"
            delay={testimonialDelays[2]}
          />
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <AnimatedSection className="py-20" gradient="dark-to-dark">
        <div className="max-w-3xl mx-auto">
          <CTA
            title="Build Your Mind Sanctuary Today"
            subtitle="Join the waitlist for exclusive early access and special beta user benefits."
            buttonText="Join the Beta"
            variant="light"
          />
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default Index;
