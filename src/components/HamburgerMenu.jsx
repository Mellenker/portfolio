import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import "./HamburgerMenu.css";
import "./Header.css";

function HamburgerMenu({ navLinks }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="ham-menu" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoClose /> : <IoMenu />}
      </div>
      <div className={isOpen ? "ham-navbar active" : "ham-navbar"}>
        {navLinks.map((item) => (
          <>
            <a className="ham-navbar-link" key={item.label} href={item.href}>
              {item.icon}
              <span className="link-label">{item.label}</span>
            </a>
          </>
        ))}
      </div>
    </>
  );
}

export default HamburgerMenu;
