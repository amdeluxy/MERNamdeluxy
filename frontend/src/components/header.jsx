import { Fragment } from 'react'
import { Link } from "react-router-dom"
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../../src/img/logo.png'

const navigation = [ 
  { name: 'Services', link: '/Services', current: false },
  { name: 'Portfolio', link: '/portfolio', current: false },
  { name: 'Blog', link: '/blog', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-[#0A1628]">
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                <div className="flex items-center flex-shrink-0">
                    <Link to="/">
                        <img
                            className="block w-auto h-12 lg:hidden"
                            src={logo} 
                            alt="AM Deluxy - Logo"
                        />
                        <img
                            className="hidden w-auto h-12 lg:block"
                            src={logo} 
                            alt="AM Deluxy - Logo"
                        />
                    </Link>
                  
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.link}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-violet-400 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="w-6 h-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <div>
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_674_894)">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1108 12.6646L13.4801 14.6154H11.5385C10.5185 14.6154 9.54019 15.0206 8.8189 15.7419C8.0976 16.4632 7.69238 17.4415 7.69238 18.4615V27.6923C7.69238 28.1974 7.79187 28.6975 7.98515 29.1642C8.17844 29.6308 8.46175 30.0548 8.8189 30.4119C9.17604 30.7691 9.60004 31.0524 10.0667 31.2457C10.5333 31.439 11.0335 31.5385 11.5385 31.5385H28.4616C28.9667 31.5385 29.4668 31.439 29.9335 31.2457C30.4001 31.0524 30.8241 30.7691 31.1813 30.4119C31.5384 30.0548 31.8217 29.6308 32.015 29.1642C32.2083 28.6975 32.3078 28.1974 32.3078 27.6923V18.4615C32.3078 17.4415 31.9025 16.4632 31.1813 15.7419C30.46 15.0206 29.4817 14.6154 28.4616 14.6154H26.5185L25.8893 12.6646C25.6393 11.8902 25.1502 11.2151 24.4923 10.7363C23.8343 10.2575 23.0415 9.99971 22.2278 10H17.7708C16.9571 9.99971 16.1643 10.2575 15.5063 10.7363C14.8484 11.2151 14.3593 11.8902 14.1093 12.6646H14.1108ZM11.5385 16.1538H14.6001L15.5739 13.1385C15.7237 12.6736 16.0171 12.2683 16.4119 11.9807C16.8066 11.6932 17.2825 11.5384 17.7708 11.5385H22.2293C22.7174 11.5387 23.1929 11.6937 23.5874 11.9812C23.9818 12.2687 24.275 12.6739 24.4247 13.1385L25.3985 16.1538H28.4616C29.0737 16.1538 29.6606 16.397 30.0934 16.8298C30.5262 17.2625 30.7693 17.8495 30.7693 18.4615V27.6923C30.7693 28.3043 30.5262 28.8913 30.0934 29.3241C29.6606 29.7569 29.0737 30 28.4616 30H11.5385C10.9265 30 10.3395 29.7569 9.90675 29.3241C9.47398 28.8913 9.23084 28.3043 9.23084 27.6923V18.4615C9.23084 17.8495 9.47398 17.2625 9.90675 16.8298C10.3395 16.397 10.9265 16.1538 11.5385 16.1538Z" fill="#8655FF"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3846 22.3077C15.3846 23.5318 15.8709 24.7057 16.7365 25.5712C17.602 26.4368 18.776 26.9231 20 26.9231C21.2241 26.9231 22.398 26.4368 23.2636 25.5712C24.1292 24.7057 24.6154 23.5318 24.6154 22.3077C24.6154 21.0836 24.1292 19.9097 23.2636 19.0441C22.398 18.1786 21.2241 17.6923 20 17.6923C18.776 17.6923 17.602 18.1786 16.7365 19.0441C15.8709 19.9097 15.3846 21.0836 15.3846 22.3077ZM23.077 22.3077C23.077 23.1237 22.7528 23.9064 22.1757 24.4834C21.5987 25.0604 20.8161 25.3846 20 25.3846C19.184 25.3846 18.4014 25.0604 17.8243 24.4834C17.2473 23.9064 16.9231 23.1237 16.9231 22.3077C16.9231 21.4916 17.2473 20.709 17.8243 20.132C18.4014 19.5549 19.184 19.2308 20 19.2308C20.8161 19.2308 21.5987 19.5549 22.1757 20.132C22.7528 20.709 23.077 21.4916 23.077 22.3077Z" fill="#8655FF"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0001 37.6923C29.7708 37.6923 37.6924 29.7708 37.6924 20C37.6924 10.2292 29.7708 2.30769 20.0001 2.30769C10.2293 2.30769 2.30775 10.2292 2.30775 20C2.30775 29.7708 10.2293 37.6923 20.0001 37.6923ZM20.0001 39.2308C30.6216 39.2308 39.2308 30.6215 39.2308 20C39.2308 9.37846 30.6216 0.769226 20.0001 0.769226C9.37852 0.769226 0.769287 9.37846 0.769287 20C0.769287 30.6215 9.37852 39.2308 20.0001 39.2308Z" fill="#8655FF"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_674_894">
                          <rect width="40" height="40" fill="white"/>
                          </clipPath>
                          </defs>
                          </svg>
                      </div>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right rounded-md shadow-lg bg-slate-200 ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/register"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                           Setting
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/register"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                           Sign Up
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/login"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign In
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  to={item.link}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
