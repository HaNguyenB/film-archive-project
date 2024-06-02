/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React from 'react';
import Link from 'next/link';
import useChangeTabName from '@/app/hooks/useChangeTabName';

export default function cine291() {
  useChangeTabName('ObCine - CINE291');
  return (
    <div className='flex p-20'>
      <ul className='mx-auto space-y-5 font-raleway text-3xl font-semibold uppercase text-rose '>
        <li className='relative block w-fit duration-200 after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-platinum after:transition after:duration-300 hover:text-white after:hover:scale-x-100'>
          <Link href='google.com'>Spring 2024</Link>
        </li>
        <li className='relative block w-fit duration-200 after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-platinum after:transition after:duration-300 hover:text-white after:hover:scale-x-100'>
          <Link href='google.com'>Fall 2023</Link>
        </li>
        <li className='relative block w-fit duration-200 after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-platinum after:transition after:duration-300 hover:text-white after:hover:scale-x-100'>
          <Link href='google.com'>Spring 2023</Link>
        </li>
        <li className='relative block w-fit duration-200 after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-platinum after:transition after:duration-300 hover:text-white after:hover:scale-x-100'>
          <Link href='google.com'>Fall 2022</Link>
        </li>
        <li className='relative block w-fit duration-200 after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-platinum after:transition after:duration-300 hover:text-white after:hover:scale-x-100'>
          <Link href='google.com'>Spring 2022</Link>
        </li>
      </ul>

      <p className='w-3/5 text-platinum'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at elit
        dui. Cras vehicula tristique eros eget dignissim. Nulla vulputate non
        ligula venenatis finibus. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Duis ultricies tincidunt nunc
        volutpat luctus. Etiam ut iaculis sem, eu accumsan magna. Sed sit amet
        lorem consequat libero blandit rhoncus nec sed est. Nam consequat, risus
        ac commodo viverra, nulla quam semper sapien, a maximus justo urna vitae
        dui. Nullam luctus nec orci id tincidunt. Class aptent taciti sociosqu
        ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam
        ornare lacinia elit et pulvinar. Morbi ante dolor, malesuada nec erat
        et, pellentesque pharetra leo. Curabitur mi ante, interdum eget nisi ut,
        commodo dignissim nulla. Donec eu purus quis mi egestas molestie.
      </p>
    </div>
  );
}
