import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import clientAxios from '../config/clientAxios.jsx'
import gradient from '../../src/img/logo2.png'
import Socialmedia from '../components/socialmedia.jsx'
import Alerta from '../components/Alerta.jsx'


const ConfirmAccount = () => {

  const [alerta, setAlerta] = useState({})
  const [accountConfirmed, setAccountConfirmed] = useState(false)

  const params = useParams();
  const { id } = params
  
  useEffect(() => {
    const confirmAccount = async () => {
      try {
          const url = `/usuarios/confirm/${id}`
          const { data } = await clientAxios(url)
          setAlerta ({
            msg: data.msg,
            error: false
          })
          setAccountConfirmed(true)
      } catch (error) {
        console.log(error.response.data.msg);
      }
    }
    confirmAccount();
  }, [])

  const { msg } = alerta

  return (
    <>
        <div className="md:flex md:flex-row md:gap-6">
          <div className="h-auto pb-8 m-auto">
            <img
              className="m-auto max-h-40"
                  src={gradient} 
                  alt="AM Deluxy - Forget the password"
            />
          </div>
          <div className="px-4 mx-4 my-4 shadow-lg rounded-2xl md:w-3/5 bg-radial-gradient shadow-violet-500/70">
              <div className="flex items-center justify-center p-4">
                  <svg width="136" height="128" viewBox="0 0 116 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_22_2)">
                  <circle cx="54" cy="50" r="50" fill="#3BD25C"/>
                  <circle cx="54" cy="50" r="49" stroke="white" stroke-width="2"/>
                  </g>
                  <path d="M31.0761 48.0103V69.1235H40.4398L40.9127 69.1766C49.6058 71.1118 55.3663 72.5072 58.2372 73.3715C62.0507 74.5191 63.4723 74.7993 66.0589 74.9645C67.9935 75.0914 70.1907 74.3804 71.192 73.4069C71.7452 72.87 72.1593 71.7667 72.3231 70.0557C72.357 69.6969 72.4913 69.3535 72.7121 69.0613C72.9328 68.7691 73.2318 68.5389 73.5777 68.3949C74.3472 68.0763 74.9869 67.5571 75.5216 66.8019C76.016 66.1116 76.3374 64.8254 76.3961 62.9639C76.4065 62.6217 76.5081 62.2877 76.6914 61.9934C76.8748 61.6992 77.1337 61.4545 77.4438 61.2824C79.2424 60.2883 80.1324 59.1673 80.3178 57.8516C80.5218 56.3972 80.0273 54.76 78.7325 52.8956C78.4286 52.4583 78.3155 51.9252 78.4171 51.4095C78.5186 50.8939 78.8269 50.4364 79.2764 50.1343C80.5156 49.3024 81.1955 48.146 81.3654 46.5058C81.6374 43.8921 79.8913 41.9599 75.9388 41.5734C72.4185 41.2411 68.8642 41.524 65.4501 42.4083C65.0628 42.5049 64.6547 42.4939 64.2737 42.3766C63.8928 42.2593 63.5548 42.0406 63.2997 41.7462C63.0445 41.4518 62.8827 41.094 62.8334 40.7148C62.784 40.3356 62.8491 39.9508 63.0211 39.6058C64.5663 36.4847 65.4254 33.9093 65.6263 31.9151C65.8889 29.269 65.2492 27.3515 63.7535 25.7703C62.6193 24.5726 60.8053 23.8882 60.1254 24.0298C59.2292 24.2127 58.6451 24.7083 57.8849 26.4429C57.4368 27.4695 57.2205 28.3427 56.8496 30.3811C56.4943 32.3163 56.2996 33.1895 55.8947 34.3341C54.674 37.8033 51.6795 41.3994 47.6589 43.8803C44.8411 45.6171 41.7872 46.9769 38.5825 47.9218C38.3823 47.9808 38.174 48.0106 37.9645 48.0103H31.0761ZM30.9463 73.1444C29.9481 73.1709 29.0519 72.9585 28.3009 72.457C27.3429 71.8169 26.8917 70.808 26.8825 69.6457L26.8917 48.0428C26.7867 46.8923 27.142 45.8362 27.9826 45.0515C28.7707 44.314 29.7998 43.9659 30.8876 43.9895H37.64C40.3714 43.1587 42.9755 41.9862 45.3844 40.5026C48.6231 38.5025 51.0089 35.6351 51.9205 33.0509C52.2326 32.16 52.3995 31.4225 52.7147 29.6879C53.1412 27.3603 53.407 26.2777 54.0189 24.8853C55.2859 21.9884 56.9485 20.5724 59.2416 20.0974C61.4975 19.6313 64.7826 20.8733 66.8593 23.0681C69.1616 25.4989 70.1784 28.5403 69.8013 32.2986C69.6406 33.9152 69.1709 35.7236 68.3983 37.7384C71.0368 37.3714 73.7126 37.3159 76.3652 37.5732C82.5676 38.178 86.0504 42.0336 85.5436 46.907C85.3211 49.0074 84.5238 50.7922 83.1671 52.1935C84.3075 54.2909 84.7617 56.3648 84.4774 58.3885C84.1499 60.719 82.7901 62.6601 80.528 64.1675C80.3518 66.2119 79.8604 67.8432 78.989 69.0645C78.3023 70.0512 77.4063 70.8894 76.3591 71.5248C76.0253 73.5426 75.3238 75.1209 74.1773 76.2301C72.2767 78.0768 68.8804 79.1771 65.7777 78.9765C62.8326 78.7877 61.0896 78.4455 56.9794 77.2065C54.2692 76.3894 48.6571 75.0324 40.1988 73.1444H30.9463ZM36.203 47.0929C36.2022 46.829 36.2559 46.5675 36.3612 46.3234C36.4664 46.0794 36.6211 45.8575 36.8163 45.6706C37.0115 45.4837 37.2434 45.3354 37.4988 45.2342C37.7542 45.1331 38.0279 45.081 38.3044 45.081C38.5804 45.0818 38.8535 45.1344 39.1081 45.2359C39.3628 45.3375 39.594 45.4859 39.7885 45.6727C39.9831 45.8595 40.1372 46.0811 40.2421 46.3248C40.3469 46.5685 40.4005 46.8295 40.3997 47.0929V69.743C40.4001 70.0065 40.3461 70.2674 40.2409 70.5109C40.1357 70.7544 39.9812 70.9758 39.7864 71.1624C39.5915 71.3489 39.3601 71.497 39.1053 71.5982C38.8505 71.6993 38.5773 71.7516 38.3013 71.752C38.0254 71.7516 37.7522 71.6993 37.4974 71.5982C37.2426 71.497 37.0111 71.3489 36.8163 71.1624C36.6214 70.9758 36.467 70.7544 36.3617 70.5109C36.2565 70.2674 36.2026 70.0065 36.203 69.743V47.0929Z" fill="white"/>
                  <defs>
                  <filter id="filter0_d_22_2" x="0" y="0" width="108" height="108" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_2"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_22_2" result="shape"/>
                  </filter>
                  </defs>
                  </svg>
              </div>
              {msg && <Alerta alerta={alerta}/>}
              <div className="py-4 text-center">
                <h3 className="my-2">Welcome to Our Community! Get Started with Your First Project Today!</h3>
                <h3 className="my-2">Your Account is ready to use. You will be redirect to the Login page</h3>
                <div >
                    
                    
                    {accountConfirmed && (
                      <Link to="/login">
                          <button
                              type=""
                              className="block mx-auto  rounded-md bg-gradient-to-t from-[#5C28A4] via-[#A888F9] to-[#5C28A4] hover:from-[#2B114F] hover:via-[#6339CA] hover:to-[#2B114F] px-20 py-2 my-6 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                              >
                              Go Login
                          </button> 
                      </Link>
                    )}
                    
                </div>
                
              </div>

          </div>
          
        
      </div>
      <div className="my-10 h-2/3 ">
        <Socialmedia />
      </div>
      
    </>
  )
}

export default ConfirmAccount