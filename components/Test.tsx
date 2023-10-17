import React, { useState, useEffect, Suspense } from 'react';
import Typewriter from 'typewriter-effect';
import Loading from '@/Loading';
const slideImages = [
  '/assets/images/4.png',
  '/assets/images/17.png',
  '/assets/images/2.png',
  '/assets/images/18.png',
  '/assets/images/14.png',
  '/assets/images/6.png',
  '/assets/images/10.png',
  '/assets/images/19.png',
  '/assets/images/15.png',
  '/assets/images/20.png',
  '/assets/images/7.png',
  '/assets/images/16.png',
];

const Test = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
    <Suspense fallback={<Loading/>}>
    <div data-aos="fade-up" className='w-screen flex items-center justify-center p-0 m-0 overflow-hidden'>
      <div
        className='w-full h-[40vh] md:h-[60vh] lg:h-[80vh] transition-all bg-cover bg-no-repeat bg-center'
        style={{
          backgroundImage: `url(${slideImages[currentImageIndex]})`,
          objectFit: 'cover',
        }}
        >
        <div className='text-container text-white text-4xl font-bold z-10 '>
          <div data-aos="fade-down"className='w-full h-[40vh] md:h-[60vh] lg:h-[80vh] bg-black md:flex flex-1 first-letter:text-6xl font-bold flex flex-col justify-center text-center items-center bg-opacity-50'>
            <div data-aos="fade-right" className='md:text-8xl text-[#f6a339] sm:text-6xl'>
              CH<span className='text-highlight'>i</span>PSET{' '}
            </div>
            <div data-aos="fade-right" className='text-left mt-4 text-xl md:text-8xl'>
              <Typewriter
                options={{
                  strings: ['Collaboration', 'Hackers', 'Innovators', 'Programmers', 'Scriptwriters', 'Entrepreneurs', 'Technocrats'],
                  autoStart: true,
                  loop: true,
                }}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
                </Suspense>
                  </>
  );
};

export default Test;
