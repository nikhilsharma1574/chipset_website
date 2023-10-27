import React from 'react'
import { team24,team23,team22,team21,team20,team25 } from '@/public/data';
import Profile from './Team_Profile';
import Image from 'next/image';

export const Team = () => {
  return (
    <div className='page4 p-6 flex flex-col'>
          <div className='flex flex-1 flex-col md:flex-row'>
            <div className='flex flex-1 md:p-6 '>
              <div className='flex flex-col'>
                  <p className='md:text-4xl font-extrabold text-xl md:font-semibold'>TEAM</p>
                  <div className='2 md:hidden flex-1 my-6 flex justify-center items-center'>
                  <Image src={'/assets/svgs/team.svg'} className='h-fit' height={200} width={200} alt='image'/> 
                  </div>
                  <p className='font-paragraph_font text-xs md:text-lg my-6 lg:text-md md:mt-4'>CHiPSET is a Collaboration of Hackers, Innovators, Programmers, Script writers, Entrepreuners, and Technocrats. We are a non-profit organization with a zeal for making changes in the world by harvesting talents of unique individuals cross all domains.We believe in building the world by building it’s forever recurring addition; a family of inquisitive minds.</p>
              </div>
            </div>
            <div className='2 hidden  flex-1 my-6 md:flex justify-center items-center'>
                <Image src={'/assets/svgs/team.svg'} className='h-fit' height={400} width={400} alt='image'/> 
            </div>
          </div>
          <div className='container_for_team_members'>
          <div className='flex w-full justify-center'><h1 className='uppercase font-bold md:text-2xl text-xl'>Batch 2025</h1></div>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8'>
            {team25.map((team,index)=>(
              <div key={index} className='flex justify-center'>
                <Profile {...team} />
              </div>
            ))}
          </div>
          <div className='flex w-full justify-center'><h1 className='md:mt-12 uppercase font-bold md:text-2xl text-xl'>Batch 2024</h1></div>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8'>
            {team24.map((team,index)=>(
              <div key={index} className='flex justify-center'>
                <Profile {...team} />
              </div>
            ))}
          </div>
          <div className='flex w-full justify-center'><h1 className='uppercase font-bold md:text-2xl text-xl'>Batch 2023</h1></div>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8'>
            {team23.map((team,index)=>(
              <div key={index} className='flex justify-center'>
                <Profile {...team} />
              </div>
            ))}
          </div>
          <div className='flex w-full justify-center'><h1 className='uppercase font-bold md:text-2xl text-xl'>Batch 2022</h1></div>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8'>
            {team22.map((team,index)=>(
              <div key={index} className='flex justify-center'>
                <Profile {...team} />
              </div>
            ))}
          </div>

          <div className='flex w-full justify-center'><h1 className='uppercase font-bold md:text-2xl text-xl'>Batch 2021</h1></div>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8'>
            {team21.map((team,index)=>(
              <div key={index} className='flex justify-center'>
                <Profile {...team} />
              </div>
            ))}
          </div>

          <div className='flex w-full justify-center'><h1 className='uppercase font-bold md:text-2xl text-xl'>Batch 2020</h1></div>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8'>
            {team20.map((team,index)=>(
              <div key={index} className='flex justify-center'>
                <Profile {...team} />
              </div>
            ))}
          </div>
          </div>
        </div>
  )
}
