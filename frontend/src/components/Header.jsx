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
    <header className="header-container">
      <h1 className="header-name">{name}</h1>

      {/* <button classname="hamburger" onclick={toggleMenu}></button> */}

      <nav className="header-navbar">
        <a className="header-navbar-link" href="#contact">
          Kontakt
        </a>
        <a
          className="header-navbar-link"
          href={"http://localhost:3000/downloads/CV.pdf"}
          download
        >
          Ladda ned CV
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
  );
}

export default Header;
