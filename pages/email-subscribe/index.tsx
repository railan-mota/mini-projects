import HeadInfo from '../../components/HeadInfo';
import EmailSubscribe from '../../components/UI/EmailSubscribe';

const EmailSubscribePage = () => {
  const title = 'Mini-Project - Email Subscribe';
  const description = 'Email Subscriber UI';

  return (
    <>
      <HeadInfo title={title} description={description} />
      <div className='flex justify-center items-center min-h-hero'>
        <EmailSubscribe />
      </div>
    </>
  );
};

export default EmailSubscribePage;
