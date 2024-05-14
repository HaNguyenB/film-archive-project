import { FaHome } from 'react-icons/fa';
import { FaArchive } from 'react-icons/fa';
import { FaNewspaper } from 'react-icons/fa';
export const NAVLINKS = [
  {
    id: 1,
    name: 'Home',
    type: 'Redirect',
    link: '/',
    icon: <FaHome className='mr-2' />,
  },
  {
    id: 2,
    name: 'Archive',
    type: 'Dropdown',
    link: 'archive',
    icon: <FaArchive className='mr-2' />,
  },
  {
    id: 3,
    name: 'Blog',
    type: 'Redirect',
    link: 'blog',
    icon: <FaNewspaper className='mr-2' />,
  },
];

export const ARCHIVELINKS = [
  {
    id: 1,
    name: 'CINE291',
    link: '' + 'archive/classes/cine291',
  },
  {
    id: 2,
    name: 'CINE326',
    link: '' + 'archive/classes/cine326',
  },
];
