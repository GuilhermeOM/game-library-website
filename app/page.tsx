import GamesList from './components/GamesList/GamesList';
import Navbar from './components/Navbar/Navbar';
import getGameHDImageByGamesListAsync from './libs/getGameHDImageAsync';
import getGamesAsync from './libs/getGamesAsync';
import { getServerSessionAsync } from './libs/getServerSessionAsync';

export default async function Home() {
  const { token } = await getServerSessionAsync();
  const preFetchGames = await getGamesAsync(
    token?.access_token ? token?.access_token : '',
    1
  );
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
        <div>
          <GamesList preFetchGames={preFetchGames} />
        </div>
      </main>
    </div>
  );
}
