// import { useState } from "react";
// import { FaHambuger } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import HamburgerMenu from "./HamburgerMenu";
import { GoDownload } from "react-icons/go";
import "./Header.css";

const navLinks = [
  { label: "Kontakt", icon: <IoMail />, href: "#contact" },
  {
    label: "Ladda ned CV",
    icon: <GoDownload />,
    href: "/downloads/CV.pdf",
    download: true,
  },
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
  const socialLinks = navLinks.filter((entry) => entry.isSocial);
  const otherLinks = navLinks.filter((entry) => !entry.isSocial);

  return (
    <header className="header-container">
      <a
        className="header-name"
        data-initials={firstName[0] + lastName[0]}
        href="#hero"
      >
        {firstName + " " + lastName}
      </a>
      <nav className="header-navbar">
        {otherLinks.map((item) => (
          <a
            key={item.label}
            className={"header-navbar-link"}
            href={item.href}
            download={item.download}
          >
            {item.label}
          </a>
        ))}
        <nav className="socialMedia-container">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              className={"socialMediaLink"}
              href={item.href}
              download={item.download}
            >
              {item.icon}
            </a>
          ))}
        </nav>
      </nav>
      <HamburgerMenu navLinks={navLinks} />
    </header>
  );
}

export default Header;
