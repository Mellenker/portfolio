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
            imgLink={project.imgLink}
            title={project.title}
            description={project.description}
            link={project.link}
            githubLink={project.githubLink}
            downloadLink={project.downloadLink}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectList;
