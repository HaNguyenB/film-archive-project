/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React from 'react';
import useChangeTabName from '@/app/hooks/useChangeTabName';

export default function cine326() {
  useChangeTabName('ObCine - CINE326');
  return <div className='w-100wh bg-platinum'>CINE326 page</div>;
}
