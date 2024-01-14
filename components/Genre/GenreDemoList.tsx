import genresResume from './static/genresResume.json';

interface GenreCardListProps {
  genresId: ('rpg' | 'adventure' | 'fighting' | 'strategy')[];
}

export default function GenreDemoList({ genresId }: GenreCardListProps) {
  const filteredGenres = [];

  for (const id of genresId) {
    filteredGenres.push(
      genresResume.data.filter((genreResume) => genreResume.id === id)[0]
    );
  }

  return (
    <ul className='flex flex-wrap gap-8 justify-center sm:justify-evenly items-center w-full'>
      {filteredGenres.map((genre) => (
        <li key={genre.id} className='w-fit'>
          <div className='flex justify-center items-center p-2 mask-img-b cursor-pointer hover:text-gray-400 button-animation'>
            <h4 className='text-2xl font-bold'>{genre.title}</h4>
          </div>
        </li>
      ))}
      <li className='w-fit'>
        <div className='flex justify-center items-center p-2 mask-img-b cursor-pointer hover:text-gray-400 button-animation'>
          <h4 className='text-2xl font-bold'>More</h4>
        </div>
      </li>
    </ul>
  );
}
