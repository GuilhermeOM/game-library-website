import Image from 'next/image';

import CoverList from './components/Cover/CoverList';
import Navbar from './components/Navbar';
import Caption from './components/Caption';
import Title from './components/Title';
import PlatformsFooter from './components/Footer/PlatformsFooter';
import Container from './components/Container';
import GenreCardList from './components/Genre/GenreCardList';
import getGameHDImageByGamesListAsync from './libs/getGameHDImageAsync';
import getGamesAsync from './libs/getGamesAsync';

import tlouEllieGif from '../public/ellie-the-last-of-us.gif';

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
        <div className='-mx-8 p-8 h-full border-t border-stone-900 bg-[var(--background-secondary-color)]'>
          <Container>
            <section className='flex gap-6'>
              <div className='flex flex-col w-full justify-center text-center sm:text-left'>
                <Title>Explore a bunch of other games that you enjoy</Title>
                <Caption>
                  Here you can learn more about the games you play and even look
                  for twitch streams on live. Try clicking in one of the
                  platforms icons right in the bottom or just explore!
                </Caption>
                <button className='p-2 mt-10 w-full bg-[var(--background-secondary-color)] border border-stone-900 rounded-md font-bold hover:bg-violet-700 button-animation'>
                  Explore
                </button>
              </div>
              <aside className='hidden md:flex w-full min-w-[364px] align-middle justify-center'>
                <Image
                  src={tlouEllieGif}
                  alt='ellie from the last of us'
                  className='mask-img-x'
                />
              </aside>
            </section>
            <PlatformsFooter />
            <section className='mt-10 w-full'>
              <div className='text-center mb-10'>
                <Title>How about your prefered genre?</Title>
                <Caption>Search for games according to their genres!</Caption>
              </div>
              <GenreCardList genresId={['rpg', 'adventure', 'fighting']} />
            </section>
          </Container>
        </div>
      </main>
    </div>
  );
}
