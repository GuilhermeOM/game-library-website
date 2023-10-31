import Cover from '.';
import Link from 'next/link';

interface CoverListProps {
  games: Game[];
}

export default function CoverList({ games }: CoverListProps) {
  return (
    <ul
      className={`flex items-center justify-center md:justify-start [&_li]:m-2`}
    >
      {games?.map((game) => (
        <li key={game.id} className='w-36 lg:w-44 lg:h-52 xl:w-52 xl:h-60 '>
          <Link href={`/game/${game.id}`}>
            <Cover
              base64Image={
                game.cover.hd?.image_base64 ? game.cover.hd?.image_base64 : ''
              }
              alt={game.name}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
