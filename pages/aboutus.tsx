  import PageLayout from '@/layouts/PageLayout'
  import React from 'react'
  import VideoPlayer from '@/components/Video_player';
  import { aboutusdata } from '@/public/data';
  import Aboutus_card from '@/components/Aboutus_card';
  import Timeline from '@/components/Timeline';

  const aboutus = () => {
    return (
      <PageLayout>
          <div className='w-full p-1 md:p-6 flex flex-col'>
            <div className='flex flex-col'>
          <div className='page2 p-4 flex flex-col'>
            <div className='flex flex-1 flex-col md:flex-row'>
              <div className='flex flex-1 md:p-6 '>
                <div className='flex flex-col'>
                    <p className='md:text-4xl font-extrabold text-xl md:font-semibold'>What is CH<span className='text-[#f6a339]'>i</span>PSET</p>
                    <p className='p-4 font-thin text-center italic text-sm md:mt-12'>Keeping together is PROGRESS. Coming together is a BEGINNING. Working together is SUCCESS.</p>
                    <div className='2 md:hidden flex-1 my-6 flex justify-center items-center'>
                      <VideoPlayer/>
                    </div>
                    <p className='font-paragraph_font text-xs md:text-lg lg:text-md md:mt-4'>CHiPSET is a Collaboration of Hackers, Innovators, Programmers, Script writers, Entrepreuners, and Technocrats. We are a non-profit organization with a zeal for making changes in the world by harvesting talents of unique individuals cross all domains.We believe in building the world by building it’s forever recurring addition; a family of inquisitive minds.</p>
                </div>
              </div>
              <div className='2 hidden flex-1 my-6 md:block justify-center items-center'>
                <VideoPlayer/>
              </div>
              <div>
              </div>
            </div>
            <div data-aos="slide-up" className='flex flex-1 w-full justify-center'>
              <Timeline/>
            </div>
            {
              aboutusdata.map((about,index)=>(
              <div key={index} data-aos="slide-up">
                <Aboutus_card {...about}/>
              </div>  
              ))}


          </div>
            </div>
          </div>
      </PageLayout>
    )
  }

  export default aboutus