import { Fragment } from 'react';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import Pages from '../../models/pages';

const NavMobile = ({ pages }: Pages) => {
  return (
    <Menu as='div' className='lg:hidden inline-block text-left'>
      <Menu.Button className=' w-20 bg-slate-300 dark:bg-slate-500 rounded-full p-2 px-4  hover:cursor-pointer hover:ring-2 ring-dark-900 dark:ring-dark-100 dark:ring-offset-dark-900  ring-offset-2'>
        {/* <Bars3Icon className='h-7' /> */}
        Menu
      </Menu.Button>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-200'
        enterFrom='transform opacity-0 scale-80 -tranlate-y-10'
        enterTo='transform opacity-100  translate-y-0'
        leave='transition ease-in duration-200'
        leaveFrom='transform opacity-100 scale-100 translate-y-0'
        leaveTo='transform opacity-0 scale-80 -translate-y-10'
      >
        <Menu.Items className='absolute w-[250px] z-10 mt-1 left-[calc(50%_-_125px)]  text-center  dark:divide-dark-500 divide-gray-100 rounded-md bg-dark-300 dark:bg-dark-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none '>
          <div className='px-1 py-1 '>
            {pages.map((page) => {
              return (
                <Menu.Item key={page.path}>
                  {({ active }) => (
                    <Link
                      className={` capitalize ${
                        active
                          ? 'bg-highlightLight text-white'
                          : 'text-gray-900'
                      } group flex w-full items-center justify-center rounded-md px-2 py-2 text-sm dark:text-dark-100`}
                      href={`${page.path}`}
                    >
                      {page.name}
                    </Link>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NavMobile;
