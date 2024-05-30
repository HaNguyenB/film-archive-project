'use client';
import React, { useState } from 'react';
import { IoReorderThreeOutline } from 'react-icons/io5';

// REF: https://stackoverflow.com/questions/68895112/how-to-pass-function-as-a-prop-in-react-typescript

import { createContext } from 'react';
import Navbar from '../NavBar';

export const NavBarContext = createContext(false);

// interface HeaderProps {
//   onClick: () => void;
// }

// { onClick = () => {} }: HeaderProps

export default function Header() {
  const [opened, setOpen] = useState(false);

  return (
    <header className=' fixed h-10 w-full border-b-2 border-platinum bg-onyx'>
      <IoReorderThreeOutline
        className='hover:bg-sky-700 h-10 w-10 cursor-pointer'
        onClick={() => setOpen(!opened)}
      />
      <Navbar isOpened={opened} onNavbarIconClick={() => setOpen(false)} />
    </header>
  );
}
