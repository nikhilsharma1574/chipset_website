import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from "../public/assets/logo/64x-black-logo.png"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'

const Navbar = () => {

  const LINKS = [
    {
      label: "Home",
      link: "#home"
    },
    {
      label:"Events",
      link: "#about"
    },
    {
      label:"About us",
      link: "#about"
    },
    {
      label:"Team",
      link: "#about"
    },
    {
      label:"Contact Us",
      link: "#about"
    },
  ]
  
  return (
    <div>
      <nav className ="backdrop-blur-sm z-50  md:w-full transition-all delay-10 bg-white h-[4rem]  sm:h-[7rem] md:h-[7rem] px-4">
        <div className ="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto h-full ">
          <div className='flex items-center'>
            <Link href="./" className="flex items-center ">
              <Image src={logo} height={100} width={100} alt='Logo' className='w-10 sm:w-20 md:w-16 p-1'/>
            </Link>
            <div>
              <p className='font-bold text-2xl sm:text-4xl'>CHiPSET</p>
              <p className='font-semibold uppercase sm:text-xs text-[10px] text-[#f6a339]'>A Technical Club</p>
            </div>
            </div>
          <DropdownMenu>
            <DropdownMenuTrigger className='md:hidden'><Button variant="outline"><Menu></Menu></Button></DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              {
                LINKS.map((item, idx) => (
                  <Link href={item.link} key={idx}>
                    <DropdownMenuItem >{item.label}</DropdownMenuItem>
                  </Link>
                ))
              }
            </DropdownMenuContent>
          </DropdownMenu>
          <div className ="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white bg-[#f6a339] rounded md:bg-transparent md:text-[#f6a339] md:p-0 dark:text-white md:dark:text-[#f6a339]" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#f6a339] md:p-0 dark:text-white md:dark:hover:text-[#f6a339] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Events</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#f6a339] md:p-0 dark:text-white md:dark:hover:text-[#f6a339] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About us</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#f6a339] md:p-0 dark:text-white md:dark:hover:text-[#f6a339] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Team</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#f6a339] md:p-0 dark:text-white md:dark:hover:text-[#f6a339] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar