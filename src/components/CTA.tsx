import React from 'react';
import { Button } from './ui/button';
import AnimatedElement from './AnimatedElement';
import { Link } from 'react-router-dom';

interface CTAProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  variant?: 'default' | 'light';
}

const CTA: React.FC<CTAProps> = ({
  title,
  subtitle,
  buttonText = "Join the Beta",
  variant = 'default'
}) => {
  const isLight = variant === 'light';
  
  return (
    <AnimatedElement randomizeDirection={false}>
      <div className={`rounded-2xl py-12 px-6 md:px-12 ${isLight ? 
        'bg-card-gradient shadow-neuro-glow border border-white/5' : 
        'bg-gradient-to-r from-neuro-purple/10 via-neuro-blue/5 to-neuro-teal/10'}`}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">{title}</h2>
          {subtitle && (
            <p className="text-lg text-foreground/70 mb-8">{subtitle}</p>
          )}
          <Link to="/signup">
            <Button className="bg-gradient-to-r from-neuro-purple to-neuro-teal hover:opacity-90 transition-opacity px-8 py-6 h-auto text-lg shadow-neuro hover:shadow-neuro-glow">
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </AnimatedElement>
  );
};

export default CTA;
