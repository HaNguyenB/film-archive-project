'use client';
import React, { useState } from 'react';
import { IoReorderThreeOutline } from 'react-icons/io5';

// REF: https://stackoverflow.com/questions/68895112/how-to-pass-function-as-a-prop-in-react-typescript

import { createContext } from 'react';

export const NavBarContext = createContext(false);

// interface HeaderProps {
//   onClick: () => void;
// }

// { onClick = () => {} }: HeaderProps

export default function Header() {
  const [opened, setOpen] = useState(false);

  return (
    <NavBarContext.Provider value={opened}>
      <div className='outline-b-2 fixed z-20 h-10 w-full bg-onyx outline outline-platinum'>
        <IoReorderThreeOutline
          className='hover:bg-sky-700 h-10 w-10 cursor-pointer'
          onClick={() => setOpen(!opened)}
        />
      </div>
    </NavBarContext.Provider>
  );
}
