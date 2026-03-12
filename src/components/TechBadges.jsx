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
  const badgeRepeats = Math.max(4, Math.ceil(20 / (tech_stack?.length || 1)));
  console.log("badgeRepeats:", badgeRepeats);
  const badgesChunk = Array.from({ length: badgeRepeats }, (_, r) =>
    renderBadges(r * (tech_stack?.length || 0)),
  );

  const chunkRef = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (!chunkRef.current) return;

    // Makes sure images are loaded before width calculation
    const observer = new ResizeObserver(() => {
      const w = chunkRef.current.getBoundingClientRect().width;
      setWidth(w);
    });

    observer.observe(chunkRef.current);
    return () => observer.disconnect();
  }, [tech_stack]);

  return (
    <div className="tech-container">
      <div
        className="tech-track"
        style={{ "--marquee-duration": `${width / 45}s` }}
      >
        <div ref={chunkRef} className="tech-set" aria-hidden={false}>
          {badgesChunk}
        </div>
        <div className="tech-set" aria-hidden={true}>
          {badgesChunk}
        </div>
      </div>
    </div>
  );
}

export default TechBadges;
