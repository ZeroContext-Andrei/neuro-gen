import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedElement from './AnimatedElement';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  gradient?: 
    | 'dark-to-dark' 
    | 'dark-to-charcoal' 
    | 'charcoal-to-dark' 
    | 'charcoal-to-charcoal'
    | 'dark-to-dark-seamless'
    | 'dark-to-charcoal-seamless';
  noContainer?: boolean;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  id,
  gradient = 'dark-to-dark',
  noContainer = false,
}) => {
  return (
    <section 
      id={id} 
      className={cn(
        "section section-gradient", 
        gradient,
        className
      )}
    >
      <AnimatedElement randomizeDirection={false} threshold={0.05}>
        {noContainer ? (
          children
        ) : (
        <div className="container mx-auto px-4 md:px-6">
          {children}
        </div>
        )}
      </AnimatedElement>
    </section>
  );
};

export default AnimatedSection;
