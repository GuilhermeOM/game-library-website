import Caption from '../Caption';
import Title from '../Title';
import Gif from '../Gif';
import NavigateButton from '../NavigateButton';
import GiphyButtonNavigation from './GiphyButtonNavigation';

interface PresentationProps {
  gifPosition: 'after' | 'before';
  title: string;
  caption: string;
  giphyId: string;
  buttonText?: string | undefined;
  navigation?: string | undefined;
}

export default function Presentation({
  title,
  caption,
  giphyId,
  gifPosition,
  buttonText,
  navigation,
}: PresentationProps) {
  return (
    <section className='flex w-full my-10 gap-10'>
      {gifPosition === 'before' && (
        <aside className='hidden md:flex items-center align-middle justify-center w-fit h-full'>
          <div className='relative'>
            <Gif
              className='border border-stone-900'
              width={440}
              height={248}
              gifId={giphyId}
            />
            <GiphyButtonNavigation gifId={giphyId} />
          </div>
        </aside>
      )}
      <div className='flex flex-col items-start justify-center w-full [&_button]:mt-8'>
        <Title>{title}</Title>
        <Caption>{caption}</Caption>
        {buttonText && navigation && (
          <NavigateButton buttonText={buttonText} navigation={navigation} />
        )}
      </div>
      {gifPosition === 'after' && (
        <aside className='hidden md:flex items-center align-middle justify-center w-fit h-full'>
          <div className='relative'>
            <Gif
              className='border border-stone-900'
              width={440}
              height={248}
              gifId={giphyId}
            />
            <GiphyButtonNavigation gifId={giphyId} />
          </div>
        </aside>
      )}
    </section>
  );
}
