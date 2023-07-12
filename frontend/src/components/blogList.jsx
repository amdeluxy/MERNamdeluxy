import usePost from "../hooks/usePost.jsx"
import CardPost from "./CardPost.jsx"


const BlogList = () => {
    
    const { post } = usePost()

    if (!Array.isArray(post)) {
        return null;
    }

    return (
    <>
            <div className="gap-2 sm:grid sm:grid-cols-2 md:flex md:flex-grow md:mb-10 md:pb-10" >
                {post.map((post) => (
                    <CardPost
                        key={post._id}
                        post={post}
                    />
                ))}
            </div>
    </>
  )
}

export default BlogList