import HeadInfo from '../components/HeadInfo';

export default function Home() {
  const title = 'Railan | Mini- Projects | NodeJS - Typescript - Tailwind';
  const description =
    'These are my mini-projects.I made them using Typescript, NextJS, and Tailwind';

  return (
    <>
      <HeadInfo title={title} description={description} />
      <div className=' grid grid-rows-2 grid-cols-1 md:grid-cols-2 min-h-hero'>
        <div className='text-left p-10 sm:p-10 sm:self-center md:self-start md:row-span-2 lg:mt-14'>
          <h1 className='font-heading text-5xl sm:text-6xl font-semibold mb-4'>
            {`Hi, I'm `}
            <span className='text-highlightLight font-hero'>Railan</span>
          </h1>
          <p className='text-3xl mb-4'>These are my mini-projects</p>
          <p className='text-3xl'>
            I made them using Typescript, NextJS, and Tailwind
          </p>
        </div>
        <div className='text-left p-10 sm:p-10 md:row-span-2 md:self-end lg:mb-14'>
          <h2 className='font-heading text-5xl sm:text-6xl font-semibold mb-4'>
            {`Self-taught `}
            <span className='text-highlightLight font-hero h-full'>
              Frontend
            </span>
            {` developer`}
          </h2>
          <p className='text-3xl'>On my way to becoming a FullStack Web </p>
        </div>
      </div>
    </>
  );
}
