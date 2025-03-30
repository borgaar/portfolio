import { useCallback, useRef } from 'react';
import { useAnimations } from '../contexts/AnimationContext';

interface AnimationSequence {
  id: string;
  delay: number;
}

export const useAnimationController = () => {
  const { triggerAnimation, resetAnimation } = useAnimations();

  const isRunningRef = useRef(false);

  const playSequence = useCallback(async (sequence: AnimationSequence[], startDelay?: number) => {
    if (isRunningRef.current) return;
    else {
      isRunningRef.current = true;
    }

    const longestDelay = Math.max(...sequence.map(item => item.delay));
    await new Promise(resolve => setTimeout(resolve, startDelay || 0));

    sequence.forEach(({ id, delay }) => {
      setTimeout(() => {
        triggerAnimation(id);
      }, delay);
    });

    await new Promise(resolve => setTimeout(resolve, longestDelay));

    isRunningRef.current = false;
  }, [triggerAnimation]);
  
  const resetAll = (ids: string[]) => {
    ids.forEach(id => resetAnimation(id));
  };
  
  return { playSequence, resetAll, isRunningRef };
};
