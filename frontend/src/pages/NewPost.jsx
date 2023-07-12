import { useState } from "react"
import usePost from "../hooks/usePost"
import Alerta from "../components/Alerta"



const NewPost = () => {

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [tech, setTech] = useState('')
    const [dateCreate, setDateCreate] = useState('')
    const [writer, setWriter] = useState('')

    const { showAlert, alerta, submitPost } = usePost();

    const handleSubmit = async e => {
        e.preventDefault();

        if ([title, text, tech, dateCreate, writer].includes('')) {
            showAlert({
                 msg: 'All fields are mandatory - please complete all required information.',
                 error: true
            }) 
            return
        }

        //pasar los datos
        await submitPost({ title, text, tech, dateCreate, writer})

        setTitle('')
        setText('')
        setTech('')
        setDateCreate('')
        setWriter('')
    }
    const { msg } = alerta

  return (
    <>
        <form 
            className="px-5 py-10 m-auto bg-white rounded-lg shadow md:w-1/2"
            onSubmit={handleSubmit}
        >
            {msg && <Alerta alerta={alerta}/>}
            <div>
                <h3 className="text-3xl font-black text-center pb-8 text-black uppercase ">Create New Blog Post</h3>
            </div>
            <div className="mb-5 ">
                <label 
                    className="text-sm font-bold text-gray-700 uppercase "
                    htmlFor="title">Blog's Title</label>
                <input 
                    id="title"
                    type="text"
                    className="w-full p-2 mt-2 placeholder-gray-400 border text-black rounded-md "
                    placeholder="Blog's Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}    
                />
            </div>
            <div className="mb-5 ">
                <label 
                    className="text-sm font-bold text-gray-700 uppercase "
                    htmlFor="text">Blog's Title</label>
                <textarea 
                    id="text"
                    name="text"
                    rows={4}
                    cols={30}
                    className="w-full p-2 mt-2 placeholder-gray-400 text-black  border rounded-md "
                    placeholder="Blog's text"
                    value={text}
                    onChange={e => setText(e.target.value)}    
                />
            </div>
            <div className="mb-5 ">
                <label 
                    className="text-sm font-bold text-gray-700 uppercase "
                    htmlFor="tech">Blog's Technologys</label>
                <input 
                    id="tech"
                    type="text"
                    className="w-full p-2 mt-2 placeholder-gray-400 text-black  border rounded-md "
                    placeholder="Technologies we are talking about"
                    value={tech}
                    onChange={e => setTech(e.target.value)}    
                />
            </div>
            <div className="mb-5 ">
                <label 
                    className="text-sm font-bold text-gray-700 uppercase "
                    htmlFor="date">Blog creation date</label>
                <input 
                    id="dateCraete"
                    type="date"
                    className="w-full p-2 mt-2 text-black placeholder-gray-400 border rounded-md "
                    placeholder="Blog creation date"
                    value={dateCreate}
                    onChange={e => setDateCreate(e.target.value)}    
                />
            </div>
            <div className="mb-5 ">
                <label 
                    className="text-sm font-bold text-gray-700 uppercase "
                    htmlFor="date">Blog writer Name</label>
                <input 
                    id="writer"
                    type="text"
                    className="w-full p-2 mt-2 text-black placeholder-gray-400 border rounded-md "
                    placeholder="Blog writer date"
                    value={writer}
                    onChange={e => setWriter(e.target.value)}    
                />
            </div>
            <input 
            type="submit"
            value="Create Blog Post"
            className="w-full p-3 font-bold text-white uppercase transition-colors rounded cursor-pointer bg-gradient-to-t from-[#5C28A4] via-[#A888F9] to-[#5C28A4] hover:from-[#2B114F] hover:via-[#6339CA] hover:to-[#2B114F] "    
        />


        </form>

    
    </>
  )
}

export default NewPost