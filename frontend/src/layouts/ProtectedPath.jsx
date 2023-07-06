import { Outlet, Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth.jsx"
import HeaderDashboard from "../components/HeaderDashboard.jsx"
import Sidebar from "../components/Sidebar.jsx"


const ProtectedPath = () => {
    const { auth, loading } = useAuth()

    if(loading) return 'Loading...'
  return (
    <>
      {auth._id ?
      (
        <div className="bg-violet-200">
          <HeaderDashboard />
          <div className="md:flex md:min-h-screen">
              <Sidebar />

              <main className="flex-1 p-10">
                <Outlet />
              </main>
          </div>
        </div>
      ): <Navigate to= "/login" />}
    </>
  )
}

export default ProtectedPath