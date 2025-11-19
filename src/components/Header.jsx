import "./Header.css";

function Header() {
  const name = "Melker Stafverfeldt";

  return (
    <div className="App">
      <header className="header-container">
        <h1 className="header-name">{name}</h1>
        <nav className="header-navbar">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
