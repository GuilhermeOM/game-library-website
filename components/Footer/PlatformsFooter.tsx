import {
  BsFillMouseFill,
  BsNintendoSwitch,
  BsPlaystation,
  BsXbox,
} from 'react-icons/bs';
import Divider from '../Divider';

export default function PlatformsFooter() {
  return (
    <footer className='flex flex-col [&_ul]:mt-4 items-center w-fit'>
      <Divider position='horizontal' />
      <ul className='inline-flex [&_li]:mx-4'>
        <li className='cursor-pointer hover:text-blue-700 button-animation'>
          <BsPlaystation size={18} />
        </li>
        <li className='cursor-pointer hover:text-green-700 button-animation'>
          <BsXbox size={18} />
        </li>
        <li className='cursor-pointer hover:text-red-700 button-animation'>
          <BsNintendoSwitch size={18} />
        </li>
        <li className='cursor-pointer hover:text-gray-700 button-animation'>
          <BsFillMouseFill size={18} />
        </li>
      </ul>
    </footer>
  );
}
