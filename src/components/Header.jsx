// import { useState } from "react";
// import { FaHambuger } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import HamburgerMenu from "./HamburgerMenu";

import "./Header.css";

const navLinks = [
  { label: "Kontakt", href: "#contact" },
  { label: "Ladda ned CV", href: "/downloads/CV.pdf", download: true },
];

const socialLinks = [
  {
    label: "LinkedIn",
    icon: <FaLinkedin />,
    isSocial: true,
    href: "https://www.linkedin.com/in/melker-stafverfeldt-458406363/",
  },
  {
    label: "GitHub",
    icon: <FaGithub />,
    isSocial: true,
    href: "https://github.com/Mellenker",
  },
];

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
        {navLinks.map((item) => (
          <a
            key={item.label}
            className="header-navbar-link"
            href={item.href}
            download={item.download}
          >
            {item.label}
          </a>
        ))}
        <div className="socialMedia-container">
          {socialLinks.map((item, i) => (
            <a key={i} className="socialMediaLink" href={item.href}>
              {item.icon}
            </a>
          ))}
        </div>
      </nav>
      <HamburgerMenu navLinks={navLinks} socialLinks={socialLinks} />
    </header>
  );
}

export default Header;
