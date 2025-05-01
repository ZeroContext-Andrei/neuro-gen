
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedElement from './AnimatedElement';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
  className?: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  avatar,
  className,
  delay = 0,
}) => {
  return (
    <AnimatedElement delay={delay}>
      <div className={cn(
        "glass-card p-6 hover-glow transition-all duration-300",
        className
      )}>
        <div className="flex items-start space-x-4 mb-4">
          <div className="relative">
            <span className="text-4xl text-neuro-purple leading-none">"</span>
          </div>
          <p className="italic text-foreground/80">{quote}</p>
        </div>
        <div className="flex items-center mt-4">
          <div className="h-10 w-10 rounded-full glass-light flex-shrink-0 flex items-center justify-center text-sm font-medium text-foreground backdrop-blur-sm">
            {avatar ? (
              <img src={avatar} alt={author} className="h-10 w-10 rounded-full object-cover" />
            ) : (
              author.charAt(0)
            )}
          </div>
          <div className="ml-3">
            <h4 className="font-medium">{author}</h4>
            <p className="text-sm text-foreground/70">{role}</p>
          </div>
        </div>
      </div>
    </AnimatedElement>
  );
};

export default TestimonialCard;
