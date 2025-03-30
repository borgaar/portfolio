'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type AnimationId = string;

interface AnimationState {
  [key: AnimationId]: boolean;
}

interface AnimationContextType {
  animationStates: AnimationState;
  // eslint-disable-next-line no-unused-vars
  triggerAnimation: (id: AnimationId) => void;
  // eslint-disable-next-line no-unused-vars
  resetAnimation: (id: AnimationId) => void;
  // eslint-disable-next-line no-unused-vars
  registerAnimation: (id: AnimationId) => void;
}

const AnimationContext = createContext<AnimationContextType>({
  animationStates: {},
  triggerAnimation: () => {},
  resetAnimation: () => {},
  registerAnimation: () => {}
});

interface AnimationProviderProps {
  children: ReactNode;
}

export const AnimationProvider: React.FC<AnimationProviderProps> = ({ children }) => {
  const [animationStates, setAnimationStates] = useState<AnimationState>({});

  const registerAnimation = (id: AnimationId) => {
    setAnimationStates(prev => ({
      ...prev,
      [id]: false
    }));
  };

  const triggerAnimation = (id: AnimationId) => {
    setAnimationStates(prev => ({
      ...prev,
      [id]: true
    }));
  };

  const resetAnimation = (id: AnimationId) => {
    setAnimationStates(prev => ({
      ...prev,
      [id]: false
    }));
  };

  return (
    <AnimationContext.Provider 
      value={{ 
        animationStates, 
        triggerAnimation, 
        resetAnimation,
        registerAnimation
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};


export const useAnimations = () => {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
};

export const useAnimationState = (id: AnimationId): boolean => {
  const { animationStates } = useAnimations();
  return animationStates[id] || false;
};
