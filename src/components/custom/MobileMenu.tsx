'use client';

import { NavLink, NavLinkProps } from './NavLink';

type MobileMenuProps = {
  links: NavLinkProps[];
};
export const MobileMenu = ({ links }: MobileMenuProps) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
      {links.map((link, index) => (
        <li key={index}>
          <NavLink path={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};
