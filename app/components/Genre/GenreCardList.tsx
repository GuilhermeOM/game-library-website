import Caption from '../Caption';
import Card from '../Card';
import genresResume from '../../static/genresResume';

interface GenreCardListProps {
  genresId: ("rpg" | "adventure" | "fighting")[];
}

export default function GenreCardList({ genresId }: GenreCardListProps) {
  const filteredGenres: GenreResume[] = [];
  genresId.forEach((genreId) =>
    filteredGenres.push(
      genresResume.filter((genreResume) => genreResume.id === genreId)[0]
    )
  );

  return (
    <ul className='flex w-full md:inline-flex flex-col md:flex-row items-center gap-8'>
      {filteredGenres.map((genre) => (
        <li key={genre.id}>
          <Card className='cursor-pointer mask-img-b overflow-hidden flex-col hover:scale-105 transition ease-in-out delay-70'>
            <h4>{genre.title}</h4>
            <Caption>{genre.caption}</Caption>
            {genre.icon}
          </Card>
        </li>
      ))}
    </ul>
  );
}
