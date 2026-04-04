import { FaGithub } from "react-icons/fa";

function Projects(){

  const projects = [
    {
      title: "Biometric Attendance System",
      description:
        "React + Node.js + MongoDB attendance system integrated with fingerprint sensors.",
      github:"https://github.com/Mohamed-Shahid8668/my-pro"
    },

    {
      title: "Selenium Automation Testing",
      description:
        "Automated testing using Selenium WebDriver and Python.",
      github:"https://github.com/Mohamed-Shahid8668/Automation-Testing"
    }
  ];


  return(
    <section id="projects" className="projects">

      <h2>Projects</h2>

      <div className="project-grid">

        {projects.map((project,index)=>(
          <div className="project-card" key={index}>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <FaGithub /> View on GitHub
            </a>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Projects;