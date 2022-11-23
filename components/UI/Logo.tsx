import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      href='/'
      className='w-[56px] h-[56px]  text-center flex flex-col justify-center items-center font-pixel font-normal rounded-full dark:bg-dark-700 bg-dark-200 leading-tight'
    >
      <span className='text-sm'>{`RAILAN`}</span>
      <span>{`MOTA`}</span>
    </Link>
  );
};

export default Logo;
