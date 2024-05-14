import React from 'react';
import { IoReorderThreeOutline } from 'react-icons/io5';

// REF: https://stackoverflow.com/questions/68895112/how-to-pass-function-as-a-prop-in-react-typescript

interface NavbarIconProps {
  onClick: () => void;
}
export default function NavbarIcon({ onClick = () => {} }: NavbarIconProps) {
  return (
    <div className='w-full bg-onyx'>
      <IoReorderThreeOutline
        className='hover:bg-sky-700 h-10 w-10 cursor-pointer'
        onClick={onClick}
      />
    </div>
  );
}
