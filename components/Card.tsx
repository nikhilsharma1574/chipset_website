import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
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
}

const Card: React.FC<Event> = ({ title, desc, img}) => {
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
        {/* <Button className='bg-[#f6a339] hover:bg-[#ab7837] text-sm rounded-[7px] mt-4'>Read more</Button> */}
        <div className='text-black'>
        <AlertDialog>
          <AlertDialogTrigger className='bg-[#f6a339] hover:bg-[#ab7837] px-6 py-2 text-sm rounded-[7px] mt-4'>Read more</AlertDialogTrigger>
          <AlertDialogContent className='m-4'>
            <AlertDialogHeader>
              <AlertDialogTitle className='uppercase'>{title}</AlertDialogTitle>
              <AlertDialogDescription className='text-[10px] md:text-[15px]'>
                {desc}
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
