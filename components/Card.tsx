import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

interface Event {
  title: string;
  desc: string;
  img: string;
  link: string;
}

const Card: React.FC<Event> = ({ title, desc, img, link }) => {
  return (
    <div className="h-[20rem] md:h-[22rem] lg:h-[22rem] w-[15rem] shadow-md hover:scale-105 transition-all delay-100 bg-[#E4E4D0] border border-gray-200 rounded-xl dark:bg-gray-800 dark:border-gray-700 ">
      <a href="#">
        <Image className="rounded-t-xl w-full h-1/2  object-cover" src={img} height={1000} width={1000} alt="" />
      </a>
      <div className="p-3 md:p-5 h-1/2 flex justify-between flex-col">
        <div>
        <a href="#">
          <h5 className="mb-2 truncate text-sm md:text-2xl lg:text-xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">{title}</h5>
        </a>
        <p className="font-normal text-xs text-gray-700 line-clamp-3 h-fit">{desc}</p>
        </div>
        <Button className='bg-[#f6a339] hover:bg-[#ab7837] text-sm rounded-xl mt-4'>Read more</Button>
      </div>
    </div>
  );
}

export default Card;
