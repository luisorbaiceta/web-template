import type { NextPage } from 'next';
import Head from 'next/head';
import { useRef } from 'react';

const Home: NextPage = () => {
  const section = useRef<HTMLDivElement>(null);
  return (
    <div>
      <Head>
        <title>Web template</title>
        <meta name='description' content='This is my personal web template' />
      </Head>

      <div ref={section} className='h-screen grid place-content-center'>
        <h1 className='text-6xl'>Welcome</h1>
      </div>
    </div>
  );
};

export default Home;
