import React from 'react';
import { Button } from "@/components/ui/button";
import StepCard from '@/components/StepCard';
import CTA from '@/components/CTA';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedHeading from '@/components/AnimatedHeading';
import AnimatedElement from '@/components/AnimatedElement';
import useAnimatedGroup from '@/hooks/useAnimatedGroup';

const HowItWorks = () => {
  const stepDelays = useAnimatedGroup(3);
  const timelineDelays = useAnimatedGroup(4);
  const scienceDelays = useAnimatedGroup(3);
  const faqDelays = useAnimatedGroup(3);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <AnimatedSection className="pt-32 pb-0 md:pt-40 md:pb-0" gradient="dark-to-dark-seamless">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedElement>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How <span className="text-gradient">NeuroNest</span> Works
            </h1>
            </AnimatedElement>
            <AnimatedElement delay={100}>
            <p className="text-xl text-foreground/80 mb-8">
              A simple, effective approach to mental wellness powered by neuroscience and AI.
            </p>
            </AnimatedElement>
          </div>
        </div>
      </AnimatedSection>

      {/* 3-Step Process */}
      <AnimatedSection className="pt-10 pb-20" gradient="dark-to-charcoal-seamless">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedHeading 
            centered
            subtitle="We've designed the NeuroNest experience to be intuitive, effective, and personalized from day one."
            className="mb-16"
          >
            Your Journey in Three Simple Steps
          </AnimatedHeading>

          <div className="grid gap-16 md:gap-8 md:grid-cols-3">
            <StepCard
              number={1}
              title="Complete Your Assessment"
              description="Answer a few questions about your mental wellness goals, current challenges, and preferences to help our AI understand your unique needs."
              delay={stepDelays[0]}
            />
            <StepCard
              number={2}
              title="Begin Your Personalized Plan"
              description="Receive a tailored program of mindfulness exercises and activities specifically designed for your cognitive patterns and goals."
              delay={stepDelays[1]}
            />
            <StepCard
              number={3}
              title="Track Your Progress"
              description="Monitor your improvement over time with neuroscience-backed metrics and watch as your program adapts to your evolving needs."
              delay={stepDelays[2]}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Timeline/Journey */}
      <AnimatedSection className="py-20" gradient="charcoal-to-charcoal">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedHeading 
            centered
            subtitle="See how NeuroNest adapts and evolves with you over time."
          >
            Your Wellness Journey
          </AnimatedHeading>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:translate-x-[-50%] top-0 bottom-0 w-0.5 bg-neuro-purple/20"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Week 1 */}
              <AnimatedElement delay={timelineDelays[0]}>
              <div className="flex flex-col md:flex-row items-start relative">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <h3 className="text-lg font-medium text-neuro-purple">Week 1</h3>
                  <h4 className="text-xl font-semibold mb-2">Establishing Your Baseline</h4>
                  <p className="text-foreground/70">Begin with foundational exercises that help us understand your cognitive patterns and responses.</p>
                </div>
                <div className="absolute left-0 md:left-1/2 transform translate-x-[3px] md:translate-x-[-50%] flex items-center justify-center">
                  <div className="h-8 w-8 rounded-full bg-neuro-purple flex items-center justify-center text-white text-sm font-medium">
                    1
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 pl-12 md:pl-0"></div>
              </div>
              </AnimatedElement>
              
              {/* Week 2-4 */}
              <AnimatedElement delay={timelineDelays[1]}>
              <div className="flex flex-col md:flex-row items-start relative">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 md:block hidden"></div>
                <div className="absolute left-0 md:left-1/2 transform translate-x-[3px] md:translate-x-[-50%] flex items-center justify-center">
                  <div className="h-8 w-8 rounded-full bg-neuro-purple flex items-center justify-center text-white text-sm font-medium">
                    2
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 pl-12">
                  <h3 className="text-lg font-medium text-neuro-purple">Weeks 2-4</h3>
                  <h4 className="text-xl font-semibold mb-2">Personalized Program Development</h4>
                  <p className="text-foreground/70">Your program begins to adapt based on your feedback and measured responses to different exercises.</p>
                </div>
              </div>
              </AnimatedElement>
              
              {/* Month 2 */}
              <AnimatedElement delay={timelineDelays[2]}>
              <div className="flex flex-col md:flex-row items-start relative">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <h3 className="text-lg font-medium text-neuro-purple">Month 2</h3>
                  <h4 className="text-xl font-semibold mb-2">Noticeable Progress</h4>
                  <p className="text-foreground/70">See measurable improvements in focus, stress reduction, or other target areas as your program continues to refine.</p>
                </div>
                <div className="absolute left-0 md:left-1/2 transform translate-x-[3px] md:translate-x-[-50%] flex items-center justify-center">
                  <div className="h-8 w-8 rounded-full bg-neuro-purple flex items-center justify-center text-white text-sm font-medium">
                    3
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 pl-12 md:pl-0"></div>
              </div>
              </AnimatedElement>
              
              {/* Month 3+ */}
              <AnimatedElement delay={timelineDelays[3]}>
              <div className="flex flex-col md:flex-row items-start relative">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 md:block hidden"></div>
                <div className="absolute left-0 md:left-1/2 transform translate-x-[3px] md:translate-x-[-50%] flex items-center justify-center">
                  <div className="h-8 w-8 rounded-full bg-neuro-purple flex items-center justify-center text-white text-sm font-medium">
                    4
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 pl-12">
                  <h3 className="text-lg font-medium text-neuro-purple">Month 3+</h3>
                  <h4 className="text-xl font-semibold mb-2">Long-term Transformation</h4>
                  <p className="text-foreground/70">Experience deeper, lasting changes in your mental wellness as your personalized program continues to evolve with you.</p>
                </div>
              </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Technology Section */}
      <AnimatedSection className="py-20" gradient="charcoal-to-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Science Behind NeuroNest</h2>
              </AnimatedElement>
              <AnimatedElement delay={100}>
              <p className="text-lg text-foreground/70 mb-6">
                Our platform combines cutting-edge AI with established neuroscience principles to create a truly effective mental wellness solution.
              </p>
              </AnimatedElement>
              <div className="space-y-6">
                <AnimatedElement delay={scienceDelays[0]}>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI Pattern Recognition</h3>
                  <p className="text-foreground/70">
                    Our algorithms identify subtle patterns in your cognitive responses and adapt your program accordingly.
                  </p>
                </div>
                </AnimatedElement>
                <AnimatedElement delay={scienceDelays[1]}>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Evidence-Based Practices</h3>
                  <p className="text-foreground/70">
                    Every exercise and recommendation is grounded in peer-reviewed research in neuroscience and psychology.
                  </p>
                </div>
                </AnimatedElement>
                <AnimatedElement delay={scienceDelays[2]}>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Continuous Improvement</h3>
                  <p className="text-foreground/70">
                    Our system learns not just from you, but from anonymized data across our platform to constantly improve recommendations.
                  </p>
                </div>
                </AnimatedElement>
              </div>
            </div>
            <div className="md:w-1/2">
              <AnimatedElement delay={200}>
              <div className="bg-white rounded-xl shadow-neuro p-6">
                <div className="aspect-video bg-neuro-purple/10 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center p-6">
                    <div className="inline-block rounded-full bg-neuro-purple/20 p-4 mb-4">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-8 h-8 text-neuro-purple"
                      >
                        <path d="M12 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16z"></path>
                        <path d="M12 8v4l3 3"></path>
                        <path d="M5 3v2"></path>
                        <path d="M19 3v2"></path>
                        <path d="M5 19v2"></path>
                        <path d="M19 19v2"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium mb-2">Video Coming Soon</h3>
                    <p className="text-foreground/70">Our technology explainer video is currently in production</p>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-neuro-gray-light p-4 rounded-lg">
                  <div>
                    <h4 className="font-medium">The Science of NeuroNest</h4>
                    <p className="text-sm text-foreground/70">Learn about our research foundation</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Download Whitepaper
                  </Button>
                </div>
              </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section - Updated with Accordion */}
      <AnimatedSection className="py-20" gradient="dark-to-dark">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedHeading 
            centered
            subtitle="Common questions about the NeuroNest platform and process."
          >
            Frequently Asked Questions
          </AnimatedHeading>

          <AnimatedElement delay={100}>
          <div className="max-w-3xl mx-auto glass-card p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-white/10">
                <AccordionTrigger className="text-xl font-semibold py-4 hover:no-underline">
                  How much time do I need to commit each day?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-6 pt-2">
                  NeuroNest adapts to your schedule. While we recommend at least 10-15 minutes daily for optimal results, 
                  even 5-minute exercises can be effective. Your dashboard will suggest the ideal session length based 
                  on your goals and availability.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-white/10">
                <AccordionTrigger className="text-xl font-semibold py-4 hover:no-underline">
                  Is my data private and secure?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-6 pt-2">
                  Absolutely. We take data privacy extremely seriously. All personal data is encrypted, and we never 
                  share your individual information with third parties. Our AI uses anonymized patterns to improve 
                  recommendations while keeping your specific data private.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-white/10">
                <AccordionTrigger className="text-xl font-semibold py-4 hover:no-underline">
                  How soon will I see results?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-6 pt-2">
                  Many users report noticeable improvements in focus and stress levels within 2-3 weeks of consistent use. 
                  More significant changes in cognitive patterns typically emerge after 1-2 months. Your personal dashboard 
                    will track your progress with objective metrics.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          </AnimatedElement>
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <AnimatedSection className="py-20" gradient="dark-to-charcoal">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedElement>
            <CTA
                title="Ready to Start Your Mental Wellness Journey?"
                subtitle="Join our beta and be among the first to experience the future of personalized mindfulness."
              buttonText="Join the Beta"
                variant="light"
            />
            </AnimatedElement>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default HowItWorks;
