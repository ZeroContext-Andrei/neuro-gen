import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  randomizeDirection?: boolean;
  threshold?: number;
  exitDelay?: number;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  className,
  delay = 0,
  randomizeDirection = true,
  threshold = 0.1,
  exitDelay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState('');
  const [exitDirection, setExitDirection] = useState('');

  useEffect(() => {
    // Randomly select a direction if randomizeDirection is true
    if (randomizeDirection) {
      const directions = ['slide-from-left', 'slide-from-right', 'slide-from-top', 'slide-from-bottom'];
      const randomIndex = Math.floor(Math.random() * directions.length);
      const entryDirection = directions[randomIndex];
      setDirection(entryDirection);
      
      // Set opposite direction for exit
      if (entryDirection === 'slide-from-left') {
        setExitDirection('exit-to-right');
      } else if (entryDirection === 'slide-from-right') {
        setExitDirection('exit-to-left');
      } else if (entryDirection === 'slide-from-top') {
        setExitDirection('exit-to-bottom');
      } else if (entryDirection === 'slide-from-bottom') {
        setExitDirection('exit-to-top');
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small timeout to stagger animations even more
          setTimeout(() => {
            setIsVisible(true);
          }, 100);
        }
      },
      {
        threshold,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    // Handle the page navigation (cleanup)
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [randomizeDirection, threshold]);

  const delayClass = delay ? `delay-${delay}` : '';

  return (
    <div
      ref={elementRef}
      className={cn(
        'animate-on-scroll',
        direction,
        delayClass,
        isVisible && 'visible',
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
