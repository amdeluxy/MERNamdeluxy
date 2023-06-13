import Article from "../components/article"
import BlogHero from "../components/blogHero"


const BlogArticle = () => {
  return (
    <>
    
        <BlogHero />
        <h1 className="text-3xl uppercase text-center px-4 py-10 font-bold">Our Blog</h1>
        <Article />

    </>
  )
}

export default BlogArticle