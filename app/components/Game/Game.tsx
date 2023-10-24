import Image from 'next/image';
import GameGenre from './GameGenre';
import Link from 'next/link';

interface GameProps {
  name: string;
  base64_cover: string;
  genres: Genre[];
}

export default function Game({ name, base64_cover, genres }: GameProps) {
  return (
    <div className='w-36 lg:w-44 xl:w-52 max-h-60'>
      <Image
        src={`data:image/jpg;base64, ${base64_cover}`}
        height={200}
        width={200}
        alt={name}
        className='w-36 h-44 lg:w-44 lg:h-52 xl:w-52 xl:h-60 cursor-pointer rounded-sm hover:scale-105 transition ease-in-out delay-70'
      />
      <div className='w-full mt-2'>
        <Link href='#'>
          <h6 className='w-full text-sm font-bold truncate hover:text-violet-600 cursor-pointer transition ease-in-out delay-70'>
            {name}
          </h6>
        </Link>
        <div className='flex gap-1 mt-2 flex-wrap'>
          {genres
            .filter((_, index) => index < 3)
            .map((genre, index) => (
              <GameGenre key={index} genreName={genre.name} />
            ))}
        </div>
      </div>
    </div>
  );
}
