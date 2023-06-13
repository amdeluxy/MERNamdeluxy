const Hero = () => {
  return (
    <>
        <div className="bg-[url('../../src/img/heroamdeluxy.png')] m-auto h-screen bg-cover bg-center md:h-screen">
            <h1 className='text-3xl uppercase text-center px-4 py-20 font-bold'>Bringing your vision to life online</h1>
            <div className="flex px-4 md:px-24 lg:px-40">
                <h3 className='text-xl pt-10 pb-4 md:max-w-xl lg:max-w-4xl'>Join us as we help modernize and integrate mainstream IT to transform customer experiences
                 and pave the way for a successful digital future. Together, we can drive innovation and 
                 success in the digital realm.</h3>
            </div>
            <div className="h-24 px-4 md:pl-24 lg:pl-40">
                <button class="text-white font-bold my-5 rounded-lg px-4 sm:px-8 py-2 sm:py-3  bg-gradient-to-t from-[#5C28A4] via-[#A888F9] to-[#5C28A4] hover:from-[#2B114F] hover:via-[#6339CA] hover:to-[#2B114F]">
                    Contact
                </button>
            </div>
        </div>
    </>
  )
}
export default Hero