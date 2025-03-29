import Image from 'next/image';
import { LinkCardProps } from '../lib/work-data';

export default function WorkCard({
  image,
  title,
  shortDesc: description,
  lastUpdated,
  index,
}: Readonly<LinkCardProps> & {index: number}) {
  return (
    <a
      href={'/articles/' + index}
      rel="noopener noreferrer"
      className="flex flex-col h-full bg-neutral-900 lg:bg-transparent rounded-lg transition-all hover:scale-[1.04] hover:z-20 relative group"
    >
      <div className="relative w-full h-64">
        <div className="absolute inset-0 bg-transparent lg:bg-black/40 z-10 rounded-lg transition-opacity opacity-100 group-hover:opacity-0" />
        <Image
          src={image}
          alt={title}
          fill
          className="rounded-lg object-cover"
          priority
        />
      </div>
      <div className="flex flex-col justify-between gap-4 p-4 flex-grow">
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-md mt-2">{description}</p>
        </div>
        <p className="flex justify-end text-xs text-gray-500 mt-auto pt-2">
          Last updated: {lastUpdated.toLocaleDateString()}
        </p>
      </div>
    </a>
  );
}
