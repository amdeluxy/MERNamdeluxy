import BlogHero from "../components/blogHero"
import BlogList from "../components/blogList"
import NewsLetter from "../components/newsLetter"


const Blog = () => {
  return (
    <>
        <BlogHero />
        <h1 className="px-4 py-10 text-3xl font-bold text-center uppercase">Our Blogs</h1>
        <BlogList />
        <NewsLetter />
        
    </>
  )
}

export default Blog