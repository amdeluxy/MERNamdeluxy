import { useContext } from "react";
import ProjectsContext from "../context/ProjectsProvider.jsx";

const useProjects = () => {
    return useContext(ProjectsContext)
}

export default useProjects