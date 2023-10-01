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
    <div className="max-h-[25em] w-full shadow-md hover:scale-105 transition-all delay-100 bg-[#E4E4D0] border border-gray-200 rounded-xl dark:bg-gray-800 dark:border-gray-700 ">
      <a href="#">
        <Image className="rounded-t-xl w-full object-contain" src={img} height={1000} width={1000} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 truncate text-2xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">{title}</h5>
        </a>
        <p className="font-normal text-gray-700 truncate line-clamp-4">{desc}</p>
        <Button className='bg-[#f6a339] hover:bg-[#ab7837] rounded-xl mt-6'>Read more</Button>
      </div>
    </div>
  );
}

export default Card;
