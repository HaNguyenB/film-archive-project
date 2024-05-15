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
          'w-50 fixed flex h-full flex-col bg-jet duration-300 ease-in-out',
          { 'translate-x-0 ': opened, '-translate-x-full': !opened }
        )}
      >
        <div className='mx-6 h-full py-5'>
          <ul className='space-y-4'>
            {NAVLINKS.map(({ id, name, link, icon }) => (
              <li
                key={id}
                className='nav-links w-24 font-medium capitalize text-rose duration-200 hover:text-white'
              >
                {name === 'Archive' ? (
                  <DropdownEntry icon={icon} name={name} array={ARCHIVELINKS} />
                ) : (
                  <RedirectEntry icon={icon} link={link} name={name} />
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
