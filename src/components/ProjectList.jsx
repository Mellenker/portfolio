import ProjectCard from "./Card";

function ProjectList({ projects }) {
    return (
        <section id='projects' className='projects-section'>
            <h2>Projects</h2>
            <div className='projects-list'>
                {projects.map((project, index) => (
                   <div key={index} className='project-item'>
                        <h3>{project.title}</h3>
                        <h4>{project.description}</h4>
                        <a href={project.link} target='_blank' rel="noopener">Project link</a>
                   </div> 
                ))}
            </div> 
        </section>
    )
}

export default ProjectList;