import React, { useState } from 'react';
import Connect from '@mono.co/connect.js';
import axios from 'axios';

const useMono = () => {
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState({ score: 0, grade: 'N/A' });
  const axiosInstance = axios.create({
    baseURL: 'https://quadro-api.herokuapp.com/api/v1',
  });

  const mono = React.useMemo(() => {
    if (typeof window !== 'undefined') {
      const monoInstance = new Connect({
        key: process.env.NEXT_PUBLIC_MONO_PUB,
        onSuccess: (data: any) => {
          setLoading(true);
          axiosInstance({
            method: 'POST',
            url: '/credit/score',
            data: {
              code: data.code,
            },
          })
            .then(e => {
              if (process.env.NODE_ENV !== 'production') console.log(e.data);
              setScore(e.data.scores);
            })
            .catch(e => {
              if (process.env.NODE_ENV !== 'production') console.error(e);
            })
            .finally(() => setLoading(false));
        },
      });

      monoInstance.setup();

      return monoInstance;
    }
    return null;
  }, [axiosInstance]);

  return { mono, loading, score };
};

export default useMono;
