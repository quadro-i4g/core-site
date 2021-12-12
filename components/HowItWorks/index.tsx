/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Punch from '../../assets/punch.png';
import styles from './styles/list.module.css';

const HowItWorks = () => (
  <div className="max-w-[1440px] w-full m-auto flex flex-col gap-20">
    <div className="flex w-full">
      <div className="flex justify-center w-1/2">
        <img
          draggable="false"
          src={Punch.src}
          className="aspect-1 w-[75%]"
          alt="Illustration of bars"
        />
      </div>
      <div className="flex flex-col gap-10 w-1/2 justify-center">
        <h1 id="how" className="font-medium text-6xl">
          How It Works
        </h1>
        <ol className={`text-2xl leading-10 space-y-5 ${styles.list}`}>
          <li>
            <b>Let us get to know you</b>
            <p className="text-xl">
              Using Mono, securely make your financial data available to us for
              assessing your credit rating.{' '}
            </p>
          </li>
          <li>
            <b>We crunch the numbers!</b>
            <p className="text-xl">
              Based on your income history, investment portfolio and credit
              record among others we calculate your rating.
            </p>
          </li>
          <li>
            <b>Get your Quadro rating </b>
            <p className="text-xl">
              We return an assesment of credit worthiness to inform lending and
              borrowing.{' '}
            </p>
          </li>
        </ol>
      </div>
    </div>
    <div className="flex justify-center">
      <a
        href="#rate"
        className="z-10 p-3 px-8 text-white rounded-md bg-[#1c9e9e]"
      >
        Get your rating
      </a>
    </div>
  </div>
);

export default HowItWorks;
