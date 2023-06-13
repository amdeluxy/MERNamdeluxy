import BlogForm from "../components/blogForm"
import Contact from "../components/contact"
import Hero from "../components/hero"
import HomeFour from "../components/homeFour"
import HomeOne from "../components/homeOne"
import HomeThree from "../components/homeThree"
import HomeTwo from "../components/homeTwo"
import NewsLetter from "../components/newsLetter"
import Testimonials from "../components/testimonials"


const Home = () => {
  return (
    <>
    <Hero />
    <HomeOne/>
    <HomeTwo />
    <HomeThree />
    <HomeFour />
    <Testimonials />
    <BlogForm />
    <NewsLetter />
    <Contact />
    </>
  )
}

export default Home