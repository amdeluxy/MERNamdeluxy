import { useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import useProjects from "../hooks/useProjects.jsx";
import PreviewPost from "../components/PreviewPost.jsx";



const Project = () => {
    const params = useParams();

    const { getProject, project, loading } = useProjects();
    
    useEffect( () => {
        getProject(params.id)
    }, [])

    const { name } = project
    
    if (loading) return (
      <>
      <div
        class="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
        role="status">
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...</span>
      </div>
      </>
    )

  return (
    
      <div className="flex justify-between">
        <h1 className="text-4xl font-black text-black ">{name}</h1>

        <div className="flex items-center gap-2 text-gray-400 hover:text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>

          <Link
            to={`/projects/edit/${params.id}`}
            className="font-bold uppercase "
          >Edit</Link>

        </div>

        
      </div>
    )
}

export default Project