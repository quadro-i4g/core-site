import React, { useState } from 'react';
import Connect from '@mono.co/connect.js';
import axios from 'axios';

const useMono = () => {
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(null);

  const axiosInstance = axios.create({
    baseURL: 'https://quadro-api.herokuapp.com/api/v1',
  });

  const mono = React.useMemo(() => {
    if (typeof window !== 'undefined') {
      const monoInstance = new Connect({
        key: process.env.NEXT_PUBLIC_MONO_PUB,
        onSuccess: (data: any) => {
          console.log('successData', data);
          setLoading(true);
          axiosInstance({
            method: 'POST',
            url: '/credit/score',
            data: {
              code: data.code,
            },
          })
            .then(() => {
              axiosInstance({
                method: 'GET',
                url: `/credit/${data.code}/score`,
              }).then(e => setScore(e.data.score));
            })
            .catch(e => console.error(e))
            .finally(() => setLoading(false));
        },
      });

      monoInstance.setup();

      return monoInstance;
    }
  }, [axiosInstance]);

  return { mono, loading, score };
};

export default useMono;
