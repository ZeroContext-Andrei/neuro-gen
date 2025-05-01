
import React, { useRef, useEffect } from "react";

const BrainAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvasRef.current) return;

      const rect = canvasRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      // Update brain animation based on mouse position
      if (canvasRef.current) {
        const brain = canvasRef.current.querySelector('.brain-core');
        if (brain instanceof HTMLElement) {
          const moveX = (x - 0.5) * 20;
          const moveY = (y - 0.5) * 20;
          brain.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }

        // Update neural paths
        const paths = canvasRef.current.querySelectorAll('.neural-path');
        paths.forEach((path, index) => {
          if (path instanceof HTMLElement) {
            const delay = index * 0.1;
            const moveX = (x - 0.5) * 10 * (index % 2 ? 1 : -1);
            const moveY = (y - 0.5) * 10 * (index % 2 ? -1 : 1);
            path.style.transform = `translate(${moveX}px, ${moveY}px)`;
            path.style.transition = `transform 0.3s ease ${delay}s`;
          }
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={canvasRef} 
      className="relative w-full h-full flex items-center justify-center opacity-0 slide-in-right"
    >
      {/* Brain Visualization */}
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        {/* Main brain shape */}
        <div className="absolute w-full h-full rounded-full bg-gradient-to-br from-neuro-purple-light to-neuro-blue opacity-30 animate-pulse-slow"></div>
        <div className="absolute w-[90%] h-[90%] top-[5%] left-[5%] rounded-full bg-gradient-to-tr from-neuro-purple/30 to-neuro-teal/30 animate-spin-slow"></div>
        
        {/* Neural paths with individual animations */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div 
            key={i}
            className="neural-path absolute w-1 h-1 bg-gradient-to-r from-neuro-purple to-neuro-teal rounded-full"
            style={{
              top: `${25 + (i * 10)}%`,
              left: `${25 + (i * 10)}%`,
              boxShadow: '0 0 15px rgba(155, 135, 245, 0.5)',
              transition: 'transform 0.3s ease'
            }}
          />
        ))}
        
        {/* Core */}
        <div className="brain-core absolute w-[40%] h-[40%] top-[30%] left-[30%] rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center transition-transform duration-300">
          <div className="w-[80%] h-[80%] rounded-full bg-gradient-to-r from-neuro-purple/80 to-neuro-teal/80 shadow-lg shadow-neuro-purple/20"></div>
        </div>
      </div>
    </div>
  );
};

export default BrainAnimation;
