import React from 'react'
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

import { ACADEMIC_PROGRAM, PEOPLE, INSTAGRAM } from './constants';

export default function Footer() {
  const links : {id: number, name?: string, link: string}[] = [
    {
      id: 1,
      name: "Academic Program",
      link: ACADEMIC_PROGRAM  
    },
    {
      id: 2,
      name: "People",
      link: PEOPLE
    },
    {
      id: 3,
      name: '',
      link: INSTAGRAM
    },

  ]
    
  return (
    <footer className='flex justify-between items-center w-full h-10 bg-[#EED7C5] fixed inset-x-0 bottom-0'>
        <ul className="flex justify-between items-center">
          {links.map(({ id, name, link }) => (
            <li
              key={id}
              className="nav-links px-4 capitalize text-sm text-[#C89F9C] hover:text-[#B36A5E] duration-200"
            >
              {name ? <Link href={link}>{name}</Link> : <a href={link}> <FaInstagram/> </a>}
              
            </li>
          ))}
      </ul>
        <h5 className="px-4 text-sm text-[#C89F9C]">
            Made by Ha Nguyen
        </h5>

        
    </footer>

  )
}
