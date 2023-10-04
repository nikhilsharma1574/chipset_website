import PageLayout from '@/layouts/PageLayout'
import React from 'react'

const Contact = () => {
  return (
    <PageLayout>
        
    <div>
        <div className='page5 Gallery h-screen md:p-6 flex flex-col'>
          <div className='w-full flex justify-center items-center'>
          <div className='md:p-6 md:w-1/2 w-full p-12'>
   <h5 id="drawer-label" className="inline-flex justify-center items-center mb-6 text-[12px] font-semibold text-gray-500 uppercase dark:text-gray-400"><svg className="w-4 h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
  </svg>Contact us</h5>
   <button type="button" data-drawer-hide="drawer-contact" aria-controls="drawer-contact" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
      <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
      <span className="sr-only">Close menu</span>
   </button>
   <form action="#" className="mb-6">
      <div className="mb-6">
         <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
         <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required/>
      </div>
      <div className="mb-6">
         <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
         <input type="text" id="subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Let us know how we can help you" required/>
      </div>
      <div className="mb-6">
         <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
         <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
      </div>
      <button type="submit" className="text-black bg-[#f6a339] hover:bg-[#aa732b] w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block">Send message</button>
   </form>
   <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
      <a href="#" className="hover:underline">chipsetrmp@gmail.com</a>
   </p>
          </div>
        </div>
        </div>
    </div>
    </PageLayout>
  )
}

export default Contact