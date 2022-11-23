import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Pages from '../../models/pages';

const NavLinks = ({ pages }: Pages) => {
  const router = useRouter();
  return (
    <nav className='hidden lg:inline-block'>
      <ul className='flex s  space-x-4 '>
        {pages.map((page) => {
          return (
            <li key={page.path}>
              <Link
                href={`${page.path}`}
                className={`capitalize px-5 py-3 ${
                  router.pathname == `${page.path}`
                    ? 'border-b-[3px]  dark:border-highlightDark border-highlightLight  dark:text-dark-100 text-dark-800'
                    : ' hover:bg-dark-300 hover:dark:bg-dark-700 rounded-full'
                }`}
              >
                {`${page.name}`}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;
