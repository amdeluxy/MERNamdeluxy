import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import gradient from '../../src/img/3dsignin.png'
import Socialmedia from '../components/socialmedia.jsx'
import clientAxios from '../config/clientAxios.jsx'
import Alerta from '../components/Alerta.jsx'
import useAuth from '../hooks/useAuth.jsx';


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword ] = useState(false)
  const [alerta, setAlerta] = useState({})

  const { setAuth } = useAuth();

  const navigate = useNavigate()

  const handlePasswordVisibility = () => {
    setShowPassword(showPasswordPrev => !showPasswordPrev);
}

  const handleSubmit = async e => {
    e.preventDefault();

    if ([email, password].includes('')) {
      setAlerta({
        msg:'All fields are mandatory - please complete all required information.',
        error: true
      });
    }
    if( password.length < 8 || !/(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*-_]).*$/.test(password)) {
      setAlerta({
        msg: 'Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character.',
        error: true
      })
      return
    }
    try {
      const { data } = await clientAxios.post('/usuarios/login', { email, password })
      setAlerta({})
      localStorage.setItem('token', data.token)
      setAuth(data)
      navigate('/projects')
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
    <div className="md:flex md:flex-row md:gap-6" >
                <div className="h-auto pb-8 m-8 md:w-1/5 md:my-24">
                    
                    <div className="static">
                    <img
                        className=""
                        src={gradient} 
                        alt="AM Deluxy - Sign In"
                    />
                </div>
                </div>
                <form 
                    className="px-12 mx-4 my-4 shadow-lg rounded-xl md:w-3/5 bg-radial-gradient shadow-violet-500/70 " 
                    onSubmit={handleSubmit}    
                >
                    <h1 className="px-4 py-10 text-3xl font-bold text-center uppercase">Sign In</h1> 
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

                        
                    </div>
                    <div className="sm:col-span-4">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                            Email
                        </label>
                        <div className="flex">
                                <div className="flex-grow mt-2">  {/* 1. Añade 'relative' para posicionar absolutamente el botón de mostrar/ocultar */}
                                    <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "password" : "text"} 
                                    autoComplete="new-password"
                                    placeholder=""
                                    className="block w-full bg-violet-400 rounded-md border-0 py-1.5 px-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    />  
                                </div>
                                <button 
                                    type="button"
                                    className="p-2 text-sm right-2"
                                    onClick={handlePasswordVisibility}  
                                    >
                                    {showPassword ?
                                    <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.45834 25.4932C4.04168 23.6532 3.33334 22.7315 3.33334 19.9998C3.33334 17.2665 4.04168 16.3482 5.45834 14.5065C8.28668 10.8332 13.03 6.6665 20 6.6665C26.97 6.6665 31.7133 10.8332 34.5417 14.5065C35.9583 16.3498 36.6667 17.2682 36.6667 19.9998C36.6667 22.7332 35.9583 23.6515 34.5417 25.4932C31.7133 29.1665 26.97 33.3332 20 33.3332C13.03 33.3332 8.28668 29.1665 5.45834 25.4932Z" stroke="#8655FF" stroke-width="2.5"/>
                                    <path d="M25 20C25 21.3261 24.4732 22.5979 23.5355 23.5355C22.5979 24.4732 21.3261 25 20 25C18.6739 25 17.4021 24.4732 16.4645 23.5355C15.5268 22.5979 15 21.3261 15 20C15 18.6739 15.5268 17.4021 16.4645 16.4645C17.4021 15.5268 18.6739 15 20 15C21.3261 15 22.5979 15.5268 23.5355 16.4645C24.4732 17.4021 25 18.6739 25 20Z" stroke="#8655FF" stroke-width="2.5"/>
                                    </svg>
                                    : 
                                    <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.8833 26.4035L15.5717 31.3035L12.3517 30.4418L13.6633 25.5418C11.7001 24.8182 9.87531 23.7635 8.26832 22.4235L4.67999 26.0118L2.32332 23.6551L5.91166 20.0651C3.88512 17.6381 2.52347 14.7264 1.95999 11.6151L3.45999 11.3418C8.27557 14.8132 14.0637 16.6766 20 16.6668C26.1733 16.6668 31.8867 14.6935 36.54 11.3418L38.04 11.6135C37.4772 14.7251 36.1161 17.6374 34.09 20.0651L37.6783 23.6551L35.3217 26.0118L31.7317 22.4235C30.1248 23.764 28.3 24.8193 26.3367 25.5435L27.65 30.4418L24.43 31.3035L23.1167 26.4035C21.0539 26.7567 18.9461 26.7567 16.8833 26.4035Z" fill="#8655FF"/>
                                    </svg>
                                    }  
                                </button>    
                            </div>

                        
                    </div>
                    
                    
                    <div className="flex items-center justify-end mt-6 gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-white hover:text-violet-600 hover:shadow-violet-400">
                            Cancel
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
                            to="/forget-password"
                            className="block font-bold hover:text-violet-600 hover:shadow-violet-400"
                        >
                        <h3>You Forget the Password?</h3> 
                        </Link>
                    </div>
                    <input
                            type="submit"
                            value="Start"
                            className="w-full py-3 mb-5 font-bold text-white uppercase transition-colors rounded bg-gradient-to-t from-[#5C28A4] via-[#A888F9] to-[#5C28A4] hover:from-[#2B114F] hover:via-[#6339CA] hover:to-[#2B114F]"
                            />
                </form>

        </div>
        <div className="pt-10">
            <Socialmedia/>
        </div> 
    
    </>
    
  )
}

export default Login