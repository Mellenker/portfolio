import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function GlowingLink({ url, icon: Icon, linkText, newTab = true }) {
  return (
    <a
      href={url}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : undefined}
      className="button-1"
    >
      {/* Icon is renamed to ensure correct rendering */}
      {Icon && <Icon />}
      {linkText && <p>{linkText}</p>}
    </a>
  );
}

export default GlowingLink;
