import PreviewProject from "../components/PreviewProject.jsx";
import useProjects from "../hooks/useProjects.jsx"

const Projects = () => {

  const { projects } = useProjects()

  return (
    <>
      <h1 className="text-4xl font-black text-black uppercase " >Projects</h1>
      <div className="mt-10 text-black bg-white rounded-lg shadow ">
        {projects.length ? 
        projects.map(project => (
          <PreviewProject 
              key={project._id}
              project={project}
          />
        ))
        : <p className="px-5 text-center text-black uppercase">You Don't have Projects</p>}
      </div>
    </>
  )
}

export default Projects