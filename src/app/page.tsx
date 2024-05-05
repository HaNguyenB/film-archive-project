'use client';

import React from 'react';
import Navbar from './components/NavBar/navbar';
import Footer from './components/Footer/footer';

export default function Home() {
  return (
    <div className='flex h-screen flex-col justify-between'>
      <Navbar />
      <Footer />
    </div>
  );
}
