import { useEffect, useState } from "react"
import Alerta from "./Alerta.jsx"
import { useParams } from "react-router-dom"
import useProjects from "../hooks/useProjects.jsx"


const FormProjects = () => {

    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [description, setDescription] = useState('')
    const [deadLine, setDeadLine] = useState('')
    const [customer, setCustomer] = useState('')

    const params = useParams();
    const { showAlert, alerta, submitProject, project } = useProjects();



    useEffect(() => {
        if (params.id) {
           setId(project._id)
           setName(project.name)
           setDescription(project.description)
           setCustomer(project.customer)
           setDeadLine(project.deadLine?.split('T')[0]) 

           console.log(project.deadLine)
        }
        
    }, [params])


    const handleSubmit = async e => {
        e.preventDefault();

        if ([name, description, deadLine, customer].includes('')) {
           showAlert({
                msg: 'All fields are mandatory - please complete all required information.',
                error: true
           }) 
           return
        }

        // Pass the data to the Provider 

        await submitProject({id, name, description, deadLine, customer})

        setId(null)
        setName('')
        setDescription('')
        setDeadLine('')
        setCustomer('')
        
    }
     const { msg } = alerta
    

  return (
    <form 
        className="px-5 py-10 bg-white rounded-lg shadow md:w-1/2"
        onSubmit={handleSubmit}    
    >
        {msg && <Alerta alerta={alerta}/>}
        <div className="mb-5 ">
            <label 
                className="text-sm font-bold text-gray-700 uppercase "
                htmlFor="name">Projects's Name</label>
            <input 
                id="name"
                type="text"
                className="w-full p-2 mt-2 placeholder-gray-400 border rounded-md "
                placeholder="Project's Name"
                value={name}
                onChange={e => setName(e.target.value)}    
            />
        </div>
        <div className="mb-5 ">
            <label 
                className="text-sm font-bold text-gray-700 uppercase "
                htmlFor="dead-line">Projects's Dead Line</label>
            <input 
                id="dead-line"
                type="date"
                className="w-full p-2 mt-2 placeholder-gray-400 border rounded-md "
                value={deadLine}
                onChange={e => setDeadLine(e.target.value)}    
            />
        </div>
        <div className="mb-5 ">
            <label 
                className="text-sm font-bold text-gray-700 uppercase "
                htmlFor="customer">Projects's Customer</label>
            <input 
                id="customer"
                type="text"
                className="w-full p-2 mt-2 placeholder-gray-400 border rounded-md "
                placeholder="Project's Customer"
                value={customer}
                onChange={e => setCustomer(e.target.value)}    
            />
        </div>
        <div className="mb-5 ">
            <label 
                className="text-sm font-bold text-gray-700 uppercase "
                htmlFor="description">Projects's Description</label>
            <textarea 
                id="description"
                type="text"
                className="w-full p-2 mt-2 placeholder-gray-400 border rounded-md "
                placeholder="Project's Description"
                value={description}
                onChange={e => setDescription(e.target.value)}    
            />
        </div>
        <input 
            type="submit"
            value={id ? 'Update' : 'Create'}
            className="w-full p-3 font-bold text-white uppercase transition-colors rounded cursor-pointer bg-sky-600 hover:bg-sky-700 "    
        />
        
    </form>
  )
}

export default FormProjects