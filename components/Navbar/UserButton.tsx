import { FaUserAstronaut } from 'react-icons/fa';
import { RiLoginBoxFill } from 'react-icons/ri';
import Link from 'next/link';

interface UserButtonProps {
  isLoggedIn: boolean;
}

export default function UserButton({ isLoggedIn }: UserButtonProps) {
  if (isLoggedIn) {
    return (
      <button className='p-2 bg-[var(--background-primary-color)] border border-stone-900 rounded-md hover:bg-stone-900 button-animation'>
        <FaUserAstronaut size={18} />
      </button>
    );
  }

  return (
    <Link href='/auth/signin'>
      <button className='p-2 bg-[var(--background-primary-color)] border border-stone-900 rounded-md hover:bg-stone-900 button-animation'>
        <RiLoginBoxFill size={18} />
      </button>
    </Link>
  );
}
