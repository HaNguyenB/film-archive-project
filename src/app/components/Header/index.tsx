'use client';
import React, { useState, useRef } from 'react';
import { IoReorderThreeOutline } from 'react-icons/io5';
import Navbar from '../NavBar';
import useClickOutside from '@/app/hooks/useClickOutside';

export default function Header() {
  const [opened, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, () => setOpen(false));
  return (
    <header className='fixed z-20 h-10 w-full border-b-2 border-rose bg-jet'>
      <IoReorderThreeOutline
        className='h-10 w-10 cursor-pointer text-rose'
        onClick={() => setOpen(!opened)}
      />
      <Navbar isOpened={opened} onNavbarIconClick={() => setOpen(false)} />
    </header>
  );
}
