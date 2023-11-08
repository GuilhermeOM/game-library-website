import Image from 'next/image';

interface CoverProps {
  imageSource: string;
  alt: string;
}

export default function Cover({ imageSource, alt }: CoverProps) {
  const image = imageSource
    .replace('{width}', '300')
    .replace('{height}', '400');

  return (
    <Image
      src={image}
      height={200}
      width={180}
      alt={alt}
      className='w-full h-full cursor-pointer rounded-sm hover:scale-105 transition ease-in-out delay-70'
    />
  );
}
