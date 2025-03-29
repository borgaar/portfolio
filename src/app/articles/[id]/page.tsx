import PageContainer from '@/app/components/page-container';
import { workData } from '@/app/lib/work-data';
import Image from 'next/image';

export default async function Page({ params }: { params: Promise<{ id: number }> }) {
  const { image, title, altTitle, shortDesc } = workData[(await params).id];

  return (
    <PageContainer>
      <div className='flex flex-col items-center my-10'>
        <div className='relative h-64 w-full'>
          <Image src={image} fill alt={title} style={{ objectFit: 'cover' }} className='rounded-lg' />
        </div>
        <div className='flex flex-col items-center mt-4 font-bold text-center'>
          <h1 className='mt-8 text-4xl text-neutral-100'>{title}</h1>
          <h1 className='mt-2 text-xl text-neutral-500'>{altTitle}</h1>
        </div>
        <p className='mt-4 text-lg text-neutral-300'>{shortDesc}</p>
      </div>
    </PageContainer>
  );
}
