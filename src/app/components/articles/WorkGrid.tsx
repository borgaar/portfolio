'use client';

import { useAnimationState } from '@/contexts/AnimationContext';
import PageContainer from '../layout/PageContainer';
import WorkCard from './WorkCard';
import { articleData } from '@/data/articles';

export default function WorkGrid() {
  const isVisible = useAnimationState('work');
  const articles = Array.from(articleData.values());

  // Split articles into two columns
  const column1 = articles.filter((_, index) => index % 2 === 0);
  const column2 = articles.filter((_, index) => index % 2 === 1);

  return (
    <PageContainer>
      <div id="work"
        className={`flex duration-1500 transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'
          } flex-col md:flex-row md:items-start gap-0 h-min`}
      >
        <div className="flex flex-col flex-1 h-auto">
          {column1.map((work) => (
            <WorkCard key={work.articleKey} {...work} />
          ))}
        </div>
        <div className="flex flex-col flex-1 h-auto">
          {column2.map((work) => (
            <WorkCard key={work.articleKey} {...work} />
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
