import React from 'react';

interface EventCardProps {
  title: string;
  description: string;
  date: React.ReactNode;
  imgSrc: string;
}

export default function EventCard(props: EventCardProps) {
  return (
    <div className='relative flex max-w-md space-x-2 bg-white shadow-md'>
      <div>{props.date}</div>
      <div className='relative m-0 w-2/5 overflow-hidden bg-white bg-clip-border'>
        <img
          src={props.imgSrc}
          alt='card-image'
          className='h-full w-full object-cover'
        />
      </div>
      <div className='word-wrap m-w-full overflow-hidden break-words p-6'>
        <h6 className='mb-4 block font-sans text-sm font-semibold uppercase leading-relaxed tracking-normal text-jet'>
          {props.title}
        </h6>
        <p className='mb-8 block h-full w-full overflow-hidden break-words bg-rose font-sans text-sm font-normal leading-relaxed'>
          {props.description}
        </p>
      </div>
    </div>
  );
}
