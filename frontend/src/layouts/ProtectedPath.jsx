import { Outlet, Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"


const ProtectedPath = () => {
    const { auth } = useAuth()

    console.log(auth);
  return (
    <div>ProtectedPath</div>
  )
}

export default ProtectedPath