import React from 'react'
import Image from 'next/image';
interface Socials{
  image:string;
  link:string;
}

const card2:React.FC<Socials> = ({ image, link}) => {
  return (
    <div>
        <div className='hover:scale-110 transition-all delay-100 cursor-pointer'>
        <div
      className="block max-w-[18rem] w-[200px] md:w-[220px]  rounded-[9px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <Image src={image} height={500} width={500} alt='image' className='h-[120px] md:h-[140px] object-cover w-full rounded-[9px] shadow-black '/>
      </div>
      <div className="p-6">
        <p className="text-base flex justify-center text-neutral-600 dark:text-neutral-200 line-clamp-4">
        {link}
        </p>
      </div>
    </div>
        </div>
    </div>
  )
}

export default card2