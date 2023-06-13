import appapple from '../../src/img/appsapple.png'
import appandroid from '../../src/img/appsandroid.png'


const HomeTwo = () => {
  return (
    <>
        <h1 className="text-3xl uppercase text-center px-4 py-20 font-bold">Build Custom Mobile Apps for Your Business or Brand</h1>
        <div className="bg-[url('../../src/img/bannersegdos.png')] container mx-6 rounded-lg md:mx-auto md:my-8 px-12 h-5/6 bg-cover bg-center ">
            <div className='lg:flex lg:flex-grow lg:items-center lg:gap-8'>
                <div className='flex flex-row gap-2 py-8 md:py-6 lg:flex-col '>
                    <img
                        className="block w-auto m-auto max-h-36 rounded-lg md:max-h-64 lg:max-h-80"
                        src={appapple} 
                        alt="AM Deluxy - Development apps Apple photo"
                    />
                    <img
                        className="block w-auto m-auto max-h-36 rounded-lg md:max-h-64"
                        src={appandroid} 
                        alt="AM Deluxy - Development apps Android photo"
                    />
                </div>
                <h3 className='pb-8 lg:px-20'>
                    In today's mobile-driven world, having a custom mobile app can help you reach your customers where they are, 
                    on the go. At AM Deluxy, we specialize in developing high-quality, user-friendly mobile apps for both Android 
                    and iOS platforms.<br/><br/>
                    Our team of expert developers will work with you to understand your business needs and create a custom app that 
                    meets your requirements. We use the latest technologies and industry best practices to deliver apps that are fast, 
                    secure, and scalable.<br/><br/>
                    We provide end-to-end app development services, from conceptualization and design to development, testing, and 
                    deployment. We will also guide you through the process of submitting your app to the app stores, and we provide 
                    ongoing maintenance and support to ensure your app stays up-to-date and relevant.
                </h3> 
            </div>
            
            
        </div>
        
    
    </>
  )
}

export default HomeTwo