import FormProjects from "../components/FormProjects.jsx"


const NewProject = () => {
  return (
    <>
      <h1 className="text-4xl font-black text-black uppercase " >Create Projects</h1>

      <div className="flex justify-center mt-10 text-black">
            <FormProjects />
      </div>

    </>
  )
}

export default NewProject