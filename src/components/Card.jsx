import "./Card.css";
import GlowingLink from "./GlowingLink";
import TechBadges from "./TechBadges";
import { useState } from "react";
import { FaGithub, FaDownload } from "react-icons/fa";
import { GoDownload } from "react-icons/go";

function Card({
  title,
  image_url,
  description,
  github_url,
  download_url,
  other_url,
  other_url_text,
  tech_stack,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="card-container">
      <img src={image_url} alt="Card Image" className="card-img" />
      <div className="card-info">
        <h3 className="card-info-title">{title}</h3>
        <p
          className={
            isExpanded
              ? "card-info-description expanded"
              : "card-info-description"
          }
          onClick={() => {
            const isTouch = window.matchMedia("(pointer: coarse)").matches;
            if (isTouch) setIsExpanded(!isExpanded);
          }}
        >
          {description}
        </p>
        <div className="card-info-bottom-container">
          <TechBadges tech_stack={tech_stack} />
          <div className="card-link-container">
            {github_url && <GlowingLink url={github_url} icon={FaGithub} />}
            {download_url && (
              <GlowingLink url={download_url} icon={GoDownload} />
            )}
            {other_url && (
              <GlowingLink
                url={other_url}
                linkText={other_url_text}
                // icon={FaDownload}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
