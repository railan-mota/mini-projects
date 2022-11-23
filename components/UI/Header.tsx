import HeaderTheme from './HeaderTheme';
import Logo from './Logo';
import NavLinks from './NavLinks';
import NavMobile from './NavMobile';
import { PagePath } from '../../models/pages';

const Header = () => {
  const pages: PagePath = [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/email-subscribe',
      name: 'Email Subscribe',
    },
    {
      path: '/pricing-grid',
      name: 'Pricing Grid',
    },
    {
      path: '/product',
      name: 'Product',
    },
    {
      path: '/login',
      name: 'Login',
    },
  ];

  return (
    <header className='min-h-20 flex px-5 py-2 md:px-20 items-center justify-between '>
      <Logo />
      <NavLinks pages={pages} />
      <NavMobile pages={pages} />
      <HeaderTheme />
    </header>
  );
};

export default Header;
