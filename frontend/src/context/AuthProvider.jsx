import { useState, useEffect, createContext } from "react";
import clientAxios from "../config/clientAxios";

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({})

    useEffect (() => {
        const authUser = async () => {
            const token = localStorage.getItem('token')
            if (!token) {
                return
            }
            const config = {
                headers: {
                    "Content-Type": "aplication/jason",
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const { data } = await clientAxios('/usuarios/perfil', config)
                setAuth(data);
            } catch (error) {
                
            }
        }
        authUser()
    }, [])

    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext;