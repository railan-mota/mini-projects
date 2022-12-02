import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Maple from '../../public/maple.jpg';

const Login = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className='md:flex  bg-slate-50 dark:bg-dark-800  overflow-hidden shadow-2xl dark:shadow-dark-800 rounded-xl text-black dark:text-dark-100 my-4 w-fit'>
      <div className='py-6 px-16 w-fit relative'>
        <button className='absolute right-4 top-4 md:hidden' onClick={onClose}>
          <XMarkIcon className='w-8 bg-dark-300 dark:bg-dark-400 rounded-full p-[6px]' />
        </button>
        <span className='font-bold text-2xl text-left font-serif block mb-6'>
          Log In
        </span>
        <span className='font-light text-sm'>
          Log in to yout account to upload or download picture, videos or music.
        </span>
        <div className='mt-12 mb-4'>
          <label htmlFor='email' />
          <input
            type='text'
            name='email'
            id='email'
            placeholder='Enter your email'
            className='px-5 py-2 focus:outline-none border-2 border-dark-300 dark:border-dark-700 focus:border-highlightLight focus:dark:border-dark-400 placeholder:text-sm placeholder:text-center dark:bg-dark-600 w-full mb-2'
          />
          <label htmlFor='password' />
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Enter your password'
            className='px-5 py-2 focus:outline-none border-2 border-dark-300 dark:border-dark-700 focus:border-highlightLight focus:dark:border-dark-400  placeholder:text-sm placeholder:text-center dark:bg-dark-600 w-full mb-2'
          />
        </div>
        <div className='flex flex-col justify-center items-center lg:flex-row lg:justify-between space-y-3 lg:space-y-0'>
          <span className='inline-block lg:w-1/2 text-center text-sm hover:cursor-pointer text-dark-700 hover:underline dark:text-dark-300 '>
            Forgot Password?
          </span>
          <button className='px-5 py-3 text-sm rounded-md bg-red-700 hover:bg-red-500 text-dark-200 w-full lg:w-1/2  md:mt-0 md:h-fit'>
            Sign In
          </button>
        </div>
      </div>
      <div className='relative w-full  backdrop: hidden md:block '>
        <button className='absolute right-4 top-4 z-10' onClick={onClose}>
          <XMarkIcon className='w-8 bg-dark-100 dark:bg-dark-400 rounded-full p-[6px]' />
        </button>
        <Image
          src={Maple}
          alt='Nature'
          priority={true}
          fill={true}
          sizes='(max-width: 767px) 0vw,
      (max-width: 1200px) 30vw,
      33vw'
          className='object-cover'
        />
      </div>
    </div>
  );
};

export default Login;
