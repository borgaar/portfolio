'use client';

import { useEffect, useRef } from 'react';
import { useAnimationState } from '@/contexts/AnimationContext';
import { useAnimationController } from '@/controllers/animationController';
import Hero from '@/app/components/home/Hero';
import Me from '@/app/components/home/Me';
import WorkGrid from '@/app/components/articles/WorkGrid';

export default function Home() {
  const workSectionRef = useRef<HTMLDivElement>(null);

  const { playSequence, isRunningRef } = useAnimationController();
  const showPsst = useAnimationState('psst');

  useEffect(() => {
    if (isRunningRef.current) return;

    const sequence = [
      { id: 'hero', delay: 0 },
      { id: 'psst', delay: 1500 },
      { id: 'work', delay: 250 },
      { id: 'image', delay: 2000 },
      { id: 'navbar', delay: 2000 },
      { id: 'email', delay: 2000 },
      { id: 'other visuals', delay: 1500 },
      { id: 'box', delay: 500 },
      { id: 'box-glow', delay: 500 },
    ];

    window.addEventListener('scroll', () => playSequence(sequence));

    const shouldInstantPlay = sessionStorage.getItem('sameSession') === 'true';

    if (shouldInstantPlay) {
      playSequence(sequence);
    } else {
      sessionStorage.setItem('sameSession', 'true');
      const timeoutId = setTimeout(() => {
        playSequence(sequence);
      }, 7500);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [playSequence, isRunningRef]);

  const scrollToWork = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (workSectionRef.current) {
      workSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="pb-10 scrollbar-none">
      <div className="h-screen flex flex-col">
        <Hero />
        <div className="my-auto">
          <Me />
        </div>
        <button
          onClick={scrollToWork}
          className={`flex pb-8 ${showPsst ? 'opacity-100' : 'opacity-0'
            } text-neutral-700 lg:text-neutral-800 justify-center duration-1000 transition-opacity cursor-pointer text-[12px] bg-transparent border-none`}
        >
          psst! more stuff down here..
        </button>
      </div>
      <div id="work" ref={workSectionRef}>
        <WorkGrid />
      </div>
    </div>
  );
}
