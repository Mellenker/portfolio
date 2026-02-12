import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function GlowingLink({ url, icon: Icon, linkText }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="button-1"
    >
      {/* Icon is renamed to ensure correct rendering */}
      {Icon && <Icon />}
      {linkText && <p>{linkText}</p>}
    </a>
  );
}

export default GlowingLink;
