import { FaTwitch } from 'react-icons/fa';
import Link from 'next/link';

export default function TwitchButton() {
  return (
    <Link href={'https://www.twitch.tv/'}>
      <button className='p-2 bg-violet-700 rounded-md hover:bg-violet-800 transition ease-out delay-70'>
        <FaTwitch size={18} />
      </button>
    </Link>
  );
}
