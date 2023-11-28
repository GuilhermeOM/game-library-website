import Image from 'next/image';
import Link from 'next/link';
import Card from './Card';
import getStreamersDataByIdAsync from '../libs/getStreamerDataAsync';
import getStreamsAsync from '../libs/getStreamsAsync';

interface TwitchCarouselProps {
  infiniteScrollDirection?: 'left' | 'right';
  ariaHidden?: boolean;
}

export default async function TwitchCarousel({
  infiniteScrollDirection,
  ariaHidden = false,
}: TwitchCarouselProps) {
  const fullStreamsData = [] as { stream: Stream; streamer: Streamer }[];
  const streamsResponse = await getStreamsAsync();

  if (streamsResponse.success) {
    const usersResponse = await getStreamersDataByIdAsync([
      ...streamsResponse.data.map((stream) => stream.user_id),
    ]);

    if (usersResponse.success) {
      for (const stream of streamsResponse.data) {
        fullStreamsData.push({
          stream,
          streamer: usersResponse.data.filter(
            (user) => user.id === stream.user_id
          )[0],
        });
      }
    }
  }

  return (
    <ul
      className={`flex items-center justify-center md:justify-start [&_li]:mx-2 ${
        infiniteScrollDirection === 'left' && 'animate-infinite-scroll-left'
      } ${
        infiniteScrollDirection === 'right' && 'animate-infinite-scroll-right'
      }`}
      aria-hidden={ariaHidden}
    >
      {fullStreamsData.map((fullStream, i) => (
        <li key={i}>
          <Link
            target='_blank'
            href={`https://www.twitch.tv/${fullStream.stream.user_name}`}
            rel='noopener noreferrer'
          >
            <Card className='cursor-pointer hover:border-violet-700'>
              <div className='w-60 overflow-hidden relative'>
                <section className='inline-flex items-center gap-2 my-2'>
                  <Image
                    src={fullStream.streamer.profile_image_url}
                    alt={fullStream.streamer.display_name}
                    width={300}
                    height={300}
                    className='w-10 h-10 rounded-full'
                  />
                  <h4 className='font-bold truncate'>
                    {fullStream.stream.user_name}
                  </h4>
                </section>
                <p className='text-gray-500 truncate'>
                  {fullStream.stream.title}
                </p>
                <span className='absolute top-1 right-1'>
                  <span className='relative flex h-2 w-2'>
                    <span className='w-full h-full rounded-full animate-ping opacity-75 absolute inline-flex bg-red-500' />
                    <span className='w-full h-full rounded-full relative bg-red-500' />
                  </span>
                </span>
              </div>
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  );
}
