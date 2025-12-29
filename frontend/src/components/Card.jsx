import "./Card.css";
import "./Button.css";
import TechBadges from "./TechBadges";
import { FaGithub, FaDownload } from "react-icons/fa";

function Card({
  title,
  imgLink,
  description,
  githubLink,
  downloadLink,
  technologies,
}) {
  return (
    <div className="card-container">
      <img src={imgLink} alt="Card Image" className="card-img" />
      <div className="card-info">
        <h3 className="card-info-title">{title}</h3>
        <p className="card-info-description">{description}</p>
        <div className="card-info-bottom-container">
          <TechBadges technologies={technologies} />
          <div className="card-link-container">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="button-1 button-1--github"
              >
                <FaGithub />
                {/* View on GitHub */}
              </a>
            )}
            {downloadLink && (
              <a
                href={downloadLink}
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
