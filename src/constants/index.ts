import { NavLink, TabDataProps } from '@/types';

export const navLinks: NavLink[] = [
  {
    title: 'About',
    path: '#about',
  },
  {
    title: 'Projects',
    path: '#projects',
  },
  {
    title: 'Contact',
    path: '#contact',
  },
];

const TAB_DATA: TabDataProps[] = [
  {
    title: 'Skills',
    id: 'skills',
    content: [''],
  },
  {
    title: 'Education',
    id: 'education',
    content: [''],
    // content: (
    //   <ul className='list-disc pl-2'>
    //     <li>Fullstack Academy of Code</li>
    //     <li>University of California, Santa Cruz</li>
    //   </ul>
    // ),
  },
  // {
  //   title: 'Certifications',
  //   id: 'certifications',
  //   content: (
  //     <ul className='list-disc pl-2'>
  //       <li>AWS Cloud Practitioner</li>
  //       <li>Google Professional Cloud Developer</li>
  //     </ul>
  //   ),
  // },
];
