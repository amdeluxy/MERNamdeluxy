import logostech from '../../src/img/logostech.png'
const HomeOne = () => {
  return (
    <>
        <div className="text-3xl uppercase text-center px-4 py-20 font-bold">
            <h1>AM Deluxy Welcome to our Web Development and Digital Product Services</h1>
        </div>
        <div className="container m-auto md:mx-auto md:my-8 px-12 bg-gradient-to-t from-blue-950 to-[#0A1628] rounded-2xl">
            <h2 className='text-2xl text-center py-4'>Create a Strong Online Presence with Our Customized Websites</h2>
            <div className='lg:flex lg:flex-grow lg:items-center py-4 '>
                <div >
                    <h3>At AM Deluxy, we specialize in creating stunning and functional websites that help our clients achieve 
                    their digital goals. Our team of expert developers and designers work together to deliver custom web solutions 
                    that reflect your brand, engage your audience, and drive conversions.<br/><br/>
                    Our web development services include everything from basic website design to complex e-commerce platforms, and 
                    we use the latest technologies and frameworks to ensure that your website is fast, secure, and optimized for 
                    search engines. We also provide ongoing maintenance and support to keep your website up-to-date and running smoothly.<br/><br/>
                    Whether you are a startup, a small business, or a large corporation, we have the expertise and experience to create 
                    a website that meets your unique needs and goals. We take the time to understand your business and your target audience, 
                    and we work closely with you to ensure that your website reflects your brand, vision, and values.</h3>

                </div>
                <div className='container mx-auto px-4 m-8'>
                    <img
                        className="block w-auto m-auto  "
                        src={logostech} 
                        alt="AM Deluxy - Logo"
                    />
                </div>
            </div>
            
        </div>
    </>
  )
}

export default HomeOne