'use client';
import { useEffect, useState } from 'react';
import PageContainer from './page-container';
import { ReactTyped } from 'react-typed';
import { HERO_ANIMATION_DURATION } from '../lib/constants';

export default function Hero() {
  const [putInPlace, setPutInPlace] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setPutInPlace(true);
      setShowEmail(true);
    });
    setTimeout(async () => {
      setPutInPlace(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setShowEmail(true);
    }, HERO_ANIMATION_DURATION + 950);
  }, []);

  return (
    <div
      className={`flex ${
        putInPlace || 'translate-y-[30vh]'
      } flex-col items-center duration-600 transition-transform justify-center pt-20 lg:pt-40 bg-secondary text-xl lg:text-4xl text-neutral-200`}
    >
      <PageContainer>
        <ReactTyped
          strings={[
            'Hi!',
            'My name is Borgar Barland,',
            'and I\'m a software developer.',
            'feel free to reach out!',
          ]}
          typeSpeed={15}
          backSpeed={10}
          startDelay={500}
          backDelay={1000}
          smartBackspace={true}
          cursorChar="_"
          className="font-bold"
        />
        <a
          href="mailto:borgar@texicon.no"
          className={`${
            showEmail ? 'opacity-100' : 'opacity-0'
          } opacity-0 text-neutral-500 hover:text-neutral-200 duration-1000 hover:scale-[1.02] text-sm pt-6 flex justify-center`}
        >
          borgar@texicon.no
        </a>
      </PageContainer>
    </div>
  );
}
