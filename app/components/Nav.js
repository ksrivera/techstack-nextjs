'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from "react"
import { useContext } from "react"

const Navbar = () => {
  const pathname = usePathname();
  const [newUsername, setNewUsername] = useState('')
  const setUsername = 0
  const [open, setToOpen] = useState(true)
  const [option, setOption] = useState('')

    return ( 
      <>
      <nav className="max-h-32 bg-gray-900 justify-around fixed z-20 w-full top-0 left-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href='/' className="flex items-center">
            <img src="/assets/icons/logo_transparent.png" className="h-24" alt="TechStack logo" />
            <span className="text-2xl font-semibold whitespace-nowrap text-white">TechStack</span>
        </Link>
        <div className="flex md:order-2">
  
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
        </div>

        <div className=" hidden w-full md:block md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col md:p-0  font-medium  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-green">
            <li>
              <Link href='/' className="block py-2 pl-3 pr-2"><span className={pathname == '/' ? 'py-2 px-2 font-semibold shadow-lg  shadow-violet-400 text-black bg-violet-300 hover:bg-violet-400 rounded-lg transition-colors' : "py-2 px-2 text-white hover:text-cyan-500 rounded-lg shadow-xl hover:shadow-cyan-500/100 transition-colors"}>Home</span></Link>
            </li>
            <li>
              <Link href='/tech-news' className="block py-2 pl-3 pr-2"><span className={pathname == '/tech-news' ? 'py-2 px-2 font-semibold shadow-lg shadow-violet-400 text-black bg-violet-300 hover:bg-violet-400 rounded-lg transition-colors' : "py-2 px-2 text-white hover:text-cyan-500 rounded-lg shadow-xl hover:shadow-cyan-500/100 transition-colors"}>Tech News</span></Link>
            </li>
            <li>
              <Link href='/tech-talks' className="block py-2 pl-3 pr-2"><span className={pathname == '/tech-talks'? 'py-2 px-2 font-semibold shadow-lg shadow-violet-400 text-black bg-violet-300 hover:bg-violet-400 rounded-lg transition-colors' :  "py-2 px-2 text-white hover:text-cyan-500 rounded-lg shadow-xl hover:shadow-cyan-500/100 transition-colors"}>Tech Talks</span></Link>
            </li>
            <li>
              <Link href='/about' className="block py-2 pl-3 pr-2"><span className={pathname == '/about' ? 'py-2 px-2 font-semibold shadow-lg shadow-violet-400 text-black bg-violet-300 hover:bg-violet-400 rounded-lg transition-colors' : "py-2 px-2 text-white hover:text-cyan-500 rounded-lg shadow-xl hover:shadow-cyan-500/100 transition-colors"}>About</span></Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>      

      </>
    )
}
 
export default Navbar;