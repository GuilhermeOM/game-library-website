import GamesList from './components/Game/GamesList';
import Navbar from './components/Navbar/Navbar';
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
        <section className='h-72 lg:h-80 xl:h-96 overflow-scroll scroll-smooth'>
          <GamesList preFetchGames={preFetchGames} />
        </section>
      </main>
    </div>
  );
}
