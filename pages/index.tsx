import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Connect from '@mono.co/connect.js';

const Home: NextPage = () => {
  const monoConnect = React.useMemo(() => {
    if (typeof window !== 'undefined') {
      const monoInstance = new Connect({
        key: process.env.NEXT_PUBLIC_MONO_PUB,
        onSuccess: (data: any) => {
          console.log('successData', data);
        },
        onLoad: () => console.log('widget loaded successfully'),
        onClose: () => console.log('widget has been closed'),
        onEvent: (eventName: any, data: any) => {
          console.log('eventName', eventName);
          console.log('eventData', data);
        },
      });

      monoInstance.setup();

      return monoInstance;
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-orange-600">Welcome to Quadro credit</h1>

        <div className="flex items-center justify-center flex-wrap max-w-3xl">
          <button
            onClick={() => monoConnect.open()}
            className="text-left p-6 border border-blue-400 rounded-xl max-w-xs m-8"
          >
            <h2>Connect</h2>
            <p>Use Connect.js framework to connect to Mono</p>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
