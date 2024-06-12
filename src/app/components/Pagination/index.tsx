import Link from 'next/link';
import { ReadonlyURLSearchParams } from 'next/navigation';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  pathname: string;
  searchParams: ReadonlyURLSearchParams;
  currentPage: number;
}

export default function Pagination({
  totalPages,
  pathname,
  searchParams,
  currentPage,
}: PaginationProps) {
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}/${params.toString()}`;
  };

  const addPages = () => {
    const pages = [];
    for (let i = 0; i < totalPages; i++) {
      pages.push(
        <li key={i}>
          <Link
            href={createPageURL(i + 1)}
            className='flex h-8 items-center justify-center border border-white bg-rose px-3 leading-tight'
          >
            {i + 1}
          </Link>
        </li>
      );
    }
    return pages;
  };

  return (
    <div>
      <nav>
        <ul className='flex justify-center pb-20 text-sm'>
          <li>
            <Link
              className='ms-0 flex h-8 w-[80px] items-center justify-center rounded-s-lg border border-s-0 border-white bg-rose px-3 leading-tight'
              href={currentPage > 1 ? createPageURL(currentPage - 1) : '#'}
            >
              Previous
            </Link>
          </li>
          {addPages()}
          <li>
            <Link
              className='ms-0 flex h-8 w-[80px] items-center justify-center rounded-e-lg border border-e-0 border-white bg-rose px-3 leading-tight '
              href={
                currentPage !== totalPages
                  ? createPageURL(currentPage + 1)
                  : '#'
              }
            >
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
