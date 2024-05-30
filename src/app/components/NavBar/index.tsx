'use client';
import React from 'react';
import clsx from 'clsx';
import { NAVLINKS, ARCHIVELINKS } from './constants';
import { RedirectEntry, DropdownEntry } from './NavbarEntry';

interface NavbarProps {
  isOpened: boolean;
  onNavbarIconClick: () => void;
}

const Navbar = ({ isOpened, onNavbarIconClick }: NavbarProps) => {
  return (
    <div>
      <nav
        className={clsx(
          'w-50 fixed z-10 flex h-full flex-col border-r-2 border-platinum bg-jet  duration-300 ease-in-out',
          { 'translate-x-0 ': isOpened, '-translate-x-full': !isOpened }
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
                    onClick={onNavbarIconClick}
                  />
                ) : (
                  <RedirectEntry
                    icon={icon}
                    link={link}
                    name={name}
                    onClick={onNavbarIconClick}
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
