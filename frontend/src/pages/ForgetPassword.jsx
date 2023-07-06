import { Link } from "react-router-dom"
import { useState } from "react"
import gradient from '../../src/img/forgetpassword.png'
import Alerta from "../components/Alerta.jsx"
import clientAxios from "../config/clientAxios.jsx"


    const ForgetPassword = () => {

        const [email, setEmail] = useState('')
        const [alerta, setAlerta] = useState({})

        const handleSubmit = async e => {
            e.preventDefault();
            const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if(email === '' || !emailRegex.test(email)) {
                setAlerta({
                    msg: `The E-mail it's Require`,
                    error: true
                });
                return
            }
            try {
                const { data } = await clientAxios.post(`/usuarios/forget-password`, { email })
                
                setAlerta({
                    msg: data.msg,
                    error: false
                })

            } catch (error) {
              setAlerta({
                msg: error.response.data.msg,
                error: true
              })  
            }
        }
    const { msg } = alerta

    return (
        <>

        <div className=" md:flex md:flex-row md:gap-6" >
                    <div className="h-auto pb-8 m-auto ">
                        <div className="">
                            <img
                                className="m-auto"
                                src={gradient} 
                                alt="AM Deluxy - Forget the password"
                            />
                        </div>
                    </div>
                    
                <form 
                    className="px-12 mx-4 my-4 shadow-lg rounded-xl md:w-3/5 bg-radial-gradient shadow-violet-500/70 " 
                    onSubmit={handleSubmit}    
                >
                    <h1 className="px-4 py-10 text-3xl font-bold text-center uppercase">Password Recovery Form</h1> 
                    { msg && <Alerta alerta={alerta} />}           
                    <div className="sm:col-span-4">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="email@email.com"
                            className="block w-full bg-violet-400 rounded-md border-0 py-1.5 px-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={email}
                            onChange={ e => setEmail(e.target.value)}
                            />
                        </div>
                        <h2 className="py-3 text-xs text-right">We will send an email to recover your password.<br/> Please check your email to proceed.</h2>
                    </div>
                    
                    <div className="flex items-center justify-end mt-6 gap-x-6">
                        
                    <Link
                            to="/"
                            className="block font-bold hover:text-violet-600 hover:shadow-violet-400"
                        >
                        <h3>Cancel</h3> 
                    </Link>
                        <button
                            type="submit"
                            className="rounded-md bg-gradient-to-t from-[#5C28A4] via-[#A888F9] to-[#5C28A4] hover:from-[#2B114F] hover:via-[#6339CA] hover:to-[#2B114F] px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                            Send Verification
                        </button>
                    </div>
                    <div className="flex flex-row justify-between pb-6 my-6">
                        <Link
                            to="/register"
                            className="block font-bold hover:text-violet-600 hover:shadow-violet-400"
                        >
                        <h3>You Don't have Account?</h3> 
                        </Link>
                        <Link
                            to="/login"
                            className="block font-bold hover:text-violet-600 hover:shadow-violet-400"
                        >
                        <h3>You have an Account? Sign In</h3> 
                        </Link>
                    </div>
                </form>

            </div>
        </>
    )
    }

export default ForgetPassword