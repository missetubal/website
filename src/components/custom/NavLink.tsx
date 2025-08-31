'use client';

import Link from 'next/link';

export type NavLinkProps = {
  path: string;
  title: string;
};
export const NavLink = ({ path, title }: NavLinkProps) => {
  return (
    <Link
      href={path}
      className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'
    >
      {title}
    </Link>
  );
};
