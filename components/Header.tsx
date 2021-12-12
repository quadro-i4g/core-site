import React from 'react';

const Header = () => (
  <div className="fixed top-0 z-50 w-full">
    <header className="max-w-[1440px] m-auto flex justify-between p-6 items-center">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold uppercase">Quadro</h1>
      </div>

      <nav className="flex items-baseline gap-10">
        <div className="px-6 py-2 text-sm uppercase border border-black rounded">
          <a href="#rate">Try now</a>
        </div>
      </nav>
    </header>
  </div>
);

export default Header;
