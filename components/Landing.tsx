import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect'
import Card from './Card';
import Profile from './Profile';
import { Key } from 'lucide-react';
import VideoPlayer from './Video_player';

interface Event{
    title:string;
    desc:string;
    img:string;
    link:string;
};
const events:Event[] = [
  {
    title:"Matrix v1.0",
    desc:"With this post, Matrix v1.0 officially comes to an end. Thankyou for attending the event. We were overwhelmed by your responses! Hope to see you all soon!🫡🤩Follow our social media handles for more updates on the upcoming events!✨📱",
    img:"/assets/images/14.png",
    link:"/link"
  },
  {
    title:"Hello Hacker V7.0",
    desc:"With this post, Matrix v1.0 officially comes to an end. Thankyou for attending the event. We were overwhelmed by your responses! Hope to see you all soon!🫡🤩Follow our social media handles for more updates on the upcoming events!✨📱",
    img:"/assets/images/15.png",
    link:"/link"
  },
  {
    title:"Codethon",
    desc:"With this post, Matrix v1.0 officially comes to an end. Thankyou for attending the event. We were overwhelmed by your responses! Hope to see you all soon!🫡🤩Follow our social media handles for more updates on the upcoming events!✨📱",
    img:"/assets/images/12.png",
    link:"/link"
  },
  {
    title:"Nodecon",
    desc:"With this post, Matrix v1.0 officially comes to an end. Thankyou for attending the event. We were overwhelmed by your responses! Hope to see you all soon!🫡🤩Follow our social media handles for more updates on the upcoming events!✨📱",
    img:"/assets/images/11.png",
    link:"/link"
  },
  {
    title:"Codethon",
    desc:"With this post, Matrix v1.0 officially comes to an end. Thankyou for attending the event. We were overwhelmed by your responses! Hope to see you all soon!🫡🤩Follow our social media handles for more updates on the upcoming events!✨📱",
    img:"/assets/images/10.png",
    link:"/link"
  },
  {
    title:"Pixomania",
    desc:"With this post, Matrix v1.0 officially comes to an end. Thankyou for attending the event. We were overwhelmed by your responses! Hope to see you all soon!🫡🤩Follow our social media handles for more updates on the upcoming events!✨📱",
    img:"/assets/images/9.png",
    link:"/link"
  },
  {
    title:"Adroit",
    desc:"With this post, Matrix v1.0 officially comes to an end. Thankyou for attending the event. We were overwhelmed by your responses! Hope to see you all soon!🫡🤩Follow our social media handles for more updates on the upcoming events!✨📱",
    img:"/assets/images/7.png",
    link:"/link"
  }
]
interface Team{
  name:string;
  batch:string;
  img:string;
}
const team24:Team[] = [
  {
    name:"Atharv",
    batch:"2024",
    img:"/assets/members/batch24/atharv.png"
    
  },
  {
    name:"Maithili",
    batch:"2024",
    img:"/assets/members/batch24/maithili.png"
    
  },
  {
    name:"Nikhil",
    batch:"2024",
    img:"/assets/members/batch24/nikhil.png"
    
  },
  {
    name:"inas",
    batch:"2023",
    img:"/assets/members/batch24/inas.png"
    
  },
  {
    name:"disha",
    batch:"2024",
    img:"/assets/members/batch24/disha.png"
    
  },
  {
    name:"Raghavendra",
    batch:"2024",
    img:"/assets/members/batch24/raghavendra.png"
    
  },
  {
    name:"Aman",
    batch:"2023",
    img:"/assets/members/batch24/aman.png"
    
  },
  {
    name:"Atharv",
    batch:"2023",
    img:"/assets/members/batch24/atharv.png"
    
  },
  {
    name:"Shubham",
    batch:"2023",
    img:"/assets/members/batch24/shubham.png"
  },
]
const team23:Team[] = [
  {
    name:"Darshil",
    batch:"2023",
    img:"/assets/members/batch23/darshil.png"
    
  },
  {
    name:"Shairan",
    batch:"2023",
    img:"/assets/members/batch23/Shairan.png"
    
  },
  {
    name:"Saideep",
    batch:"2023",
    img:"/assets/members/batch23/Saideep.png"
    
  },
  {
    name:"Jayanth",
    batch:"2023",
    img:"/assets/members/batch23/jayanth.png"
    
  },
  {
    name:"Jeevan",
    batch:"2023",
    img:"/assets/members/batch23/jeevan.png"
    
  },
  {
    name:"Krishangi",
    batch:"2023",
    img:"/assets/members/batch23/krishangi.png"
    
  },
  {
    name:"swetha",
    batch:"2023",
    img:"/assets/members/batch23/swetha.png"
    
  },
  {
    name:"shikha",
    batch:"2023",
    img:"/assets/members/batch23/shikhaaaaaa.png"
    
  },
  {
    name:"Shubham",
    batch:"2023",
    img:"/assets/members/batch23/shubham.png"
  },
]
const team22:Team[] = [
  {
    name:"Aaishwarya",
    batch:"2023",
    img:"/assets/members/batch22/aaishwarya.png"
    
  },
  {
    name:"adarsh",
    batch:"2023",
    img:"/assets/members/batch22/adarsh.png"
    
  },
  {
    name:"Ananya",
    batch:"2023",
    img:"/assets/members/batch22/ananyaa.png"
    
  },
  {
    name:"Anmol",
    batch:"2023",
    img:"/assets/members/batch22/Anmol.png"
    
  },
  {
    name:"Ashwin",
    batch:"2023",
    img:"/assets/members/batch22/Ashwin.png"
    
  },
  {
    name:"Aviral",
    batch:"2023",
    img:"/assets/members/batch22/aviral.png"
    
  },
  {
    name:"Joydeep",
    batch:"2023",
    img:"/assets/members/batch22/joydeep.png"
    
  },
  {
    name:"Lak",
    batch:"2023",
    img:"/assets/members/batch23/shikhaaaaaa.png"
    
  },
  {
    name:"Shubham",
    batch:"2023",
    img:"/assets/members/batch23/shubham.png"
  },
]
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



        <div className='page4 p-6 flex flex-col'>
          <div className=''>
          <h1 className='md:text-4xl p-4 font-bold text-xl md:font-bold'>Team</h1>
          </div>
          <div className='container_for_team_members'>
          <div className='flex w-full justify-center'><h1 className='uppercase font-bold md:text-2xl text-xl'>Batch 2024</h1></div>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7'>
            {team24.map((team,index)=>(
              <div key={index} className='flex justify-center'>
                <Profile {...team} />
              </div>
            ))}
          </div>

          <div className='flex w-full justify-center'><h1 className='uppercase font-bold md:text-2xl text-xl'>Batch 2023</h1></div>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7'>
            {team23.map((team,index)=>(
              <div key={index} className='flex justify-center'>
                <Profile {...team} />
              </div>
            ))}
          </div>

          <div className='flex w-full justify-center'><h1 className='uppercase font-bold md:text-2xl text-xl'>Batch 2022</h1></div>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7'>
            {team22.map((team,index)=>(
              <div key={index} className='flex justify-center'>
                <Profile {...team} />
              </div>
            ))}
          </div>
          </div>
        </div>



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