import HeadInfo from '../../components/HeadInfo';
import { CheckIcon } from '@heroicons/react/24/outline';

const PricingGridPage = () => {
  const title = 'Mini-Project - Pricing Grid';
  const description = 'Pricing grid UI';
  return (
    <>
      <HeadInfo title={title} description={description} />
      <div className='flex flex-col md:flex-row justify-center items-center min-h-hero md:space-x-6 md:space-y-0 space-y-6 my-4 md:my-0 md:mx-10'>
        {/* Basic */}
        <div className='bg-dark-300 dark:bg-dark-800 w-[calc(100%_-_80px)] sm:w-fit hover:bg-gradient-to-t hover:from-red-600 hover:to-pink-600 p-[10px] rounded-xl transition-all relative flex group'>
          <div className='dark:bg-dark-900 bg-dark-100 rounded-xl py-4 px-10 w-full'>
            <div className='flex flex-col text-center'>
              <div className=''>
                <h2 className='tracking-tight font-light mb-6'>Basic</h2>
                <p className='text-4xl font-serif font-semibold uppercase mb-1'>
                  100<span className='text-5xl'>GB</span>
                </p>
                <h2 className='text-sm mb-6'>$1.99/Month</h2>
                <button className='py-2 px-5 border-2 border-red-600 dark:border-rose-600 group-hover:border-transparent group-hover:bg-gradient-to-t group-hover:from-red-600 group-hover:to-rose-600 w-full rounded-lg mb-12 hover:opacity-90 group-hover:text-dark-100'>
                  Purchase
                </button>
              </div>
            </div>
            <div className='absolute h-[1px] left-[10px] w-[calc(100%_-_20px)] bg-dark-300 dark:bg-dark-800'></div>
            <div className='mt-6 mb-6 text-left space-y-1'>
              <div className='text-xs flex items-center justify-start'>
                <CheckIcon className='h-5 inline-block mr-2' />
                100 GB storage
              </div>
              <div className='text-xs flex items-center justify-start'>
                <CheckIcon className='h-5 inline-block mr-2' />
                Option to add members
              </div>
              <div className='text-xs flex items-center justify-start'>
                <CheckIcon className='h-5 inline-block mr-2' />
                Extra member benefits
              </div>
            </div>
          </div>
        </div>
        {/* Standard */}
        <div className='bg-dark-300 dark:bg-dark-800  hover:bg-gradient-to-t hover:from-red-600 hover:to-pink-600 p-[10px] rounded-xl transition-all relative flex group w-[calc(100%_-_80px)] sm:w-fit'>
          <div className='dark:bg-dark-900 bg-dark-100 rounded-xl py-4 px-10 w-full'>
            <div className='flex flex-col text-center'>
              <div className=''>
                <h2 className='tracking-tight font-light mb-6'>Standart</h2>
                <p className='text-4xl font-serif font-semibold uppercase mb-1'>
                  200<span className='text-5xl'>GB</span>
                </p>
                <h2 className='text-sm mb-6'>$3.99/Month</h2>
                <button className='py-2 px-5 border-2 border-red-600 dark:border-rose-600 group-hover:border-transparent group-hover:bg-gradient-to-t group-hover:from-red-600 group-hover:to-rose-600 w-full rounded-lg mb-12 hover:opacity-90 group-hover:text-dark-100'>
                  Purchase
                </button>
              </div>
            </div>
            <div className='absolute h-[1px] left-[10px] w-[calc(100%_-_20px)] bg-dark-300 dark:bg-dark-800'></div>
            <div className='mt-6 mb-6 text-left space-y-1 [&>div]:w-fit'>
              <div className='text-xs flex items-center justify-start'>
                <CheckIcon className='h-5 inline-block mr-2' />
                200 GB storage
              </div>
              <div className='text-xs flex items-center justify-start'>
                <CheckIcon className='h-5 inline-block mr-2' />
                Option to add members
              </div>
              <div className='text-xs flex items-center justify-start'>
                <CheckIcon className='h-5 inline-block mr-2' />
                Extra member benefits
              </div>
            </div>
          </div>
        </div>
        {/* Premium */}
        <div className='bg-dark-300 dark:bg-dark-800  hover:bg-gradient-to-t hover:from-red-600 hover:to-pink-600 p-[10px] rounded-xl transition-all relative flex group w-[calc(100%_-_80px)] sm:w-fit'>
          <div className='dark:bg-dark-900 bg-dark-100 rounded-xl py-4 px-10 w-full'>
            <div className='flex flex-col text-center'>
              <div className=''>
                <h2 className='tracking-tight font-light mb-6'>Premium</h2>
                <p className='text-4xl font-serif font-semibold uppercase mb-1'>
                  2<span className='text-5xl'>TB</span>
                </p>
                <h2 className='text-sm mb-6'>$8.99/Month</h2>
                <button className='py-2 px-5 border-2 border-red-600 dark:border-rose-600 group-hover:border-transparent group-hover:bg-gradient-to-t group-hover:from-red-600 group-hover:to-rose-600 w-full rounded-lg mb-12 hover:opacity-90 group-hover:text-dark-100'>
                  Purchase
                </button>
              </div>
            </div>
            <div className='absolute h-[1px] left-[10px] w-[calc(100%_-_20px)] bg-dark-300 dark:bg-dark-800'></div>
            <div className='mt-6 mb-6 text-ledft space-y-1'>
              <div className='text-xs flex items-center justify-start'>
                <CheckIcon className='h-5 inline-block mr-2' />2 TB storage
              </div>
              <div className='text-xs flex items-center justify-start'>
                <CheckIcon className='h-5 inline-block mr-2' />
                Option to add members
              </div>
              <div className='text-xs flex items-center justify-start'>
                <CheckIcon className='h-5 inline-block mr-2' />
                Extra member benefits
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingGridPage;
