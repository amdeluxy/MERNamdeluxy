import { useState, useEffect, createContext } from "react";
import clientAxios from "../config/clientAxios.jsx";
import { useNavigate } from "react-router-dom";

const ProjectsContext = createContext();

const ProjectsProvider = ({children}) => {

    const [projects, setProjects] = useState([]);
    const [alerta, setAlerta] = useState({});
    const [project, setProject] = useState({});
    const [loading, setLoading] = useState(false);


    const navigate = useNavigate();

    useEffect(() => {
        const getProjects = async () => {
            try {
                const token = localStorage.getItem('token')
                    if(!token) return

                    const config = {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`
                        }
                    }
                const { data } = await clientAxios('/projects', config)
                setProjects(data)
            } catch (error) {
                console.log(error);

            }
        }
        getProjects()
    }, [])

    const showAlert = alerta => {
        setAlerta(alerta)
        setTimeout(() => {
            setAlerta({})
        }, 5000);
    }

    const submitProject = async project => {

        if (project.id) {
            await editProject(project)
        }else{
            await newProject(project)
        }
    }
        const editProject = async project => {
            try {
                const token = localStorage.getItem('token')
                if(!token) return
        
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }

                const { data } = await clientAxios.put(`/projects/${project.id}`, project, config)
                
                //updated state

                const projectUpdated = projects.map(projectState => projectState._id === data.id ? data : projectState)
                setProjects([...projectUpdated]) 
               
                setAlerta({
                    msg:"Thank you for Update your project! We will be in touch soon.",
                    error: false
                })
        
                setTimeout(() => {
                    setAlerta({})
                    navigate('/projects')
                }, 3000);

            } catch (error) {
                console.log(error)
            }
        }
        const newProject = async project => {
            try {
                const token = localStorage.getItem('token')
                if(!token) return
        
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                const { data } = await clientAxios.post('/projects', project, config)
                
                setProjects([...projects, data])
        
                setAlerta({
                    msg:"Thank you for creating your project! We will be in touch soon.",
                    error: false
                })
        
                setTimeout(() => {
                    setAlerta({})
                    navigate('/projects')
                }, 3000);
        
               } catch (error) {
                    console.log(error);
               }
        }

    const getProject = async id => {
        setLoading(true)
        try {
            const token = localStorage.getItem('token')
            if(!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clientAxios(`/projects/${id}`, config)
            setProject(data);            

        } catch (error) {
            console.log(error);
        }
        setLoading(false)
    }
        
    const deleteProject = async id => {
        try {
            const token = localStorage.getItem('token')
            if(!token) return
    
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const { data } = await clientAxios.delete(`/projects/${id}`, config)

            const projectsUpdated = projects.filter(projectsState => projectsState._id !== id)
            setProjects([...projectsUpdated]);

            setAlerta({
                msg: data.msg,
                error: false
            })
            setTimeout(() => {
                setAlerta({})
                navigate('/projects')
            }, 3000);
        } catch (error) {
            console.log(error);
        }
    }

    const closeSessionProjects = () => {
        setProjects([])
        setProjects({})
        setAlerta({})
    }
    

    return (
        <ProjectsContext.Provider 
            value={{
                projects,
                showAlert,
                alerta,
                submitProject,
                getProject,
                project,
                loading,
                deleteProject,
                closeSessionProjects
            }}
        >{children}
        </ProjectsContext.Provider>
    )
}
export {
    ProjectsProvider
}
 export default ProjectsContext
