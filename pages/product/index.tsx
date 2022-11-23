import Image from 'next/image';
import HeadInfo from '../../components/HeadInfo';
import { ScaleIcon, HeartIcon } from '@heroicons/react/24/outline';
import Tshirt from '../../public/dress.png';

const ProductPage = () => {
  const title = 'Mini-Project - Product';
  const description = 'Product UI';
  return (
    <>
      <HeadInfo title={title} description={description} />
      <div className='min-h-hero flex justify-center items-center mx-10 '>
        <div className='flex flex-col min-[900px]:flex-row items-center bg-slate-50 dark:bg-dark-800 p-4 shadow-2xl dark:shadow-dark-800 rounded-xl text-black dark:text-dark-100 my-4  w-[400px] min-[900px]:w-[850px]'>
          <div className='mx-auto  bg-dark-100 dark:bg-dark-700 rounded-md overflow-hidden'>
            <Image
              src={Tshirt}
              alt='Dress'
              className='hover:scale-105  w-[calc(100%_-_60px)] mx-auto  min-[900px]:w-full'
            />
          </div>
          <div className='flex flex-col items-center md:items-start p-6 min-w-fit'>
            <span className='bg-dark-600 text-white dark:bg-dark-300 dark:text-dark-900 text-xs px-2 py-1 rounded-full w-fit mb-2'>
              Free shipping
            </span>
            <h1 className='text-left  text-lg mb-10'>
              Beautiful Women&apos;s Dress for Canada Day
            </h1>
            <span className='text-xs line-through'>$19.99</span>
            <span className='text-3xl font-bold'>$12.99</span>
            <span className='text-sm text-dark-500 dark:text-dark-400 mb-5'>
              This offer is valid as long as stock lasts!
            </span>
            <button className='px-5 py-3 text-sm rounded-md font-semibold bg-red-700 hover:bg-red-500 text-dark-100 w-full mb-4 '>
              Add to Cart
            </button>
            <div className='w-full text-center md:text-left mb-4'>
              <div className='inline-block w-3 h-3 bg-green-400 rounded-full transition-all hover:animate-ping mr-1' />
              <p className='inline'>50+ pcs in stock</p>
            </div>
            <div className='w-full flex  flex-col  md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-3  '>
              <button className='border-2 w-full md:w-fit  rounded-md border-dark-400 px-5 py-3 shadow-sm dark:shadow-dark-700 hover:shadow-lg hover:-translate-y-0.5'>
                <ScaleIcon className='w-6 text-dark-700 dark:text-dark-400 inline-block mr-2 group-hover:text-dark-100' />
                Add to cart
              </button>
              <button className='border-2 w-full md:w-fit rounded-md border-dark-400 px-5 py-3 shadow-sm dark:shadow-dark-700 hover:shadow-lg hover:-translate-y-0.5'>
                <HeartIcon className='w-6 text-dark-700 dark:text-dark-400 inline-block mr-2' />
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
