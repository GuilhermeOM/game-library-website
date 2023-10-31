import CoverList from './components/Cover/CoverList';
import InfiniteScrollList from './components/InfiniteScrollList';
import Navbar from './components/Navbar';
import getGameHDImageByGamesListAsync from './libs/getGameHDImageAsync';
import getGamesAsync from './libs/getGamesAsync';

export default async function Home() {
  const preFetchGames = await getGamesAsync(1, 20);
  const preFetchHDImages = await getGameHDImageByGamesListAsync(preFetchGames);

  for (const preFetchGame of preFetchGames) {
    preFetchGame.cover['hd'] = preFetchHDImages.filter(
      (hd_image) => hd_image.game_id === preFetchGame.id
    )[0];
  }

  return (
    <div>
      <Navbar />
      <main className='p-8 pt-[calc(var(--navbar-height)+1rem)]'>
        <section className='w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
          <InfiniteScrollList>
            <CoverList games={preFetchGames} />
          </InfiniteScrollList>
        </section>
      </main>
    </div>
  );
}
