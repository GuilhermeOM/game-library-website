'use client';

import { SignIn, User } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';

interface UserButtonProps {
  user: string | undefined;
}

export default function UserButton({ user }: UserButtonProps) {
  const router = useRouter();

  if (user) {
    return (
      <button className='p-2 bg-[#000] border border-stone-900 rounded-md hover:bg-stone-900 transition ease-out delay-70'>
        <User size={18} />
      </button>
    );
  }

  return (
    <button
      className='p-2 bg-[#000] border border-stone-900 rounded-md hover:bg-stone-900 transition ease-out delay-70'
      onClick={() => router.push('/auth/signin')}
    >
      <SignIn size={18} />
    </button>
  );
}
