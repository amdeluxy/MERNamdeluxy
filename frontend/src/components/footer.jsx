
import { Link } from "react-router-dom"
import { Disclosure} from '@headlessui/react'
import logo from '../../src/img/logo.png'
import facebook from '../../src/img/facebook.png'
import twitter from '../../src/img/twitter.png'
import instagram from '../../src/img/instagram.png'
import github from '../../src/img/github.png'
import copywrite from '../../src/img/copywrite.png'

const navigation = [ 
  { name: 'Services', href: 'services', current: false },
  { name: 'Portfolio', href: '/portfolio', current: false },
  { name: 'Blog', href: '/blog', current: false },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Footer() {
  return (
    <Disclosure as="nav" className="bg-gradient-to-r from-violet-950 from-10% via-black via-30% to-[#2B114F] to-90%">
      {({ open }) => (
        <>
            <div className="mx-auto">
                <div className="grid items-center grid-rows-2 py-8">
                
                    <div className="flex items-center justify-center flex-1 ">
                        <div className="flex items-center flex-shrink-0">
                            <Link to="/">
                                <img
                                    className="w-auto max-h-24"
                                    src={logo} 
                                    alt="AM Deluxy - Logo"
                                />
                            </Link>
                        
                        </div>
                        <div className="mx-2">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                    item.current ? 'bg-gray-900 text-white ' : 'text-gray-300 hover:bg-violet-400 hover:text-white',
                                    'rounded-md px-1 py-2 text-xl font-bold md:px-4'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-grow gap-8 py-2 mx-auto">
                        <Link to="#">
                            <img
                                className="block w-auto max-h-10"
                                src={facebook} 
                                alt="AM Deluxy - Facebook"
                            />
                        </Link>
                        <Link to="#">
                            <img
                                className="block w-auto max-h-10"
                                src={twitter} 
                                alt="AM Deluxy - Twitter"
                            />
                        </Link>
                        <Link to="#">
                            <img
                                className="block w-auto max-h-10"
                                src={instagram} 
                                alt="AM Deluxy - Instagram"
                            />
                        </Link>
                        <Link to="#">
                            <img
                                className="block w-auto max-h-10"
                                src={github} 
                                alt="AM Deluxy - Github"
                            />
                        </Link>
                    </div>
                    <div className="flex items-center flex-grow py-2 mx-auto">
                        <img
                            className="block w-auto max-h-8"
                            src={copywrite} 
                            alt="AM Deluxy - Logo"
                        />
                        <h3 className="text-sm">2023 Copyright - Software Development Company</h3>
                        <h3 className="ml-3 text-sm">Privacy Policy</h3>
                    </div>
                
                </div>
            </div>

          
        </>
      )}
    </Disclosure>
  )
}
