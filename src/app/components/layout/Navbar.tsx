'use client';
import { useAnimationState } from '@/contexts/AnimationContext';
import { Github } from 'lucide-react';

export default function Navbar() {
  const isVisible = useAnimationState('navbar');

  return (
    <nav
      className={`fixed flex justify-start ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } duration-1000 top-0 left-0 right-0 z-50`}
    >
      <a
        href="https://github.com/borgaar/portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github color="white" className={'m-6'} />
      </a>
    </nav>
  );
}
