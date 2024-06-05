import React from 'react';
import Image from '../Image';

interface InformationContainerProps {
  imgSrc: string;
  href1: string;
  href2: string;
  alt: string;
  title: string;
  description1: string;
  description2: string;
  description3: string;
  icon: React.ReactNode;
}

export default function InformationContainer(props: InformationContainerProps) {
  return (
    <div className='w-full max-w-full space-x-4 bg-jet  px-10 py-5 md:flex'>
      <Image imgSrc={props.imgSrc} alt={props.alt} />
      <div className='my-auto border-l-2 pl-5 text-rose'>
        <section>
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='relative w-fit text-4xl font-semibold uppercase duration-200 hover:text-white'
            href={props.href1}
          >
            {props.title}
          </a>
          <span className='text-lg'>{props.description1}</span>
        </section>
        <section className='flex w-40 pt-5 '>
          <span className='my-auto mr-auto text-[#7f1b27]'>{props.icon}</span>
          <span>
            <a
              href={props.href2}
              target='_blank'
              rel='noopener noreferrer'
              className='duration-200 hover:text-white'
            >
              <p>{props.description2}</p>
              <p>{props.description3}</p>
            </a>
          </span>
        </section>
      </div>
    </div>
  );
}
