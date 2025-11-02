'use client';

import { useAnimationState } from '@/contexts/AnimationContext';
import PageContainer from '../layout/PageContainer';
import WorkCard from './WorkCard';
import { articleData } from '@/data/articles';

export default function WorkGrid() {
  const isVisible = useAnimationState('work');

  return (
    <PageContainer>
      <div id="work"
        className={`grid px-4 pt-10 duration-1500 transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'
          } md:grid-cols-2 grid-cols-1 h-min mb-8 gap-8 lg:gap-4`}
      >
        {articleData.map((work, index) => (
          <WorkCard key={index} index={index} {...work} />
        ))}
      </div>
    </PageContainer>
  );
}
