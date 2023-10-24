import Link from 'next/link';

interface GameGenreProps {
  genreName: string;
}

export default function GameGenre({ genreName }: GameGenreProps) {
  function genreTranslate(genre: string) {
    if (genre.includes('(') && genre.includes(')')) {
      const begin = genre.indexOf('(') + 1;
      const end = genre.indexOf(')');

      return genre.substring(begin, end);
    }

    if (genre === "Hack and slash/Beat 'em up") return 'Hack & Slash';

    return genre;
  }

  return (
    <Link href={`genres/${genreName.toLowerCase()}`}>
      <div className='p-1 inline-flex rounded-md bg-stone-800 text-xs text-gray-300 font-semibold whitespace-nowrap hover:bg-violet-600 transition ease-in-out delay-70'>
        <p className='w-min'>{genreTranslate(genreName)}</p>
      </div>
    </Link>
  );
}
