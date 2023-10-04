import React from 'react'
import Card2 from './Card2'
import { socialmedia } from '@/public/data'
const Socialmedia = () => {
  return (
    <div className=''>
    <div className='flex flex-col'>
        <h1 className='md:text-4xl p-4 font-bold text-xl md:font-bold'>Our Social Media</h1>
    </div>
    <div className='p-6 grid grid-cols-1 md:grid-cols-3 gap-2 justify-center'>
        {
            socialmedia.map((socials,index)=>(
                <div key={index} className='flex justify-center'>
                    <Card2 {...socials}/>
                 </div>   
            ))}
    </div>
    </div>
  )
}

export default Socialmedia