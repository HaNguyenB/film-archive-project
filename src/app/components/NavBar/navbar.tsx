import Link from "next/link";
import React, {useState} from "react";
import { IoReorderThreeOutline } from "react-icons/io5";


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

  
  const [opened, setOpen] = useState(false)

  console.log(opened)
  return (
    <div>
      <div className="bg-[#EED7C5] w-full">
      <IoReorderThreeOutline className="w-10 h-10 cursor-pointer hover:bg-sky-700" onClick={() => setOpen(!opened)}/>
      </div>
        <nav className={`fixed flex-col flex bg-[#EEE2DF] h-full w-50 ease-in-out duration-300 ${
          opened ? "translate-x-0 " : "-translate-x-full"}`}> 
          <div className="h-full flex-col justify-between py-5 px-4 flex">
            <ul>
                {links.map(({ id, name, link }) => (
                    <li
                        key={id}
                        className="nav-links pt-2 px-4 capitalize font-medium text-[#C89F9C] hover:text-[#B36A5E] duration-200"
                    >
                       <Link href={link}>{name}</Link> 
                    </li>
                ))}
            </ul>
           </div>                 
      </nav> 
    </div>
  );
};

export default Navbar;