import React from 'react';
import { Button } from "@/components/ui/button";
import TeamMemberCard from '@/components/TeamMemberCard';
import CTA from '@/components/CTA';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedHeading from '@/components/AnimatedHeading';
import AnimatedElement from '@/components/AnimatedElement';
import useAnimatedGroup from '@/hooks/useAnimatedGroup';

const About = () => {
  const teamDelays = useAnimatedGroup(4);
  const advisorDelays = useAnimatedGroup(3);
  const philosophyDelays = useAnimatedGroup(4);
  
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & CEO",
      bio: "Neuroscientist with 10+ years of research in cognitive enhancement and mental wellness. Former research lead at Stanford's Cognitive Neuroscience Lab."
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      bio: "AI specialist with experience at leading tech companies. Passionate about using technology to improve mental health and wellness."
    },
    {
      name: "Dr. James Wilson",
      role: "Chief Research Officer",
      bio: "Clinical psychologist specializing in mindfulness-based interventions with 15+ years of experience in both research and clinical practice."
    },
    {
      name: "Emma Thompson",
      role: "Head of Product",
      bio: "Former product lead at wellness tech startups. Dedicated to creating intuitive, effective digital experiences for mental wellness."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <AnimatedSection className="pt-32 pb-16 md:pt-40 md:pb-24" gradient="dark-to-charcoal">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedElement>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">NeuroNest</span>
            </h1>
            </AnimatedElement>
            <AnimatedElement delay={100}>
            <p className="text-xl text-foreground/80 mb-8">
              Our mission is to make mental wellness accessible, personal, and effective for everyone.
            </p>
            </AnimatedElement>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Story */}
      <AnimatedSection className="py-20" gradient="charcoal-to-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              </AnimatedElement>
              <AnimatedElement delay={100}>
              <p className="text-lg text-foreground/70 mb-6">
                NeuroNest began with a simple question: Why do generic mindfulness apps work well for some people but not for others?
              </p>
              </AnimatedElement>
              <AnimatedElement delay={150}>
              <p className="text-lg text-foreground/70 mb-6">
                Our founder, Dr. Sarah Chen, spent years researching cognitive patterns and their relationship to mental wellness techniques. Her work revealed that mindfulness exercises could be significantly more effective when tailored to individual cognitive styles.
              </p>
              </AnimatedElement>
              <AnimatedElement delay={200}>
              <p className="text-lg text-foreground/70 mb-6">
                In 2023, she assembled a team of neuroscientists, AI specialists, and wellness experts to create a platform that could deliver truly personalized mental wellness experiences at scale.
              </p>
              </AnimatedElement>
              <AnimatedElement delay={250}>
              <p className="text-lg text-foreground/70">
                Today, NeuroNest is at the forefront of personalized mental wellness technology, using AI and neuroscience to help people build stronger, more resilient minds.
              </p>
              </AnimatedElement>
            </div>
            <div className="md:w-1/2">
              <AnimatedElement delay={200}>
              <div className="glass-card p-8">
                <div className="text-center mb-8">
                  <div className="inline-block rounded-full bg-gradient-to-r from-neuro-purple to-neuro-teal p-1 mb-6">
                    <div className="bg-card/70 rounded-full p-4">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-10 h-10 text-neuro-purple"
                      >
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
                  <p className="text-foreground/70">
                    To create a world where everyone has access to mental wellness tools that truly work for their unique mind.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-4 glass-light rounded-lg">
                    <h4 className="font-semibold mb-2">Values</h4>
                    <ul className="space-y-2 text-foreground/70">
                      <li>Scientific Integrity</li>
                      <li>Personal Empowerment</li>
                      <li>Continuous Improvement</li>
                      <li>Privacy & Trust</li>
                    </ul>
                  </div>
                  <div className="p-4 glass-light rounded-lg">
                    <h4 className="font-semibold mb-2">Approach</h4>
                    <ul className="space-y-2 text-foreground/70">
                      <li>Evidence-Based Methods</li>
                      <li>Personalized Adaptation</li>
                      <li>Continuous Feedback</li>
                      <li>User-Centered Design</li>
                    </ul>
                  </div>
                </div>
              </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection className="py-20" gradient="dark-to-charcoal">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedHeading 
            centered
            subtitle="A passionate group of experts committed to transforming mental wellness through technology and neuroscience."
          >
            Our Team
          </AnimatedHeading>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                delay={teamDelays[index]}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Advisors Section */}
      <AnimatedSection className="py-20" gradient="charcoal-to-dark">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedHeading 
            centered
            subtitle="Our work is guided by leading experts in neuroscience, psychology, and AI."
          >
            Scientific Advisors
          </AnimatedHeading>

          <div className="grid gap-8 md:grid-cols-3">
            <AnimatedElement delay={advisorDelays[0]}>
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-2">Prof. Robert Miller, PhD</h3>
              <p className="text-neuro-purple font-medium mb-4">Harvard University</p>
              <p className="text-foreground/70">
                Leading researcher in cognitive neuroscience with over 100 published papers on neuroplasticity and mental wellness.
              </p>
            </div>
            </AnimatedElement>
            <AnimatedElement delay={advisorDelays[1]}>
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-2">Dr. Lisa Zhang, MD</h3>
              <p className="text-neuro-purple font-medium mb-4">Johns Hopkins Medicine</p>
              <p className="text-foreground/70">
                Psychiatrist specializing in integrative approaches to mental health and wellness through technology.
              </p>
            </div>
            </AnimatedElement>
            <AnimatedElement delay={advisorDelays[2]}>
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-2">Dr. Marcus Johnson, PhD</h3>
              <p className="text-neuro-purple font-medium mb-4">MIT Media Lab</p>
              <p className="text-foreground/70">
                Pioneer in AI applications for health and wellness with expertise in personalized digital interventions.
              </p>
            </div>
            </AnimatedElement>
          </div>
        </div>
      </AnimatedSection>

      {/* Values/Philosophy */}
      <AnimatedSection className="py-20" gradient="dark-to-charcoal">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedHeading 
            centered
            subtitle="The core beliefs that drive our approach to mental wellness."
          >
            Our Philosophy
          </AnimatedHeading>

          <div className="grid gap-8 md:grid-cols-2">
            <AnimatedElement delay={philosophyDelays[0]}>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-4">Personalization is Key</h3>
              <p className="text-lg text-foreground/70">
                We believe that mental wellness is not one-size-fits-all. Every mind is unique, and wellness practices should adapt to individual needs, patterns, and goals.
              </p>
            </div>
            </AnimatedElement>
            <AnimatedElement delay={philosophyDelays[1]}>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-4">Science First</h3>
              <p className="text-lg text-foreground/70">
                Everything we do is grounded in peer-reviewed research. We combine established neuroscience with cutting-edge AI to create solutions that are both innovative and evidence-based.
              </p>
            </div>
            </AnimatedElement>
            <AnimatedElement delay={philosophyDelays[2]}>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-4">Measurable Progress</h3>
              <p className="text-lg text-foreground/70">
                We believe in the power of tracking progress. Clear, objective measurements help users see their improvement over time and stay motivated on their wellness journey.
              </p>
            </div>
            </AnimatedElement>
            <AnimatedElement delay={philosophyDelays[3]}>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-4">Accessibility</h3>
              <p className="text-lg text-foreground/70">
                Mental wellness should be available to everyone. We're committed to making our platform accessible across different devices, lifestyles, and experience levels.
              </p>
            </div>
            </AnimatedElement>
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <AnimatedSection className="py-20" gradient="charcoal-to-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedElement>
            <CTA
              title="Join Us on Our Mission"
              subtitle="Be among the first to experience NeuroNest and help shape the future of personalized mental wellness."
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

export default About;
