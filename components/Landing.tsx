import React, { useState, useEffect } from 'react';
import Card from './Card';
import Profile from './Profile';
import VideoPlayer from './Video_player';
import { team24,team23,team22,events } from '@/public/data';
import { Team } from './Team';
interface Event{
    title:string;
    desc:string;
    img:string;
    link:string;
};
interface Team{
  name:string;
  batch:string;
  img:string;
}
const Landing = () => {
  return (
    <>
        <div className='page3 bg-neutral-300 w-full p-1 md:p-6 flex flex-col'>
          <div className='flex flex-col'>
        <div className='page2 p-4 flex flex-col'>
          <div className='flex flex-1 flex-col md:flex-row'>
             <div className='flex flex-1 md:p-6 '>
               <div className='flex flex-col'>
                  <p className='md:text-4xl font-bold text-xl md:font-semibold'>What is CH<span className='text-[#f6a339]'>i</span>PSET</p>
                  <p className='p-4 font-thin text-center italic text-sm md:mt-12'>Keeping together is PROGRESS. Coming together is a BEGINNING. Working together is SUCCESS.</p>
                  <div className='2 md:hidden flex-1 my-6 flex justify-center items-center'>
                    <VideoPlayer/>
                  </div>
                  <p className='font-paragraph_font text-xs md:text-lg lg:text-md md:mt-4'>CHiPSET is a Collaboration of Hackers, Innovators, Programmers, Script writers, Entrepreuners, and Technocrats. We are a non-profit organization with a zeal for making changes in the world by harvesting talents of unique individuals cross all domains.We believe in building the world by building it’s forever recurring addition; a family of inquisitive minds.</p>
               </div>
             </div>
            <div className='2 hidden  flex-1 my-6 md:block justify-center items-center'>
              <VideoPlayer/>
            </div>
          </div>
        </div>
            <h1 className='md:text-4xl p-4 font-bold text-xl md:font-bold'>Our Events</h1>
          </div>
          <div className='flex flex-col h-full md:grid md:grid-cols-2 lg:grid-cols-4 lg:scale-95 py-6 md:gap-16 gap-6 '>
            {
              events.map((event,index)=>(
                <div key={index} className='flex justify-center w-full'>
                  <Card {...event}/>
                  </div>                
              ))}
          </div>
        </div>
        <Team/>

        <div className='page5 Gallery h-screen p-6 flex flex-col'>
          <div className='text-6xl font-bold p-6 flex justify-center items-center'>
            Contact us
          </div>
          <div className='w-full flex justify-center'>
          <div className='p-6  w-1/2'>
   <h5 id="drawer-label" className="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"><svg className="w-4 h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
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
         <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required/>
      </div>
      <div className="mb-6">
         <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
         <input type="text" id="subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Let us know how we can help you" required/>
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



      </>
  );
};

export default Landing;