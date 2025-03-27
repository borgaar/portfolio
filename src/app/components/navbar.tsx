'use client';
import { Github } from 'lucide-react';
import { useEffect, useState } from 'react';
import { HERO_ANIMATION_DURATION } from '../lib/constants';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => setIsVisible(true));

    setTimeout(() => {
      setIsVisible(true);
    }, HERO_ANIMATION_DURATION);
  }, []);

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
