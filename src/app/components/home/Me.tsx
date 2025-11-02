'use client';
import { useAnimationState } from '@/contexts/AnimationContext';
import Image from 'next/image';

export default function Me() {
  const isVisible = useAnimationState('other visuals');
  const slideUp = useAnimationState('image');
  const showClickMe = useAnimationState('click me');

  return (
    <div className={`bg-neutral-900 mx-auto max-w-2xl pb-16 pt-6 transition-all rounded-4xl ${isVisible ? 'opacity-100' : 'opacity-0'} border-2 border-white shadow-[0_0_30px_rgba(255,255,255,0.3)]`}>
      <div
        className={`flex flex-col items-center justify-center transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'
          } duration-1500`}
      >
        <a
          href="https://www.linkedin.com/in/borgar-barland-1096b7303/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative group overflow-hidden">
            <div className="absolute h-full w-full border-b-2 border-white bg-linear-to-t z-10 from-neutral-300/10 via-transparent via-5% to-transparent " />
            <Image
              className={`${slideUp || 'translate-y-400'
                } duration-1000 group-hover:scale-[1.06] opacity-100 lg:opacity-50 group-hover:opacity-100 transition-all`}
              src={'/me.png'}
              alt="A photo of a very handsome young fella"
              height={471}
              width={500}
            />
            <div
              className={`pt-5 ${showClickMe ? 'opacity-100' : 'opacity-0'
                } absolute top-[63%] right-[6%] text-center group-hover:opacity-0 transition-opacity duration-600 text-neutral-700 md:text-neutral-800 text-sm lg:text-lg`}
            >
              Click me!
            </div>
          </div>
        </a>
        <div className="pt-10 px-16 lg:px-0 max-w-136 text-neutral-300 text-center text-xs lg:text-lg">
          <div className="pb-4 text-neutral-600 md:text-neutral-700">
            -- passion drives quality --
          </div>
          <i className="text-neutral-500">
            <span className="text-neutral-700">{'/*'}</span> Every day I strive for
            perfection in my work.
            <br />
            With true passion for innovation through code, I am always learning and
            developing my skills.{' '}
            <span className="text-neutral-700">*/</span>
          </i>
        </div>
      </div>
    </div>
  );
}
