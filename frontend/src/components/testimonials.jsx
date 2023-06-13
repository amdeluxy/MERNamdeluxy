import testimonial from '../../src/img/testimonials.png'

const Testimonials = () => {
  return (
    <>
        <div className="bg-[url('../../src/img/fondo1.png')] bg-cover bg-center min-h-fit">
            <h1 className="text-3xl uppercase text-center px-4 py-20 font-bold">Hear what our Clients say About us</h1>
            <div className="my-8 py-8">
                <div className="flex flex-row">
                    <div>
                        <img
                            className="block w-auto ml-4 rounded-xl sm:mx-24 md:mx-40"
                            src={testimonial} 
                            alt="AM Deluxy - Logo"
                        />
                    </div>
                    <div className="flex flex-grow justify-end gap-4 pr-4 sm:mx-24 md:mx-40">
                        <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#8655FF" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                        </div>
                        <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#8655FF" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                        </div>
                    </div>
                    
                </div>
                
                <div className="text-white mx-auto my-8 font-bold rounded-xl px-4 sm:px-8 sm:mx-14 py-4 sm:py-3 md:mx-24 md:p-8 md:my-8 bg-gradient-to-r from-[#051327] to-[#5C28A4]">
                    <p >
                        "I am absolutely delighted with the services provided by AM Deluxy! As a client, I have had an 
                        exceptional experience working with their software development team. From our very first interaction, 
                        they have displayed a professional and dedicated approach to my projects. Their expertise and 
                        technical skills are evident in the high-quality work they have delivered.<br/><br/>

                        The project management application they developed for me has been an invaluable tool. It has allowed 
                        me to have full control over my projects, from task assignment to progress tracking and payment 
                        processing. The interface is intuitive and user-friendly, and real-time updates ensure seamless 
                        communication.<br/><br/>

                        In addition to the excellent work quality, the AM Deluxy team has excelled in professionalism and 
                        attention to detail. They have always been willing to listen to my needs and provide tailored 
                        solutions that align with my specific requirements.<br/><br/>

                        I highly recommend AM Deluxy to anyone in search of software development services. Their level of 
                        commitment, technical expertise, and excellence in customer service make them an outstanding choice. 
                        I wholeheartedly give them a 5-star rating!"<br/><br/>
                    </p>
                    <h3 className='m-4'>Laura Sánchez, Satisfied Client. {'\u{1F44D}'}</h3>
                    <h3 className="text-center text-xl text-orange-700" >Share Your Experience! Leave a Review Here and Help Us Improve. We value your feedback!</h3>
                    <div className="h-24 px-4 md:pl-24 lg:pl-40 text-center">
                        <button class="text-white font-bold my-5 uppercase rounded-lg px-4 sm:px-8 py-2 sm:py-3  bg-gradient-to-t from-[#5C28A4] via-[#A888F9] to-[#5C28A4] hover:from-[#2B114F] hover:via-[#6339CA] hover:to-[#2B114F] ">
                        Tell us about your experience
                        </button>
                    </div>
                </div>
            </div>
        </div>
    
    
    </>
  )
}

export default Testimonials