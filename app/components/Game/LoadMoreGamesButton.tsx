import { CaretRight } from '@phosphor-icons/react';

interface LoadMoreGamesButtonProps {
  games: Game[];
  pagination: number;
  setGames: (newGames: Game[]) => void;
  setPagination: (newPagination: number) => void;
}

export default function LoadMoreGamesButton({
  games,
  pagination,
  setGames,
  setPagination,
}: LoadMoreGamesButtonProps) {
  async function fetchMoreGames() {
    const newPaginantion = pagination + 20;

    const data = await fetch(
      `/api/games?offset=${newPaginantion}&limit=${10}`,
      {
        method: 'GET',
      }
    ).then((res) => res.json());

    setGames([...games, ...data.games]);
    setPagination(newPaginantion);
  }

  return (
    <button
      className='bg-violet-700 w-[2.5rem] max-w-[2.5rem] lg:w- xl:w-52 h-10 flex items-center justify-center rounded-md my-auto hover:bg-violet-800 transition ease-in-out'
      onClick={fetchMoreGames}
    >
      <CaretRight />
    </button>
  );
}
