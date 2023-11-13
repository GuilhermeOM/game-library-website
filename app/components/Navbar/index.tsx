import Link from 'next/link';

import Container from '../Container';
import Divider from '../Divider';
import Logo from '../Logo';
import TwitchButton from './TwitchButton';
import UserButton from './UserButton';

import { getServerSessionAsync } from '@/app/libs/getServerSessionAsync';

export default async function Navbar() {
  const session = await getServerSessionAsync();

  const navigationAnchors = [
    { name: 'Games', href: '#' },
    { name: 'Categories', href: '#' },
    { name: 'Favorites', href: '#' },
  ];

  return (
    <header className='flex items-center h-[var(--navbar-height)] text-sm w-screen px-8 py-2 fixed border-b border-b-stone-900 bg-[#000]/50 backdrop-blur-sm z-10'>
      <Container flexFlow='row'>
        <Logo />
        <nav className='h-full flex w-fit ml-auto gap-2 items-center'>
          <section className='flex gap-4 max-sm:hidden'>
            {navigationAnchors.map((navigationAnchor, index) => (
              <Link
                key={index}
                className='cursor-pointer transition ease-in-out delay-70 hover:text-violet-600'
                href={navigationAnchor.href}
              >
                {navigationAnchor.name}
              </Link>
            ))}
          </section>
          <Divider position='vertical' />
          <UserButton user={session.user?.id} />
          <TwitchButton />
        </nav>
      </Container>
    </header>
  );
}
