import { useState, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonial1 from '../../src/img/testimonials1.png';
import testimonial2 from '../../src/img/testimonials2.png';
import testimonial3 from '../../src/img/testimonials3.png';


const Testimonials = () => {
    const testimonials = [
        {
            image: testimonial1,
            text: "I am absolutely delighted with the services provided by AM Deluxy! As a client, I have had an exceptional experience working with their software development team. From our very first interaction, they have displayed a professional and dedicated approach to my projects. Their expertise and technical skills are evident in the high-quality work they have delivered."
        },
        {
            image: testimonial2,
            text: "I am absolutely delighted with the services provided by AM Deluxy! As a client, I have had an exceptional experience working with their software development team. From our very first interaction, they have displayed a professional and dedicated approach to my projects. Their expertise and technical skills are evident in the high-quality work they have delivered."
        },
        {
            image: testimonial3,
            text: "I am absolutely delighted with the services provided by AM Deluxy! As a client, I have had an exceptional experience working with their software development team. From our very first interaction, they have displayed a professional and dedicated approach to my projects. Their expertise and technical skills are evident in the high-quality work they have delivered."
        },
    ]
    const sliderRef = useRef(null)
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide =() => {
        sliderRef.current.slickNext();
        setCurrentSlide(currentSlide + 1);
    }

    const prevSlide = () => {
        sliderRef.current.slickNext();
        setCurrentSlide(currentSlide - 1);
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    }
  return (
    <>
        <div className=" bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-950 transparent to-brown-900 bg-cover bg-center">
                <h1 className="px-4 pt-8 text-2xl font-bold text-center uppercase">Hear what our Clients say About us</h1>
                <Slider ref={sliderRef} {...settings}>
                    {
                        testimonials.map((testimonials, index) => (
                          <div key={index}>
                            <div className="relative z-0 w-auto py-8 my-8 h-96">
                                <div className="absolute sm:h-5/6 sm:top-0 sm:left-20 md:w-1/4 md:left-1/4">
                                    <img
                                        className="block w-auto ml-4 max-h-44 md:max-h-52 rounded-xl "
                                        src={testimonials.image} 
                                        alt="AM Deluxy - Customer"
                                    />
                                </div>
                                <div className="text-white text-xs w-9/12 sm:w-8/12 sm:right-0 md:w-7/12 absolute z-20 top-32 sm:top-24 right-2 mx-auto my-8 font-bold rounded-xl px-4 sm:max-x-xl sm:left- sm:px-8 sm:mx-14 py-4 sm:py-3 md:mx-24 md:p-8 md:my-8 bg-gradient-to-r from-[#051327] to-[#5C28A4]">
                                    <p >
                                        "I am absolutely delighted with the services provided by AM Deluxy! As a client, I have had an 
                                        exceptional experience working with their software development team. From our very first interaction, 
                                        they have displayed a professional and dedicated approach to my projects. Their expertise and 
                                        technical skills are evident in the high-quality work they have delivered.<br/><br/>
                                    </p>
                                    <h3 className='m-4'>Laura Sánchez, Satisfied Client. {'\u{1F44D}'}</h3>
                                </div>
                            </div>
                          </div>  
                        ))
                    }
                </Slider>
                
            <div className="flex justify-center flex-1 flex-grow gap-8 pt-8 pr-4 sm:pr-12 ">
                        <div onClick={prevSlide} className="cursor-pointer" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#8655FF" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                        </div>
                        <div onClick={nextSlide} className="cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#8655FF" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                        </div>
                </div>
            <h3 className="my-4 text-center text-orange-700 text-tm" >Share Your Experience! Leave a Review Here and Help Us Improve. We value your feedback!</h3>
                    
            <form className="max-w-lg px-4 mx-auto">
                <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white">
                        Full Name
                    </label>
                    <div className="mt-2">
                        <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md bg-[#AB84E1] border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            for="formFile"
                            className="block mb-2 text-sm font-medium leading-6 text-white"
                            >Picture Input</label>
                    <input
                        className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                        type="file"
                        id="formFile" />
                    </div>
                    <div className="col-span-full">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-white">
                                Message
                            </label>
                            <div className="mt-2">
                                <textarea
                                id="about"
                                name="about"
                                rows={3}
                                className="block w-full rounded-md border-0 py-1.5 bg-[#AB84E1] text-white shadow-sm ring-1 ring-inset ring-violet-300 placeholder:text-violet-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={''}
                                />
                            </div>
                            <p className="mt-3 text-sm leading-6 text-orange-600">Write a few sentences about yourself.</p>
                        </div>
                </div>    
                <div className="flex text-center md:pl-24 lg:pl-40">
                        <button class="text-white flex-1 max-w-md mx-8 sm:mx-auto font-bold my-5 uppercase rounded-lg px-4 sm:px-8 py-2 sm:py-3  bg-gradient-to-t from-[#5C28A4] via-[#A888F9] to-[#5C28A4] hover:from-[#2B114F] hover:via-[#6339CA] hover:to-[#2B114F] ">
                        Tell us about your experience
                        </button>
                    </div>
                
            </form>   
                    
                    
                    
        </div>
    
    
    </>
  )
}

export default Testimonials