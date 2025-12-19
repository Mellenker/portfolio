import "./TechBadges.css";

function TechBadges({ technologies }) {
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
    <div className="tech-container">
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
  );
}

export default TechBadges;
