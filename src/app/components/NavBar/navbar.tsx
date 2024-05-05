import Link from 'next/link';
import React, { useState } from 'react';
import { IoReorderThreeOutline } from 'react-icons/io5';

const Navbar = () => {
  const links = [
    {
      id: 1,
      name: 'Home',
      link: '/',
    },
    {
      id: 2,
      name: 'Archive',
      link: 'archive',
    },
    {
      id: 3,
      name: 'Blog',
      link: 'blog',
    },
  ];

  const [opened, setOpen] = useState(false);

  return (
    <div>
      <div className='w-full bg-[#EED7C5]'>
        <IoReorderThreeOutline
          className='h-10 w-10 cursor-pointer hover:bg-sky-700'
          onClick={() => setOpen(!opened)}
        />
      </div>
      <nav
        className={`w-50 fixed flex h-full flex-col bg-[#EEE2DF] duration-300 ease-in-out ${
          opened ? 'translate-x-0 ' : '-translate-x-full'
        }`}
      >
        <div className='h-full px-4 py-5'>
          <ul>
            {links.map(({ id, name, link }) => (
              <li
                key={id}
                className='nav-links px-4 pt-2 font-medium capitalize text-[#C89F9C] duration-200 hover:text-[#B36A5E]'
              >
                <Link href={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
