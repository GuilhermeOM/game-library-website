import { FaUserAstronaut } from 'react-icons/fa';
import { RiLoginBoxFill } from 'react-icons/ri';
import Link from 'next/link';

interface UserButtonProps {
  user: string | undefined;
}

export default function UserButton({ user }: UserButtonProps) {
  if (user) {
    return (
      <button className='p-2 bg-[var(--background-secondary-color)] border border-stone-900 rounded-md hover:bg-stone-900 button-animation'>
        <FaUserAstronaut size={18} />
      </button>
    );
  }

  return (
    <Link href='/auth/signin'>
      <button className='p-2 bg-[var(--background-secondary-color)] border border-stone-900 rounded-md hover:bg-stone-900 button-animation'>
        <RiLoginBoxFill size={18} />
      </button>
    </Link>
  );
}
