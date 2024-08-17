// import { useFetchProjects } from "./fetchPojects"
import useFetchProjects from "./fetchPojects"

const Projects = () => {
  const { loading, project } = useFetchProjects()
//   console.log(project);

  if (loading) {
    return (
      <section className="project">
        <h2>Loading...</h2>
      </section>
    )
  }
  return (
    <section className="projects">
      <div className="title">
        <h2>React project</h2>
        <p>All project are opening in new window</p>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {project.map(item=> {
            // console.log(item);
            
          const { id, url, img, title, description } = item;
          return (
            <a
              href={url}
              key={id}
              target="_blank"
              rel="noreferrer"
              className="project"
            >
              <img src={img} alt={title} className="img" />
              <h5>{title}</h5>
              <span className="descript">{description}</span>
            </a>
          );
        })}
      </div>
    </section>
  )
}

export default Projects