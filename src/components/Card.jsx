import "./Card.css";
import { FaGithub, FaDownload } from "react-icons/fa";

function Card({
  title,
  imgLink,
  description,
  githubLink,
  downloadLink,
  technologies,
}) {
  const TECH_ICONS = {
    React: "react",
    JavaScript: "javascript",
    CSS: "css3",
    "C++": "cplusplus",
    Vite: "vitejs",
    SFML: null, // Not available in devicon
    HTML: "html5",
    Python: "python",
    Node: "nodejs",
    Java: "java",
  };

  return (
    <div className="card-container">
      <img src={imgLink} alt="Card Image" className="card-img" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <div className="card-technologies-container">
        {technologies &&
          technologies.map((tech, index) => {
            const iconName = TECH_ICONS[tech];

            return (
              <span key={index} className="tech-badge" data-tech={tech}>
                {iconName ? (
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${iconName}/${iconName}-original.svg`}
                    alt={tech}
                    style={{ width: "2em", height: "2em" }}
                  />
                ) : (
                  <span style={{ fontSize: "0.75em", textAlign: "center" }}>
                    {tech}
                  </span>
                )}
              </span>
            );
          })}
      </div>
      <div className="card-link-container">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link-btn card-link-btn--github"
          >
            <FaGithub />
            {/* View on GitHub */}
          </a>
        )}
        {downloadLink && (
          <a
            href={downloadLink}
            download
            className="card-link-btn card-link-btn--download"
          >
            <FaDownload />
            {/* Download ZIP */}
          </a>
        )}
      </div>
    </div>
  );
}

export default Card;
