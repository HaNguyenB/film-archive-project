'use client';
import React from 'react';
import { IoReorderThreeOutline } from 'react-icons/io5';

// REF: https://stackoverflow.com/questions/68895112/how-to-pass-function-as-a-prop-in-react-typescript

import { createContext } from 'react';

export const NavBarContext = createContext(false);

interface HeaderProps {
  onClick: () => void;
}

export default function Header({ onClick = () => {} }: HeaderProps) {
  return (
    <div className='outline-b-2 fixed z-20 h-10 w-full bg-onyx outline outline-platinum'>
      <IoReorderThreeOutline
        className='hover:bg-sky-700 h-10 w-10 cursor-pointer'
        onClick={onClick}
      />
    </div>
  );
}
