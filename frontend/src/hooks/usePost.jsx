import { useContext } from "react";
import PostContext from "../context/PostProvider.jsx";

const usePost = () => {
    return useContext(PostContext)
}

export default usePost