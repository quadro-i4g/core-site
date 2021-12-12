/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Punch from '../../assets/punch.png';
import styles from './styles/list.module.css';
import scrollTo from '../../utils/scrollTo';

const HowItWorks = () => (
  <div
    id="how"
    className="max-w-[1440px] w-full m-auto flex flex-col gap-14 xs:gap-20 pt-20 pb-10 xs:pt-0 xs:pb-10"
  >
    <div className="flex w-full">
      <div className="hidden md:flex justify-center w-1/2">
        <img
          draggable="false"
          src={Punch.src}
          className="aspect-1 w-[75%] object-contain"
          alt="Illustration of bars"
        />
      </div>
      <div className="flex flex-col gap-5 sm:gap-10 md:w-1/2 pl-10 md:pl-0 justify-center">
        <h1 className="font-medium text-2xl xs:text-6xl">How It Works</h1>
        <ol
          className={`text-xl xs:text-2xl xs:leading-10 space-y-5 ${styles.list}`}
        >
          <li>
            <b>Let us get to know you</b>
            <p className="xs:text-xl">
              Using Mono, securely make your financial data available to us for
              assessing your credit rating.{' '}
            </p>
          </li>
          <li>
            <b>We crunch the numbers!</b>
            <p className="xs:text-xl">
              Based on your income history, investment portfolio and credit
              record among others we calculate your rating.
            </p>
          </li>
          <li>
            <b>Get your Quadro rating </b>
            <p className="xs:text-xl">
              We return an assesment of credit worthiness to inform lending and
              borrowing.{' '}
            </p>
          </li>
        </ol>
      </div>
    </div>
    <div className="flex justify-center">
      <button
        type="button"
        onClick={() => scrollTo('rate')}
        className="z-10 p-3 px-8 text-white rounded-md bg-[#1c9e9e]"
      >
        Get your rating
      </button>
    </div>
  </div>
);

export default HowItWorks;
