'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import clsx from 'clsx';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { NAVLINKS } from './constants';

const Navbar = () => {
  const links = NAVLINKS;

  const [opened, setOpen] = useState(false);

  return (
    <div>
      <div className='w-full bg-onyx'>
        <IoReorderThreeOutline
          className='hover:bg-sky-700 h-10 w-10 cursor-pointer'
          onClick={() => setOpen(!opened)}
        />
      </div>
      <nav
        className={clsx(
          'w-50 fixed flex h-full flex-col bg-rose duration-300 ease-in-out',
          { 'translate-x-0 ': opened, '-translate-x-full': !opened }
        )}
      >
        <div className='mx-6 h-full py-5'>
          <ul>
            {links.map(({ id, name, link, icon }) => (
              <li
                key={id}
                className='nav-links w-24 p-2 font-medium capitalize text-black duration-200 hover:text-white'
              >
                <Link href={link} className='flex items-center'>
                  {icon} {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
