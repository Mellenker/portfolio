

function ProjectList() {
    const projects = [
    {
      title: "Snake in C++",
      description: "The classic game built using C++ and SFML",
      link:"https://github.com/Mellenker/snake"
    },
    {
      title: "Project Two",
      description: "Something something...",
      link:"#"
    },
    {
      title: "Project Three",
      description: "Something something...",
      link:"#"
    },
    {
      title: "Project Four",
      description: "Something something...",
      link:"#"
    }
  ]
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