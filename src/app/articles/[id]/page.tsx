import PageContainer from '@/app/components/layout/PageContainer';
import { articleData } from '@/data/articles';
import Link from 'next/link';
import parse from 'html-react-parser';

export default async function Page({ params }: { params: Promise<{ id: number }> }) {
  const { title, altTitle, chapters } = articleData[(await params).id];

  return (
    <PageContainer>
      <div className='flex mx-auto flex-col items-center px-8 max-w-3xl my-8'>
        <h1 className='mt-8 text-5xl text-neutral-100'>{title}</h1>
        <h1 className='mt-4 text-2xl text-neutral-500'>{altTitle}</h1>
        {chapters.map((chapter, index) => (
          <div key={index} className='mt-4 text-neutral-100'>
            {chapter.title && <h2 className='text-2xl pt-2 font-bold'>{chapter.title}</h2>}
            {chapter.content.map((paragraph, index) => (
              <p key={index} className='mt-4 text-lg whitespace-pre-wrap text-neutral-300'>
                {parse(paragraph)}
              </p>
            ))}
          </div>
        ))}
        <div className='flex justify-center mt-8 hover:text-neutral-400 hover:scale-110 transition-all min-h-10 items-center text-neutral-600 w-full'>
          <Link href='/#work'>&lt;- Back to Front Page</Link>
        </div>
      </div>
    </PageContainer>
  );
}
