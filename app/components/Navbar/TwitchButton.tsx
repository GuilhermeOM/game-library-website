'use client';

import { TwitchLogo } from '@phosphor-icons/react';
import Link from 'next/link';

export default function TwitchButton() {
  return (
    <Link href={'https://www.twitch.tv/'}>
      <button className='p-2 bg-violet-700 rounded-md hover:bg-violet-800 transition ease-out delay-70'>
        <TwitchLogo size={18} />
      </button>
    </Link>
  );
}
