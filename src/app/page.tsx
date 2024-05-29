'use client';

import React from 'react';
import useChangeTabName from './hooks/useChangeTabName';
import Calendar from './components/Calendar';
import InterestForm from './components/InterestForm';

export default function Home() {
  useChangeTabName('Home');
  return (
    <>
      <Calendar />
      <InterestForm />
    </>
  );
}
