import React from 'react';
import Image from '../Image';

interface InformationContainerProps {
  imgSrc: string;
  titleUrl: string;
  locationUrl: string;
  imgAlt: string;
  title: string;
  description: string;
  addressLine1: string;
  addressLine2: string;
  icon: React.ReactNode;
}

export default function InformationContainer(props: InformationContainerProps) {
  return (
    <div className='flex w-full max-w-full flex-col gap-5 bg-jet px-10 py-5 md:flex-row '>
      <Image imgSrc={props.imgSrc} alt={props.imgAlt} />
      <div className='mx-auto  text-rose md:border-l-2 md:pl-5'>
        <section>
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='relative w-fit text-4xl font-semibold uppercase duration-200 hover:text-white'
            href={props.titleUrl}
          >
            {props.title}
          </a>
          <span className='text-lg'>{props.description}</span>
        </section>
        <section className='flex w-40 pt-5 '>
          <span className='my-auto mr-auto text-[#7f1b27]'>{props.icon}</span>
          <span>
            <a
              href={props.locationUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='duration-200 hover:text-white'
            >
              {props.addressLine1}
              <br />
              {props.addressLine2}
            </a>
          </span>
        </section>
      </div>
    </div>
  );
}
