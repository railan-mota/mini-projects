import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import Header from '../components/UI/Header';
import Footer from '../components/UI/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id='my-script' strategy='lazyOnload'>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <Head>
        <meta charSet='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='google' content='notranslate' key='notranslate' />
        <meta
          property='og:title'
          content='Railan | Mini-Projects | NodeJS - Tailwind |'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://i.ibb.co/MSq70g8/Screenshot-from-2022-11-23-22-05-13.png?2'
        />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:creator' content='@devRailan' />
        <link rel='icon' href='favicon.svg' />
      </Head>
      <Header />
      <div className='max-w-5xl mx-auto'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
