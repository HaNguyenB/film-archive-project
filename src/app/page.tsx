'use client';

import React from 'react';
import useChangeTabName from './hooks/useChangeTabName';
import Calendar from './components/Calendar';

export default function Home() {
  useChangeTabName('Home');
  return <Calendar />;
}
