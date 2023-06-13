
import homethree from '../../src/img/homethree.png'

const HomeThree = () => {
  return (
    <>
    <h1 className="text-3xl uppercase text-center px-4 py-20 font-bold">Boost Your Online Presence and Drive Business Growth</h1>
    <div className="bg-[url('../../src/img/fondo2.png')] container mx-6 rounded-lg md:mx-auto md:my-8 px-12 h-5/6 bg-cover bg-center ">
        <div className='lg:flex lg:flex-grow lg:items-center py-4 lg:gap-8'>
            <div className='flex flex-row gap-4 md:py-6 lg:flex-col '>
                <img
                    className="block w-auto m-auto rounded-lg "
                    src={homethree} 
                    alt="AM Deluxy - Development apps Android photo"
                />
            </div>
            <h3 className='pt-6 lg:px-20'>
                In today's digital age, having a strong online presence is essential for businesses of all sizes. 
                At AM Deluxy, we specialize in digital marketing services that can help you achieve your business goals.<br/><br/>
                Our team of digital marketing experts will work with you to create a customized strategy that is tailored 
                to your business needs and goals. We provide a range of digital marketing services, including search engine 
                optimization (SEO), pay-per-click advertising (PPC), social media marketing, email marketing, and content marketing.<br/><br/>
                With our digital marketing services, you can increase your online visibility, generate more leads, and ultimately 
                drive more business growth. We use the latest tools and techniques to ensure that your digital marketing campaigns 
                are effective and efficient.<br/><br/>
                We also provide regular reporting and analysis, so you can track the performance of your campaigns and make data-driven 
                decisions about how to optimize them for even better results.
            </h3> 
        </div>
    </div>
    </>
  )
}

export default HomeThree