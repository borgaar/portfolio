import { LinkCardProps } from '@/data/articles';
import Image from 'next/image';

export default function WorkCard({
  image,
  title,
  altTitle,
  time: timePeriod,
  shortDesc: description,
  href,
  lastUpdated,
  articleKey,
}: Readonly<LinkCardProps>) {
  return (
    <a
      href={href ?? '/articles/' + articleKey}
      rel="noopener noreferrer"
      target={href ? '_blank' : '_self'}
      className="flex flex-col h-full my-2 md:my-0 md:px-2 bg-neutral-800 md:bg-transparent rounded-lg transition-all hover:scale-[1.04] hover:z-20 relative group"
    >
      <div className="relative w-full h-64">
        <div className="absolute inset-0 bg-transparent md:bg-black/40 z-10 rounded-lg transition-opacity opacity-100 group-hover:opacity-0" />
        <Image
          src={image}
          alt={title}
          fill
          sizes='(50vw)'
          className="rounded-lg object-cover"
          priority
        />
      </div>
      <div className="flex flex-col grow gap-4 p-4 justify-between">
        <div className='flex justify-between items-center'>
          <h2 className="text-xl font-semibold">{title}</h2>
          <span className="text-md min-w-34 text-neutral-600 font-semibold text-right">{altTitle}</span>
        </div>
        <div className='md:max-h-0 group-hover:max-h-96 overflow-clip transition-all duration-500'>
          <p className="text-md grow">{description}</p>
          <div className='flex justify-between md:pb-6 pt-4 group-hover:opacity-100 md:opacity-0 transition-opacity'>
            <h2 className="text-sm text-center text-neutral-600">
              {timePeriod ? formatDateRange(timePeriod) : ''}
            </h2>
            <p className="text-sm text-center text-neutral-600">
              updated: {lastUpdated.toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}

function formatDateRange(dates: LinkCardProps['time']): string {
  if (Array.isArray(dates)) {
    const [start, end] = dates;
    const startDate = new Date(start);
    const endDate = end ? new Date(end) : null;

    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
    const startStr = startDate.toLocaleDateString(undefined, options);
    const endStr = endDate ? endDate.toLocaleDateString(undefined, options) : 'Today';

    return `${startStr} - ${endStr}`;
  } else {
    const date = new Date(dates);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
    return date.toLocaleDateString(undefined, options);
  }
}
