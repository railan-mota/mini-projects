import Image from 'next/image';
import HeadInfo from '../../components/HeadInfo';
import CanadaPic from '../../public/canada.jpg';

const EmailSubscribePage = () => {
  const title = 'Mini-Project - Email Subscribe';
  const description = 'Email Subscriber UI';

  return (
    <>
      <HeadInfo title={title} description={description} />
      <div className='flex justify-center items-center min-h-hero'>
        <div className='dark:bg-dark-800 bg-dark-300 p-3 mx-6 rounded-2xl shadow-lg dark:shadow-dark-900 my-4 md:my-0 '>
          <div className='flex flex-col md:flex-row rounded-l-xl'>
            <Image
              src={CanadaPic}
              className='object-cover object-center h-56 md:h-96 rounded-xl md:rounded-l-xl md:rounded-r-none hover:scale-105 transition-transform'
              alt='Nature'
            />
            <div className='p-6 md:p-12'>
              <h2 className='font-serif text-xl font-extrabold text-center md:text-left'>
                Get immigration and travel tips in your email.
              </h2>
              <p className='max-w-xs my-4 text-xs leading-5 tracking-wide text-center md:text-left'>
                Learn all must-knows about Canada. Sing up for our newsletter.
              </p>
              <div className='flex flex-col mt-6 space-y-4 '>
                <input
                  type='text'
                  placeholder='Enter your email address'
                  className='py-2 px-4 text-center md:text-left dark:bg-dark-800 border dark:border-dark-600 placeholder:text-sm w-full focus:outline-none placeholder:text-center'
                />
                <button className='px-5 py-3 text-sm rounded-md bg-red-700 hover:bg-red-500 text-dark-200'>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailSubscribePage;
