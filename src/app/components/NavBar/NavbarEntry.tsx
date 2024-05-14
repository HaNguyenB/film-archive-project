import React, { ReactNode } from 'react';
import Link from 'next/link';
import { Disclosure, Transition } from '@headlessui/react';

export function RedirectEntry(props: {
  link: string;
  icon: ReactNode;
  name: string;
}) {
  return (
    <Link href={props.link} className='flex items-center'>
      {props.icon} {props.name}
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
  return (
    <Disclosure>
      <Disclosure.Button className='flex items-center'>
        {props.icon} {props.name}
      </Disclosure.Button>
      <Transition
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Disclosure.Panel className='ml-5 mt-4 p-0 text-rose'>
          {props.array.map((entry) => (
            <div key={entry.id} className='m-1'>
              <Link
                href={entry.link}
                className='flex items-center hover:text-white'
                scroll={false}
              >
                {entry.name}
              </Link>
            </div>
          ))}
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  );
}
