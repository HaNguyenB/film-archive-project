import React from 'react';

interface EventCardProps {
  title: string;
  description: string;
  date: React.ReactNode;
  imgSrc: string;
}

export default function EventCard(props: EventCardProps) {
  return (
    <div className=' h-80 w-48 min-w-48 bg-white pb-4 shadow-md'>
      <div className='h-30 overflow-hidden'>
        <img src={props.imgSrc} alt='' className='object-cover' />
      </div>
      <div className='space-y-2 p-3 font-sans '>
        <div>{props.date}</div>
        <div className='h-[136px] space-y-2 overflow-hidden text-sm '>
          <h6 className='font-semibold uppercase leading-relaxed text-jet'>
            {props.title}
          </h6>
          <p className=' mb-4 '>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
