import "./ProjectList.css";
import Card from "./Card";

function ProjectList({ projects }) {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <Card
            key={index}
            image_url={project.image_url}
            title={project.title}
            description={project.description}
            // link={project.link}
            github_url={project.github_url}
            download_url={project.download_url}
            tech_stack={project.tech_stack}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectList;
