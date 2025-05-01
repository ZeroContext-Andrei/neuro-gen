
import React from 'react';
import AnimatedElement from './AnimatedElement';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  delay?: number;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description, delay = 0 }) => {
  return (
    <AnimatedElement delay={delay}>
      <div 
        className="flex flex-col items-start glass-card p-6 transform hover:translate-y-[-5px] transition-all duration-300"
      >
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-neuro-purple to-neuro-teal text-white font-bold text-xl mb-4">
          {number}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-foreground/70">{description}</p>
      </div>
    </AnimatedElement>
  );
};

export default StepCard;
