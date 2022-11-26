import { useState } from 'react';
import HeadInfo from '../../components/HeadInfo';
import Login from '../../components/UI/Login';

const LoginPage = () => {
  const [isShow, setIsShow] = useState(false);

  const toggleVisibility = () => {
    setIsShow((prevState) => !prevState);
  };

  const title = 'Mini-Project - Login';
  const description = 'Login UI';
  return (
    <>
      <HeadInfo title={title} description={description} />
      <div className='min-h-hero flex items-center justify-center mx-4 sm:mx-10 '>
        {isShow && <Login onClose={toggleVisibility} />}
        {!isShow && (
          <button
            onClick={toggleVisibility}
            className='px-5 py-3 text-sm rounded-md bg-red-700 hover:bg-red-500 text-dark-200 w-full lg:w-1/2  md:mt-0 md:h-fit'
          >
            Log In
          </button>
        )}
      </div>
    </>
  );
};

export default LoginPage;
