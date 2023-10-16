import React from 'react'
import Image from 'next/image'

export const Gallery = () => {
  return (
    <div className='w-full h-full p-1 md:p-4 xl:p-2'>
      <h1 className='md:text-4xl  p-4 font-bold text-xl md:font-bold'>Gallery</h1>
      <div className="container mx-auto px-5  py-1 lg:px-12 lg:pt-12">
  <div className="-m-1 flex flex-wrap md:-m-2  flex-col md:flex-row">
    <div data-aos="fade-down" className="flex md:w-1/2 flex-wrap ">
      <div data-aos="fade-down" className="w-1/2 p-1 md:p-2 ">
        <Image
          alt="gallery"
          className="hover:brightness-50 transition-all delay-100 cursor-pointer block h-full w-full rounded-[5px] md:rounded-xl object-cover object-center"
          height={500}
          width={500}
          src="/assets/gallery/1.png" />
      </div>
      <div data-aos="fade-down" className="w-1/2 p-1 md:p-2">
        <Image
          alt="gallery"
          className="hover:brightness-50 transition-all delay-100 cursor-pointer block h-full w-full rounded-[5px] md:rounded-xl object-cover object-center"
          height={500}
          width={500}
          src="/assets/gallery/2.png" />
      </div>
      <div data-aos="fade-up" className="w-full p-1 md:p-2">
        <Image
          alt="gallery"
          className="hover:brightness-50 transition-all delay-100 cursor-pointer block h-full w-full rounded-[5px] md:rounded-xl object-cover object-center"
          height={500}
          width={500}
          src="/assets/gallery/3.png" />
      </div>
    </div>
    <div className="flex md:w-1/2 flex-wrap ">
      <div data-aos="fade-down" className="w-full p-1 md:p-2">
        <Image
          alt="gallery"
          className="hover:brightness-50 transition-all delay-100 cursor-pointer block h-full w-full rounded-[5px] md:rounded-xl object-cover object-center"
          height={500}
          width={500}
          src="/assets/gallery/4.png" />
      </div>
      <div data-aos="fade-down" className="w-1/2 p-1 md:p-2">
        <Image
          alt="gallery"
          className="hover:brightness-50 transition-all delay-100 cursor-pointer block h-full w-full rounded-[5px] md:rounded-xl object-cover object-center"
          height={500}
          width={500}
          src="/assets/gallery/5.png" />
      </div>
      <div data-aos="fade-up" className="w-1/2 p-1 md:p-2">
        <Image
          alt="gallery"
          className="hover:brightness-50 transition-all delay-100 cursor-pointer block h-full w-full rounded-[5px] md:rounded-xl object-cover object-center"
          height={500}
          width={500}
          src="/assets/gallery/7.png" />
      </div>
    </div>
  </div>
      </div>      
    </div>
  )
}
