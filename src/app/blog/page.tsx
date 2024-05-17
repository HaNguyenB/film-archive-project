'use client';
import React from 'react';
import useChangeTabName from '../functions/useChangeTabName';

export default function Blog() {
  useChangeTabName('Blog');
  return <div></div>;
}
