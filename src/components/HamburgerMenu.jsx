import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import "./HamburgerMenu.css";

function HamburgerMenu() {
  return (
    <>
      <nav className="ham-menu">
        <IoMenu className="ham-icon" />
        {/* <IoClose className="close-icon" /> */}
      </nav>
      <div className="off-screen-menu">
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
