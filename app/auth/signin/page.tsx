import Image from 'next/image';
import controllerImg from '../../../public/pacman-arcade-room.jpg';

import AuthForm from './AuthForm';
import AuthCaption from './AuthCaption';

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
      <div className='w-4/12 h-screen max-w-3xl xl:p-20 p-8 absolute right-0 flex flex-col justify-center bg-[#000000]'>
        <h2 className='text-2xl mb-4 font-extrabold'>Sign in with Twitch</h2>
        <AuthCaption value='Welcome to the Game Library Website.' />
        <AuthCaption value='Register to learn more about the games.' />
        <AuthForm />
      </div>
    </div>
  );
}
