import { FaHome } from 'react-icons/fa';
import { FaArchive } from 'react-icons/fa';
import { FaNewspaper } from 'react-icons/fa';
export const NAVLINKS = [
  {
    id: 1,
    name: 'Home',
    link: '/',
    icon: <FaHome />,
  },
  {
    id: 2,
    name: 'Archive',
    link: 'archive',
    icon: <FaArchive />,
  },
  {
    id: 3,
    name: 'Blog',
    link: 'blog',
    icon: <FaNewspaper />,
  },
];
