'use client';
import React from 'react';
import useChangeTabName from '../hooks/useChangeTabName';

export default function Blog() {
  useChangeTabName('Blog');
  return <div></div>;
}
