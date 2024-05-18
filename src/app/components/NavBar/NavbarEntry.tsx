import React, { ReactNode, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

export function RedirectEntry(props: {
  link: string;
  icon: ReactNode;
  name: string;
}) {
  return (
    <Link href={props.link} className='flex items-center space-x-2'>
      {props.icon} <span>{props.name}</span>
    </Link>
  );
}

interface DropdownEntryItem {
  id: number;
  name: string;
  link: string;
}

interface DropdownEntryProps {
  icon: ReactNode;
  name: string;
  array: DropdownEntryItem[];
}

export function DropdownEntry(props: DropdownEntryProps) {
  const [dropDownVisibility, setdropDownVisibility] = useState(false);
  return (
    <div className={clsx({ 'space-y-4': dropDownVisibility })}>
      <button
        className='flex items-center space-x-2'
        onClick={() => setdropDownVisibility((value) => !value)}
      >
        {props.icon} <span>{props.name}</span>
      </button>
      <div
        className={clsx(
          'ml-6 space-y-2 overflow-hidden text-rose transition-all ease-in-out',
          {
            'max-h-40 ': dropDownVisibility,
            'invisible max-h-0': !dropDownVisibility,
          }
        )}
      >
        {props.array.map((entry) => (
          <Link
            key={entry.id}
            href={entry.link}
            className='flex items-center duration-200 hover:text-white'
            scroll={false}
          >
            {entry.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
