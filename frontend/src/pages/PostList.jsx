import CardPost from "../components/CardPost.jsx"
import PreviewPost from "../components/PreviewPost.jsx"
import usePost from "../hooks/usePost.jsx"


const PostList = () => {

  const { post } = usePost()

  return (
    <>
     <h1 className="text-black">PostList</h1>

     <div className="gap-2 sm:grid sm:grid-cols-2 md:flex md:flex-grow md:mb-10 md:pb-10">
      <h1>{post.length ? 
      post.map(post => (
        <CardPost
          key={post._id}
          post={post}
        />
      )) 
      : <p>No Hay Post</p>}</h1>
     </div>

    </>
  )
}

export default PostList