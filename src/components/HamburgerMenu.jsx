import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import "./HamburgerMenu.css";
import "./Header.css";

function HamburgerMenu({ navLinks, socialLinks }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="ham-menu" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoClose /> : <IoMenu />}
      </div>
      <div className={isOpen ? "ham-navbar active" : "ham-navbar"}>
        {navLinks.map((item) => (
          <a className="ham-navbar-link" key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
        {socialLinks.map((item) => (
          <a className="ham-navbar-link" key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}

export default HamburgerMenu;
