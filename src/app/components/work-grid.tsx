'use client';
import { workData } from '../lib/work-data';
import WorkCard from './work-card';
import PageContainer from './page-container';
import { useAnimationState } from '../contexts/AnimationContext';

export default function WorkGrid() {
  const isVisible = useAnimationState('work');

  return (
    <PageContainer>
      <div id="work"
        className={`grid px-4 pt-10 duration-[1500ms] transition-opacity ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } md:grid-cols-2 grid-cols-1 h-min mb-8 gap-8 lg:gap-4`}
      >
        {workData.map((work, index) => (
          <WorkCard key={index} index={index} {...work} />
        ))}
      </div>
    </PageContainer>
  );
}
