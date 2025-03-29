'use client';

import { useEffect, useRef, useState } from 'react';
import Hero from './components/hero';
import Me from './components/me';
import WorkGrid from './components/work-grid';
import { HERO_ANIMATION_DURATION } from './lib/constants';

export default function Home() {
  const workSectionRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => setIsVisible(true));
    setTimeout(() => {
      setIsVisible(true);
    }, HERO_ANIMATION_DURATION);
  }, []);

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
          className={`flex pb-8 ${isVisible ? 'opacity-100' : 'opacity-0'
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
