// import { useFetchProjects } from "./fetchPojects"
import useFetchProjects from "./fetchPojects"

const Projects = () => {
  const { loading, project } = useFetchProjects()
  // console.log(loading, project);

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
        <h2>project</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {project.map(item=> {
          const {id, url, img, title} = item
          return <a 
            href={url} 
            key={id} 
            target="_blank"
            rel="noreferrer"
            className="project"
            >
              <img src={img} alt={title} className="img" />
              <h5>{title}</h5>
            </a>
        })}
      </div>
    </section>
  )
}

export default Projects