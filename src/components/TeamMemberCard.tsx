
import React from 'react';
import AnimatedElement from './AnimatedElement';

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  image?: string;
  delay?: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, bio, image, delay = 0 }) => {
  return (
    <AnimatedElement delay={delay}>
      <div className="glass-card overflow-hidden hover-lift">
        <div className="h-48 bg-gradient-to-r from-neuro-purple/30 to-neuro-teal/30 flex items-center justify-center">
          {image ? (
            <img src={image} alt={name} className="h-32 w-32 rounded-full object-cover border-2 border-white/10" />
          ) : (
            <div className="h-32 w-32 rounded-full glass-light flex items-center justify-center text-white text-4xl font-medium">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-1">{name}</h3>
          <p className="text-neuro-purple font-medium mb-4">{role}</p>
          <p className="text-foreground/70">{bio}</p>
        </div>
      </div>
    </AnimatedElement>
  );
};

export default TeamMemberCard;
