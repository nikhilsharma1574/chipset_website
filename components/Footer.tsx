import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div>
        <footer className="bg-slate-200 rounded-lg shadow dark:bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className='flex items-center'>
              <Image src="/assets/logo/64x-black-logo.png" height={100} width={100} alt='Logo' className='w-12 md:w-20 p-1'/>
            <div>
              <p className='font-bold text-xl md:text-4xl'>CHiPSET</p>
              <p className='font-semibold uppercase text-xs text-[#f6a339]'>A Technical Club</p>
            </div>
            </div>
                    <ul className="flex flex-wrap items-center mb-6 text-[12px] justify-center mt-6  font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="aboutus" className="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="contactus" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className='flex flex-1 justify-center'>
                  <div>
                    <span className="block text-[9px] md:text-[12px] justify-center text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="" className="hover:underline">CHiPSET</a>. All Rights Reserved.</span>
                    <span className="block text-[9px] md:text-[12px] justify-center text-gray-500 sm:text-center dark:text-gray-400">Developer - Nikhil Sharma <Link className='hover:underline font-bold' href="https://www.linkedin.com/in/nikhilshaarrma/"> Contact </Link></span>
                  </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer