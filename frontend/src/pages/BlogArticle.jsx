
import Article from "../components/article"
import BlogHero from "../components/blogHero"
import { PostProvider } from "../context/PostProvider"


const BlogArticle = () => {

  return (
    <PostProvider>
    <>
        <BlogHero />

        <h1 className="px-4 py-10 text-3xl font-bold text-center uppercase"></h1>
        <Article />

    </>
    </PostProvider>
  )
}

export default BlogArticle