import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import ToastSuccess from './ToastSuccess';

import CanadaPic from '../../public/canada.jpg';

const EmailSubscribe = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);

  const [showToast, setShowToast] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [isInitial, setIsInitial] = useState(false);

  const [emailIsValid, setEmailIsValid] = useState(false);

  const emailInputChangeHandler = () => {
    if (!isInitial) {
      setIsInitial(true);
    }
    setEnteredEmail(emailInputRef.current!.value);
  };

  useEffect(() => {
    if (!isInitial) {
      return;
    }

    if (enteredEmail === '') {
      setIsInitial(false);
    }

    const validation = setTimeout(() => {
      if (enteredEmail.includes('@') && enteredEmail.trim().length > 5) {
        setEmailIsValid(true);
      } else {
        setEmailIsValid(false);
      }
    }, 500);

    return () => {
      clearInterval(validation);
    };
  }, [enteredEmail, isInitial, emailIsValid]);

  const clickHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (enteredEmail.includes('@') && enteredEmail.trim().length > 5) {
      if (!showToast) {
        setShowToast(true);

        setEnteredEmail('');
        setIsInitial(false);

        setTimeout(() => {
          setShowToast(false);
        }, 3500);

        emailInputRef.current!.value = '';
      } else {
        return;
      }
    }
  };

  return (
    <div className='dark:bg-dark-800 bg-dark-300 p-3 mx-6 rounded-2xl shadow-lg dark:shadow-dark-900 my-4 md:my-0 '>
      <div className='flex flex-col md:flex-row rounded-l-xl'>
        <Image
          src={CanadaPic}
          priority={true}
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

          <form className={`flex flex-col mt-6 space-y-1`}>
            <label htmlFor='email' />
            <input
              ref={emailInputRef}
              type='email'
              name='email'
              id='email'
              autoComplete='email'
              placeholder='Enter your email address'
              value={enteredEmail}
              onChange={emailInputChangeHandler}
              className={`py-2 px-4 text-center md:text-left border-2  dark:bg-dark-800  dark:border-dark-600 placeholder:text-sm w-full focus:outline-none placeholder:text-center ${
                !emailIsValid && isInitial
                  ? ' border-red-600 placeholder:text-red-400'
                  : ''
              }`}
            />
            <div
              className={`text-xs h-4 text-red-700 ${
                !emailIsValid && isInitial ? 'animate-alert' : ''
              }`}
            >
              {!emailIsValid && isInitial ? 'Invalid Email' : ''}
            </div>
            <button
              className='px-5 py-3 text-sm rounded-md bg-red-700 hover:bg-red-500 text-white disabled:cursor-not-allowed disabled:hover:bg-red-700'
              onClick={clickHandler}
              disabled={enteredEmail === '' || !emailIsValid}
            >
              Subscribe
            </button>
          </form>
          {showToast && <ToastSuccess message='Thanks for subscribing!' />}
        </div>
      </div>
    </div>
  );
};

export default EmailSubscribe;
