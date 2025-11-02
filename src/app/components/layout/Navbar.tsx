'use client';
import { useAnimationState } from '@/contexts/AnimationContext';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const isVisible = useAnimationState('navbar');

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        setHasScrolled(true);
      } else if (hasScrolled) {
        setHasScrolled(false);
      }
    });

  });

  return (
    <nav
      className={'fixed flex justify-start  top-0 left-0 right-0 z-50 '}
    >
      <a
        href="https://github.com/borgaar"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center ${hasScrolled ? 'opacity-0' : isVisible ? 'hover:opacity-100 opacity-25' : 'opacity-0'}  duration-1000 `}
      >
        {/* GitHub SVG Icon from file */}
        <Image
          src="/icons/github.svg"
          alt="GitHub Icon"
          color="white"
          width={32}
          height={32}
          className="mr-3 ml-4 my-4"
        />
        <span className="text-white">&lt; free spaghetti recipes</span>
      </a>
    </nav>
  );
}
