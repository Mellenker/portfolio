import "./Card.css";
import GlowingLink from "./GlowingLink";
import TechBadges from "./TechBadges";
import { FaGithub, FaDownload } from "react-icons/fa";

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
  return (
    <div className="card-container">
      <img src={image_url} alt="Card Image" className="card-img" />
      <div className="card-info">
        <h3 className="card-info-title">{title}</h3>
        <p className="card-info-description">{description}</p>
        <div className="card-info-bottom-container">
          <TechBadges tech_stack={tech_stack} />
          <div className="card-link-container">
            {github_url && <GlowingLink url={github_url} icon={FaGithub} />}
            {download_url && (
              <GlowingLink url={download_url} icon={FaDownload} />
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
