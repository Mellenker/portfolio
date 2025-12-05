// import { useState } from "react";
// import { FaHambuger } from "react-icons/fa";
import "./Header.css";

function Header({ name }) {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return (
    <div className="App">
      <header className="header-container">
        <h1 className="header-name">{name}</h1>

        {/* <button classname="hamburger" onclick={toggleMenu}></button> */}

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
