import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

import { ACADEMIC_PROGRAM, PEOPLE, INSTAGRAM } from './constants';

export default function Footer() {
  const links: { id: number; name?: string; link: string }[] = [
    {
      id: 1,
      name: 'Academic Program',
      link: ACADEMIC_PROGRAM,
    },
    {
      id: 2,
      name: 'People',
      link: PEOPLE,
    },
    {
      id: 3,
      name: '',
      link: INSTAGRAM,
    },
  ];

  return (
    <footer className='fixed inset-x-0 bottom-0 z-20 flex h-10 w-full items-center justify-between border-t-2 border-solid border-rose bg-jet'>
      <ul className='flex items-center'>
        {links.map(({ id, name, link }) => (
          <li
            key={id}
            className='nav-links px-4 text-sm capitalize text-rose duration-200 hover:text-platinum'
          >
            {name ? (
              <Link href={link}>{name}</Link>
            ) : (
              <a href={link}>
                {' '}
                <FaInstagram />{' '}
              </a>
            )}
          </li>
        ))}
      </ul>
      <h5 className='px-4 text-sm text-[#C89F9C]'>Made by Ha Nguyen</h5>
    </footer>
  );
}
