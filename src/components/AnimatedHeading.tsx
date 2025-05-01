import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedElement from './AnimatedElement';

interface AnimatedHeadingProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
  subtitle?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  children,
  className,
  centered = false,
  subtitle,
  as = 'h2',
}) => {
  const Component = as;
  const textAlignment = centered ? 'text-center' : '';
  const containerWidth = centered ? 'max-w-3xl mx-auto' : '';
  
  let headingClasses = '';
  
  switch (as) {
    case 'h1':
      headingClasses = 'text-4xl md:text-5xl font-bold mb-6';
      break;
    case 'h2':
      headingClasses = 'text-3xl md:text-4xl font-bold mb-6';
      break;
    case 'h3':
      headingClasses = 'text-2xl md:text-3xl font-bold mb-4';
      break;
    case 'h4':
      headingClasses = 'text-xl md:text-2xl font-bold mb-3';
      break;
  }
  
  return (
    <div className={cn(textAlignment, 'mb-16', className)}>
      <AnimatedElement>
        <Component className={cn(headingClasses)}>
          {children}
        </Component>
        {subtitle && (
          <p className={cn("text-lg text-foreground/70 mx-auto", centered && "max-w-2xl")}>
            {subtitle}
          </p>
        )}
      </AnimatedElement>
    </div>
  );
};

export default AnimatedHeading;
