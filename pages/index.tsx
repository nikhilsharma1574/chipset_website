import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Landing from '@/components/Landing'
import Footer from '@/components/Footer'
import Test from '@/components/Test'
import { Test1 } from '@/components/Test1'
import { Gallery } from '@/components/Gallery'
import { Team } from '@/components/Team'
import Socialmedia from '@/components/Socialmedia'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
    <Head>
      <title>CHiPSET | HOME</title>
      <link rel="shortcut icon" href="/assets/logo/64x_white_logo.png" />
    </Head>
    <div className='max-w-screen overflow-hidden'>
      <Navbar/>
      <Test/>
      <Landing/>
      <Gallery/>
      <Socialmedia/>
      {/* <Team/> */}
      <Footer/>
    </div>
    </>
        
  )
}

// max-w-screen overflow-hidden
