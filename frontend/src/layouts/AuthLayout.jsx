import { Outlet } from "react-router-dom"
import Header from "../components/header"

const AuthLayout = () => {
  return (
    <> 
      <Header />
      <main className="p-2 mx-auto mt-5 md:mt-20 md:flex md:justify-center"> 
        <div className="md:w-2/3 lg:1/2" >
          <Outlet />
        </div>
        
      </main>      
      
    </>
    
  )
}

export default AuthLayout