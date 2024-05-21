'use client';

import React from 'react';
import useChangeTabName from './hooks/useChangeTabName';
import Calendar from './components/Calendar';

export default function Home() {
  useChangeTabName('Home');
  return (
    <div className='relative top-20 flex flex-col'>
      <div className=' w-100 flex h-full justify-end align-middle'>
        <Calendar />
      </div>
    </div>
  );
}
