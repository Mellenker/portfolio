import "./Card.css";
import "./Button.css";
import TechBadges from "./TechBadges";
import { FaGithub, FaDownload } from "react-icons/fa";

function Card({
  title,
  image_url,
  description,
  github_url,
  download_url,
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
            {github_url && (
              <a
                href={github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="button-1 button-1--github"
              >
                <FaGithub />
                {/* View on GitHub */}
              </a>
            )}
            {download_url && (
              <a
                href={download_url}
                download
                className="button-1 button-1--download"
              >
                <FaDownload />
                {/* Download ZIP */}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
