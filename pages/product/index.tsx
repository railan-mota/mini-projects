import { useState, useEffect } from 'react';
import Image from 'next/image';
import HeadInfo from '../../components/HeadInfo';
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartFull } from '@heroicons/react/24/solid';
import Tshirt from '../../public/dress.png';

const ProductPage = () => {
  const [wishlist, setWishlist] = useState(false);
  const [cart, setCart] = useState(false);

  useEffect(() => {
    const getWishlist = localStorage.getItem('whishlist');
    if (getWishlist) {
      setWishlist(true);
    }

    const getCart = localStorage.getItem('cart');
    if (getCart) {
      setCart(true);
    }
  }, [setWishlist, setCart]);

  const addCartHandler = () => {
    if (cart) {
      return;
    }
    localStorage.setItem('cart', 'true');
    setCart(true);
  };

  const cartHandler = () => {
    if (cart) {
      localStorage.removeItem('cart');
      setCart(false);
    } else {
      localStorage.setItem('cart', 'true');
      setCart(true);
    }
  };

  const whishlistHandler = () => {
    if (wishlist) {
      localStorage.removeItem('wishlist');
      setWishlist(false);
    } else {
      localStorage.setItem('wishlist', 'true');
      setWishlist(true);
    }
  };

  const title = 'Mini-Project - Product';
  const description = 'Product UI';
  return (
    <>
      <HeadInfo title={title} description={description} />
      <div className='min-h-hero flex justify-center items-center mx-10 '>
        <div className='flex flex-col min-[900px]:flex-row items-center bg-slate-50 dark:bg-dark-800 p-4 shadow-2xl dark:shadow-dark-800 rounded-xl text-black dark:text-dark-100 my-4  w-[450px] min-[900px]:w-[1000px]'>
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
            <button
              onClick={addCartHandler}
              className='px-5 py-3 text-sm rounded-md font-semibold bg-red-700 hover:bg-red-500 text-dark-100 w-full mb-4 '
            >
              Add to Cart
            </button>
            <div className='w-full text-center md:text-left mb-4'>
              <div className='inline-block w-3 h-3 bg-green-400 rounded-full transition-all hover:animate-ping mr-1' />
              <p className='inline'>50+ pcs in stock</p>
            </div>
            <div className='w-full grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-2 '>
              <button
                onClick={cartHandler}
                className={`border-2 w-full min-[900px]:w-52  rounded-md border-dark-400 px-2 py-3 shadow-sm dark:shadow-dark-700 hover:shadow-lg hover:-translate-y-0.5`}
              >
                {cart ? (
                  <>
                    <ShoppingCartIcon className='w-6 text-dark-700 dark:text-dark-400 inline-block mr-2 group-hover:text-dark-100' />
                    Remove to cart
                  </>
                ) : (
                  <>
                    <ShoppingCartIcon className='w-6 text-dark-700 dark:text-dark-400 inline-block mr-2 group-hover:text-dark-100' />
                    Add to cart
                  </>
                )}
              </button>
              <button
                onClick={whishlistHandler}
                className='border-2 w-full min-[900px]:w-52 rounded-md border-dark-400 px-2 py-3 shadow-sm dark:shadow-dark-700 hover:shadow-lg hover:-translate-y-0.5'
              >
                {wishlist ? (
                  <>
                    <HeartFull className='w-6 text-highlightLight dark:text-highlightDark inline-block mr-2' />
                    Remove to wishlist
                  </>
                ) : (
                  <>
                    <HeartIcon className='w-6 text-dark-700 dark:text-dark-400 inline-block mr-2' />
                    Add to wishlist
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
