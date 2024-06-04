'use client';

import React from 'react';
import useChangeTabName from './hooks/useChangeTabName';
import Calendar from './components/Calendar';
import InterestForm from './components/InterestForm';
import HomeTitle from './components/HomeTitle';

export default function Home() {
  useChangeTabName('Home');
  return (
    <>
      <HomeTitle />
      <div className='flex-grow'>
        <Calendar />
      </div>
      <InterestForm />
    </>
  );
}
