'use client';

import { useEffect, useState } from 'react';
import Game from './Game';
import LoadMoreGamesButton from './LoadMoreGamesButton';

interface GameListProps {
  preFetchGames?: Game[];
}

export default function GamesList({ preFetchGames }: GameListProps) {
  const [games, setGames] = useState<Game[]>([]);
  const [pagination, setPagination] = useState(1);

  useEffect(() => {
    preFetchGames ? setGames(preFetchGames) : null;
  }, [preFetchGames]);

  return (
    <div className='flex gap-4 w-fit p-2'>
      {games?.map((game, index) => (
        <Game
          key={index}
          name={game.name}
          base64_cover={
            game.cover.hd?.image_base64 ? game.cover.hd?.image_base64 : ''
          }
          genres={game.genres}
        />
      ))}
      <LoadMoreGamesButton
        games={games}
        pagination={pagination}
        setGames={setGames}
        setPagination={setPagination}
      />
    </div>
  );
}
