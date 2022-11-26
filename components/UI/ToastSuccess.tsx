import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/24/outline';

const ToastSuccess = ({ message }: { message: string }) => {
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    const closeTime = setTimeout(() => {
      setIsShow(false);
      console.log('fechei useEffect');
    }, 3000);

    return () => {
      if (!isShow) {
        clearTimeout(closeTime);
      }
    };
  }),
    [setIsShow];

  const cickCloseHandlert = () => {
    console.log('fechei no crique');
    setIsShow(false);
  };

  console.log('fui renderizado');

  return (
    <Transition
      show={isShow}
      appear={true}
      enter='transition-all duration-500'
      enterFrom='translate-x-[calc(100%_+_20px)]'
      enterTo='translate-x-0'
      leave='transition-all duration-500'
      leaveFrom='translate-x-0'
      leaveTo='translate-x-[calc(100%_+_20px)]'
      className='fixed top-24 right-5 border-l-4 border-blue-500 rounded-xl bg-white  text-black overflow-hidden shadow-md dark:shadow-dark-600 w-60 min-w-fit'
    >
      <div
        className='px-6 py-4 flex justify-start items-center space-x-4 hover:cursor-pointer'
        onClick={cickCloseHandlert}
      >
        <CheckIcon className='w-7 p-1 rounded-full bg-blue-500 text-white' />
        <div className='space-y-1'>
          <span className='text-black font-medium block'>Success</span>
          <span className='inline-block text-dark-800 font-light'>
            {message}
          </span>
        </div>
      </div>
      <div className='relative bottom-0 left-0 w-full h-1 bg-white before:absolute before:bottom-0 before:right-0  before:w-full before:h-full before:bg-blue-500 before:animate-progress'></div>
    </Transition>
  );
};

export default ToastSuccess;
