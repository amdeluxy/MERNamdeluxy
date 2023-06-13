
import servicesweb from '../../src/img/servicesweb.jpg'

const ListServices = () => {
  return (
    <>
    
        <div className="container rounded-lg m-auto px-6 bg-cover bg-center ">
            <div className="sm:grid sm:grid-cols-2">
                <div className="m-auto p-6">
                    <img
                        className="block w-auto m-auto"
                        src={servicesweb} 
                        alt="AM Deluxy - Development apps Android photo"
                    />
                </div>
                <div>
                    <h1 className="text-3xl uppercase text-center px-4 py-8 font-bold">High-Quality Web Solutions</h1>
                    <h3 className='pb-8 lg:px-20'>
                        Our custom web development services are built on a foundation of excellence and precision. With a meticulous attention to detail, 
                        we combine cutting-edge technologies and industry best practices to deliver high-quality websites and web... 
                    </h3> 
                    <div className="h-24 px-4 md:pl-24 lg:pl-40 text-right">
                        <button class="text-white font-bold my-4 uppercase rounded-lg px-4 sm:px-8 py-2 sm:py-3  bg-gradient-to-t from-[#5C28A4] via-[#A888F9] to-[#5C28A4] hover:from-[#2B114F] hover:via-[#6339CA] hover:to-[#2B114F] ">
                        Read More...
                        </button>
                    </div>
                </div>
            </div>   
        </div>
        <div className="container rounded-lg m-auto px-6 bg-cover bg-center ">
            <div className="sm:grid sm:grid-cols-2">
                <div className="m-auto p-6">
                    <img
                        className="block w-auto m-auto"
                        src={servicesweb} 
                        alt="AM Deluxy - Development apps Android photo"
                    />
                </div>
                <div>
                    <h1 className="text-3xl uppercase text-center px-4 py-8 font-bold">High-Quality Web Solutions</h1>
                    <h3 className='pb-8 lg:px-20'>
                        Our custom web development services are built on a foundation of excellence and precision. With a meticulous attention to detail, 
                        we combine cutting-edge technologies and industry best practices to deliver high-quality websites and web... 
                    </h3> 
                    <div className="h-24 px-4 md:pl-24 lg:pl-40 text-right">
                        <button class="text-white font-bold my-4 uppercase rounded-lg px-4 sm:px-8 py-2 sm:py-3  bg-gradient-to-t from-[#5C28A4] via-[#A888F9] to-[#5C28A4] hover:from-[#2B114F] hover:via-[#6339CA] hover:to-[#2B114F] ">
                        Read More...
                        </button>
                    </div>
                </div>
            </div>   
        </div>
    
    </>
  )
}

export default ListServices