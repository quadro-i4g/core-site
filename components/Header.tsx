const Header = () => {
  return (
    <header className="max-w-[1440px] m-auto flex justify-between sticky top-0 bg-white p-6 items-center">
      <div className="flex items-center gap-3">
        <h1 className="uppercase font-bold text-2xl">Quadro</h1>
      </div>

      <nav className="flex gap-10 items-baseline">
        <div className="border border-black px-6 py-2 uppercase text-sm rounded">
          <a href="#rate">Try for free</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
