

import homeFour from '../../src/img/homefour.png'
const HomeFour = () => {
  return (
    <>
        <div className="container m-auto px-8">
            <h1 className="text-3xl uppercase text-center px-4 py-20 font-bold">Empower Your Digital Projects with our All-in-One Web Application</h1>
            
            <div className='container m-auto lg:flex lg:flex-grow lg:items-center py-4 lg:gap-8'>
                <div className='md:py-6 '>
                    <img
                        className="block w-auto m-auto rounded-lg"
                        src={homeFour} 
                        alt="AM Deluxy - Development apps Android photo"
                    />
                </div>
                <h3 className='pt-6 lg:px-20 lg:max-h-72'>
                Say goodbye to project management headaches – With our web application, you can easily track the progress of your website or app development, communicate with your development team, and order new projects with just a few clicks. Enjoy full transparency, streamlined communication, and hassle-free project management, all in one place!
                </h3> 
            </div>
        </div>
        
    </>
  )
}

export default HomeFour