'use client';
import { ReactTyped } from 'react-typed';
import PageContainer from '../layout/PageContainer';
import { useAnimationState } from '@/contexts/AnimationContext';

export default function Hero() {
  const heroText = useAnimationState('hero');
  const showEmail = useAnimationState('email');

  return (
    <div
      className={`flex ${heroText || 'translate-y-[30vh]'} flex-col items-center duration-600 transition-transform justify-center pt-12 md:pt-24 bg-secondary text-xl lg:text-4xl text-neutral-200`}
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
          href="mailto:mail@borgarbarland.com"
          className={`${showEmail ? 'opacity-100' : 'opacity-0'} opacity-0 text-neutral-500 hover:text-neutral-200 duration-1000 hover:scale-[1.02] text-sm pt-6 flex justify-center`}
        >
          mail@borgarbarland.com
        </a>
      </PageContainer>
    </div>
  );
}
