'use client';

import { useEffect, useRef} from 'react';
import Hero from './components/hero';
import Me from './components/me';
import WorkGrid from './components/work-grid';
import { useAnimationController } from './components/AnimationController';
import { useAnimationState } from './contexts/AnimationContext';

export default function Home() {
  const workSectionRef = useRef<HTMLDivElement>(null);

  const { playSequence, resetAll } = useAnimationController();
  const showPsst = useAnimationState('psst');

  useEffect(() => {
    const sequence = [
      { id: 'hero', delay: 920 },
      { id: 'click me', delay: 1500 },
      { id: 'image', delay: 500 },
      { id: 'psst', delay: 0 },
      { id: 'work', delay: 0 },
      { id: 'navbar', delay: 0 },
      { id: 'email', delay: 1500 },
      { id: 'other visuals', delay: 0 },
    ];
    
    playSequence(sequence, 7200);
  }, [playSequence, resetAll]);

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
      <div className="h-[100vh] flex flex-col">
        <Hero />
        <div className="my-auto">
          <Me />
        </div>
        <button
          onClick={scrollToWork}
          className={`flex pb-8 ${ showPsst ? 'opacity-100' : 'opacity-0'
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
