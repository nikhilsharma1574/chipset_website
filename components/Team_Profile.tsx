import Image from 'next/image'
import React from 'react'

interface Team{
    name:string;
    batch:string;
    img:string;
}
const Team_Profile: React.FC<Team>= ({name,batch,img}) => {
  return (
    <div className='w-48 justify-center items-center flex flex-col m-4'>
        <Image src={img} className='object-contain shadow-md shadow-black hover:scale-110 transition-all bg-black h-24  w-24 rounded-full' height={1000} width={1000} alt="Profile pic"/>
        <h1 className='pt-4 font-semibold uppercase'>{name}</h1>
        <h1 className='pt-1'>{batch} Batch</h1>
    </div>
  )
}
export default Team_Profile