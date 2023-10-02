import React from 'react'
import { team24,team23,team22,events } from '@/public/data';
import Profile from './Profile';

export const Team = () => {
  return (
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
  )
}
