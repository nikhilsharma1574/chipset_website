import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect'
import Card from './Card';
import Profile from './Profile';
import { Key } from 'lucide-react';
import VideoPlayer from './Video_player';
const slideImages = [
  '/assets/images/4.png',
  '/assets/images/17.png',
  '/assets/images/2.png',
  '/assets/images/18.png',
  '/assets/images/14.png',
  '/assets/images/6.png',
  '/assets/images/10.png',
  '/assets/images/19.png',
  '/assets/images/15.png',
  '/assets/images/20.png',
  '/assets/images/7.png',
  '/assets/images/16.png',
];

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
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>

      <div className="relative h-fit md:h-[calc(100vh-5rem)]">
        <div className='z-0'>
          <div className=''>
            {slideImages.map((image, index) => (
              <div
            key={index}
            className={`absolute w-full h-fit transform transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}>
              <Image src={image} height={2000} width={2000} className='h-max-[300px] brightness-50 md:max-h-[500px] lg:max-h-[680px] w-full object-cover' alt={`Slide ${index + 1}`} />
            </div>
          ))}
          </div>
        </div> 
        <div className=' top-50 h-full w-full text-white p-6'>
          <div className='text-6xl font-bold flex flex-col justify-center text-center items-center gap-5 md:mt-20'>
            <div className='sm:text-8xl text-3xl z-50'>
            <div><span className='sm:text-4xl text-4xl '>CH<span className='text-[#f6a339]'>i</span>PSET </span></div>
          <Typewriter
            options={{
              strings: ['Collabration', 'Hackers' , 'Innovators' , "Programmers","Scriptwriters","Enterpreneurs","Technocrats" ],
              autoStart: true,
              loop: true,
              
            }}
            />
            </div>
            </div>
        </div>
    </div>






        <div className='page3 bg-neutral-300 w-full p-6 flex flex-col'>
          <div className='flex flex-col'>
        <div className='page2  p-6 flex flex-col'>
          <div className='1 flex text-4xl items-center w-full justify-center'>
            <h1 className='text-6xl font-bold p-6 '>What are we</h1>
          </div>

          <div className='flex flex-1 '>
             <div className='flex flex-1 p-6'>
               <div className='flex flex-col'>
                  <p className='text-5xl font-semibold'>What is CH<span className='text-[#f6a339]'>i</span>PSET</p>
                  <p className='p-6 italic'>Keeping together is PROGRESS. Coming together is a BEGINNING. Working together is SUCCESS.</p>
                  <p className='p-6 px-12 font-paragraph_font'>CHiPSET is a Collaboration of Hackers, Innovators, Programmers, Script writers, Entrepreuners, and Technocrats. We are a non-profit organization with a zeal for making changes in the world by harvesting talents of unique individuals cross all domains.We believe in building the world by building it’s forever recurring addition; a family of inquisitive minds.</p>
               </div>
             
             </div>
            <div className='2 flex-1 flex justify-center items-center'>
              <VideoPlayer/>
            </div>
          </div>
        </div>
            <h1 className='text-6xl font-bold p-6'>Our Events</h1>
          </div>
          <div className='h-full p-6 grid grid-cols-4 gap-16 '>
            {
              events.map((event,index)=>(
                <div key={index} className='flex justify-center w-full'>
                  <Card {...event}/>
                  </div>                
              ))}
          </div>
        </div>



        <div className='page4 p-6 flex flex-col'>
          <div className='text-6xl font-bold p-6'>
            Team
          </div>
          <div className='container_for_team_members'>
          <div className='flex w-full justify-center'><h1 className='uppercase font-bold text-2xl'>Batch 2024</h1></div>
          <div className='grid grid-cols-7 p-6'>
            {team24.map((team,index)=>(
              <div key={index} className='flex justify-center'>
                <Profile {...team} />
              </div>
            ))}
          </div>

          <div className='flex w-full justify-center'><h1 className='uppercase font-bold text-2xl'>Batch 2023</h1></div>
          <div className='grid grid-cols-7 p-6'>
            {team23.map((team,index)=>(
              <div key={index} className='flex justify-center'>
                <Profile {...team} />
              </div>
            ))}
          </div>

          <div className='flex w-full justify-center'><h1 className='uppercase font-bold text-2xl'>Batch 2022</h1></div>
          <div className='grid grid-cols-7 p-6'>
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
