'use client';

import React from 'react';
import useChangeTabName from './hooks/useChangeTabName';
import Calendar from './components/Calendar';
import InterestForm from './components/InterestForm';

export default function Home() {
  useChangeTabName('Home');
  return (
    <>
      <div className='flex-grow'>
        <Calendar />
      </div>
      <InterestForm />
    </>
  );
}
