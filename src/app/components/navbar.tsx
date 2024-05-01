import Link from "next/link";
import React from "react";


const Navbar = () => {

  const links = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Archive",
      link: "archive",
    },
    {
      id: 3,
      name: "Blog",
      link: "blog",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed nav">

      <ul className="hidden md:flex">
        {links.map(({ id, link, name }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>


    </div>
  );
};

export default Navbar;