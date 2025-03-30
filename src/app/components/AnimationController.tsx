import { useAnimations } from '../contexts/AnimationContext';

interface AnimationSequence {
  id: string;
  delay: number;
}

export const useAnimationController = () => {
  const { triggerAnimation, resetAnimation } = useAnimations();
  
  const playSequence = async (sequence: AnimationSequence[], startDelay?: number) => {
    await new Promise(resolve => setTimeout(resolve, startDelay || 0));
    sequence.forEach(({ id, delay }) => {
      setTimeout(() => {
        triggerAnimation(id);
      }, delay);
    });
  };
  
  const resetAll = (ids: string[]) => {
    ids.forEach(id => resetAnimation(id));
  };
  
  return { playSequence, resetAll };
};
