
const NewsLetter = () => {
  return (
    <>
            <div className="container m-auto py-4">
                <h1 className="text-3xl uppercase text-left px-4 py-8 font-bold">newsletter</h1>
                <div className="md:flex md:flex-grow">
                    <div>
                        <p className="mx-4"> Are you passionate about programming and always looking for ways to 
                            learn more and stay up-to-date with the latest developments in the field? <br/><br/>

                            If so, our programming blog newsletter is the perfect fit for you! <br/><br/>

                            With our newsletter, you'll receive regular updates on the hottest topics in the world 
                            of programming, as well as exclusive access to content that you won't find anywhere else.<br/><br/>
                        </p>
                    </div>
                    <div>
                        <p className="mx-4">
                            Plus, our team of expert writers and industry professionals curate each edition to 
                            ensure that you're only getting the most valuable and relevant information. 

                            Don't miss out - sign up for our newsletter today and take your programming knowledge to the next level!
                        </p>
                        <form className="mx-4 my-4" >
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
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                <button type="button" className="text-sm font-semibold leading-6 text-white">
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="rounded-md bg-gradient-to-t from-[#5C28A4] via-[#A888F9] to-[#5C28A4] hover:from-[#2B114F] hover:via-[#6339CA] hover:to-[#2B114F] px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
        
                
                

            </div>
    
    </>
  )
}

export default NewsLetter