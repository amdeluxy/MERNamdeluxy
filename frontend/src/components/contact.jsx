import map from '../../src/img/mapContact.jpg'

const Contact = () => {
  return (
    <>
        <div className="bg-[url('../../src/img/fondo2.png')] bg-cover bg-center ">
            <h1 className="text-3xl uppercase text-center px-4 py-10 font-bold">Contact Us</h1>
            <div className="md:grid md:grid-cols-2 items-center">
                <div className="my-4 mx-8 pb-8 ">
                    <img
                        className="block w-auto m-auto pt-2 max-h-72"
                        src={map} 
                        alt="AM Deluxy - Logo"
                    />
                </div>
                
                <form className="mx-4 my-4 md:py-8" >
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white">
                                First Name
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
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-white">
                                Last Name
                            </label>
                            <div className="mt-2">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 bg-[#AB84E1] py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 bg-[#AB84E1] text-white shadow-sm ring-1 ring-inset ring-violet-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            </div>
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
                            <div className="mt-6 flex items-center justify-star gap-x-6">
                                <button type="button" className="text-sm font-semibold leading-6 text-white">
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="rounded-md bg-gradient-to-t from-[#5C28A4] via-[#A888F9] to-[#5C28A4] hover:from-[#2B114F] hover:via-[#6339CA] hover:to-[#2B114F] px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                    Send
                                </button>
                            </div>
                </form>
            </div>

        </div>
    
    </>
  )
}

export default Contact