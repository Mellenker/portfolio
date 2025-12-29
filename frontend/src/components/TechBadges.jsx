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

  const renderBadges = (startIndex) => {
    return technologies?.map((tech, index) => {
      const iconName = TECH_ICONS[tech];

      return (
        <span key={startIndex + index} className="tech-badge" data-tech={tech}>
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
    });
  };

  // Build a long enough content chunk to exceed viewport width
  // Then render that chunk twice for seamless -50% marquee loop
  const baseRepeats = Math.max(4, Math.ceil(20 / (technologies?.length || 1)));
  const baseBadges = Array.from({ length: baseRepeats }, (_, r) =>
    renderBadges(r * (technologies?.length || 0))
  );

  return (
    <div className="tech-container">
      <div className="tech-track">
        <div className="tech-set" aria-hidden={false}>
          {baseBadges}
        </div>
        <div className="tech-set" aria-hidden={true}>
          {baseBadges}
        </div>
      </div>
    </div>
  );
}

export default TechBadges;
