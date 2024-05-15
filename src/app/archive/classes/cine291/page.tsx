/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React from 'react';
import useChangeTabName from '@/app/functions/useChangeTabName';

export default function cine291() {
  useChangeTabName('ObCine - CINE291');
  return <div className='w-100wh bg-platinum'>CINE291 page</div>;
}
