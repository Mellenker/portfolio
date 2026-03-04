// import { useState } from "react";
// import { FaHambuger } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import HamburgerMenu from "./HamburgerMenu";

import "./Header.css";

function Header({ firstName, lastName }) {
  return (
    <header className="header-container">
      <a className="header-name" href="#hero">
        {firstName + " " + lastName}
      </a>
      <a className="header-name initials" href="#hero">
        {firstName[0] + lastName[0]}
      </a>
      <nav className="header-navbar">
        <a className="header-navbar-link" href="#contact">
          Kontakt
        </a>
        <a className="header-navbar-link" href={"/downloads/CV.pdf"} download>
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
      <HamburgerMenu />
    </header>
  );
}

export default Header;
