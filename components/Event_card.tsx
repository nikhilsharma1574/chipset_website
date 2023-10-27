import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface Event {
  title: string;
  desc: string;
  img: string;
  link: string;
  date: string;
  registrations: string;
}

const Card: React.FC<Event> = ({ title, desc, img,date,registrations}) => {
  return (
    <div className="h-[20rem] md:h-[22rem] lg:h-[22rem] w-full md:m-0 m-4 md:w-[15rem] shadow-md hover:scale-105 transition-all delay-100 bg-[#eeeeee] border border-gray-200 rounded-[9px] dark:bg-gray-800 dark:border-gray-700 ">
      <a href="#">
        <Image className="rounded-[9px] w-full h-1/2  object-cover" src={img} height={1000} width={1000} alt="" />
      </a>
      <div className="p-3 md:p-5 h-1/2 flex justify-between flex-col">
        <div>
        <a href="#">
          <h5 className="mb-2 truncate text-sm md:text-2xl lg:text-xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">{title}</h5>
        </a>
        <p className="font-normal text-xs text-gray-700 line-clamp-3 h-fit">{desc}</p>
        </div>
        <div className='text-black'>
        <AlertDialog >
          <AlertDialogTrigger className='bg-[#f6a339] hover:bg-[#ab7837] px-6 py-2 text-sm rounded-[7px] mt-4'>Read more</AlertDialogTrigger>
          <AlertDialogContent className=''>
            <AlertDialogHeader>
              <AlertDialogTitle className='uppercase'>{title}</AlertDialogTitle>
              <div className='flex flex-1 justify-center'>
                <Image className='object-contain h-[20vh] md:h-[40vh] w-fit m-4'  src={'/assets/sponcers/zoho.png'} height={500} width={500} alt='image'/>
              </div>
              <AlertDialogDescription className=' bg- text-[10px] md:text-[15px]'>
                    <div>
                     {desc}
                    </div>
                    <Separator className='bg-black my-4'/>
                    <div className='flex flex-1'>
                     <span className='font-semibold text-black'>Data -</span>{date}
                     <Separator orientation={'vertical'} className='text-black m-4'/>
                     <span className='font-semibold text-black'>Registrations - </span>{registrations}+
                    </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Close</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
    </div>
      </div>
    </div>
  );
}

export default Card;
