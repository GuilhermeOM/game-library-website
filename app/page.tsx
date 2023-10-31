import Image from 'next/image';
import CoverList from './components/Cover/CoverList';
import Divider from './components/Divider';
import InfiniteScrollList from './components/InfiniteScrollList';
import Navbar from './components/Navbar';
import getGameHDImageByGamesListAsync from './libs/getGameHDImageAsync';
import getGamesAsync from './libs/getGamesAsync';
import videogame from '../public/ellie-the-last-of-us.gif';

import {
  BsNintendoSwitch,
  BsPlaystation,
  BsXbox,
  BsFillMouseFill,
} from 'react-icons/bs';

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
      <main className='p-8 pb-0 pt-[calc(var(--navbar-height)+1rem)]'>
        <section className='w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_28px,_black_calc(100%-56px),transparent_100%)] sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
          <InfiniteScrollList>
            <CoverList games={preFetchGames} />
          </InfiniteScrollList>
        </section>
        <section className='border-y border-y-1 border-stone-900 bg-[#000] -mx-8 p-8 flex flex-col items-center gap-8 h-screen sm:h-auto relative'>
          <div className='flex gap-4 align-middle justify-center items-center'>
            <aside className='bg-[#000]/80 backdrop-blur-sm w-5/6 h-fit'>
              <h2 className='text-2xl font-bold mb-4'>
                Explore a bunch of other games just like the ones above
              </h2>
              <p className='text-sm text-gray-400'>
                Here you can learn more about the games you play and even look
                for twitch streams on live. Try clicking in one of the platforms
                icons right in the bottom or just explore!
              </p>
              <button className='p-2 w-full bg-[#000] border border-stone-900 rounded-md font-bold hover:bg-violet-700 transition ease-out delay-70 mt-10'>
                Explore
              </button>
            </aside>
            <aside className='hidden sm:flex bg-[#000]/80 backdrop-blur-sm w-full h-fit my-auto items-center align-middle justify-center'>
              <div className='[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
                <Image src={videogame} alt='ellie' />
              </div>
            </aside>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <Divider position='horizontal' divisionLength={1} />
            <ul className='inline-flex [&_li]:mx-4'>
              <li className='cursor-pointer hover:text-blue-700 transition ease-out delay-70'>
                <BsPlaystation size={18} />
              </li>
              <li className='cursor-pointer hover:text-green-700 transition ease-out delay-70'>
                <BsXbox size={18} />
              </li>
              <li className='cursor-pointer hover:text-red-700 transition ease-out delay-70'>
                <BsNintendoSwitch size={18} />
              </li>
              <li className='cursor-pointer hover:text-gray-700 transition ease-out delay-70'>
                <BsFillMouseFill size={18} />
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
