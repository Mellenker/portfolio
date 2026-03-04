import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import "./HamburgerMenu.css";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="ham-menu" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoClose /> : <IoMenu />}
      </div>
      <div className={isOpen ? "off-screen-menu active" : "off-screen-menu"}>
        <ul>
          <li>Kontakt</li>
          <li>Ladda ned CV</li>
          <li>LinkedIn</li>
          <li>GitHub</li>
        </ul>
      </div>
    </>
  );
}

export default HamburgerMenu;
