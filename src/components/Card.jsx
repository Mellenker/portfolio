import "./Card.css";
import "./Button.css";
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
      <div className="card-info">
        <h3 className="card-info-title">{title}</h3>
        <p className="card-info-description">{description}</p>
        <div className="card-info-bottom-container">
          <div className="card-tech-container">
            {technologies &&
              technologies.map((tech, index) => {
                const iconName = TECH_ICONS[tech];

                return (
                  <span key={index} className="tech-badge" data-tech={tech}>
                    {iconName ? (
                      <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${iconName}/${iconName}-original.svg`}
                        className="tech-img"
                        alt={tech}
                      />
                    ) : (
                      <span className="tech-alt">{tech}</span>
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
