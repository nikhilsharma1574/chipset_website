import React from 'react'
import Marquee from "react-fast-marquee";
import Image from 'next/image';
const Marqueescroll = ()=> {
  return (
    <div className='w-full'>
      <div className='flex flex-1 justify-center items-center'>
        <h1 className='md:text-4xl p-12 font-bold text-xl md:font-bold'>Our Event Sponcers</h1>
      </div>
      <div className=''>
        <Marquee autoFill={true}>
              <div className='flex'>
                        <div className='flex justify-center items-center md:px-12'><Image className='object-contain h-[90px] max-w-[80px]' src={'/assets/sponcers/zoho.png'} height={200} width={200} alt='image'/></div>
                        <div className='flex justify-center items-center md:px-12'><Image className='object-contain h-[90px] max-w-[80px]' src={'/assets/sponcers/redbull.png'} height={200} width={200} alt='image'/></div>
                        <div className='flex justify-center items-center md:px-12'><Image className='object-contain h-[90px] max-w-[80px]' src={'/assets/sponcers/macd.png'} height={200} width={200} alt='image'/></div>
              </div>
        </Marquee>
      </div>
    </div>
  )
}

export default Marqueescroll
