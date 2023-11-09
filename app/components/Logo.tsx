import { SiGamebanana } from 'react-icons/si';

export default function Logo() {
  return (
    <h2 className='inline-flex gap-2 items-center text-xl font-extrabold cursor-pointer'>
      <span>
        <SiGamebanana />
      </span>
      GLibrary
    </h2>
  );
}
