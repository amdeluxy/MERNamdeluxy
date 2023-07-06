import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"



const Sidebar = () => {

    const { auth } = useAuth()

  return (
    <aside className="px-5 py-10 bg-blue-950 md:w-60 lg:w-76">
        <p className="text-xl font-bold" >Welcome <br/> {auth.name}</p>

        <Link
            to="create-project"
            className="block w-full p-3 mt-5 font-bold text-center text-white uppercase bg-blue-500 rounded-lg"
        >New Project</Link>

        

    </aside>
  )
}

export default Sidebar