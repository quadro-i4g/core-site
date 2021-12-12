import React from 'react';
import Image from 'next/image';

import useMono from '../../hooks/useMono';
import Slider from './Slider';
import MonoIcon from '../../assets/mono.png';
import colorize, { Grade } from '../../utils/colorize';

const Rating = () => {
  const { mono, loading, score } = useMono();

  return (
    <div className="pt-20 space-y-10 md:space-y-32">
      <h1 id="rate" className="text-6xl font-medium text-center">
        Your Credit Score
      </h1>

      <div
        className={`max-w-[1440px] mx-auto flex flex-col-reverse items-center gap-20 md:gap-0 md:items-stretch md:flex-row  ${
          !loading && score.score === 0 && 'grayscale opacity-40'
        }`}
      >
        <div className="flex-col justify-center hidden space-y-4 font-bold uppercase md:w-1/3 md:flex">
          <p className="">Based on</p>
          <ul className="space-y-4 list-disc">
            <li>Payment History</li>
            <li>Investment Portfolio</li>
            <li>Credit Record</li>
          </ul>
        </div>
        <div className="flex justify-center transition-all duration-500 ease-in-out md:w-1/3">
          <Slider score={score.score} />
        </div>
        <div className="space-y-2 text-center md:w-1/3">
          <span
            style={{ color: colorize(score.grade as Grade) }}
            className="font-medium text-8xl"
          >
            {score.grade}
          </span>
          <p>Your Grade</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6">
        <button
          type="button"
          disabled={Boolean(loading || score?.score)}
          className={`min-w-[240px] h-12 flex justify-center items-center bg-[#182CD1] bg-opacity-90 text-white rounded-lg ${
            !loading && !score?.score && 'animate-pulse'
          }`}
          onClick={() => mono.open()}
        >
          <div className="flex items-center h-full px-3 border-r border-opacity-30">
            <Image
              width={25}
              height={25}
              src={MonoIcon}
              alt="Mono"
              className={`${loading && 'animate-spin'}`}
            />
          </div>
          <div className="px-4">
            {loading && 'Calculating your score'}
            {!loading && score?.score
              ? 'Connected with Mono'
              : 'Link account with Mono'}
          </div>
        </button>
        <p className="text-gray-400">
          We use{' '}
          <a href="https://mono.co" className="text-black underline">
            Mono
          </a>{' '}
          to ensure the safety of your account details. We never get anywhere
          close to your account :)
        </p>
      </div>
    </div>
  );
};

export default Rating;
