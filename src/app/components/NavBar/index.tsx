'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { NAVLINKS, ARCHIVELINKS } from './constants';
import { RedirectEntry, DropdownEntry } from './NavbarEntry';

interface NavbarProps {
  isOpened: boolean;
  onNavbarIconClick: () => void;
}

const Navbar = ({ isOpened, onNavbarIconClick }: NavbarProps) => {
  const pathname = usePathname();

  return (
    <div>
      <nav
        className={clsx(
          'w-50 fixed z-10 flex h-full flex-col border-r-2 border-rose bg-jet  duration-300 ease-in-out',
          { 'translate-x-0 ': isOpened, '-translate-x-full': !isOpened }
        )}
      >
        <div className='mx-6 h-full py-10'>
          <ul className='space-y-4'>
            {NAVLINKS.map(({ id, name, link, icon }) => (
              <li
                key={id}
                className={clsx(
                  {
                    'font-black text-white underline underline-offset-[5px]':
                      pathname === link,
                  },
                  'nav-links w-24 capitalize text-rose duration-200 hover:text-clamshell'
                )}
              >
                {name === 'Archive' ? (
                  <DropdownEntry
                    icon={icon}
                    name={name}
                    array={ARCHIVELINKS}
                    onClick={onNavbarIconClick}
                    pathname={pathname}
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
