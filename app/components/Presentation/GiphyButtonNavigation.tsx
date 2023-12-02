import Link from 'next/link';

interface GiphyButtonNavigation {
  gifId: string;
}

export default function GiphyButtonNavigation({
  gifId,
}: GiphyButtonNavigation) {
  return (
    <Link
      target='_blank'
      href={`https://giphy.com/gifs/${gifId}`}
      rel='noopener noreferrer'
    >
      <button className='absolute -right-4 -bottom-4 bg-[var(--background-primary-color)] px-2 py-1 rounded-md border border-stone-900 hover:bg-stone-900 button-animation'>
        <span className='inline-block text-transparent bg-clip-text font-extrabold text-xs bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500'>
          Giphy
        </span>
      </button>
    </Link>
  );
}
