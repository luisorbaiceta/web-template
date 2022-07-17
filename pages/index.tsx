import type { NextPage } from 'next';
import Head from 'next/head';
import { useRef } from 'react';

const Home: NextPage = () => {
  const section = useRef<HTMLDivElement>(null);
  return (
    <div>
      <Head>
        <title>Luis Orbaiceta</title>

        <meta name='description' content='This is my personal portfolio site' />
      </Head>

      <div ref={section} className='h-screen grid place-content-center'>
        <h1 className='text-6xl'>Architect</h1>
        <a data-scroll-to href='#dev'>
          Developer Anchor
        </a>
      </div>
      <div className='h-screen grid place-content-center'>
        <span id='dev' />
        <h1 data-scroll data-scroll-speed={1} className='text-6xl'>
          Developer
        </h1>
      </div>
    </div>
  );
};

export default Home;
