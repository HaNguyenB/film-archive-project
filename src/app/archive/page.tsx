'use client';
import React from 'react';
import useChangeTabName from '../hooks/useChangeTabName';

export default function Archive() {
  useChangeTabName('Blog');
  return <div className='h-full w-full'></div>;
}
