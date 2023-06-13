import testCode from '../../src/img/testCode.jpg'
import testCode2 from '../../src/img/testCode2.jpg'

const Article = () => {
  return (
    <>
        <div className="container m-auto max-w-2xl">
            <h1 className="text-3xl text-center px-4 py-10 font-bold">Why TypeScript is the Better Choice over JavaScript</h1>
            <p className="px-2 text-base my-6">
                As a developer, you want to write code that is not only functional, but also easy to maintain and extend. This is where 
                TypeScript comes in. While JavaScript is the most popular programming language in the world, TypeScript offers several 
                advantages that make it a better choice for many projects. <br/><br/>

                First and foremost, TypeScript is a typed language, which means that variables have a specific type (such as string, 
                number, or boolean) and the compiler will check for type errors at compile time. This makes it easier to catch errors 
                early on and prevents runtime exceptions, saving you time and frustration.<br/><br/>

                In addition, TypeScript has a rich type system that allows you to define interfaces, classes, and other advanced types 
                that make your code more organized and self-documenting. This not only improves the readability of your code, but also 
                makes it easier for other developers to understand and work with.<br/><br/>

                Another advantage of TypeScript is that it is a superset of JavaScript, which means that any valid JavaScript code is also 
                valid TypeScript code. This means that you can gradually introduce TypeScript into your existing JavaScript codebase, and 
                take advantage of its features as needed. You can also use the TypeScript compiler to convert your TypeScript code into 
                plain JavaScript that can run in any modern browser or runtime.<br/><br/>

                In conclusion, while JavaScript will always have its place in the world of programming, TypeScript offers many compelling 
                benefits that make it a better choice for large and complex projects. With its strong typing, advanced type system, and 
                seamless integration with JavaScript, TypeScript can help you write more maintainable and scalable code. If you're not 
                already using TypeScript, it's definitely worth considering for your next project.<br/><br/>

                Here's an example of how TypeScript can provide benefits over JavaScript:<br/><br/>
            </p>
            <div className="my-4 mx-2">
                <img
                className="block w-auto m-auto pt-2"
                src={testCode} 
                alt="AM Deluxy - Test Code"
                />
            </div>
            <p className="px-2 text-base my-6">
                In the TypeScript version of the code, we've defined the types of the a and b arguments as number, which means that the 
                TypeScript compiler will only allow values of the number type to be passed to the sum function. If we try to pass a string 
                value like in the JavaScript code, the compiler will throw an error and prevent us from running the code. This type-checking 
                can help us catch errors early on and prevent runtime exceptions.<br/><br/>

                In addition, the TypeScript version of the code is easier to read and understand, thanks to the type annotations. Other 
                developers can quickly see what type of values the sum function expects, and use that information to avoid making mistakes 
                when calling the function.<br/><br/>

                Overall, TypeScript can provide better type-safety and improved readability compared to JavaScript.<br/><br/>
            </p>
            <div className="my-4 mx-2">
                <img
                className="block w-auto m-auto pt-2"
                src={testCode2} 
                alt="AM Deluxy - Test Code"
                />
            </div>
            <h1 className="text-3xl text-center px-4 py-10 font-bold">Leave a Comment</h1>
            <form className="m-2">
                <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white">
                        Name
                    </label>
                    <div className="mt-2">
                        <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="given-name"
                        className="block w-full rounded-md bg-[#AB84E1] border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                    <p className="mt-3 text-sm leading-6 text-orange-600">Write a few sentences about the Article.</p>
                </div>
                <div className="flex flex-col mt-4 mb-8">
                    <button
                        type="submit"
                        className="rounded-md  bg-gradient-to-t from-[#5C28A4] via-[#A888F9] to-[#5C28A4] hover:from-[#2B114F] hover:via-[#6339CA] hover:to-[#2B114F] px-40 sm:px-40 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Send
                    </button>
                </div>

            </form>
        </div>
        
    
    </>
  )
}

export default Article