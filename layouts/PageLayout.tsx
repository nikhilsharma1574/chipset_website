import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const PageLayout = ({children}:any) => {
  return (
    <div className=' w-full h-full scrollbar scrollbar-thumb-orange-700 scrollbar-track-red-600'>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default PageLayout