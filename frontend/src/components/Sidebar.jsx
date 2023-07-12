import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"



const Sidebar = () => {

    const { auth } = useAuth()

  return (
    <aside className="px-5 py-10 bg-blue-950 md:w-60 lg:w-76">
        <p className="text-xl font-bold" >Welcome <br/> {auth.name}</p>

        <Link
            to="create-project"
            className="block w-full p-3 mt-5 font-bold  text-white uppercase hover:bg-violet-600 transition-colors"
        >New Project</Link>
        <Link
            to="newpost"
            className="block w-full p-3 mt-5 font-bold  text-white uppercase hover:bg-violet-600 transition-colors"
        >New Blog Post</Link>
        <Link
            to="postlist"
            className="block w-full p-3 mt-5 font-bold  text-white uppercase hover:bg-violet-600 transition-colors"
        >Post List</Link>

        

    </aside>
  )
}

export default Sidebar