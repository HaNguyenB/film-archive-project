'use client';
import React from 'react';
import useChangeTabName from '../functions/useChangeTabName';

export default function Archive() {
  useChangeTabName('Blog');
  return <div></div>;
}
