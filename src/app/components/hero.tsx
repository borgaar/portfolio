'use client';
import { useEffect, useState } from 'react';
import PageContainer from './page-container';
import { ReactTyped } from 'react-typed';
import { ANIMATION_DELAY } from '../lib/constants';

type AnimationTrigger = 'HERO' | 'IMAGE' | 'EMAIL' | 'CLICK_ME' | 'ME_ELEMENT' | 'WORK';

export async function* animationStream(): AsyncGenerator<AnimationTrigger> {
  yield 'HERO';
  await new Promise((resolve) => setTimeout(resolve, 600));
  yield 'EMAIL';
  yield 'ME_ELEMENT';
  yield 'WORK';
  await new Promise((resolve) => setTimeout(resolve, 200));
  yield 'IMAGE';
  await new Promise((resolve) => setTimeout(resolve, 1000));
  yield 'CLICK_ME';
}


export default function Hero() {
  const [putInPlace, setPutInPlace] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      handleStream();
    });

    const handleStream = async () => {
      for await (const trigger of animationStream()) {
        if (trigger === 'HERO') {
          setPutInPlace(true);
        } else if (trigger === 'EMAIL') {
          setShowEmail(true);
        }
      }
    };

    setTimeout(() => {
      handleStream();
    }, ANIMATION_DELAY);
  }, []);

  return (
    <div
      className={`flex ${putInPlace || 'translate-y-[30vh]'} flex-col items-center duration-600 transition-transform justify-center pt-20 lg:pt-24 bg-secondary text-xl lg:text-4xl text-neutral-200`}
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
          className={`${showEmail ? 'opacity-100' : 'opacity-0'} opacity-0 text-neutral-500 hover:text-neutral-200 duration-1000 hover:scale-[1.02] text-sm pt-6 flex justify-center`}
        >
          borgar@texicon.no
        </a>
      </PageContainer>
    </div>
  );
}
