import Caption from './Caption';
import Title from './Title';
import Gif from './Gif';
import NavigateButton from './NavigateButton';

interface PresentationProps {
  textPosition: 'after' | 'before';
  title: string;
  caption: string;
  giphyId: string;
  buttonText?: string | undefined;
  navigation?: string | undefined;
}

export default function Presentation({
  textPosition,
  title,
  caption,
  giphyId,
  buttonText,
  navigation,
}: PresentationProps) {
  return (
    <section className='flex gap-6'>
      {textPosition === 'after' && (
        <aside className='hidden md:flex items-center align-middle justify-center w-full h-full'>
          <Gif
            className='mask-img-x'
            width={440}
            height={268}
            gifId={giphyId}
          />
        </aside>
      )}
      <div className='flex flex-col items-start justify-center w-full [&_button]:mt-8'>
        <Title>{title}</Title>
        <Caption>{caption}</Caption>
        {buttonText && navigation && (
          <NavigateButton buttonText={buttonText} navigation={navigation} />
        )}
      </div>
      {textPosition === 'before' && (
        <aside className='hidden md:flex items-center align-middle justify-center w-full h-full'>
          <Gif
            className='mask-img-x'
            width={440}
            height={268}
            gifId={giphyId}
          />
        </aside>
      )}
    </section>
  );
}
