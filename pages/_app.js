import Head from 'next/head';

import '../styles/globals.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Loader from '../components/Loader/Loader';

const MyApp = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        <title>Metaversus</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://stijndv.com' />
        <link
          rel='stylesheet'
          href='https://stijndv.com/fonts/Eudoxus-Sans.css'
        />
      </Head>
      <div className='transition-image final'>
        <motion.img
          transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
          src='cover.png'
          layoutId='main-image-1'
        />
      </div>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
