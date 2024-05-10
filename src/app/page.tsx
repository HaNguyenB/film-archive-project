'use client';

import React from 'react';
import useChangeTabName from './functions/useChangeTabName';

export default function Home() {
  useChangeTabName('Home');
  return <div className=' bg-jet'></div>;
}
