import Image from 'next/image';
import controllerImg from '../../../public/pacman-arcade-room.jpg';

import AuthForm from './AuthForm';
import Caption from '@/app/components/Caption';
import Title from '@/app/components/Title';

export default function Auth() {
  return (
    <div className='flex flex-1'>
      <div className='h-screen w-screen'>
        <Image
          src={controllerImg}
          alt='Pacman arcade room'
          className='h-full w-full object-cover'
        />
      </div>
      <div className='w-4/12 h-screen max-w-3xl xl:p-20 p-8 absolute right-0 flex flex-col justify-center bg-[var(--background-primary-color)]'>
        <Title stronger>Sign in with Twitch</Title>
        <Caption>Welcome to the Game Library Website.</Caption>
        <Caption>Register to learn more about the games.</Caption>
        <AuthForm />
      </div>
    </div>
  );
}
