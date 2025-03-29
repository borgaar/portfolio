import PageContainer from '@/app/components/page-container';
import { workData } from '@/app/lib/work-data';
import Link from 'next/link';

export default async function Page({ params }: { params: Promise<{ id: number }> }) {
  const { title, altTitle, chapters } = workData[(await params).id];

  return (
    <PageContainer>
      <div className='flex mx-auto flex-col items-center w-3xl my-8'>
        <h1 className='mt-8 text-5xl text-neutral-100'>{title}</h1>
        <h1 className='mt-2 text-2xl text-neutral-500'>{altTitle}</h1>
        {chapters.map((chapter, index) => (
          <div key={index} className='mt-4 text-neutral-100'>
            {chapter.title && <h2 className='text-2xl font-bold'>{chapter.title}</h2>}
            {chapter.content.map((paragraph, index) => (
              <p key={index} className='mt-4 text-lg text-neutral-300'>
                {paragraph}
              </p>
            ))}
          </div>
        ))}
        <div className='flex mt-8 text-neutral-600 w-full'>
          <Link href='/'>&lt;- Go Back</Link>
        </div>
      </div>
    </PageContainer>
  );
}
