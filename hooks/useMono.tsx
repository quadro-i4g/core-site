import React from 'react';
import Connect from '@mono.co/connect.js';

const useMono = () => {
  const mono = React.useMemo(() => {
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

  return mono;
};

export default useMono;
