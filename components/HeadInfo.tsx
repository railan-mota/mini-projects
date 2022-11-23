import Head from 'next/head';
import MetaInfo from '../models/metaInfo';

const HeadInfo = ({ title, description }: MetaInfo) => {
  return (
    <Head>
      <title key='title'>{title}</title>
      <meta name='description' content={description} key='description' />
    </Head>
  );
};

export default HeadInfo;
