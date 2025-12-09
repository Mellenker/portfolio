import "./Card.css";
import { FaGithub, FaDownload } from "react-icons/fa";
import { FaReact, FaNode, FaPython, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiJavascript, SiCplusplus, SiVite, SiSfml } from "react-icons/si";

function Card({
  title,
  imgLink,
  description,
  githubLink,
  downloadLink,
  technologies,
}) {
  const TECH_ICONS = {
    React: { icon: FaReact, color: "#61DAFB" },
    JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
    CSS: { icon: FaCss3Alt, color: "#1572B6" },
    "C++": { icon: SiCplusplus, color: "#00599C" },
    Vite: { icon: SiVite, color: "#646CFF" },
    SFML: { icon: SiSfml, color: "#4cae4f" },
    HTML: { icon: FaHtml5, color: "#e44d23" },
    Python: { icon: FaPython, color: "#e44d23" },
    Node: { icon: FaNode, color: "#e44d23" },
  };

  return (
    <div className="card-container">
      <img src={imgLink} alt="Card Image" className="card-img" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <div className="card-technologies-container">
        {technologies &&
          technologies.map((tech, index) => {
            const TechIcon = TECH_ICONS[tech]?.icon;
            const color = TECH_ICONS[tech]?.color;

            return (
              <span key={index} className="tech-badge" style={{ color }}>
                {TechIcon && <TechIcon />}
                {/* <span>{tech}</span> */}
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
