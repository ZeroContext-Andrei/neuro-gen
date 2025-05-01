
import { useState, useEffect } from 'react';

/**
 * Hook to generate staggered animation delays for a group of elements
 * @param count Number of elements in the group
 * @param baseDelay Base delay in ms (default: 100)
 * @param maxDelay Maximum delay in ms (default: 500)
 * @returns Array of delay values (100, 200, 300, etc.)
 */
const useAnimatedGroup = (count: number, baseDelay: number = 100, maxDelay: number = 500) => {
  const [delays, setDelays] = useState<number[]>([]);
  
  useEffect(() => {
    // Generate delay values based on count
    const newDelays = Array.from({ length: count }, (_, i) => {
      // Cap at maxDelay
      return Math.min((i + 1) * baseDelay, maxDelay);
    });
    
    setDelays(newDelays);
  }, [count, baseDelay, maxDelay]);
  
  return delays;
};

export default useAnimatedGroup;
