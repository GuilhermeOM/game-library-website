'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface GameListProps {
  preFetchGames?: Game[];
}

export default function GamesList({ preFetchGames }: GameListProps) {
  const [games, setGames] = useState<Game[] | undefined>([]);

  useEffect(() => {
    setGames(preFetchGames);
  }, [preFetchGames]);

  return (
    <div className='flex gap-4'>
      {games?.map((game, index) => (
        <div key={index} className='w-fit'>
          <Image
            src={`data:image/jpg;base64, ${game.cover.hd?.image_base64}`}
            height={200}
            width={200}
            alt={game.name}
            className='min-w-[160px] min-h-[200px] cursor-pointer rounded-sm hover:scale-105 transition ease-in-out delay-70'
          />
          <div className='max-w-[160px] mt-2'>
            <Link href='#'>
              <h6 className='w-full text-sm font-bold truncate hover:text-violet-600 cursor-pointer transition ease-in-out delay-70'>
                {game.name}
              </h6>
              <div className='flex flex-wrap gap-1 mt-2'>
                {game.genres
                  .filter((_, index) => index < 3)
                  .map((genre) => (
                    <div className='p-1 rounded-md bg-stone-800 text-xs text-gray-300 font-semibold'>
                      <p>{genre.name}</p>
                    </div>
                  ))}
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
