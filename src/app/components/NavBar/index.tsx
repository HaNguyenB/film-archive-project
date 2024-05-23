'use client';
import React, { useState } from 'react';
import clsx from 'clsx';
import NavbarIcon from './NavbarIcon';
import { NAVLINKS, ARCHIVELINKS } from './constants';
import { RedirectEntry, DropdownEntry } from './NavbarEntry';

const Navbar = () => {
  const [opened, setOpen] = useState(false);

  return (
    <div>
      <NavbarIcon onClick={() => setOpen(!opened)} />
      <nav
        className={clsx(
          'w-50 outline-l-2 fixed z-10 flex h-full flex-col bg-jet outline outline-platinum duration-300 ease-in-out',
          { 'translate-x-0 ': opened, '-translate-x-full': !opened }
        )}
      >
        <div className='mx-6 h-full py-20'>
          <ul className='space-y-4'>
            {NAVLINKS.map(({ id, name, link, icon }) => (
              <li
                key={id}
                className='nav-links w-24 font-medium capitalize text-rose duration-200 hover:text-white'
              >
                {name === 'Archive' ? (
                  <DropdownEntry
                    icon={icon}
                    name={name}
                    array={ARCHIVELINKS}
                    onClick={() => setOpen(false)}
                  />
                ) : (
                  <RedirectEntry
                    icon={icon}
                    link={link}
                    name={name}
                    onClick={() => setOpen(false)}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
