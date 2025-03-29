'use client';
import { workData } from '../lib/work-data';
import WorkCard from './work-card';
import PageContainer from './page-container';
import { useEffect, useState } from 'react';

export default function WorkGrid() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => setIsVisible(true));
  }, []);

  return (
    <PageContainer>
      <div
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
