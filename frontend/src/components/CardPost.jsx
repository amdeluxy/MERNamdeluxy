
import { Link } from 'react-router-dom'
import blog1 from '../../src/img/blog1.png'
import blog2 from '../../src/img/blog2.png'
import blog3 from '../../src/img/blog3.png'
import blog4 from '../../src/img/blog4.png'


const CardPost = ({post}) => {
    const { title, _id, text, tech, dateCreate, writer } = post
    
  return (
    <>
        <div className="gap-2 sm:grid sm:grid-cols-2 md:flex md:flex-grow md:mb-10 md:pb-10">
            <div className="container m-auto h-96 w-80 bg-gradient-to-b from-blue-950 rounded-xl ">
            <div className="my-4 rounded-sm">
                            <img
                                className="block w-auto pt-2 m-auto "
                                src={blog1} 
                                alt="AM Deluxy - Blog"
                            />
                        </div>
                <h3 className="mx-2 text-lg">{title}</h3>
                <h3 className="mx-2 text-yellow-600">{tech}</h3>
                <p className="m-2 truncate">{text}</p>
                <div className="flex justify-between flex-grow mx-4 ">
                    <div className="flex flex-grow gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#8655FF" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3>5-7 minutes read</h3>
                        
                    </div>
                    <h3>{dateCreate}</h3>
                </div>

                    <Link to={`/blogarticle/:${_id}`}>   
                        <h3 className="px-2 text-end text-amber-500">Read More...</h3>
                            
                    </Link>
                <h3 className="mx-2 text-lg">{writer}</h3>
                
            </div>
        </div>
    
    
    </>
  )
}

export default CardPost