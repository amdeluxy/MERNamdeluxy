
import Article from "../components/article"
import BlogHero from "../components/blogHero"


const BlogArticle = () => {

  return (
    <>
        <BlogHero />

        <h1 className="px-4 py-10 text-3xl font-bold text-center uppercase"></h1>
        <Article />

    </>
  )
}

export default BlogArticle