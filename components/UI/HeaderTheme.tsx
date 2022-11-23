import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const HeaderTheme = () => {
  const [themeIsDark, setThemeIsDark] = useState(false);

  const setThemeDark = () => {
    document.documentElement.classList.add('dark');
    setThemeIsDark(true);
    localStorage.setItem('isDark', 'true');
  };

  const setThemeLight = () => {
    document.documentElement.classList.remove('dark');
    setThemeIsDark(false);
    localStorage.removeItem('isDark');
  };

  useEffect(() => {
    const isDark = localStorage.getItem('isDark');
    if (isDark) {
      setThemeDark();
    }
  }, []);

  const toggleThemeHandler = () => {
    if (themeIsDark) {
      setThemeLight();
    } else {
      setThemeDark();
    }
  };

  return (
    <div
      className='bg-slate-300 dark:bg-slate-500 rounded-full p-2  hover:cursor-pointer hover:ring-2 ring-dark-900 dark:ring-dark-100 dark:ring-offset-dark-900 ring-offset-2'
      onClick={toggleThemeHandler}
    >
      <MoonIcon className='h-7 w-7 hidden dark:block' />

      <SunIcon className='h-7 w-7 dark:hidden' />
    </div>
  );
};

export default HeaderTheme;
