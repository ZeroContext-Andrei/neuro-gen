
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedElement from './AnimatedElement';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  className,
  delay = 0,
}) => {
  return (
    <AnimatedElement delay={delay}>
      <div 
        className={cn(
          "glass-card p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neuro-glow",
          className
        )}
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neuro-purple/20 to-neuro-teal/20 flex items-center justify-center mb-4 backdrop-blur-sm">
          <div className="text-neuro-purple">{icon}</div>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </AnimatedElement>
  );
};

export default FeatureCard;
