import HeadInfo from '../components/HeadInfo';

export default function Home() {
  const title = 'Railan | Mini- Projects | NodeJS - Typescript - Tailwind';
  const description =
    'These are my mini-projects.I made them using Typescript, NextJS, and Tailwind';

  return (
    <>
      <HeadInfo title={title} description={description} />
      <div className='grid grid-rows-1 md:grid-cols-2 md:grid-rows-1  items-center justify-center min-h-hero'>
        <div className=' h-full py-28 px-10 ml-6'>
          <h1 className='font-heading text-6xl font-semibold text-left mb-4'>
            {`Hi, I'm `}
            <span className='text-highlightLight  font-hero h-full'>
              Railan
            </span>
          </h1>
          <p className='text-3xl mb-1'>These are my mini-projects.</p>
          <p className='text-3xl'>
            I made them using Typescript, NextJS, and Tailwind.
          </p>
        </div>
        <div></div>
      </div>
    </>
  );
}
