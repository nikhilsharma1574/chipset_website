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
                  <p data-aos="fade-right" className='md:text-4xl font-bold text-xl md:font-semibold'>What is CH<span className='text-[#f6a339]'>i</span>PSET</p>
                  <p data-aos="fade-up" className='p-4 font-thin text-center italic text-sm md:mt-12'>Keeping together is PROGRESS. Coming together is a BEGINNING. Working together is SUCCESS.</p>
                  <div className='2 md:hidden flex-1 my-6 flex justify-center items-center'>
                    <div data-aos="fade-left">
                      <VideoPlayer/>  
                    </div>
                  </div>
                  <p data-aos="fade-up" className='font-paragraph_font text-xs md:text-lg lg:text-md md:mt-4'>CHiPSET is a Collaboration of Hackers, Innovators, Programmers, Script writers, Entrepreuners, and Technocrats. We are a non-profit organization with a zeal for making changes in the world by harvesting talents of unique individuals cross all domains.We believe in building the world by building it’s forever recurring addition; a family of inquisitive minds.</p>
               </div>
             </div>
            <div data-aos="fade-left" className='2 hidden  flex-1 my-6 md:block justify-center items-center'>
              <VideoPlayer/>
            </div>
          </div>
        </div>
            <h1 className='md:text-4xl p-4 font-bold text-xl md:font-bold'>Our Events</h1>
          </div>
          <div className='flex flex-col h-full md:grid md:grid-cols-2 lg:grid-cols-4 lg:scale-95 py-6 md:gap-16 gap-6 '>
            {
              events.map((event,index)=>(
                <div key={index} data-aos="fade-up" className='flex justify-center w-full duration-100'>
                  <Card {...event}/>
                  </div>                
              ))}
          </div>
        </div>

        



      </>
  );
};

export default Landing;