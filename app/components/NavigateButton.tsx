'use client';

import { useRouter } from 'next/navigation';
import { AiOutlineArrowRight } from 'react-icons/ai';

interface NavigateButtonProps {
  navigation: string;
  buttonText: string;
}

export default function NavigateButton({
  navigation,
  buttonText,
}: NavigateButtonProps) {
  const router = useRouter();

  return (
    <button
      className='flex items-center hover:pl-4 ease-in w-fit text-sm font-bold rounded-full hover:bg-violet-700 button-animation'
      onClick={() => router.push(navigation)}
    >
      {buttonText}
      <span className='ml-32 rounded-full bg-violet-700 p-2'>
        <AiOutlineArrowRight />
      </span>
    </button>
  );
}
