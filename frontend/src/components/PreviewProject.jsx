import { Link } from "react-router-dom"


const PreviewProject = ({project}) => {
    const { name, _id, customer} = project
  return (
    <div className="flex p-5 border-b">


        <p className="flex-1 ">
            {name}
            <span className="pl-2 text-sm text-gray-500 uppercase ">{''}{customer}</span>
        </p>

        <Link
            to={`${_id}`}
            className="text-sm font-bold text-gray-600 uppercase hover:text-gray-800"
        >Go to Project</Link>
       
        
    </div>
  )
}

export default PreviewProject