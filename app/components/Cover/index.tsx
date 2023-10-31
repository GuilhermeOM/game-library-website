import Image from 'next/image';

interface CoverProps {
  base64Image: string;
  alt: string;
}

export default function Cover({ base64Image, alt }: CoverProps) {
  return (
    <Image
      src={`data:image/jpg;base64, ${base64Image}`}
      height={200}
      width={200}
      alt={alt}
      className='w-full h-full cursor-pointer rounded-sm hover:scale-105 transition ease-in-out delay-70'
    />
  );
}
