const Header = () => {
  return (
    <header className="max-w-screen-2xl m-auto flex justify-between py-5 px-2 font-bold">
      <h1>Quadro</h1>

      <nav className="space-x-6">
        <a>Business</a>
        <a>Individuals</a>
        <a>About</a>
        <a>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
