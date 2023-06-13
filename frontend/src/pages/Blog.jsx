import BlogHero from "../components/blogHero"
import BlogList from "../components/blogList"
import NewsLetter from "../components/newsLetter"


const Blog = () => {
  return (
    <>
        <BlogHero />
        <h1 className="text-3xl uppercase text-center px-4 py-10 font-bold">Our Blogs</h1>
        <BlogList />
        <BlogList />
        <NewsLetter />
        
    </>
  )
}

export default Blog