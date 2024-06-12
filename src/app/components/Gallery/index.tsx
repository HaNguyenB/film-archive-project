import React from 'react';
import data from './data.json';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Gallery({ currentPage }: any) {
  const pathname = `${usePathname()}/film`;
  const searchParams = useSearchParams();
  const createPageURL = (title: string) => {
    const params = new URLSearchParams(searchParams);
    console.log(searchParams);
    params.set('', title.toString());
    return `${pathname}?${params.toString()}`;
  };

  const test1 = data.leftRow[currentPage - 1].map((resource, index) => {
    return (
      <div key={index}>
        <Link href={createPageURL(resource.title)}>
          <img
            className='max-h-[200px] w-full max-w-[200px] rounded-lg object-cover'
            src={resource.imageURL}
            alt=''
          />
        </Link>
      </div>
    );
  });

  const test2 = data.rightRow[currentPage - 1].map((resource, index) => {
    return (
      <div key={index}>
        <img
          className='max-h-[200px] w-full max-w-[200px] rounded-lg object-cover'
          src={resource.imageURL}
          alt=''
        />
      </div>
    );
  });

  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 '>
      <div className='grid gap-5'>
        {/* <div>
          <img
            className='max-h-[200px] w-full max-w-[200px] rounded-lg object-cover'
            src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
            alt=''
          />
        </div>
        <div>
          <img
            className='max-w-[200px] rounded-lg'
            src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg'
            alt=''
          />
        </div>
        <div>
          <img
            className='h-auto max-w-[200px] rounded-lg'
            src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg'
            alt=''
          />
        </div> */}
        {test1}
      </div>
      <div className='grid gap-4'>
        {/* <div>
          <img
            className='h-auto max-w-[200px] rounded-lg'
            src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg'
            alt=''
          />
        </div>
        <div>
          <img
            className='max-h-[220px] w-full max-w-[200px] rounded-lg object-cover'
            src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg'
            alt=''
          />
        </div>
        <div>
          <img
            className='h-auto max-w-[200px] rounded-lg'
            src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg'
            alt=''
          />
        </div> */}
        {test2}
      </div>
    </div>
  );
}
