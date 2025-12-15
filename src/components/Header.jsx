// import { useState } from "react";
// import { FaHambuger } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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
          <a className="header-navbar-link" href="#about">
            About
          </a>
          <a className="header-navbar-link" href="#projects">
            Projects
          </a>
          <a className="header-navbar-link" href="#contact">
            Contact
          </a>
          <div className="socialMedia-container">
            <a
              className="socialMediaLink"
              href="https://www.linkedin.com/in/melker-stafverfeldt-458406363/"
            >
              <FaLinkedin />
            </a>
            <a className="socialMediaLink" href="https://github.com/Mellenker">
              <FaGithub />
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
