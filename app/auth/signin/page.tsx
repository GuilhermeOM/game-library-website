import Link from 'next/link';
import AuthForm from './AuthForm';
import Title from '@/app/components/Title';

export default function Auth() {
  return (
    <div className='w-screen p-8 flex flex-col items-center justify-center bg-[var(--background-primary-color)] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      <section className='w-full h-80 max-w-3xl max-h-[400px] p-8 flex flex-col items-center justify-center rounded-md text-center bg-[var(--background-secondary-color)]'>
        <Title stronger>Sign in with Twitch</Title>
        <p className='w-full sm:w-80 text-sm text-gray-400'>
          Welcome to the <span className='font-extrabold'>Game Library</span>{' '}
          website. Sign in with{' '}
          <Link
            target='_blank'
            href={`https://www.twitch.tv/`}
            rel='noopener noreferrer'
          >
            <span className='font-extrabold text-violet-600 hover:underline'>
              Twitch
            </span>{' '}
            to{' '}
          </Link>
          start exploring!
        </p>
        <AuthForm />
      </section>
    </div>
  );
}
