import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../assets/logo-xl.png';
import scrollTo from '../utils/scrollTo';

const Header = () => {
  const [animate, setAnimate] = useState(false);

  const onScroll = () => {
    const y = window.scrollY;

    if (y > 50) {
      setAnimate(true);
    } else setAnimate(false);
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', onScroll);
  }

  return (
    <div
      className={`w-full fixed top-0 z-50 transition-all duration-500 ease-in-out  ${
        animate && 'shadow-md '
      }`}
    >
      <header className="max-w-[1440px] m-auto flex justify-between xs:p-6 items-center">
        <div className="flex items-center gap-3">
          <Image src={Logo} alt="Quadro Logo" height={70} width={219.59} />
          {/* <h1 className="uppercase font-bold text-2xl">Quadro</h1> */}
        </div>

        <nav className="flex items-baseline gap-10">
          <div className="px-6 py-2 text-sm uppercase border border-black rounded">
            <button type="button" onClick={() => scrollTo('rate')}>
              Try now
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
