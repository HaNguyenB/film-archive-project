import React from 'react';

interface ImageProps {
  imgSrc: string;
  alt: string;
}

export default function Image(props: ImageProps) {
  return (
    <picture className='relative max-h-64 w-full overflow-hidden'>
      <img
        src={props.imgSrc}
        alt={props.alt}
        className='m-auto object-cover duration-300 ease-in hover:scale-110 hover:opacity-60'
      />
    </picture>
  );
}
