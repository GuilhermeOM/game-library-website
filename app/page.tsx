import CoverList from './components/Cover/CoverList';
import Navbar from './components/Navbar';
import Caption from './components/Caption';
import Container from './components/Container';
import GenreCardList from './components/Genre/GenreCardList';
import Presentation from './components/Presentation';
import PlatformsFooter from './components/Footer/PlatformsFooter';
import getGamesAsync from './libs/getGamesAsync';
import TwitchCarousel from './components/TwitchCarousel';

export default async function Home() {
  const games = await getGamesAsync();

  return (
    <div>
      <Navbar />
      <main className='flex flex-col p-8 pb-0 pt-[calc(var(--navbar-height)+1rem)] bg-[var(--background-secondary-color)]'>
        <section className='w-full mb-4 inline-flex flex-nowrap overflow-hidden mobile-mask-img-x sm:mask-img-x'>
          <CoverList games={games} infiniteScroll />
          <CoverList games={games} infiniteScroll ariaHidden />
        </section>
        <div className='-mx-8 p-8 h-full border-t border-stone-900 bg-[var(--background-primary-color)]'>
          <Container flexFlow='column'>
            <Presentation
              title='Explore a bunch of games that you enjoy'
              caption='Discover games that you have never seen, learn more about those games you used to play or those you did not know that even exists, look for twitch streams related to the selected games and much more!'
              giphyId='T2lCZ86f1qS3ZrrM35'
              gifPosition='after'
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
              title='Your favorite games in one place'
              caption='Favorite the games that you love to always keep track of the lives that are happening! Organize them according to your taste and also get information about similar games.'
              giphyId='bSYtN6BKArhFBLUtF9'
              gifPosition='before'
              buttonText='Favorites'
              navigation='/#'
            />
          </Container>
          <section className='flex flex-col items-center gap-6 my-10'>
            <h1 className='inline-block text-transparent bg-clip-text font-extrabold text-4xl mb-4 bg-gradient-to-r from-violet-500 via-violet-600 to-fuchsia-500'>
              Twitch
            </h1>
            <Caption>
              Take a look at some of the live streams going right now!
            </Caption>
            <section className='w-full mb-4 inline-flex flex-nowrap overflow-hidden mobile-mask-img-x sm:mask-img-x'>
              <TwitchCarousel infiniteScrollDirection='left' />
              <TwitchCarousel infiniteScrollDirection='left' ariaHidden />
            </section>
            <section className='w-full mb-4 inline-flex flex-nowrap justify-end overflow-hidden mobile-mask-img-x sm:mask-img-x'>
              <TwitchCarousel infiniteScrollDirection='right' ariaHidden />
              <TwitchCarousel infiniteScrollDirection='right' />
            </section>
          </section>

          <Container>
            <section>
              <PlatformsFooter />
            </section>
          </Container>
        </div>
      </main>
    </div>
  );
}
