import React from 'react'
import Image from 'next/image'
interface aboutus{
    position:string;
    heading:string;
    desc:string;
    image:string;
}
const aboutus_card:React.FC<aboutus> = ({position,heading,desc,image}) => {
  return (
    <div>
      <div className={`flex rounded-[9px] my-4 flex-col md:p-6 p-2 ${position}`}>
                  <div className='flex flex-1 justify-center'>
                    <Image src={image} height={500} width={500} alt='image' className='w-full h-full rounded-[9px]'/>
                  </div>
                  <div className='flex flex-1 justify-center md:p-6 p-1'>
                    <div className='flex flex-col justify-start items-center'>
                      <h1 className='md:text-4xl font-bold text-xl md:font-semibold'>{heading}</h1>
                      <p className='sm:line-clamp-3 md:p-4 font-thin text-center italic text-sm md:mt-12'>
                      {desc}
                      </p>
                    </div>
                  </div>
                </div>
    </div>
  )
}

export default aboutus_card
