import GitHubIcon from '../social/GitHubIcon';
import LinkedinIcon from '../social/LinkedinIcon';
import TwitterIcon from '../social/TwitterIcon';

const Footer = () => {
  return (
    <footer className='h-20 flex px-5 md:px-20 items-center justify-between shadow-lg dark:bg-dark-800'>
      <a
        href='#'
        className='hover:text-dark-900 hover:dark:text-dark-100 hover:underline underline-offset-2'
      >
        <span>&copy; 2022 Railan Mota</span>
      </a>
      <div className='space-x-4 flex'>
        <TwitterIcon />
        <LinkedinIcon />
        <GitHubIcon />
      </div>
    </footer>
  );
};

export default Footer;
