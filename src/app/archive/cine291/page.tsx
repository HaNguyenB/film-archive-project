'use client';
import React from 'react';
import data from './data.json';
import useChangeTabName from '@/app/hooks/useChangeTabName';
import Pagination from '@/app/components/Pagination';
import Gallery from '@/app/components/Gallery';
import { usePathname, useSearchParams } from 'next/navigation';

export default function cine291() {
  useChangeTabName('ObCine - CINE291');
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  return (
    <div>
      <div className='flex flex-col gap-5 p-20 md:flex-row md:justify-around'>
        <div className='md:w-1/2'>
          <h1 className='pb-5 text-8xl font-semibold uppercase text-rose'>
            {data.headings[currentPage - 1].heading}
          </h1>
          <p className=' text-platinum'>{data.description}</p>
        </div>
        <Gallery currentPage={currentPage} />
      </div>
      <Pagination
        totalPages={2}
        pathname={pathname}
        searchParams={searchParams}
        currentPage={currentPage}
      />
    </div>
  );
}
