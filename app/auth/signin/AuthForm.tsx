'use client';

import Link from 'next/link';
import AuthButton from './AuthButton';
import { signIn } from 'next-auth/react';
import { TwitchLogo } from '@phosphor-icons/react';
import { useState } from 'react';

export default function AuthForm() {
  const [termsAccepted, setTermsAccepted] = useState(false);

  function handleTermsAccepted(event: React.ChangeEvent<HTMLInputElement>) {
    setTermsAccepted(event.currentTarget.checked);
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (termsAccepted) {
      await signIn('twitch', {
        callbackUrl: 'http://localhost:3000',
      });
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className='mt-8 flex flex-col gap-2'>
        <div className='flex gap-2 items-center'>
          <input
            type='checkbox'
            className='rounded-sm border-none bg-stone-900 text-violet-700 focus:ring-0 focus:ring-offset-0 cursor-pointer'
            onChange={handleTermsAccepted}
          />
          <p className='text-sm text-gray-400'>
            I agree to the{' '}
            <Link href='#' className='text-violet-600 hover:text-violet-700'>
              terms of service
            </Link>
          </p>
        </div>
        <AuthButton icon={<TwitchLogo size={28} />} disabled={!termsAccepted} />
      </div>
    </form>
  );
}
