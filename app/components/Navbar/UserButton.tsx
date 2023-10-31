import { FaUserAstronaut } from 'react-icons/fa';
import { RiLoginBoxFill } from 'react-icons/ri';
import Link from 'next/link';

interface UserButtonProps {
  user: string | undefined;
}

export default function UserButton({ user }: UserButtonProps) {
  if (user) {
    return (
      <button className='p-2 bg-[#000] border border-stone-900 rounded-md hover:bg-stone-900 transition ease-out delay-70'>
        <FaUserAstronaut size={18} />
      </button>
    );
  }

  return (
    <Link href='/auth/signin'>
      <button className='p-2 bg-[#000] border border-stone-900 rounded-md hover:bg-stone-900 transition ease-out delay-70'>
        <RiLoginBoxFill size={18} />
      </button>
    </Link>
  );
}
