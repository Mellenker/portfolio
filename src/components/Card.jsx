import "./Card.css";
import { FaGithub, FaDownload } from "react-icons/fa";

function Card({ title, imgLink, description, githubLink, downloadLink }) {
  return (
    <div className="card-container">
      <img src={imgLink} alt="Card Image" className="card-img" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <div className="card-link-container">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link-btn card-link-btn--github"
          >
            <FaGithub />
            View on GitHub
          </a>
        )}
        {downloadLink && (
          <a
            href={downloadLink}
            download
            className="card-link-btn card-link-btn--download"
          >
            <FaDownload />
            Download ZIP
          </a>
        )}
      </div>
    </div>
  );
}

export default Card;
