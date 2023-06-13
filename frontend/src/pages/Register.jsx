import { useState } from 'react';
import { Link } from "react-router-dom";
import Alerta from '../components/Alerta.jsx';
import clientAxios from '../config/clientAxios.jsx';

const Register = () => {
  const [name, setName ] = useState('')
  const [lastName, setLastName ] = useState('')
  const [phone, setPhone ] = useState('')
  const [email, setEmail ] = useState('')
  const [password, setPassword ] = useState('')
  const [showPassword, setShowPassword ] = useState(false)
  const [repassword, setRePassword ] = useState(false)
  const [alerta, setAlerta] = useState({})

  const handlePasswordVisibility = () => {
    setShowPassword(showPasswordPrev => !showPasswordPrev);
  }

  const handleSubmit = async e => {
    e.preventDefault();
    
    if([name, lastName, phone, email, password].includes('')){
      setAlerta({
        msg: 'All fields are mandatory - please complete all required information.',
        error: true
      })
      return
    }

    if( password !== repassword ) {
      setAlerta({
        msg: 'Fields Do Not Match - Please Ensure Consistency in Entered Information.',
        error: true
      })
      return
    }

    if( password.length < 8 || !/(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*-_]).*$/.test(password)) {
      setAlerta({
        msg: 'Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character.',
        error: true
      })
      return
    }

    setAlerta({})

    // Crear el ususario en la API
    
    try {
      const { data } = await clientAxios.post(`/usuarios`, {name, lastName, phone, email, password})
      
      setAlerta({
        msg: data.msg,
        error: false
      })
      setName('')
      setLastName('')
      setPhone('')
      setEmail('')
      setPassword('')
      setRePassword('')
      
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
         {msg && <Alerta alerta={alerta}/>}
        <div className="lg:grid lg:grid-cols-3 lg:gap-1" >
            <div className="content-center px-4 mx-auto my-auto border-2 border-solid bg-gradient-to-b from-violet-950 to-transparent rounded-xl border-violet-600 rouded-2xl">
                <h2 className="px-2 py-10 text-2xl font-bold text-center uppercase">Get in Touch.</h2>
                <h3>We’re here to help and answer any questions you might have. We will answer your inquiries in a maximum of 48 hours.</h3>
                <ul>
                    <div className="flex self-center gap-3 pt-8">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 24C4.3125 24 3.72375 23.755 3.23375 23.265C2.74375 22.775 2.49917 22.1867 2.5 21.5V6.5C2.5 5.8125 2.745 5.22375 3.235 4.73375C3.725 4.24375 4.31334 3.99917 5 4H25C25.6875 4 26.2763 4.245 26.7663 4.735C27.2563 5.225 27.5008 5.81334 27.5 6.5V21.5C27.5 22.1875 27.255 22.7763 26.765 23.2663C26.275 23.7563 25.6867 24.0008 25 24H5ZM15 15.0313C15.1042 15.0313 15.2138 15.0154 15.3288 14.9838C15.4438 14.9521 15.5529 14.9054 15.6563 14.8438L24.5 9.3125C24.6667 9.20834 24.7917 9.07792 24.875 8.92125C24.9583 8.76459 25 8.59292 25 8.40625C25 7.98959 24.8229 7.67709 24.4688 7.46875C24.1146 7.26042 23.75 7.27084 23.375 7.5L15 12.75L6.625 7.5C6.25 7.27084 5.88542 7.26584 5.53125 7.485C5.17709 7.70417 5 8.01125 5 8.40625C5 8.61459 5.04167 8.79709 5.125 8.95375C5.20834 9.11042 5.33334 9.23 5.5 9.3125L14.3438 14.8438C14.4479 14.9063 14.5575 14.9533 14.6725 14.985C14.7875 15.0167 14.8967 15.0321 15 15.0313Z" fill="#8655FF"/>
                        </svg>

                        <Link
                            to="mailto:help@amdeluxy.com"
                            className="block font-bold hover:text-violet-600 hover:shadow-violet-400"
                        >
                            <h3>help@amdeluxy.com</h3> 
                        </Link>
                    </div>
                    <div className="flex gap-3 pt-4 pb-4">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 10C16.3261 10 17.5979 10.5268 18.5355 11.4645C19.4732 12.4021 20 13.6739 20 15C20 16.3261 19.4732 17.5979 18.5355 18.5355C17.5979 19.4732 16.3261 20 15 20C13.6739 20 12.4021 19.4732 11.4645 18.5355C10.5268 17.5979 10 16.3261 10 15C10 13.6739 10.5268 12.4021 11.4645 11.4645C12.4021 10.5268 13.6739 10 15 10ZM3.8125 16.25H1.25V13.75H3.8125C4.375 8.5375 8.5375 4.375 13.75 3.8125V1.25H16.25V3.8125C21.4625 4.375 25.625 8.5375 26.1875 13.75H28.75V16.25H26.1875C25.625 21.4625 21.4625 25.625 16.25 26.1875V28.75H13.75V26.1875C8.5375 25.625 4.375 21.4625 3.8125 16.25ZM15 6.25C12.6794 6.25 10.4538 7.17187 8.81282 8.81282C7.17187 10.4538 6.25 12.6794 6.25 15C6.25 17.3206 7.17187 19.5462 8.81282 21.1872C10.4538 22.8281 12.6794 23.75 15 23.75C17.3206 23.75 19.5462 22.8281 21.1872 21.1872C22.8281 19.5462 23.75 17.3206 23.75 15C23.75 12.6794 22.8281 10.4538 21.1872 8.81282C19.5462 7.17187 17.3206 6.25 15 6.25Z" fill="#8655FF"/>
                        </svg>
                        <h3 className="block font-bold">Davenport, Fl 33837 USA</h3>
                    </div>
                </ul>
            </div>
                            
            <form 
              className="col-span-2 px-12 mx-4 my-4 shadow-xl rounded-2xl bg-radial-gradient shadow-violet-500/70 "
              onSubmit={handleSubmit}
            >


                <h1 className="px-4 py-10 text-3xl font-bold text-center uppercase">Create your Account</h1>   
                <div className="md:flex md:flex-row md:justify-between">

                    <div className="sm:col-span-4">
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">
                            Name
                        </label>
                        <div className="mt-2">
                            <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="Name"
                            className="block w-full bg-violet-400 rounded-md border-0 py-1.5 px-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={name}
                            onChange={e => setName(e.target.value)}       
                        />
                        </div>
                    </div>         
                    <div className="sm:col-span-4">
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">
                            Last Name
                        </label>
                        <div className="mt-2">
                            <input
                            id="lastname"
                            name="name"
                            type="text"
                            autoComplete="Last Name"
                            className="block w-full bg-violet-400 rounded-md border-0 py-1.5 px-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />
                        </div>
                    </div>
                </div>
                         
                <div className="sm:col-span-4">
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">
                        Phone Number
                    </label>
                    <div className="mt-2">
                        <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="000-0000-000"
                        className="block w-full bg-violet-400 rounded-md border-0 py-1.5 px-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                    </div>
                </div>         
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
                        placeholder="mail@mail.com"
                        className="block w-full bg-violet-400 rounded-md border-0 py-1.5 px-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    </div>
                </div>
                <div className="sm:col-span-4">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                        Password
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
                
                <div className="sm:col-span-4">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                        Re-write Password
                    </label>
                    <div className="flex">
                        <div className="flex-grow mt-2">
                            <input
                            id="repassword"
                            name="password"
                            type={showPassword ? "password" : "text"} 
                            autoComplete="New-Password"
                            placeholder=""
                            className="block w-full bg-violet-400 rounded-md border-0 py-1.5 px-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={repassword}
                            onChange={e => setRePassword(e.target.value)}
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
                    <Link to="/">
                        <button type="button" className="text-sm font-semibold leading-6 text-white hover:text-violet-600 hover:shadow-violet-100">
                            Cancel
                        </button>
                    </Link>
                    
                    <Link>
                        <button
                            type="submit"
                            className="rounded-md bg-gradient-to-t from-[#5C28A4] via-[#A888F9] to-[#5C28A4] hover:from-[#2B114F] hover:via-[#6339CA] hover:to-[#2B114F] px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                            Save
                        </button>
                    </Link>
                    
                </div>
                <div className="flex flex-row justify-between py-6 my-6">
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

export default Register