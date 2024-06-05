import React from 'react';

interface ImageProps {
  imgSrc: string;
  alt: string;
}

export default function Image(props: ImageProps) {
  return (
    <div className='relative m-auto w-full shrink-0 overflow-hidden md:max-w-[300px] '>
      <img
        src={props.imgSrc}
        alt={props.alt}
        className=' h-52 w-full object-cover object-center duration-300 ease-in hover:scale-110 hover:opacity-60'
      />
    </div>
  );
}
