import CoverList from './components/Cover/CoverList';
import Navbar from './components/Navbar';
import Caption from './components/Caption';
import Container from './components/Container';
import GenreCardList from './components/Genre/GenreCardList';
import Presentation from './components/Presentation';
import PlatformsFooter from './components/Footer/PlatformsFooter';

import getGamesAsync from './libs/getGamesAsync';

export default async function Home() {
  const games = await getGamesAsync();

  return (
    <div>
      <Navbar />
      <main className='flex flex-col gap-4 p-8 pb-0 pt-[calc(var(--navbar-height)+1rem)]'>
        <section className='w-full inline-flex flex-nowrap overflow-hidden mobile-mask-img-x sm:mask-img-x'>
          <CoverList games={games} infiniteScroll />
          <CoverList games={games} infiniteScroll ariaHidden />
        </section>
        <div className='-mx-8 p-8 h-full border-t border-stone-900 bg-[var(--background-secondary-color)]'>
          <Container flexFlow='column'>
            <Presentation
              textPosition='before'
              title='Explore a bunch of games that you enjoy'
              caption='Discover games that you have never seen, learn about the games that you already know, look for twitch streams related to the selected games, get information of the lives that are happening related to the current top games and much more!'
              giphyId='T2lCZ86f1qS3ZrrM35'
              buttonText='Explore'
              navigation='/#'
            />
            <section className='my-10 w-full'>
              <div className='text-center mb-10'>
                <Caption>
                  • Filter by the game genre! Here are some examples:
                </Caption>
              </div>
              <GenreCardList genresId={['rpg', 'adventure', 'fighting']} />
            </section>
            <Presentation
              textPosition='after'
              title='Your favorite games in one place'
              caption='Favorite the games that you love to always keep track of the lives that are happening! Organize them according to your taste and also get information about similar games.'
              giphyId='bSYtN6BKArhFBLUtF9'
              buttonText='Favorites'
              navigation='/#'
            />
            <section className='my-10'>
              <PlatformsFooter />
            </section>
          </Container>
        </div>
      </main>
    </div>
  );
}
