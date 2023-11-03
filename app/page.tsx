import Image from 'next/image';
import CoverList from './components/Cover/CoverList';
import Navbar from './components/Navbar';
import getGameHDImageByGamesListAsync from './libs/getGameHDImageAsync';
import getGamesAsync from './libs/getGamesAsync';
import tlouEllieGif from '../public/ellie-the-last-of-us.gif';
import Caption from './components/Caption';
import Title from './components/Title';
import PlatformsFooter from './components/Footer/PlatformsFooter';

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
      <main className='flex flex-col gap-4 p-8 pb-0 pt-[calc(var(--navbar-height)+1rem)]'>
        <section className='w-full inline-flex flex-nowrap overflow-hidden mobile-mask-img-x sm:mask-img-x'>
          <CoverList games={preFetchGames} infiniteScroll />
          <CoverList games={preFetchGames} infiniteScroll ariaHidden />
        </section>
        <section className='flex flex-col -mx-8 p-8 gap-6 h-screen justify-normal items-center border-y border-stone-900 bg-[var(--background-secondary-color)]'>
          <div className='flex gap-6 items-center'>
            <aside className='flex flex-col w-full max-w-[720px] justify-center text-center sm:text-left'>
              <Title>Explore a bunch of other games that you enjoy</Title>
              <Caption>
                Here you can learn more about the games you play and even look
                for twitch streams on live. Try clicking in one of the platforms
                icons right in the bottom or just explore!
              </Caption>
              <button className='p-2 mt-10 w-full bg-[var(--background-secondary-color)] border border-stone-900 rounded-md font-bold hover:bg-violet-700 button-animation'>
                Explore
              </button>
            </aside>
            <aside className='hidden md:flex w-full min-w-[364px] max-w-[768px] h-fit align-middle justify-center'>
              <Image
                src={tlouEllieGif}
                alt='ellie from the last of us'
                className='mask-img-x'
              />
            </aside>
          </div>
          <PlatformsFooter />
        </section>
      </main>
    </div>
  );
}
