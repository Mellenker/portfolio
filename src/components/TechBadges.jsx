import "./TechBadges.css";
import { useRef, useLayoutEffect, useState } from "react";

function TechBadges({ tech_stack }) {
  const TECH_ICONS = {
    React: "react",
    JavaScript: "javascript",
    CSS: "css3",
    "C++": "cplusplus",
    Vite: "vitejs",
    SFML: null,
    ZeroMQ: null,
    HTML: "html5",
    Python: "python",
    Node: "nodejs",
    Java: "java",
    SQLite: "sqlite",
    Express: "express",
    Netlify: "netlify",
    PostgreSQL: "postgresql",
  };

  function ComputerTrackLength() {}

  const renderBadges = (startIndex) => {
    return tech_stack?.map((tech, index) => {
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
  const baseRepeats = Math.max(4, Math.ceil(20 / (tech_stack?.length || 1)));
  const baseBadges = Array.from({ length: baseRepeats }, (_, r) =>
    renderBadges(r * (tech_stack?.length || 0)),
  );

  const setRef = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (setRef.current) {
      // width of the rendered baseBadges block
      const w = setRef.current.getBoundingClientRect().width;
      setWidth(w);
      console.log("baseBadges width:", w);
    }
  }, [tech_stack]); // re‑run when stack changes

  return (
    <div className="tech-container">
      <div
        className="tech-track"
        style={{ "--marquee-duration": `${width / 45}s` }}
      >
        <div ref={setRef} className="tech-set" aria-hidden={false}>
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
