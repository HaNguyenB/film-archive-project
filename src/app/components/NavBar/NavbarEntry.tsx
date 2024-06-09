import React, { ReactNode, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

export function RedirectEntry(props: {
  link: string;
  icon: ReactNode;
  name: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={props.link}
      className='flex items-center space-x-2'
      onClick={props.onClick}
    >
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
  onClick: () => void;
  pathname: string;
}

export function DropdownEntry(props: DropdownEntryProps) {
  const [dropDownVisibility, setdropDownVisibility] = useState(false);
  return (
    <div className={clsx({ 'space-y-3': dropDownVisibility })}>
      <button
        className='flex items-center space-x-2'
        onClick={() => setdropDownVisibility((value) => !value)}
      >
        {props.icon} <span>{props.name}</span>
      </button>
      <div
        className={clsx(
          'ml-6 space-y-3 overflow-hidden text-rose transition-all ease-in-out',
          {
            'max-h-40 ': dropDownVisibility,
            'invisible max-h-0 opacity-0': !dropDownVisibility,
          }
        )}
      >
        {props.array.map((entry) => (
          <Link
            key={entry.id}
            href={entry.link}
            className={clsx(
              {
                'font-bold text-white underline underline-offset-[5px]':
                  props.pathname === entry.link,
              },
              'flex items-center duration-200 hover:text-clamshell'
            )}
            scroll={false}
            onClick={props.onClick}
          >
            {entry.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
